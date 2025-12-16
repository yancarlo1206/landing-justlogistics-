import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';
import { Button } from './ui/button';
import * as RSM from 'react-simple-maps';

// ---------- TIPOS ----------
interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [lon, lat]
}
interface MapSectionProps {
  isFullPage?: boolean;
}

// ---------- DATOS ----------
const DEFAULT_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'México',
    description:
      '⚓ Puertos: Manzanillo, Lázaro Cárdenas, Veracruz.\n' +
      '✈️ Aeropuertos: Felipe Ángeles (AIFA), Aeropuerto CDMX.',
    coordinates: [-99.1332, 19.4326],
  },
  {
    id: '2',
    name: 'España',
    description:
      '⚓ Puertos: Valencia, Bahía de Algeciras, Barcelona.\n' +
      '✈️ Aeropuertos: Madrid-Barajas, Barcelona-El Prat.',
    coordinates: [-3.7038, 40.4168],
  },
  {
    id: '3',
    name: 'Venezuela',
    description:
      '⚓ Puertos: Puerto Cabello, La Guaira, Maracaibo.\n' +
      '✈️ Aeropuertos: Simón Bolívar, La Chinita.',
    coordinates: [-66.9036, 10.4806],
  },
  {
    id: '4',
    name: 'Brasil',
    description:
      '⚓ Puertos: Puerto de Santos, Paranaguá, Rio Grande.\n' +
      '✈️ Aeropuertos: São Paulo/Guarulhos, Campinas/Viracopos.',
    coordinates: [-47.8825, -15.7942],
  },
  {
    id: '5',
    name: 'India',
    description:
      '⚓ Puertos: Jawaharlal Nehru, Mundra, Chennai.\n' +
      '✈️ Aeropuertos: Indira Gandhi, Chhatrapati Shivaji.',
    coordinates: [77.209, 28.6139],
  },
  {
    id: '6',
    name: 'China',
    description:
      '⚓ Puertos: Shanghái, Shenzhen, Ningbo-Zhoushan.\n' +
      '✈️ Aeropuertos: Shanghái Pudong, Hong Kong.',
    coordinates: [116.4074, 39.9042],
  },
  {
    id: '7',
    name: 'Ecuador',
    description:
      '⚓ Puertos: Guayaquil, Bolívar, Manta.\n' +
      '✈️ Aeropuertos: Mariscal Sucre, José Joaquín de Olmedo.',
    coordinates: [-78.4678, -0.1807],
  },
  {
    id: '8',
    name: 'Panamá',
    description:
      '⚓ Puertos: Balboa, Manzanillo, Cristóbal.\n' +
      '✈️ Aeropuertos: Tocumen, Panamá.',
    coordinates: [-79.5199, 8.9824],
  },
  {
    id: '9',
    name: 'Bélgica',
    description:
      '⚓ Puertos: Amberes-Brujas, Gante, Zeebrugge.\n' +
      '✈️ Aeropuertos: Bruselas, Lieja.',
    coordinates: [4.3517, 50.8503],
  },
  {
    id: '10',
    name: 'Alemania',
    description:
      '⚓ Puertos: Hamburgo, Bremerhaven, Bremen.\n' +
      '✈️ Aeropuertos: Fráncfort, Colonia/Bonn, Leipzig/Halle.',
    coordinates: [13.405, 52.52],
  },
  {
    id: '11',
    name: 'Polonia',
    description:
      '⚓ Puertos: Gdańsk, Gdynia, Szczecin-Świnoujście.\n' +
      '✈️ Aeropuertos: Chopin, Cracovia-Juan Pablo II.',
    coordinates: [21.0122, 52.2297],
  },
  {
    id: '12',
    name: 'Irlanda',
    description:
      '⚓ Puertos: Dublín, Cork, Belfast.\n' +
      '✈️ Aeropuertos: Dublín, Shannon.',
    coordinates: [-6.2603, 53.3498],
  },
  {
    id: '13',
    name: 'Rumania',
    description:
      '⚓ Puertos: Constanța, Galați, Brăila.\n' +
      '✈️ Aeropuertos: Henri Coandă, Avram Iancu.',
    coordinates: [26.1025, 44.4268],
  },
  {
    id: '14',
    name: 'Serbia',
    description:
      '⚓ Puertos: Belgrado, Novi Sad, Sremska Mitrovica.\n' +
      '✈️ Aeropuertos: Nikola Tesla, Constantino el Grande de Niš.',
    coordinates: [20.4489, 44.7866],
  },
  {
    id: '15',
    name: 'Chile',
    description:
      '⚓ Puertos: San Antonio, Valparaíso, Complejo Portuario Biobío.\n' +
      '✈️ Aeropuertos: Arturo Merino Benítez, Diego Aracena.',
    coordinates: [-70.6693, -33.4489],
  },
  {
    id: '16',
    name: 'Colombia',
    description:
      '⚓ Puertos: Cartagena, Buenaventura, Santa Marta.\n' +
      '✈️ Aeropuertos: El Dorado, José María Córdova.',
    coordinates: [-74.0721, 4.6097],
  },
  {
    id: '17',
    name: 'Estados Unidos',
    description:
      '⚓ Puertos: Los Ángeles, Long Beach, Nueva York–New Jersey.\n' +
      '✈️ Aeropuertos: JFK, Miami, Los Ángeles (LAX).',
    coordinates: [-95.7129, 37.0902],
  },
];

// ---------- COMPONENTE ----------
export function MapSection({ isFullPage = false }: MapSectionProps) {
  const [zoom, setZoom] = useState(1);
  const [center] = useState<[number, number]>([-30, 15]);
  const [selected, setSelected] = useState<Location | null>(null);
  const [expanded, setExpanded] = useState(false);

  const [locations] = useState<Location[]>(DEFAULT_LOCATIONS);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.3, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.3, 0.8));

  return (
    <>
      <section
        id="map"
        className={`${isFullPage ? 'py-20 lg:py-28' : 'py-16 lg:py-20'} bg-gradient-to-b from-slate-50 to-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26306a] mb-4 px-2">
              Nuestra Red Global
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f97600] to-[#f97600] mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
              Cobertura logística mundial y principales rutas operativas.
            </p>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative bg-white/70 backdrop-blur rounded-2xl shadow-xl border border-gray-200 overflow-hidden
              ${expanded ? 'fixed inset-4 z-50' : ''}
              ${isFullPage ? 'h-[400px] sm:h-[500px] lg:h-[600px]' : 'h-[400px] sm:h-[500px] lg:h-[700px]'}`}
          >
            {/* Controles */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <Button onClick={zoomIn} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md h-11 w-11">
                <ZoomIn size={20} />
              </Button>
              <Button onClick={zoomOut} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md h-11 w-11">
                <ZoomOut size={20} />
              </Button>
              {!expanded && (
                <Button onClick={() => setExpanded(true)} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md h-11 w-11">
                  <Maximize2 size={20} />
                </Button>
              )}
              {expanded && (
                <Button onClick={() => setExpanded(false)} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md h-11 w-11">
                  <X size={20} />
                </Button>
              )}
            </div>

            {/* MAPA */}
            <div className="w-full h-full">
              <RSM.ComposableMap projection="geoMercator" projectionConfig={{ scale: expanded ? 200 : 160 }} width={1000} height={500}>
                <RSM.ZoomableGroup zoom={zoom} center={center} minZoom={0.8} maxZoom={3}>
                  <RSM.Sphere fill="#FFFFFF" stroke="#E5E7EB" strokeWidth={0.5} />
                  <RSM.Graticule stroke="#F3F4F6" strokeWidth={0.3} />

                  <RSM.Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }: { geographies: any[] }) =>
                      geographies.map((geo) => (
                        <RSM.Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#D1D5DB"
                          stroke="#9CA3AF"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: 'none' },
                            hover: { fill: '#10B981', outline: 'none' },
                            pressed: { fill: '#059669', outline: 'none' },
                          }}
                        />
                      ))
                    }
                  </RSM.Geographies>

                  {locations.map((loc, i) => {
                    const lines = loc.description.split('\n');
                    const tooltipWidth = 400;
                    const titleHeight = 25;
                    const lineHeight = 20;
                    const padding = 20;
                    const tooltipHeight = titleHeight + (lines.length * lineHeight) + padding;

                    return (
                      <RSM.Marker key={loc.id} coordinates={loc.coordinates}>
                        <motion.g
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: 1,
                            opacity: selected && selected.id !== loc.id ? 0.3 : 1,
                          }}
                          transition={{
                            delay: 0.3 + i * 0.1,
                            type: 'spring',
                            opacity: { duration: 0.2 },
                          }}
                          onMouseEnter={() => setSelected(loc)}
                          onMouseLeave={() => setSelected(null)}
                          className="cursor-pointer"
                        >
                          <circle r={18} fill="rgba(54, 231, 246, 0.2)" />
                          <circle r={28} fill="none" stroke="rgba(54, 231, 246, 0.4)" strokeWidth={2} />

                          <g transform="translate(-10,-28)">
                            <path
                              d="M10 0C4.5 0 0 4.5 0 10c0 10 10 22 10 22s10-12 10-22c0-5.5-4.5-10-10-10z"
                              fill="#36e7f6"
                              stroke="#fff"
                              strokeWidth={2}
                            />
                            <circle cx={10} cy={10} r={4} fill="#26306a" />
                          </g>

                          <AnimatePresence>
                            {selected?.id === loc.id && (
                              <motion.g
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <rect x={12} y={-tooltipHeight - 18} width={tooltipWidth} height={tooltipHeight} rx={8} fill="rgba(255, 255, 255, 0.95)" stroke="#36e7f6" strokeWidth={2} className="shadow-lg" />
                                <text x={28} y={-tooltipHeight + 10} className="font-bold text-[15px] fill-[#26306a]">
                                  {loc.name}
                                </text>

                                <text x={28} y={-tooltipHeight + 35} className="text-[13px] fill-gray-700 font-medium">
                                  {lines.map((line, idx) => (
                                    <tspan key={idx} x={28} dy={idx === 0 ? 0 : 20}>
                                      {line}
                                    </tspan>
                                  ))}
                                </text>
                              </motion.g>
                            )}
                          </AnimatePresence>
                        </motion.g>
                      </RSM.Marker>
                    );
                  })}
                </RSM.ZoomableGroup>
              </RSM.ComposableMap>
            </div>
          </motion.div>

          {/* Leyenda */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex justify-center gap-4 text-xs text-gray-600"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="text-[#36e7f6]" size={16} />
              <span>Ubicaciones operativas</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
