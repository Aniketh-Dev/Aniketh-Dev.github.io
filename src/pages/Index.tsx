import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { MouseTrackingBackground } from '@/components/ui/MouseTrackingBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Global mouse tracking background */}
      <MouseTrackingBackground />
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
