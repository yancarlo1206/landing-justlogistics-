import { motion } from 'motion/react';
import { Plane, Truck, Ship, Package, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Plane,
      title: 'Carga Aérea',
      description:
        'Transporte aéreo internacional con tiempos de entrega optimizados. Ideal para mercancías de alto valor y urgentes.',
      color: '#f97600',
    },
    {
      icon: Truck,
      title: 'Carga Terrestre',
      description:
        'Soluciones terrestres nacionales e internacionales con flota propia y rastreo en tiempo real.',
      color: '#26306a',
    },
    {
      icon: Ship,
      title: 'Carga Marítima',
      description:
        'Envíos marítimos FCL y LCL a los principales puertos del mundo. Soluciones económicas para grandes volúmenes.',
      color: '#36e7f6',
    },
    {
      icon: Package,
      title: 'Carga Multimodal (OTM–DTA)',
      description:
        'Operador de Transporte Multimodal con servicio puerta a puerta. Combinamos todos los modos de transporte.',
      color: '#889983',
    },
    {
      icon: Rocket,
      title: 'Courier Internacional',
      description:
        'Envíos rápidos y seguros, garantizamos una gestión ágil, asesoría permanente y trazabilidad completa para que tus envíos lleguen a su destino sin contratiempos.',
      color: '#ef4444',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#efeff1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            className="text-[#26306a] mb-4 text-3xl sm:text-4xl lg:text-5xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-[#f97600] mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto px-4 sm:px-0 text-base sm:text-lg">
            Ofrecemos soluciones integrales de transporte y logística adaptadas a las necesidades
            específicas de tu negocio
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none p-6 sm:p-8">
                <CardHeader className="p-0 pb-6">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="text-white" size={36} />
                  </div>
                  <CardTitle
                    className="text-[#26306a] text-center text-xl sm:text-2xl px-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-600 text-base sm:text-lg leading-relaxed text-center px-2">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
