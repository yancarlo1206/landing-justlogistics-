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
  ];

  const containers = [
    { name: 'Dryvan', img: 'assets/img/Dry van.png' },
    { name: 'Reefer', img: 'assets/img/reefer.png' },
    { name: 'Tanque Cisterna', img: 'assets/img/Tank.png' },
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

        {/* Sección de Tipos de Contenedor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <h3
            className="text-[#26306a] text-center mb-10 sm:mb-12 lg:mb-16 text-3xl sm:text-4xl lg:text-5xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Tipo de Contenedor
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-12 px-4">
            {containers.map((container, index) => (
              <motion.div
                key={container.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-1 max-w-sm bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 border-2 border-gray-100 cursor-pointer min-h-[280px] sm:min-h-[300px] flex flex-col items-center justify-center"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={container.img}
                    alt={container.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain mb-6"
                  />
                  <p
                    className="text-[#26306a] text-center text-lg sm:text-xl lg:text-2xl px-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {container.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
