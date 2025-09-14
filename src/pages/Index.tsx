import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="products">
          <ProductsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xs font-bold text-background">N</span>
              </div>
              <span className="text-lg font-bold hologram-text">NOVA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Nova Industries. Shaping the future, one innovation at a time.
            </p>
            <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-primary to-secondary animate-glow-pulse rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
