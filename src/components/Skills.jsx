import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiAngular,
  SiSpringboot,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiMongodb
} from "react-icons/si";

import {
  Database,
  Server,
  Monitor,
  Code2
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Monitor,
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Angular", icon: SiAngular }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Laravel", icon: SiLaravel }
    ]
  },
  {
    title: "Base de Datos",
    icon: Database,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb}
    ]
  },
  {
    title: "Herramientas",
    icon: Code2,
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman }
    ]
  }
];

export default function Skills() {
  return (
    <section className="skills wrap" id="habilidades">
      <div className="section-title">
        <div>
          <p className="eyebrow">HABILIDADES</p>

          <h2>
            Tecnologías que conecto para crear{" "}
            <span>soluciones completas</span>
          </h2>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map(({ icon: Icon, title, items }) => (
          <article key={title}>
            <div className="skill-icon">
              <Icon size={24} />
            </div>

            <h3>{title}</h3>

            <div className="skill-tags">
              {items.map(({ name, icon: TechnologyIcon }) => (
                <span key={name}>
                  <TechnologyIcon aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}