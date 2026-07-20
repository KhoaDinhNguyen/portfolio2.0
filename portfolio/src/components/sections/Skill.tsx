import SectionHeader from "./SectionHeader";
import { SKILLS } from "@constants/skill";

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="03. Skills" title="Technical Stack" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-200">
              <h3 className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm font-medium text-foreground bg-[#0F172A] rounded border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
