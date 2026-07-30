import React, { useState } from "react";
import {
    Check,
    Copy,
    Github,
    Linkedin,
    Mail,
    Send
} from "lucide-react";

    const CONTACT_EMAIL = "evelin.garciaromero12@gmail.com";
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojgbpok";

    export default function Contact() {
    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState("idle");

    async function copyEmail() {
        try {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopied(true);

        window.setTimeout(() => {
            setCopied(false);
        }, 2500);
        } catch (error) {
        console.error("No se pudo copiar el correo:", error);

        /*
        * Alternativa para navegadores que no permiten
        * utilizar navigator.clipboard.
        */
        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = CONTACT_EMAIL;
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        temporaryInput.remove();

        setCopied(true);

        window.setTimeout(() => {
            setCopied(false);
        }, 2500);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setFormStatus("sending");

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
            Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("No se pudo enviar el formulario.");
        }

        form.reset();
        setFormStatus("success");
        } catch (error) {
        console.error(error);
        setFormStatus("error");
        }
    }

    return (
        <section className="contact wrap" id="contacto">
        <div className="contact-copy">
            <p className="eyebrow">CONTACTO</p>

            <h2>
            ¿Tienes una oportunidad o proyecto en mente?
            </h2>

            <p>
            Estoy interesada en oportunidades como desarrolladora
            Java Full Stack o backend. Puedes enviarme un mensaje
            desde este formulario o copiar mi correo para contactarme
            desde la aplicación que prefieras.
            </p>

            <div className="contact-networks">
            <a
                href="https://www.linkedin.com/in/evelin-garcia-romero"
                target="_blank"
                rel="noreferrer"
            >
                <Linkedin size={19} />
                LinkedIn
            </a>

            <a
                href="https://github.com/Evegr12"
                target="_blank"
                rel="noreferrer"
            >
                <Github size={19} />
                GitHub
            </a>
            </div>

            <div className="contact-email-box">
            <div className="contact-email-information">
                <span className="contact-email-icon">
                <Mail size={21} />
                </span>

                <div>
                <span>Correo electrónico</span>

                <strong>{CONTACT_EMAIL}</strong>
                </div>
            </div>

            <div className="contact-email-actions">
                <button
                type="button"
                className={`copy-email-button ${
                    copied ? "copied" : ""
                }`}
                onClick={copyEmail}
                >
                {copied ? (
                    <>
                    <Check size={18} />
                    Copiado
                    </>
                ) : (
                    <>
                    <Copy size={18} />
                    Copiar correo
                    </>
                )}
                </button>

                <a
                className="open-email-link"
                href={`mailto:${CONTACT_EMAIL}`}
                >
                Abrir app de correo
                </a>
            </div>
            </div>
        </div>

        <form
            className="contact-form"
            onSubmit={handleSubmit}
        >
            <div className="contact-form-heading">
            <h3>Envíame un mensaje</h3>

            <p>
                Completa los datos y recibiré tu mensaje en mi correo.
            </p>
            </div>

            <div className="contact-form-row">
            <label>
                Nombre

                <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                autoComplete="name"
                required
                />
            </label>

            <label>
                Correo

                <input
                type="email"
                name="email"
                placeholder="nombre@correo.com"
                autoComplete="email"
                required
                />
            </label>
            </div>

            <label>
            Asunto

            <input
                type="text"
                name="subject"
                placeholder="Motivo del mensaje"
                required
            />
            </label>

            <label>
            Mensaje

            <textarea
                name="message"
                rows="5"
                placeholder="Cuéntame sobre la oportunidad o proyecto..."
                required
            />
            </label>

            <input
            type="hidden"
            name="_subject"
            value="Nuevo mensaje desde el portafolio"
            />

            <button
            type="submit"
            className="contact-submit-button"
            disabled={formStatus === "sending"}
            >
            <Send size={19} />

            {formStatus === "sending"
                ? "Enviando..."
                : "Enviar mensaje"}
            </button>

            <div
            className="contact-form-feedback"
            aria-live="polite"
            >
            {formStatus === "success" && (
                <p className="form-success">
                <Check size={18} />
                Tu mensaje se envió correctamente. Gracias por
                contactarme.
                </p>
            )}

            {formStatus === "error" && (
                <p className="form-error">
                No se pudo enviar el mensaje. Inténtalo nuevamente
                o copia mi correo para escribirme directamente.
                </p>
            )}
            </div>
        </form>
        </section>
    );
}