import { motion } from 'motion/react';
import { Plane, Truck, Ship, Package } from 'lucide-react';
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
        'Soluciones terrestres nacionales e internacionales con flota propia y rastreo en tiempo real para máxima seguridad.',
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
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#efeff1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2
            className="text-[#26306a] mb-4 text-2xl sm:text-3xl lg:text-4xl"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-[#f97600] mx-auto"></div>
          <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
            Ofrecemos soluciones integrales de transporte y logística adaptadas a las necesidades
            específicas de tu negocio
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none p-4 sm:p-6">
                <CardHeader className="p-0 pb-3 sm:pb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="text-white" size={32} />
                  </div>
                  <CardTitle
                    className="text-[#26306a] text-center text-lg sm:text-xl lg:text-2xl"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
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