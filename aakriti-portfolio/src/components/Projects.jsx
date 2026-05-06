import PROJECTS from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px clamp(20px, 5vw, 80px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel label="Projects" sub="What I've built" />
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
