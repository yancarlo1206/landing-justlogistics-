import { useState } from 'react';
import { motion } from 'motion/react';
import { effectiveFadeUp, staggerContainer } from './ui/animations';
import { Send } from 'lucide-react';
import locationIcon from '../assets/img/Icono ubicación turquesa.png';
import phoneIcon from '../assets/img/Icono telefono turquesa.png';
import mailIcon from '../assets/img/Icono correo turquesa.png';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    const { name, email, subject, message } = formData;
    const newErrors: Record<string, string> = {};

    if (!name || !name.trim()) newErrors.name = 'Nombre es obligatorio';

    if (!email || !email.trim()) {
      newErrors.email = 'Correo electrónico es obligatorio';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = 'Correo electrónico inválido';
    }

    if (!subject || !subject.trim()) newErrors.subject = 'Asunto es obligatorio';

    if (!message || !message.trim()) {
      newErrors.message = 'Mensaje es obligatorio';
    } else if (message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    // Si la validación pasa, el formulario se enviará automáticamente a FormSubmit
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={effectiveFadeUp}
            className="text-[#001F54] mb-4 text-3xl sm:text-4xl lg:text-5xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Contáctanos
          </motion.h2>
          <motion.div variants={effectiveFadeUp} className="w-24 h-1 bg-[#F8A23B] mx-auto"></motion.div>
          <motion.p variants={effectiveFadeUp} className="text-gray-600 mt-6 text-base sm:text-lg px-4 sm:px-0">
            Estamos aquí para ayudarte con tus necesidades logísticas
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={effectiveFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/customerservice@justlogistics.com.co"
              method="POST"
              className="space-y-6 bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="Nuevo mensaje desde Just International Logistics" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href + "?success=true"} />

              <div>
                <Label htmlFor="name" className="text-base">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6] h-12 text-base"
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-base">Correo Electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6] h-12 text-base"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="subject" className="text-base">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.subject}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6] h-12 text-base"
                  placeholder="Motivo de tu consulta"
                />
                {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-base">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6] min-h-[180px] text-base"
                  placeholder="Escribe tu mensaje aquí..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full text-white min-h-[52px] rounded-lg shadow-md transition-all duration-300 text-base sm:text-lg font-semibold custom-submit-btn"
              >
                <Send className="mr-2" size={20} style={{ width: '20px', height: '20px', minWidth: '20px' }} />
                Enviar Mensaje
              </Button>
              <style>{`
                .custom-submit-btn {
                  background-color: #89883d !important;
                }
                .custom-submit-btn:hover {
                  background-color: #36e7f6 !important;
                }
              `}</style>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={effectiveFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3
                className="text-[#001F54] mb-4 sm:mb-6 text-lg sm:text-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Información de Contacto
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2 rounded-lg flex-shrink-0">
                    <img src={locationIcon} alt="Ubicación" className="w-5 h-5 object-contain" style={{ width: '25px', height: '25px', minWidth: '25px' }} />
                  </div>
                  <div>
                    <h4 className="text-[#001F54] mb-1 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      Dirección
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      VTE La Floresta 39-131
                      <br />
                      Cúcuta - Norte de Santander Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2 rounded-lg flex-shrink-0">
                    <img src={phoneIcon} alt="Teléfono" className="w-5 h-5 object-contain" style={{ width: '25px', height: '25px', minWidth: '25px' }} />
                  </div>
                  <div>
                    <h4 className="text-[#001F54] mb-1 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      Teléfono
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">+57 302 404 3209</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2 rounded-lg flex-shrink-0">
                    <img src={mailIcon} alt="Correo" className="w-5 h-5 object-contain" style={{ width: '25px', height: '25px', minWidth: '25px' }} />
                  </div>
                  <div>
                    <h4 className="text-[#001F54] mb-1 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      Correo Electrónico
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">customerservice@justlogistics.com.co</p>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">gerencia.comercial@justlogistics.com.co</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#001F54] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-white">
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Horario de Atención
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p>Lunes a Viernes</p>
                <p>8:30 AM -12:30 PM <br />
                  2:30 PM - 5:30 PM
                </p>
                <p>Sábados y Domingos: Cerrado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
