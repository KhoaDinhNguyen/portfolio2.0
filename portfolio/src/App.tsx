import "./App.css";
import HeroSection from "./components/sections/Hero";
import ProjectSection from "./components/sections/Project";
import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/Contact";
import ExperienceSection from "./components/sections/Experience";
import SkillSection from "./components/sections/Skill";
import SideBar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [active, setActive] = useState<string>("hero");

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground font-['Inter',sans-serif]">
      <SideBar active={active} onNavigate={setActive} />
      <main className="flex-1 h-full overflow-hidden relative">
        {active === "hero" && <HeroSection />}
        {active === "projects" && <ProjectSection />}
        {active === "skills" && <SkillSection />}
        {active === "experience" && <ExperienceSection />}
        {active === "about" && <AboutSection />}
        {active === "contact" && <ContactSection />}
      </main>
    </div>
  );
}

export default App;
