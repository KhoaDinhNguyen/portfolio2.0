import { Terminal, ArrowUpRight } from "lucide-react";
import SectionLink from "./SectionLink";
import CodeWindow from "../code/CodeWindow";
import { HERO_CODE, HERO_PROFILE } from "@constants/profile";
import { BUTTON } from "@constants/button";

export default function HeroSection() {
  return (
    <section className="h-full flex items-center px-10 lg:px-20">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center w-full max-w-5xl">
        <div>
          <HeroProfile />
          <HeroActions />
        </div>

        <CodeWindow title="khoa.ts" code={HERO_CODE} />
      </div>
    </section>
  );
}

function HeroProfile() {
  const { firstName, lastName, role, description } = HERO_PROFILE;

  return (
    <>
      <h1 className="font-['Outfit',sans-serif] font-black text-5xl sm:text-6xl xl:text-7xl leading-none tracking-tight text-foreground mb-3">
        {firstName}
        <br />
        <span className="text-primary">{lastName}</span>
      </h1>
      <div className="flex items-center gap-2 mb-5">
        <Terminal size={14} className="text-accent" />
        <span className="font-['JetBrains_Mono',monospace] text-sm text-muted-foreground">{role}</span>
      </div>
      <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8">{description}</p>
    </>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <SectionLink to="projects" className={BUTTON.BUTTON_PRIMARY}>
        View Projects <ArrowUpRight size={16} />
      </SectionLink>

      <SectionLink to="contact" className={BUTTON.BUTTON_OUTLINE}>
        Get in Touch
      </SectionLink>
    </div>
  );
}
