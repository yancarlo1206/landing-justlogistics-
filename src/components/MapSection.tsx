import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';
import { Button } from './ui/button';
import * as RSM from 'react-simple-maps';
import { geoMercator } from 'd3-geo';

// ---------- TIPOS ----------
interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [lon, lat]
}
interface Route {
  from: Location;
  to: Location;
}
interface MapSectionProps {
  isFullPage?: boolean;
}

// ---------- DATOS DE EJEMPLO ----------
const DEFAULT_LOCATIONS: Location[] = [
  { id: '1', name: 'México', description: 'Hub América del Norte', coordinates: [-99.1332, 19.4326] },
  { id: '2', name: 'España', description: 'Hub Europa', coordinates: [-3.7038, 40.4168] },
  { id: '3', name: 'Venezuela', description: 'Hub Sudamérica Norte', coordinates: [-66.9036, 10.4806] },
  { id: '4', name: 'Brasil', description: 'Hub Sudamérica', coordinates: [-47.8825, -15.7942] },
];

const DEFAULT_ROUTES: Route[] = [
  { from: DEFAULT_LOCATIONS[0], to: DEFAULT_LOCATIONS[1] },
  { from: DEFAULT_LOCATIONS[1], to: DEFAULT_LOCATIONS[2] },
  { from: DEFAULT_LOCATIONS[2], to: DEFAULT_LOCATIONS[3] },
  { from: DEFAULT_LOCATIONS[3], to: DEFAULT_LOCATIONS[0] },
];

// ---------- COMPONENTE ----------
export function MapSection({ isFullPage = false }: MapSectionProps) {
  const [zoom, setZoom] = useState(1);
  const [center] = useState<[number, number]>([-30, 15]);
  const [selected, setSelected] = useState<Location | null>(null);
  const [expanded, setExpanded] = useState(false);

  // Usa los datos por defecto directamente
  const [locations] = useState<Location[]>(DEFAULT_LOCATIONS);
  const [routes] = useState<Route[]>(DEFAULT_ROUTES);

  // Controles de zoom
  const zoomIn = () => setZoom((z) => Math.min(z + 0.3, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.3, 0.8));

  // Proyección de coordenadas geográficas a píxeles
  function project(coord: [number, number]): [number, number] {
    const proj = geoMercator()
      .scale(800)
      .translate([0, 0])
      .center([-30, 15]);
    return proj(coord) || [0, 0];
  }

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
            {/* Botones de control */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <Button onClick={zoomIn} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md min-h-[44px] min-w-[44px] h-11 w-11">
                <ZoomIn size={20} />
              </Button>
              <Button onClick={zoomOut} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md min-h-[44px] min-w-[44px] h-11 w-11">
                <ZoomOut size={20} />
              </Button>
              {!expanded && (
                <Button onClick={() => setExpanded(true)} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md min-h-[44px] min-w-[44px] h-11 w-11">
                  <Maximize2 size={20} />
                </Button>
              )}
              {expanded && (
                <Button onClick={() => setExpanded(false)} size="sm" className="bg-white/90 text-[#36e7f6] hover:bg-white shadow-md min-h-[44px] min-w-[44px] h-11 w-11">
                  <X size={20} />
                </Button>
              )}
            </div>

            {/* Mapa */}
            <div className="w-full h-full">
              <RSM.ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: expanded ? 200 : 160 }}
                width={1000}
                height={500}
              >
                <RSM.ZoomableGroup zoom={zoom} center={center} minZoom={0.8} maxZoom={3}>
                  <RSM.Sphere id="sphere" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth={0.5} />
                  <RSM.Graticule stroke="#F3F4F6" strokeWidth={0.3} />
                  <RSM.Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }) =>
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

                  {/* Rutas animadas */}
                  {routes.map((r, i) => {
                    const [x1, y1] = project(r.from.coordinates);
                    const [x2, y2] = project(r.to.coordinates);
                    return (
                      <motion.line
                        key={`route-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#f97600"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeDasharray="8 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.15 }}
                      />
                    );
                  })}

                  {/* Marcadores con color turquesa */}
                  {locations.map((loc, i) => {
                    const nameLength = loc.name.length;
                    const descLength = loc.description.length;
                    const maxLength = Math.max(nameLength, descLength);
                    const tooltipWidth = Math.max(140, maxLength * 8 + 40);

                    return (
                      <RSM.Marker key={loc.id} coordinates={loc.coordinates}>
                        <motion.g
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: 1,
                            opacity: selected && selected.id !== loc.id ? 0.3 : 1
                          }}
                          transition={{
                            delay: 0.3 + i * 0.1,
                            type: 'spring',
                            opacity: { duration: 0.2 }
                          }}
                          onMouseEnter={() => setSelected(loc)}
                          onMouseLeave={() => setSelected(null)}
                          className="cursor-pointer"
                        >
                          {/* Círculos de fondo más grandes */}
                          <circle r={18} fill="rgba(54, 231, 246, 0.2)" />
                          <circle r={28} fill="none" stroke="rgba(54, 231, 246, 0.4)" strokeWidth={2} />

                          {/* Pin del marcador */}
                          <g transform="translate(-10,-28)">
                            <path
                              d="M10 0C4.5 0 0 4.5 0 10c0 10 10 22 10 22s10-12 10-22c0-5.5-4.5-10-10-10z"
                              fill="#36e7f6"
                              stroke="#fff"
                              strokeWidth={2}
                            />
                            <circle cx={10} cy={10} r={4} fill="#26306a" />
                          </g>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {selected?.id === loc.id && (
                              <motion.g
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <rect x={12} y={-48} width={tooltipWidth} height={52} rx={8} fill="rgba(0,0,0,0.1)" />
                                <rect x={10} y={-50} width={tooltipWidth} height={52} rx={8} fill="#fff" stroke="#36e7f6" strokeWidth={2} />
                                <text x={20} y={-30} className="font-bold text-[14px] fill-[#26306a]">{loc.name}</text>
                                <text x={20} y={-14} className="text-[12px] fill-gray-700">{loc.description}</text>
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

          {/* Leyenda compacta */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="text-[#36e7f6]" size={16} />
              <span>Ubicaciones operativas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width={28} height={6}>
                <line x1={0} y1={3} x2={28} y2={3} stroke="#f97600" strokeWidth={2.5} strokeDasharray="6 3" strokeLinecap="round" />
              </svg>
              <span>Rutas principales</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}