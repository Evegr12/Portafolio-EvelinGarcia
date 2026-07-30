import React, { useEffect, useState } from "react";
import {
    Menu,
    Moon,
    Sun,
    X
} from "lucide-react";

const navigation = [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" }
];

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [activeSection, setActiveSection] =
        useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.dataset.theme =
            savedTheme;
        }
    }, []);

    useEffect(() => {
        function handleScroll() {
        const sections = navigation
            .map(({ href }) =>
            document.querySelector(href)
            )
            .filter(Boolean);

        const visibleSections = sections.filter(
            (section) =>
            section.getBoundingClientRect().top <= 160
        );

        const currentSection =
            visibleSections[visibleSections.length - 1];

        if (currentSection) {
            setActiveSection(currentSection.id);
        }
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
        window.removeEventListener(
            "scroll",
            handleScroll
        );
        };
    }, []);

    useEffect(() => {
        function closeMenuWithEscape(event) {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
        }

        window.addEventListener(
        "keydown",
        closeMenuWithEscape
        );

        return () => {
        window.removeEventListener(
            "keydown",
            closeMenuWithEscape
        );
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
        document.body.classList.add("menu-is-open");
        } else {
        document.body.classList.remove("menu-is-open");
        }

        return () => {
        document.body.classList.remove("menu-is-open");
        };
    }, [menuOpen]);

    function toggleTheme() {
        const nextTheme =
        theme === "light" ? "dark" : "light";

        setTheme(nextTheme);

        document.documentElement.dataset.theme =
        nextTheme;

        localStorage.setItem("theme", nextTheme);
    }

    function toggleMenu() {
        setMenuOpen((currentValue) => !currentValue);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="header">
        <div className="wrap header-inner">
            <a
            href="#inicio"
            className="brand"
            onClick={closeMenu}
            >
            Evelin <span>&lt;/&gt;</span>
            </a>

            <nav
            className="main-nav"
            aria-label="Navegación principal"
            >
            {navigation.map(({ label, href }) => {
                const sectionId = href.replace("#", "");

                return (
                <a
                    key={sectionId}
                    href={href}
                    className={
                    activeSection === sectionId
                        ? "nav-link active"
                        : "nav-link"
                    }
                >
                    {label}
                </a>
                );
            })}
            </nav>

            <div className="header-actions">
            <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={
                theme === "light"
                    ? "Activar modo oscuro"
                    : "Activar modo claro"
                }
            >
                {theme === "light" ? (
                <Sun size={19} />
                ) : (
                <Moon size={19} />
                )}

                <span>
                {theme === "light"
                    ? "Modo claro"
                    : "Modo oscuro"}
                </span>
            </button>

            <button
                type="button"
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label={
                menuOpen
                    ? "Cerrar menú"
                    : "Abrir menú"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
            >
                {menuOpen ? (
                <X size={24} />
                ) : (
                <Menu size={24} />
                )}
            </button>
            </div>
        </div>

        <nav
            id="mobile-navigation"
            className={
            menuOpen
                ? "mobile-nav open"
                : "mobile-nav"
            }
            aria-label="Navegación móvil"
        >
            <div className="wrap mobile-nav-inner">
            {navigation.map(({ label, href }) => {
                const sectionId = href.replace("#", "");

                return (
                <a
                    key={sectionId}
                    href={href}
                    className={
                    activeSection === sectionId
                        ? "mobile-nav-link active"
                        : "mobile-nav-link"
                    }
                    onClick={closeMenu}
                >
                    {label}
                </a>
                );
            })}
            </div>
        </nav>
        </header>
    );
}