import '@/App.css';
import { useLenis } from '@/hooks/useLenis';
import { SiteBackground } from '@/components/SiteBackground';
import { CursorSpotlight } from '@/components/CursorSpotlight';
import { CardGlowTracker } from '@/components/CardGlowTracker';
import { ScrollProgress } from '@/components/ScrollProgress';
import { StickyNav } from '@/components/StickyNav';
import { CommandPalette } from '@/components/CommandPalette';
import { Toaster } from '@/components/ui/sonner';
import { Hero } from '@/sections/Hero';
import { TechStrip } from '@/sections/TechStrip';
import { About } from '@/sections/About';
import { StatementMarquee } from '@/sections/StatementMarquee';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Certifications } from '@/sections/Certifications';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  useLenis();

  return (
    <div className="App">
      <SiteBackground />
      <CursorSpotlight />
      <CardGlowTracker />
      <ScrollProgress />
      <StickyNav />
      <CommandPalette />

      <main className="relative z-[2]">
        <Hero />
        <TechStrip />
        <About />
        <StatementMarquee />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </main>

      <Toaster theme="light" position="bottom-right" richColors closeButton />
    </div>
  );
}

export default App;
