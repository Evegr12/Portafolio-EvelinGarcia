import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section className="contact wrap" id="contacto">
            <div className="contact-copy">
                <p className="eyebrow contact-eyebrow">CONTACTO</p>

                <h2>
                ¿Tienes una oportunidad o proyecto en mente?
                </h2>

                <p>
                Estoy abierta a oportunidades Java Full Stack, backend y
                colaboraciones donde pueda seguir aprendiendo y aportando.
                </p>

                <div className="contact-links">
                <a
                    href="https://www.linkedin.com/in/evelin-garcia-romero"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin size={22} />
                    LinkedIn
                </a>

                <a
                    href="https://github.com/Eve12gr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github size={22} />
                    GitHub
                </a>
                </div>
            </div>

            <a
                className="btn contact-button"
                href="mailto:evelin.garciaromero12@gmail.com"
            >
                Enviar mensaje
                <Mail size={24} />
            </a>
        </section>
    );
}