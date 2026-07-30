import React, { useState } from "react";
import { projects } from "../data/projects";
import { Layers3 } from "lucide-react";
import ProjectCaseModal from "./ProjectCaseModal";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const visibleProjects = showAll
        ? projects
        : projects.slice(0, 3);

    return (
        <>
        <section className="projects wrap" id="proyectos">
            <div className="section-title">
            <p className="eyebrow">
                PROYECTOS DESTACADOS
            </p>

            <h2>
                Soluciones construidas para{" "}
                <span>problemas reales</span>
            </h2>

            <p className="section-description">
                Cada proyecto muestra una parte distinta de mi experiencia:
                desarrollo, colaboración, aprendizaje y mejora continua.
            </p>
            </div>

            <div className="project-grid">
            {visibleProjects.map((project) => (
                <article
                className="project-card"
                key={project.title}
                >
                <div className="project-image">
                    {project.image ? (
                    <img
                        src={project.image}
                        alt={`Vista del proyecto ${project.title}`}
                        loading="lazy"
                    />
                    ) : (
                    <div
                        className={`project-placeholder ${project.accent}`}
                    >
                        <Layers3 size={48} />

                        <span>
                        {project.comingSoon
                            ? "Próximamente"
                            : project.category}
                        </span>
                    </div>
                    )}
                </div>

                <div className="project-body">
                    <div className="project-meta">
                    <span>{project.status}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tags">
                    {project.stack.map((item) => (
                        <span key={item}>
                        {item}
                        </span>
                    ))}
                    </div>

                    {!project.comingSoon && (
                    <div className="project-links">
                        {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver proyecto
                        </a>
                        )}

                        {project.video && (
                        <a
                            href={project.video}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver funcionamiento
                        </a>
                        )}

                        {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repositorio
                        </a>
                        )}

                        {project.caseStudy && (
                        <button
                            type="button"
                            className="case-study-button"
                            onClick={() =>
                            setSelectedProject(project)
                            }
                        >
                            Ver caso
                        </button>
                        )}
                    </div>
                    )}
                </div>
                </article>
            ))}
            </div>

            {projects.length > 3 && (
            <div className="more-projects">
                <button
                type="button"
                className="more-projects-link"
                onClick={() =>
                    setShowAll((currentValue) => !currentValue)
                }
                >
                {showAll
                    ? "Ver menos proyectos"
                    : "Ver más proyectos"}
                </button>
            </div>
            )}
        </section>

        <ProjectCaseModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
        />
        </>
    );
}