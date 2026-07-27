import React from "react";
import {
  Github,
  Linkedin,
  Mail
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="wrap footer-content">
                <div className="footer-brand">
                    <a href="#inicio" className="footer-logo">
                        Evelin <span>&lt;/&gt;</span>
                    </a>

                    <p>
                        Construyendo soluciones con código, estructura y propósito.
                    </p>
                </div>

                <div className="footer-column">
                <h3>Navegación</h3>

                <nav className="footer-nav" aria-label="Navegación del pie de página">
                    <a href="#inicio">Inicio</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#contacto">Contacto</a>
                </nav>
                </div>

                <div className="footer-column">
                <h3>Conecta conmigo</h3>

                <div className="footer-socials">
                    <a
                    href="https://github.com/Evegr12"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub de Evelin"
                    >
                    <Github size={24} />
                    </a>

                    <a
                    href="https://www.linkedin.com/in/evelin-garcia-romero"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn de Evelin"
                    >
                    <Linkedin size={24} />
                    </a>

                    <a
                    href="mailto:evelin.garciaromero12@gmail.com"
                    aria-label="Enviar correo a Evelin"
                    >
                    <Mail size={24} />
                    </a>
                </div>
                </div>
            </div>

            <div className="wrap footer-bottom">
                <p>© 2026 Evelin García Romero. Todos los derechos reservados.</p>

                <p>
                Hecho con <span>♥</span> y mucho café.
                </p>
            </div>
        </footer>
    );
}