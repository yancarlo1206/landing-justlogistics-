// Pie de página con enlaces rápidos, servicios y contacto.
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import locationIcon from '../assets/img/Icono ubicación turquesa.png';
import phoneIcon from '../assets/img/Icono telefono turquesa.png';
import mailIcon from '../assets/img/Icono correo turquesa.png';

// Logo local usado en el footer
const logoHorizontal = new URL(
  '../assets/img/Logotipo Horizontal Blanco.png',
  import.meta.url
).href;

export function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-white rounded-lg">
                <img
                  src={logoHorizontal}
                  alt="JIL Logo"
                  className="h-12 sm:h-14"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Just International Logistics - Soluciones de transporte y logística global para tu negocio.
            </p>
          </div>

          {/* Enlaces rápidos a secciones */}
          <div>
            <h4 className="mb-6 text-lg sm:text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li><a href="#home" className="hover:text-[#F8A23B] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F8A23B] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#statistics" className="hover:text-[#F8A23B] transition-colors">Cifras</a></li>
              <li><a href="#services" className="hover:text-[#F8A23B] transition-colors">Servicios</a></li>
              <li><a href="https://app.justlogistics.com.co" target="_blank" className="hover:text-[#F8A23B] transition-colors">Tracking</a></li>
              <li><a href="#brands" className="hover:text-[#F8A23B] transition-colors">Aliados</a></li>
              <li><a href="#contact" className="hover:text-[#F8A23B] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios destacados */}
          <div>
            <h4 className="mb-6 text-lg sm:text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Servicios
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li>Carga Aérea</li>
              <li>Carga Marítima</li>
              <li>Carga Terrestre</li>
              <li>Carga Multimodal</li>
            </ul>
          </div>

          {/* Datos de contacto */}
          <div>
            <h4 className="mb-6 text-lg sm:text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Contacto
            </h4>
            <ul className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <li className="flex items-start space-x-3">
                <div className="p-2 rounded-lg flex-shrink-0">
                  <img src={locationIcon} alt="Ubicación" className="w-5 h-5 object-contain" style={{ width: '25px', height: '25px', minWidth: '25px' }} />
                </div>
                <span className="mt-1">VTE La Floresta 39-131, Cúcuta - Norte de Santander Colombia</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-lg flex-shrink-0">
                  <img src={phoneIcon} alt="Teléfono" className="w-5 h-5 object-contain" style={{ width: '25px', height: '25px', minWidth: '25px' }} />
                </div>
                <a
                  href="https://wa.me/573024043209?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20de%20logística"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F8A23B] transition-colors"
                >
                  +57 302 404 3209
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-lg flex-shrink-0">
                  <img src={mailIcon} alt="Correo" className="w-5 h-5 object-contain" style={{ width: '25px', height: '25px', minWidth: '25px' }} />
                </div>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:customerservice@justlogistics.com.co" className="hover:text-[#F8A23B] transition-colors break-all">customerservice@justlogistics.com.co</a>
                  <a href="mailto:gerencia.comercial@justlogistics.com.co" className="hover:text-[#F8A23B] transition-colors break-all">gerencia.comercial@justlogistics.com.co</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-sm sm:text-base text-gray-400 text-center md:text-left">
              © 2025 Just International Logistics. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1GZqT9XM6D/" className="text-gray-400 hover:text-[#F8A23B] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/just_international_logistics/" className="text-gray-400 hover:text-[#F8A23B] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/just-international-logistics/" className="text-gray-400 hover:text-[#F8A23B] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
