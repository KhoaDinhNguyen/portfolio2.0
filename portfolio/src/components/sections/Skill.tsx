import SectionHeader from "./SectionHeader";
import { SKILLS } from "@constants/skill";

export default function SkillSection() {
  return (
    <section id="skills" className="h-full flex flex-col px-8 py-8 overflow-hidden">
      <SectionHeader label="Skills" title="Technical Stack" />

      <div className="flex-1 overflow-y-auto mt-6 pr-1">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {SKILLS.map(({ category, items }) => (
            <SkillCategoryCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
/**
 * Displays a category of technical skills with its associated technologies.
 */
function SkillCategoryCard({ category, items }: { category: string; items: string[] }) {
  return (
    <div className="p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-200">
      <h3 className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground uppercase tracking-widest mb-3">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm font-medium text-foreground bg-background rounded border border-border">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
