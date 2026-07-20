import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@constants/project";
import SectionHeader from "./SectionHeader";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader label="02. Projects" title="Featured Work" />

      <div className="mt-14 flex flex-col gap-16">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
