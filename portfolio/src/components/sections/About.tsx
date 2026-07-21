import SectionHeader from "./SectionHeader";
import { ABOUT, ABOUT_TAGS } from "@constants/profile";

export default function AboutSection() {
  const TAG_STYLE = "px-3 py-1 text-xs font-['JetBrains_Mono',monospace] text-accent border border-accent/30 rounded";

  return (
    <section id="about" className="h-full flex flex-col px-8 py-8 overflow-hidden">
      <SectionHeader label="About" title="A Bit About Me" />

      <div className="flex-1 overflow-y-auto mt-6 pr-1">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12 items-start">
          <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed">
            {ABOUT.map((t) => (
              <p key={t}>{t}</p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {ABOUT_TAGS.map((tag) => (
                <span key={tag} className={TAG_STYLE}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <MyImage />
        </div>
      </div>
    </section>
  );
}

function MyImage() {
  return (
    <div className="relative self-start">
      <div className="rounded-lg overflow-hidden border-2 border-primary/30">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=640&fit=crop&auto=format"
          alt="Khoa Nguyen"
          className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
