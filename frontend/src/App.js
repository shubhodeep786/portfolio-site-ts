import "@/App.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import BackgroundFX from "@/components/BackgroundFX";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import SectionDots from "@/components/SectionDots";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <SmoothScroll>
      <div className="App bg-slate-950 overflow-x-hidden">
        <BackgroundFX />
        <CustomCursor />
        <Nav />
        <SectionDots />
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
