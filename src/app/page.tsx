import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import TechCommunicator from "@/components/TechCommunicator/TechCommunicator";
import Workflow from "@/components/Workflow/Workflow";
import GameLab from "@/components/GameLab/GameLab";
import Videos from "@/components/Videos/Videos";
import CV from "@/components/CV/CV";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GameLab />
      <Projects />
      <TechStack />
      <TechCommunicator />
      <Workflow />
      <Videos />
      <CV />
      <Blog />
      <Contact />
    </main>
  );
}
