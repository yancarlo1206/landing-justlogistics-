import { useState } from 'react';
import { motion } from 'motion/react';
import { effectiveFadeUp, staggerContainer } from './ui/animations';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import Swal from "sweetalert2";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { AnimatePresence } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      setErrors(newErrors);
      return;
    }
// Validación pasada. Aquí puedes enviar los datos a tu API con fetch/axios.
    setErrors({});
     Swal.fire({
      title: "¡Éxito!",
      text: "Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.",
      icon: "success",
      background: "#f3f3f3",
      confirmButtonColor: "#0056a6",
    });
    setFormData({ name: '', email: '', subject: '', message: '' })
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2
            variants={effectiveFadeUp}
            className="text-[#001F54] mb-4 text-2xl sm:text-3xl lg:text-4xl px-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Contáctanos
          </motion.h2>
          <motion.div variants={effectiveFadeUp} className="w-24 h-1 bg-[#F8A23B] mx-auto"></motion.div>
          <motion.p variants={effectiveFadeUp} className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base px-4 sm:px-0">
            Estamos aquí para ayudarte con tus necesidades logísticas
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={effectiveFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6]"
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6]"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.subject}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6]"
                  placeholder="Motivo de tu consulta"
                />
                {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  className="mt-2 rounded-lg border-gray-300 focus:border-[#36e7f6] focus:ring-[#36e7f6] min-h-[150px]"
                  placeholder="Escribe tu mensaje aquí..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0056A6] hover:bg-[#004080] text-white py-4 sm:py-6 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base"
              >
                <Send className="mr-2" size={18} style={{ width: '18px', height: '18px', minWidth: '18px' }} />
                Enviar Mensaje
              </Button>
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
                  <div className="bg-[#0056A6] p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-white" size={20} style={{ width: '20px', height: '20px', minWidth: '20px' }} />
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
                  <div className="bg-[#0056A6] p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-white" size={20} style={{ width: '20px', height: '20px', minWidth: '20px' }} />
                  </div>
                  <div>
                    <h4 className="text-[#001F54] mb-1 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      Teléfono
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">+57 302 404 3209</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#0056A6] p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-white" size={20} style={{ width: '20px', height: '20px', minWidth: '20px' }} />
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

            <div className="bg-[#0056A6] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-white">
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

      {/* Alert Dialog */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AnimatePresence>
          {showAlert && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AlertDialogContent asChild className="rounded-xl">
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <AlertDialogHeader>
                    <AlertDialogTitle
                      className={alertType === 'success' ? 'text-green-600' : 'text-red-600'}
                    >
                      {alertType === 'success' ? '¡Éxito!' : 'Error'}
                    </AlertDialogTitle>
                    <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button
                      onClick={() => setShowAlert(false)}
                      className={`rounded-lg ${alertType === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-red-600 hover:bg-red-700'
                        }`}
                    >
                      Cerrar
                    </Button>
                  </AlertDialogFooter>
                </motion.div>
              </AlertDialogContent>
            </motion.div>
          )}
        </AnimatePresence>
      </AlertDialog>
    </section>
  );
}
