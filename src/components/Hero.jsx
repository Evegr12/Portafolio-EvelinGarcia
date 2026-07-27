import React from "react";
import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    Download
} from "lucide-react";

import { FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

export default function Hero() {
    return (
        <section className="hero wrap" id="inicio">
        <div className="hero-copy">
            <p className="eyebrow">
            DESARROLLADORA JAVA FULL STACK
            </p>

            <p className="hero-greeting">
            Hola, soy
            </p>

            <h1 className="hero-name">
            Evelin García Romero
            </h1>

            <h2 className="hero-title">
            Código con propósito,
            <span> soluciones que conectan.</span>
            </h2>

            <p className="lead">
            Construyo aplicaciones web funcionales, claras y bien estructuradas,
            conectando interfaz, backend, datos y necesidades reales.
            </p>

            <div className="hero-actions-group">
            <div className="actions">
                <a className="btn primary" href="#proyectos">
                Ver proyectos
                <ArrowRight size={23} />
                </a>

                <a
                className="btn secondary"
                href="/cv-evelin.pdf"
                download
                >
                Descargar CV
                <Download size={23} />
                </a>
            </div>

            <div className="socials">
                <a
                href="https://github.com/Evegr12"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar GitHub de Evelin"
                >
                <Github size={23} />
                GitHub
                </a>

                <a
                href="https://www.linkedin.com/in/evelin-garcia-romero"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar LinkedIn de Evelin"
                >
                <Linkedin size={23} />
                LinkedIn
                </a>

                <a
                href="mailto:evelin.garciaromero12@gmail.com"
                aria-label="Enviar correo a Evelin"
                >
                <Mail size={23} />
                Correo
                </a>
            </div>
            </div>
        </div>

        <div
            className="hero-portrait"
            role="img"
            aria-label="Retrato profesional de Evelin García Romero acompañado de tecnologías Java, Spring Boot, React y MySQL"
        >
            <div
            className="portrait-glow"
            aria-hidden="true"
            ></div>

            <div
            className="portrait-blob portrait-blob-back"
            aria-hidden="true"
            ></div>

            <div
            className="portrait-blob portrait-blob-front"
            aria-hidden="true"
            ></div>

            <div
            className="portrait-blob portrait-blob-soft"
            aria-hidden="true"
            ></div>

            <div
            className="portrait-orbit"
            aria-hidden="true"
            ></div>

            <div className="portrait-frame">
            <img
                src="/evelin-perfil.png"
                alt="Evelin García Romero, desarrolladora Java Full Stack"
            />
            </div>

            <div className="tech-badge badge-react">
            <FaReact aria-hidden="true" />
            <span>React</span>
            </div>

            <div className="tech-badge badge-java">
            <SiSpringboot aria-hidden="true" />

            <span>
                Java +<br />
                Spring Boot
            </span>
            </div>

            <div className="tech-badge badge-mysql">
            <SiMysql aria-hidden="true" />
            <span>MySQL</span>
            </div>

            <div className="profile-card">
            <span>Java Full Stack</span>
            <strong>Developer</strong>

            <div className="profile-card-line"></div>
                <p>
                    Creando soluciones funcionales con estructura y propósito.
                </p>
            </div>

            <span
            className="portrait-code"
            aria-hidden="true"
            >
            &lt;/&gt;
            </span>

            <div
            className="portrait-dots"
            aria-hidden="true"
            >
            {Array.from({ length: 12 }).map((_, index) => (
                <span key={index}></span>
            ))}
            </div>
        </div>
        </section>
    );
}