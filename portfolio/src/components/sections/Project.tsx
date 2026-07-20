import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@constants/project";
import { useState } from "react";

export default function ProjectSection() {
  const [projectIdx, setProjectIdx] = useState<number>(0);

  return (
    <section id="projects" className="h-full flex flex-col overflow-hidden">
      <ProjectTabBar projectIdx={projectIdx} setProjectIdx={setProjectIdx} />
      <div className="mt-14 flex flex-col gap-16">
        <ProjectCard key={PROJECTS[projectIdx].title} project={PROJECTS[projectIdx]} />
      </div>
    </section>
  );
}

/** Renders each button for project, clicking them will go to its project's description */
function ProjectTabBar({ projectIdx, setProjectIdx }: { projectIdx: number; setProjectIdx: (i: number) => void }) {
  return (
    <div className="flex items-center gap-1 px-8 pt-6 pb-0 shrink-0">
      {PROJECTS.map((p, i) => (
        <button
          key={p.title}
          onClick={() => setProjectIdx(i)}
          className={`px-4 py-2 text-sm font-medium rounded-t border-b-2 transition-all duration-150 ${
            i === projectIdx
              ? "border-primary text-primary bg-card"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}>
          {p.title}
        </button>
      ))}
    </div>
  );
}
