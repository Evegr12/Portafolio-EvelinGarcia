import React from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Database,
  Server,
  Monitor,
  Code2,
  Layers3
} from "lucide-react";
import { projects } from "./data/projects";

const skills = [
  { icon: Monitor, title: "Frontend", text: "React, JavaScript, HTML, CSS, Angular" },
  { icon: Server, title: "Backend", text: "Java, Spring Boot, Node.js, Laravel" },
  { icon: Database, title: "Datos", text: "MySQL, PostgreSQL" },
  { icon: Code2, title: "Herramientas", text: "Git, GitHub, Postman, Linux" }
];

function App() {
  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand">Evelin <span>&lt;/&gt;</span></a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">DESARROLLADORA JAVA FULL STACK</p>
            <h1>
              Código con propósito,
              <span> soluciones que conectan.</span>
            </h1>
            <p className="lead">
              Construyo aplicaciones web funcionales, claras y bien estructuradas,
              conectando interfaz, backend, datos y necesidades reales.
            </p>

            <div className="actions">
              <a className="btn primary" href="#proyectos">
                Ver proyectos <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="public/cv-evelin.pdf">
                Descargar CV <Download size={18} />
              </a>
            </div>

            <div className="socials">
              <a href="https://github.com/Evegr12" target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
              <a href="https://www.linkedin.com/in/evelin-garcia-romero" target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
              <a href="mailto:evelin.garciaromero12@gmail.com"><Mail size={19}/> Correo</a>
            </div>
          </div>

          <div className="stack-visual" aria-label="Arquitectura Java Full Stack">
            <div className="glow"></div>
            <div className="grid-lines"></div>

            <article className="node frontend">
              <Monitor size={23}/>
              <div><small>FRONTEND</small><strong>React</strong></div>
            </article>

            <article className="node api">
              <Server size={23}/>
              <div><small>BACKEND</small><strong>Java + Spring</strong></div>
            </article>

            <article className="node db">
              <Database size={23}/>
              <div><small>DATOS</small><strong>MySQL</strong></div>
            </article>

            <div className="code-window">
              <div className="dots"><span></span><span></span><span></span></div>
              <pre>{`@RestController
@RequestMapping("/api/projects")
public class ProjectController {

  @GetMapping
  public List<Project> index() {
    return service.findAll();
  }
}`}</pre>
            </div>

            <div className="flow-label">INTERFAZ → API → BASE DE DATOS</div>
          </div>
        </section>

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

        <section className="projects wrap" id="proyectos">
          <div className="section-title">
            <div>
              <p className="eyebrow">PROYECTOS DESTACADOS</p>
              <h2>Soluciones construidas para problemas reales</h2>
            </div>
            <p>
              Cada proyecto muestra una parte distinta de mi experiencia:
              desarrollo, colaboración, aprendizaje y mejora continua.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.title}>
                <div className={`project-cover ${project.accent}`}>
                  <Layers3 size={44}/>
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
        </section>

        <section className="about wrap" id="sobre-mi">
          <div>
            <p className="eyebrow">SOBRE MÍ</p>
            <h2>Construyo con lógica, creatividad y atención al detalle.</h2>
          </div>
          <div>
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

        <section className="skills wrap" id="habilidades">
          <div className="section-title">
            <div>
              <p className="eyebrow">HABILIDADES</p>
              <h2>Tecnologías que conecto para crear soluciones completas</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={25}/>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact wrap" id="contacto">
          <div>
            <p className="eyebrow">CONTACTO</p>
            <h2>¿Tienes una oportunidad o proyecto en mente?</h2>
            <p>Estoy abierta a oportunidades Java Full Stack, backend y colaboraciones.</p>
          </div>
          <a className="btn light" href="mailto:evelin.garciaromero12@gmail.com">
            Enviar mensaje <Mail size={18}/>
          </a>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <div>
            <strong>Evelin &lt;/&gt;</strong>
            <p>Construyendo soluciones con código, estructura y propósito.</p>
          </div>
          <p>© 2026 Evelin García Romero.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
