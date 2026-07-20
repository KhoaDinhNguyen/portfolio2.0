import { ExternalLink } from "lucide-react";
import { GitHub } from "@icons";
import { type ProjectProps } from "@constants/project";
import PageLink from "../PageLink";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="flex-1 overflow-hidden px-8 pb-6 pt-4">
      <div className="h-full grid lg:grid-cols-[1fr_1fr] gap-8 items-start overflow-y-auto">
        <ProjectImage project={project} />

        <div className="flex flex-col gap-4 overflow-y-auto h-full pr-1">
          <ProjectDescription project={project} />
          <ProjectHighlights project={project} />
          <ProjectTags project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}

function ProjectImage({ project }: { project: ProjectProps }) {
  const { image, title, color } = project;

  return (
    <div className="relative rounded-lg overflow-hidden border border-border bg-card group inline-block w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-auto block opacity-70 group-hover:opacity-85 transition-opacity duration-300"
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{ background: `linear-gradient(135deg, ${color}44, transparent)` }}
      />
    </div>
  );
}

function ProjectDescription({ project: { subtitle, title, description, color } }: { project: ProjectProps }) {
  return (
    <>
      <p className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground uppercase tracking-widest mb-1">
        {subtitle}
      </p>
      <h3 className="font-['Outfit',sans-serif] font-black text-3xl leading-none mb-3" style={{ color: color }}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </>
  );
}

function ProjectHighlights({ project: { highlights } }: { project: ProjectProps }) {
  return (
    <div>
      <p className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground uppercase tracking-widest mb-2">
        Key Features
      </p>

      <ul className="flex flex-col gap-1.5">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5 shrink-0">▹</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Renders a list of skills regarding the project */
function ProjectTags({ project: { tags } }: { project: ProjectProps }) {
  return (
    <div>
      <p className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground uppercase tracking-widest mb-2">
        Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 font-['JetBrains_Mono',monospace] text-xs text-muted-foreground bg-background border border-border rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectLinks({ project: { github, demo } }: { project: ProjectProps }) {
  const LINK_CLASS = "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors";

  return (
    <div className="flex gap-4 pt-2">
      <PageLink to={github} className={LINK_CLASS}>
        <GitHub size={15} /> Source
      </PageLink>

      <PageLink to={demo} className={LINK_CLASS}>
        <ExternalLink size={15} /> Live Demo
      </PageLink>
    </div>
  );
}
