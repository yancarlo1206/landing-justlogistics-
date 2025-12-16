// Navbar principal: fija en la parte superior, controla navegación y menú móvil.
import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, effectiveFadeIn } from './ui/animations';

const logoHorizontal = new URL(
  '../assets/img/Logotipo Horizontal Blanco.png',
  import.meta.url
).href;

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lista de secciones que se muestran en el menú
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'statistics', label: 'Cifras' },
    { id: 'services', label: 'Servicios' },
    { id: 'map', label: 'Mapa' },
    { id: 'brands', label: 'Aliados' },
    { id: 'contact', label: 'Contacto' }
  ];

  // Navega, cierra menú y realiza scroll suave compensando la altura del navbar
  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);

    setTimeout(() => {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(section);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{
        backgroundColor: '#26306a',
        borderBottom: '2px solid #36e7f6'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo: compacto y elegante */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logoHorizontal}
              alt="Just International Logistics"
              className="h-10 sm:h-12 w-auto"
            />
          </button>

          {/* Navegación en escritorio */}
          <motion.div
            className="hidden md:flex space-x-3"
            variants={staggerContainer(0.05, 0.06)}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                variants={effectiveFadeIn}
                onClick={() => handleNavigate(link.id)}
                className={`relative px-5 py-3 rounded-lg font-medium transition-all duration-300 text-base ${activeSection === link.id
                  ? 'bg-white/10 shadow-md'
                  : 'text-white hover:bg-white/10 hover:text-[#36e7f6]'
                  }`}
                style={activeSection === link.id ? { color: '#36e7f6' } : { color: 'white' }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-3 right-3 -bottom-1 h-1 bg-[#f97600] rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Botón de menú móvil mejorado */}
          <button
            className="md:hidden p-3 text-white hover:bg-[#36e7f6] hover:text-[#26306a] rounded-lg transition-colors duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navegación móvil colapsable mejorada */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#26306a',
              borderTop: '1px solid rgba(54, 231, 246, 0.3)'
            }}
            className="md:hidden overflow-hidden"
            id="mobile-nav"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`w-full text-left px-5 py-4 rounded-lg font-medium transition-all duration-300 text-base min-h-[52px] ${activeSection === link.id
                    ? 'bg-white/10 shadow-md'
                    : 'text-white hover:bg-white/10 hover:text-[#36e7f6]'
                    }`}
                  style={activeSection === link.id ? { color: '#36e7f6' } : { color: 'white' }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="ml-2 inline-block w-2 h-2 rounded-full bg-[#f97600]" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}