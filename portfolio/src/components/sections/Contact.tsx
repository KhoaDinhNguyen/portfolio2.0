import { Mail, Download } from "lucide-react";
import { SOCIALS } from "@constants/social";
import PageLink from "../PageLink";
import { BUTTON } from "@constants/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-['JetBrains_Mono',monospace] text-sm text-primary mb-4">06. What's Next?</p>
        <h2 className="font-['Outfit',sans-serif] font-black text-4xl sm:text-5xl text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          Whether you have a question, a project idea, or just want to connect — I'll do my best to get back to you.
        </p>

        <ContactActions />

        <SocialLinks />
      </div>
    </section>
  );
}

function ContactActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
      <a href="mailto:khoa@example.com" className={BUTTON.BUTTON_PRIMARY}>
        <Mail size={16} /> Say Hello
      </a>
      <a href="/resume.pdf" download className={BUTTON.BUTTON_OUTLINE}>
        <Download size={16} /> Download Resume
      </a>
    </div>
  );
}
function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-8">
      {SOCIALS.map(({ href, icon: Icon, label }) => (
        <PageLink
          key={label}
          to={href}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
          <Icon size={18} />
          {label}
        </PageLink>
      ))}
    </div>
  );
}
