import React, { useState } from "react";
import {projects} from "../data/projects";
import { Layers3 } from "lucide-react";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

    return(
        <section className="projects wrap" id="proyectos">
            <div className="section-title">
                <p className="eyebrow">PROYECTOS DESTACADOS</p>

                <h2>Soluciones construidas para problemas reales</h2>

                <p className="section-description">
                    Cada proyecto muestra una parte distinta de mi experiencia:
                    desarrollo, colaboración, aprendizaje y mejora continua.
                </p>
            </div>

            <div className="project-grid">
            {visibleProjects.map((project) => (
                <article className= "project-card" key={project.title}>
                <div className={`project-cover ${project.accent}`}>
                    <Layers3 size={55}/>
                    <span>{project.category}</span>
                </div>
                <div className="project-body">
                    <div className="project-meta">
                    <span>{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <div className="project-links">
                    {project.repo && <a href={project.repo}>Repositorio</a>}
                    {project.demo && <a href={project.demo}>Demo</a>}
                    <a href="#contacto">Ver caso</a>
                    </div>
                </div>
                </article>
            ))}
            
                </div>
                <div className="more-projects">
                <button
                    type="button"
                    className="more-projects-link"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Ver menos proyectos" : "Ver más proyectos"}
                </button>
            </div>
        </section>
    );
}