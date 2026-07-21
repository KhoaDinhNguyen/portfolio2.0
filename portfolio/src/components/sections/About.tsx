import SectionHeader from "./SectionHeader";
import { ABOUT, ABOUT_TAGS } from "@constants/profile";
import myImage from "@assets/my-photo.jpg";

export default function AboutSection() {
  const TAG_STYLE = "px-3 py-1 text-xs font-['JetBrains_Mono',monospace] text-accent border border-accent/30 rounded";

  return (
    <section className="h-full flex flex-col px-8 py-8 overflow-hidden">
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
          src={myImage}
          alt="Khoa Nguyen"
          className="w-full object-cover hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
