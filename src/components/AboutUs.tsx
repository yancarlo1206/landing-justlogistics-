// Sección "Sobre Nosotros": misión, visión y valores con diseño mejorado.
import { motion } from 'motion/react';
import { staggerContainer, effectiveFadeUp } from './ui/animations';
import { Target, Eye } from 'lucide-react';

export function AboutUs() {
  // Valores destacados con imágenes
  const values = [
    {
      image: '/assets/img/Valor_Integridad.jpg',
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en cada operación',
    },
    {
      image: '/assets/img/Valor_Sostenibilidad.jpg',
      title: 'Sostenibilidad',
      description: 'Comprometidos con prácticas logísticas responsables con el medio ambiente',
    },
    {
      image: '/assets/img/Valor_Innovación.jpg',
      title: 'Innovación',
      description: 'Implementamos tecnología de vanguardia en nuestros procesos',
    },
    {
      image: '/assets/img/Valor_EnfoqueBinacional.jpg',
      title: 'Enfoque Binacional',
      description: 'Especialización en operaciones entre Colombia y mercados internacionales',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#efeff1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <motion.div
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={effectiveFadeUp}
            className="text-[#26306a] mb-4 text-3xl sm:text-4xl lg:text-5xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Sobre Nosotros
          </motion.h2>
          <motion.div variants={effectiveFadeUp} className="w-24 h-1 bg-[#36e7f6] mx-auto"></motion.div>
        </motion.div>

        {/* Misión, Visión e Imagen en un solo card */}
        <motion.div
          variants={effectiveFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Mission & Vision */}
            <motion.div
              variants={staggerContainer(0.05, 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <motion.div variants={effectiveFadeUp}>
                <h3
                  className="text-[#26306a] mb-3 sm:mb-4 flex items-center text-lg sm:text-xl lg:text-2xl"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Target className="mr-2 sm:mr-3 text-[#36e7f6]" size={20} style={{ width: '20px', height: '20px', minWidth: '20px' }} />
                  Misión
                </h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Ofrecer soluciones logísticas integrales de clase mundial, optimizando la cadena
                  de suministro de nuestros clientes mediante servicios de transporte aéreo, marítimo,
                  terrestre y multimodal. Nos comprometemos a garantizar entregas seguras, oportunas
                  y eficientes, construyendo relaciones de largo plazo basadas en la confianza y la
                  excelencia operativa.
                </p>
              </motion.div>

              <motion.div variants={effectiveFadeUp}>
                <h3
                  className="text-[#26306a] mb-3 sm:mb-4 flex items-center text-lg sm:text-xl lg:text-2xl"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Eye className="mr-2 sm:mr-3 text-[#36e7f6]" size={20} style={{ width: '20px', height: '20px', minWidth: '20px' }} />
                  Visión
                </h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Ser reconocidos como la empresa líder en logística internacional en la región,
                  expandiendo nuestra red global y estableciendo nuevos estándares de calidad y
                  sostenibilidad en la industria del transporte. Aspiramos a convertirnos en el
                  socio estratégico preferido de empresas que buscan soluciones logísticas innovadoras
                  y confiables para su crecimiento internacional.
                </p>
              </motion.div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              variants={effectiveFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-64 sm:h-80 md:h-full lg:h-auto flex items-center justify-center"
            >
              <img
                src="https://i.postimg.cc/yYFj7CVk/kobu-agency-ggrbi6qu-XQU-unsplash-removebg-preview.png"
                alt="Team"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Valores con imágenes representativas */}
        <motion.div
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <motion.h3
            variants={effectiveFadeUp}
            className="text-[#26306a] text-center mb-16 sm:mb-20 lg:mb-24 text-2xl sm:text-3xl lg:text-4xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Nuestros Valores
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={effectiveFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-[#26306a] mb-3 text-lg sm:text-xl"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
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