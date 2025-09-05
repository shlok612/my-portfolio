import { ThemeToggle } from "../components/ThemeToggle";
import { MyBackground } from "../components/MyBackground";
import { Navbar } from "../components/Navbar";
import { MeSection } from "../components/MeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";

export const Home=()=>{
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme */}
    <ThemeToggle></ThemeToggle>

    {/* BGM */}
    <MyBackground/>

    {/* Navbar */}
    <Navbar></Navbar>

    {/* MAIN CONTENT */}

    <main>
      <MeSection></MeSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactMe></ContactMe>
    </main>
    {/* Footer */}
    <Footer></Footer>

  </div>
};