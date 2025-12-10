// Hooks de React para estado y efectos
import React, { useState, useEffect } from 'react';

// Secciones principales del landing
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { MapSection } from './components/MapSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Widget de chat y notificaciones
import { ChatWidget } from './components/ChatWidget';
import { Toaster } from './components/ui/sonner';

export default function App() {
  // Sección activa del menú para resaltar el ítem correspondiente
  const [activeSection, setActiveSection] = useState<
    'home' | 'about' | 'services' | 'map' | 'contact' | 'admin' | 'clients'
  >('home');

  // Flag para saber si se está en modo admin (por ahora sin uso visible en UI)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Scroll suave hacia la sección; resta 80px para evitar que el navbar cubra el título
  const smoothScroll = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(section);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };


  /* ---------- SCROLL SPY ---------- */
  useEffect(() => {
    // Solo activar scroll spy cuando estamos en la página principal (no en admin ni clients)
    if (isAdminLoggedIn || activeSection === 'admin' || activeSection === 'clients') return;

    // Detecta en qué sección está el scroll y actualiza el estado
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

    // Listener para scroll y cleanup al desmontar
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isAdminLoggedIn, activeSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar recibe la sección activa y función para navegar (pendiente de implementar) */}
      <Navbar activeSection={activeSection} onNavigate={smoothScroll} />
      {activeSection !== 'admin' && activeSection !== 'clients' && (
        <>
          {/* Hero con CTA; onNavigateToTracking está vacío para que puedas conectar lógica propia */}
          <div id="home"><Hero onNavigateToTracking={() => { }} /></div>

          {/* Sección de nosotros */}
          <div id="about"><AboutUs /></div>

          {/* Servicios listados */}
          <div id="services"><Services /></div>

          {/* Mapa interactivo o informativo */}
          <div id="map"><MapSection /></div>

          {/* Formulario de contacto */}
          <div id="contact"><Contact /></div>

          {/* Pie de página */}
          <Footer />
        </>
      )}

      {/* Widget flotante de chat/atención */}
      <ChatWidget />

      {/* Contenedor de notificaciones toast */}
      <Toaster />
    </div>
  );
}