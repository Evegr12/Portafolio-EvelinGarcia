import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navigation = [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" }
];

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.dataset.theme = savedTheme;
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation
                .map(({ href }) => document.querySelector(href))
                .filter(Boolean);

            const currentSection = sections.findLast(
                (section) => section.getBoundingClientRect().top <= 160
            );

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    };

    return (
        <header className="header">
            <div className="wrap header-inner">
                <a href="#inicio" className="brand">
                Evelin <span>&lt;/&gt;</span>
                </a>

                <nav className="main-nav" aria-label="Navegación principal">
                {navigation.map(({ label, href }) => {
                    const sectionId = href.replace("#", "");

                    return (
                    <a
                        key={sectionId}
                        href={href}
                        className={
                        activeSection === sectionId ? "nav-link active" : "nav-link"
                        }
                    >
                        {label}
                    </a>
                    );
                })}
                </nav>

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
                {theme === "light" ? <Sun size={19} /> : <Moon size={19} />}

                <span>
                    {theme === "light" ? "Modo claro" : "Modo oscuro"}
                </span>
                </button>
            </div>
        </header>
    );
}