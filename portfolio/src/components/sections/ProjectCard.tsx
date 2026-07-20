import { ExternalLink } from "lucide-react";
import { GitHub } from "@icons";
import { type ProjectProps } from "@constants/project";

export default function ProjectCard({ project, reverse }: { project: ProjectProps; reverse: boolean }) {
  return (
    <div className={`grid lg:grid-cols-[1fr_1fr] gap-8 items-center ${reverse ? "lg:*:first:order-2" : ""}`}>
      {/* Image */}
      <div className="relative group rounded-lg overflow-hidden border border-border bg-card">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
        />
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${project.color}55, transparent)` }}
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-[#0F172A]/80 text-muted-foreground hover:text-foreground transition-colors backdrop-blur"
            aria-label="GitHub">
            <GitHub size={16} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-[#0F172A]/80 text-muted-foreground hover:text-foreground transition-colors backdrop-blur"
            aria-label="Live demo">
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground uppercase tracking-widest mb-2">
          {project.subtitle}
        </p>
        <h3 className="font-['Outfit',sans-serif] font-black text-2xl sm:text-3xl text-foreground mb-4">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

        <ul className="flex flex-col gap-1.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-accent mt-0.5 shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 font-['JetBrains_Mono',monospace] text-xs text-muted-foreground bg-[#0F172A] border border-border rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <GitHub size={15} /> Source
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
