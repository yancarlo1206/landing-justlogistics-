import { motion } from 'motion/react';
import { staggerContainer, effectiveFadeUp } from './ui/animations';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onNavigateToTracking: () => void;
}

export function Hero({ onNavigateToTracking }: HeroProps) {
  const onNavigateToTrackingUrl = () => {
  window.open("https://app.justlogistics.com.co", "_blank");
};
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.postimg.cc/wMFMgkB9/baner.png')`,
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#26306a] opacity-75"></div>

      {/* Content */}
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <motion.h1
          variants={effectiveFadeUp}
          className="text-white mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          Movemos tu carga a donde desees
        </motion.h1>

        <motion.p
          variants={effectiveFadeUp}
          className="text-white text-xl mb-8 opacity-90"
        >
          Cobertura internacional con presencia en América, Europa y Asia.
          Soluciones logísticas integrales para tu negocio.
        </motion.p>

        <motion.div variants={effectiveFadeUp}>
          <Button onClick={onNavigateToTrackingUrl} className="boton-verde">
            Rastrea tu envío
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </motion.div>


      <style>{`
        .boton-verde {
          background-color: #f97600; 
          color: white;
          padding: 1.5rem 2rem;
          border: none;
          border-radius: 0.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          will-change: transform;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .boton-verde:hover {
          background-color: #36e7f6; 
          box-shadow: 0 6px 20px rgba(54, 231, 246, 0.3);
        }

        .boton-verde:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
}
