import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "@constants/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader label="04. Experience" title="Where I've Worked" />

      <div className="mt-14 flex flex-col gap-8">
        {EXPERIENCE.map((job) => (
          <div
            key={job.company}
            className="grid md:grid-cols-[220px_1fr] gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-200">
            <div>
              <p className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground mb-1">{job.period}</p>
              <p className="text-xs text-muted-foreground">{job.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">{job.role}</h3>
              <p className="text-primary text-sm font-['JetBrains_Mono',monospace] mb-4">@ {job.company}</p>
              <ul className="flex flex-col gap-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
