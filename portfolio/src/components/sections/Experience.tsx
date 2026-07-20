import SectionHeader from "./SectionHeader";
import { EXPERIENCE, type ExperienceProps } from "@constants/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="h-full flex flex-col px-8 py-8 overflow-auto">
      <SectionHeader label="Experience" title="Where I've Worked" />

      <div className="flex-1 overflow-y-auto mt-6 pr-1 flex flex-col gap-5">
        {EXPERIENCE.map((job) => (
          <ExperienceCard job={job} key={job.company} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ job }: { job: ExperienceProps }) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-200">
      <div>
        <p className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground mb-1">{job.period}</p>
        <p className="text-xs text-muted-foreground">{job.location}</p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground text-base">{job.role}</h3>
        <p className="text-primary text-sm font-['JetBrains_Mono',monospace] mb-3">@ {job.company}</p>
        <ul className="flex flex-col gap-2">
          {job.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed items-center">
              <span className="text-accent shrink-0">▹</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
