import { Mail, File } from "lucide-react";
import { SOCIALS } from "@constants/social";
import PageLink from "../PageLink";
import { BUTTON } from "@constants/button";

export default function ContactSection() {
  return (
    <section className="h-full flex items-center justify-center px-8">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-['JetBrains_Mono',monospace] text-sm text-primary mb-3">06. What's Next?</p>
        <h2 className="font-['Outfit',sans-serif] font-black text-4xl sm:text-5xl text-foreground mb-5">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-8">
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
      <a href="mailto:khoa.job1305@gmail.com" className={BUTTON.BUTTON_PRIMARY}>
        <Mail size={16} /> Say Hello
      </a>
      <PageLink
        to="https://drive.google.com/file/d/1D7P5J6jy9nNKXoezo7UN591PYdNOCnJc/view?usp=drive_link"
        className={BUTTON.BUTTON_OUTLINE}>
        <File size={16} /> View Resume
      </PageLink>
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
