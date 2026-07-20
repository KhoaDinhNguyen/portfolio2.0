import { Mail, Download } from "lucide-react";
import { GitHub, LinkedIn } from "@icons";

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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="mailto:khoa@example.com"
            className="flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded hover:bg-blue-500 transition-all duration-200">
            <Mail size={16} /> Say Hello
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-semibold rounded hover:border-primary hover:text-primary transition-all duration-200">
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="flex justify-center items-center gap-8">
          {[
            { href: "https://github.com/khoanguyen", icon: GitHub, label: "GitHub" },
            { href: "https://linkedin.com/in/khoanguyen", icon: LinkedIn, label: "LinkedIn" },
            { href: "mailto:khoa@example.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
