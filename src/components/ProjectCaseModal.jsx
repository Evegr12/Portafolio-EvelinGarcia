import React, { useEffect } from "react";
import {
  X,
  Github,
  ExternalLink,
  PlayCircle,
  Target,
  Lightbulb,
  Wrench,
  CheckCircle2,
  UserRound,
  Workflow,
  Images
} from "lucide-react";

export default function ProjectCaseModal({
  project,
  onClose
}) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    function closeWithEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        closeWithEscape
      );
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) {
    return null;
  }

  const { caseStudy } = project;

  function closeFromBackground(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="case-modal-overlay"
      onClick={closeFromBackground}
      role="presentation"
    >
      <article
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
      >
        <button
          type="button"
          className="case-modal-close"
          onClick={onClose}
          aria-label="Cerrar caso de estudio"
        >
          <X size={23} />
        </button>

        <header className="case-modal-hero">
          <div className="case-modal-image">
            {project.image ? (
              <img
                src={project.image}
                alt={`Vista del proyecto ${project.title}`}
              />
            ) : (
              <div className="case-modal-placeholder">
                Proyecto sin captura
              </div>
            )}
          </div>

          <div className="case-modal-intro">
            <p className="eyebrow">
              CASO DE ESTUDIO
            </p>

            <h2 id="case-title">
              {project.title}
            </h2>

            <p>{caseStudy.overview}</p>

            <div className="case-modal-tags">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="case-modal-links">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={18} />
                  Ver proyecto
                </a>
              )}

              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PlayCircle size={18} />
                  Ver funcionamiento
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  Repositorio
                </a>
              )}
            </div>
          </div>
        </header>

        {project.gallery?.length > 0 && (
          <section className="case-gallery-section">
            <div className="case-gallery-heading">
              <span className="case-gallery-icon">
                <Images size={22} />
              </span>

              <div>
                <p className="eyebrow">
                  EVIDENCIAS DEL PROYECTO
                </p>

                <h3>Capturas del funcionamiento</h3>
              </div>
            </div>

            {project.galleryNote && (
              <p className="case-gallery-note">
                {project.galleryNote}
              </p>
            )}

            <div className="case-gallery">
              {project.gallery.map((image, index) => (
                <figure
                  className="case-gallery-item"
                  key={`${image.src}-${index}`}
                >
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${image.caption || image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                  </a>

                  {image.caption && (
                    <figcaption>
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="case-modal-content">
          <CaseSection
            icon={Target}
            title="Problema que resuelve"
          >
            <p>{caseStudy.problem}</p>
          </CaseSection>

          {caseStudy.objective && (
            <CaseSection
              icon={Lightbulb}
              title="Objetivo"
            >
              <p>{caseStudy.objective}</p>
            </CaseSection>
          )}

          <CaseSection
            icon={Workflow}
            title="Cómo funciona"
          >
            <CaseList items={caseStudy.howItWorks} />
          </CaseSection>

          <CaseSection
            icon={UserRound}
            title="Mi participación"
          >
            <CaseList items={caseStudy.contribution} />
          </CaseSection>

          <CaseSection
            icon={Wrench}
            title="Retos y soluciones"
            className="case-section-wide"
          >
            <div className="case-challenges">
              <div>
                <h3>Retos</h3>

                <CaseList
                  items={caseStudy.challenges}
                />
              </div>

              <div>
                <h3>Cómo los resolví</h3>

                <CaseList
                  items={caseStudy.solutions}
                />
              </div>
            </div>
          </CaseSection>

          <CaseSection
            icon={Lightbulb}
            title="Qué aprendí"
          >
            <CaseList items={caseStudy.learning} />
          </CaseSection>

          <CaseSection
            icon={CheckCircle2}
            title="Resultado"
          >
            <p>{caseStudy.result}</p>
          </CaseSection>
        </div>
      </article>
    </div>
  );
}

function CaseSection({
  icon: Icon,
  title,
  children,
  className = ""
}) {
  return (
    <section className={`case-section ${className}`}>
      <div className="case-section-title">
        <span>
          <Icon size={21} />
        </span>

        <h3>{title}</h3>
      </div>

      {children}
    </section>
  );
}

function CaseList({ items = [] }) {
  return (
    <ul className="case-list">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}