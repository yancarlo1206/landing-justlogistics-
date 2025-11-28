import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainer, effectiveFadeIn } from './ui/animations';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'map', label: 'Mapa' },
    { id: 'contact', label: 'Contacto' }
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);           // ← cambia activeSection
    setMobileMenuOpen(false);      // ← cierra menú

    // 🔽 Asegura scroll en móvil
    setTimeout(() => {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(section);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 100); // espera a que se cierre el menú
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2"
          >
            <div className="bg-[#26306a] text-white px-3 py-2 rounded-lg">
              <img
                src="https://i.postimg.cc/TPC0DVSN/Chat-GPT-Image-9-nov-2025-21-40-45-removebg-preview.png"
                alt="JIL Logo"
                className="h-10 w-auto"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex space-x-1"
            variants={staggerContainer(0.05, 0.06)}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                variants={effectiveFadeIn}
                onClick={() => handleNavigate(link.id)}
                className={`relative px-4 py-2 rounded-lg transition-[color,background-color,transform] duration-300 ${activeSection === link.id
                  ? 'text-white bg-[#26306a]'
                  : 'text-[#26306a] hover:bg-[#36e7f6]/10 hover:text-[#26306a]'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-[#f97600] rounded-full" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#26306a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            id="mobile-nav"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-[background-color,color] duration-300 ${activeSection === link.id
                    ? 'bg-[#36e7f6]/20 text-[#26306a] font-semibold'
                    : 'text-[#26306a] hover:bg-[#36e7f6]/10'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
