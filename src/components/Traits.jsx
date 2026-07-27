import React from "react";

export default function Traits() {
    return(
        <section className="traits wrap">
            {[
            ["01", "Analítica", "Entiendo el problema antes de construir la solución."],
            ["02", "Detallista", "Cuido la calidad del código y la experiencia final."],
            ["03", "Creativa", "Propongo ideas que conectan tecnología y utilidad."],
            ["04", "Constante", "Trabajo con disciplina y aprendizaje continuo."]
            ].map(([n, title, text]) => (
            <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
            </article>
            ))}
        </section>
    );
}