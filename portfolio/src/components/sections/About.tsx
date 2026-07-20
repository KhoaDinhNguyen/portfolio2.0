import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="05. About" title="A Bit About Me" />

        <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-14 items-start">
          <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
            <p>
              I'm a Computer Science student at Arizona State University with a 4.0 GPA and hands-on experience building
              full stack web applications through internships and software engineering projects.
            </p>
            <p>
              I enjoy turning ideas into scalable, user-friendly applications by combining frontend technologies like
              React, Next.js, TypeScript, and Tailwind CSS with backend frameworks including Node.js, Express, Django,
              and SQL databases. I've contributed to Agile development teams, built production-ready features, developed
              REST APIs, and collaborated with cross-functional stakeholders to deliver real-world software solutions.
            </p>
            <p>
              My experience includes building full stack web applications with React, Express, Django, MongoDB, and SQL,
              developing AI-powered features using Scikit-learn, and contributing to Agile teams delivering
              production-ready software.
            </p>
            <p>Feel free to connect or reach out at khoa.job1305@gmail.com.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Multiplayer Systems", "AI Integration", "API Design", "Database Schema", "CI/CD"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-['JetBrains_Mono',monospace] text-accent border border-accent/30 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative self-start">
            <div className="rounded-lg overflow-hidden border-2 border-primary/30">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=640&fit=crop&auto=format"
                alt="Khoa Nguyen"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
