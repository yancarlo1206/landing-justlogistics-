import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { MapSection } from './components/MapSection';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'services' | 'map' | 'contact' | 'admin' | 'clients'>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  

  
  const smoothScroll = (section: string) => {
    if (section === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(section);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };


  /* ---------- SCROLL SPY ---------- */
  useEffect(() => {
    // Solo activar scroll spy cuando estamos en la página principal (no en admin ni clients)
    if (isAdminLoggedIn || activeSection === 'admin' || activeSection === 'clients') return;

    const onScroll = () => {
      const sections = ['home', 'about', 'services', 'map', 'contact'];
      const pos = window.scrollY + 100;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s as 'home' | 'about' | 'services' | 'map' | 'contact');
          break;
        }
      }
      if (window.scrollY < 100) setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isAdminLoggedIn, activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} onNavigate={() => {}} />

      {activeSection !== 'admin' && activeSection !== 'clients' && (
        <>
          <div id="home"><Hero onNavigateToTracking={() => {}} /></div>
          <div id="about"><AboutUs /></div>
          <div id="services"><Services /></div>
          <div id="map"><MapSection /></div>
          <div id="contact"><Contact /></div>
          <Footer />
        </>
      )}

      <ChatWidget />

  
      <Toaster />
    </div>
  );
}