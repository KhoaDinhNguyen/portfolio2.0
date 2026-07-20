import "./App.css";
import HeroSection from "./components/sections/Hero";
import ProjectSection from "./components/sections/Project";
import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/Contact";
import ExperienceSection from "./components/sections/Experience";
import Footer from "./components/Footer";
import SkillSection from "./components/sections/Skill";

function App() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
