import { Terminal, ArrowUpRight, Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@icons";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
        <Title />
        <CodeBlockDecoration />
      </div>
    </section>
  );
}

function Title() {
  return (
    <div>
      {/* <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-['JetBrains_Mono',monospace] text-xs text-muted-foreground tracking-widest uppercase">
          Available for opportunities
        </span>
      </div> */}

      <h1 className="font-['Outfit',sans-serif] font-black text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight text-foreground mb-4">
        Khoa
        <br />
        <span className="text-primary">Nguyen</span>
      </h1>

      <div className="flex items-center gap-3 mb-6">
        <Terminal size={16} className="text-accent" />
        <span className="font-['JetBrains_Mono',monospace] text-sm text-muted-foreground">Software Engineer</span>
      </div>

      <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
        Passionate about full-stack development, AI applications, and scalable web systems. I design clean architectures
        and build products from idea to deployment.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            // scrollTo("#projects");
          }}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-blue-500 transition-all duration-200 text-sm">
          View Projects <ArrowUpRight size={16} />
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            // scrollTo("#contact");
          }}
          className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded hover:border-primary hover:text-primary transition-all duration-200 text-sm">
          Get in Touch
        </a>
      </div>

      <div className="flex items-center gap-5 mt-10">
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
            className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
function CodeBlockDecoration() {
  return (
    <div className="hidden lg:block w-72">
      <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xl shadow-black/40">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d1526] border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 font-['JetBrains_Mono',monospace] text-xs text-muted-foreground">khoa.ts</span>
        </div>
        <pre className="p-5 font-['JetBrains_Mono',monospace] text-xs leading-relaxed overflow-hidden">
          <code>
            <span className="text-[#a78bfa]">const</span>
            <span className="text-foreground"> khoa </span>
            <span className="text-[#94A3B8]">= </span>
            <span className="text-foreground">{"{"}</span>
            {"\n"}
            <span className="text-[#22C55E]"> role</span>
            <span className="text-[#94A3B8]">: </span>
            <span className="text-[#f59e0b]">"Software Engineer"</span>
            <span className="text-foreground">,</span>
            {"\n"}
            <span className="text-[#22C55E]"> focus</span>
            <span className="text-[#94A3B8]">: [</span>
            {"\n"}
            <span className="text-[#f59e0b]"> "Full-Stack Development"</span>
            <span className="text-foreground">,</span>
            {"\n"}
            <span className="text-[#f59e0b]"> "UI/UX Design"</span>
            <span className="text-foreground">,</span>
            {"\n"}
            <span className="text-[#f59e0b]"> "Machine Learning"</span>
            {"\n"}
            <span className="text-[#94A3B8]"> ],</span>
            {"\n"}
            {/* <span className="text-[#22C55E]"> open</span>
            <span className="text-[#94A3B8]">: </span>
            <span className="text-[#3B82F6]">true</span>
            {"\n"} */}
            <span className="text-foreground">{"}"}</span>
            <span className="text-[#94A3B8]">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
