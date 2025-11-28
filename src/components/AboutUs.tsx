import { motion } from 'motion/react';
import { staggerContainer, effectiveFadeUp } from './ui/animations';
import { Target, Eye, Award, Globe } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Award,
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en cada operación',
    },
    {
      icon: Globe,
      title: 'Sostenibilidad',
      description: 'Comprometidos con prácticas logísticas responsables con el medio ambiente',
    },
    {
      icon: Target,
      title: 'Innovación',
      description: 'Implementamos tecnología de vanguardia en nuestros procesos',
    },
    {
      icon: Eye,
      title: 'Enfoque Binacional',
      description: 'Especialización en operaciones entre Colombia y mercados internacionales',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2
            variants={effectiveFadeUp}
            className="text-[#26306a] mb-4 text-2xl sm:text-3xl lg:text-4xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Sobre Nosotros
          </motion.h2>
          <motion.div variants={effectiveFadeUp} className="w-24 h-1 bg-[#f97600] mx-auto"></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
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
              <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base px-2 sm:px-0">
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
              <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                Ser reconocidos como la empresa líder en logística internacional en la región,
                expandiendo nuestra red global y estableciendo nuevos estándares de calidad y
                sostenibilidad en la industria del transporte. Aspiramos a convertirnos en el
                socio estratégico preferido de empresas que buscan soluciones logísticas innovadoras
                y confiables para su crecimiento internacional.
              </p>
            </motion.div>
          </motion.div>

          {/* Image - Sin efecto de parallax */}
          <motion.div
            variants={effectiveFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-auto"
          >
            <div className="w-full h-full">
              <img
                src="https://i.postimg.cc/yYFj7CVk/kobu-agency-ggrbi6qu-XQU-unsplash-removebg-preview.png"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>


        <motion.div
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={effectiveFadeUp}
            className="text-[#26306a] text-center mb-6 sm:mb-8 lg:mb-12 text-xl sm:text-2xl lg:text-3xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Nuestros Valores
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={effectiveFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="text-center p-4 sm:p-6 bg-[#efeff1] rounded-lg transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1.5 hover:shadow-xl pt-6 sm:pt-8"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#f97600] rounded-full mb-3 sm:mb-4">
                  <value.icon className="" size={36}  />
                </div>
                <h4 className="text-[#26306a] mb-2 sm:mb-3 text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {value.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}