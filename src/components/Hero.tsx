// Hero: sección principal con fondo, mensaje y CTA hacia tracking.
import { motion } from 'framer-motion';
import { staggerContainer, effectiveFadeUp } from './ui/animations';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import heroBg from '../assets/img/herooo.jpg';

interface HeroProps {
  onNavigateToTracking: () => void;
}

export function Hero({ onNavigateToTracking }: HeroProps) {
  // Abre el tracking en una nueva pestaña
  const onNavigateToTrackingUrl = () => {
    window.open("https://app.justlogistics.com.co", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo a pantalla completa */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Overlay con gradiente para mejor contraste y profundidad */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(38, 48, 106, 0.85) 0%, rgba(38, 48, 106, 0.75) 50%, rgba(54, 231, 246, 0.15) 100%)'
        }}
      />

      {/* Contenido centrado con animación */}
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl"
      >
        <motion.h1
          variants={effectiveFadeUp}
          className="mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: 'white',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
            lineHeight: 1.2
          }}
        >
          Movemos tu carga a donde desees
        </motion.h1>

        <motion.p
          variants={effectiveFadeUp}
          className="mb-6 tracking-wide"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#F8A23B',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          ATRAVESANDO FRONTERAS, ENTREGANDO RESULTADOS
        </motion.p>

        <motion.p
          variants={effectiveFadeUp}
          className="mb-10"
          style={{
            color: 'white',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 400,
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6
          }}
        >
          Cobertura internacional con presencia en América, Europa y Asia.
          Soluciones logísticas integrales para tu negocio.
        </motion.p>

        <motion.div variants={effectiveFadeUp}>
          <Button
            onClick={onNavigateToTrackingUrl}
            className="hero-cta-button group"
          >
            Rastrea tu envío
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Button>
        </motion.div>
      </motion.div>

      {/* Estilos para el botón CTA */}
      <style>{`
        .hero-cta-button {
          background: linear-gradient(135deg, #f97600 0%, #e86a00 100%);
          color: white;
          padding: 1.25rem 2.5rem;
          min-height: 52px;
          border: none;
          border-radius: 0.75rem;
          box-shadow: 0 8px 20px rgba(249, 118, 0, 0.35), 0 4px 8px rgba(0, 0, 0, 0.2);
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          will-change: transform;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid transparent;
          letter-spacing: 0.3px;
        }

        .hero-cta-button:hover {
          background: linear-gradient(135deg, #36e7f6 0%, #2ac9d9 100%);
          box-shadow: 0 12px 28px rgba(54, 231, 246, 0.4), 0 6px 12px rgba(0, 0, 0, 0.2);
          transform: translateY(-3px);
          border-color: #36e7f6;
        }

        .hero-cta-button:active {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(54, 231, 246, 0.3);
        }

        @media (max-width: 640px) {
          .hero-cta-button {
            padding: 1rem 2rem;
            font-size: 1rem;
            min-height: 48px;
          }
        }
      `}</style>
    </section>
  );
}