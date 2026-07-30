import React from "react";

export default function About() {
    return (
        <section className="about wrap" id="sobre-mi">
            <div className="about-heading">
                <p className="eyebrow">SOBRE MÍ</p>

                <h2>
                    Construyo con lógica, creatividad y{" "}
                    <span>atención al detalle</span>
                </h2>
            </div>

            <div className="about-copy">
                <p>
                Soy una desarrolladora disciplinada y constante. Me gusta comprender
                el problema antes de proponer una solución y disfruto construir
                proyectos desde cero porque me permite conocer su arquitectura.
                </p>

                <p>
                Actualmente fortalezco mi perfil Java Full Stack, integrando frontend,
                backend y bases de datos en aplicaciones útiles y bien organizadas.
                </p>
            </div>
        </section>
    );
}