import { Terminal, ArrowUpRight, ChevronDown } from "lucide-react";
import SectionLink from "./SectionLink";
import PageLink from "../PageLink";
import CodeWindow from "../code/CodeWindow";
import { SOCIALS } from "@constants/social";
import { HERO_CODE, HERO_PROFILE } from "@constants/profile";
import { BUTTON } from "@constants/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
        <div>
          <HeroProfile />
          <HeroActions />
          <SocialLinks />
        </div>

        <CodeWindow title="khoa.ts" code={HERO_CODE} />
      </div>

      <GoDownArrow />
    </section>
  );
}

/** Renders an arrow go to Project sections */
function GoDownArrow() {
  return (
    <div className="mt-20 flex justify-center">
      <SectionLink
        to="projects"
        className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
        <ChevronDown size={24} />
      </SectionLink>
    </div>
  );
}

function HeroProfile() {
  const { firstName, lastName, role, description } = HERO_PROFILE;

  return (
    <>
      <h1 className="font-['Outfit',sans-serif] font-black text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight text-foreground mb-4">
        {firstName}
        <br />
        <span className="text-primary">{lastName}</span>
      </h1>
      <div className="flex items-center gap-3 mb-6">
        <Terminal size={16} className="text-accent" />
        <span className="font-['JetBrains_Mono',monospace] text-sm text-muted-foreground">{role}</span>
      </div>
      <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">{description}</p>
    </>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SectionLink to="projects" className={BUTTON.BUTTON_PRIMARY}>
        View Projects <ArrowUpRight size={16} />
      </SectionLink>

      <SectionLink to="contact" className={BUTTON.BUTTON_OUTLINE}>
        Get in Touch
      </SectionLink>
    </div>
  );
}

/** Renders link of social media */
function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-10">
      {SOCIALS.map(({ href, icon: Icon, label }) => (
        <PageLink
          key={label}
          to={href}
          className="text-muted-foreground hover:text-primary transition-colors duration-200">
          <Icon size={20} />
        </PageLink>
      ))}
    </div>
  );
}
