import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-white px-6 py-4 rounded-lg">
              <img
  src="https://i.postimg.cc/TPC0DVSN/Chat-GPT-Image-9-nov-2025-21-40-45-removebg-preview.png"
  alt="JIL Logo"
  className="h-10"
/>
            </div>
            </div>
            <p className="text-gray-300 text-sm">
              Just International Logistics - Soluciones de transporte y logística global para tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#F8A23B] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F8A23B] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#services" className="hover:text-[#F8A23B] transition-colors">Servicios</a></li>
              <li><a href="#tracking" className="hover:text-[#F8A23B] transition-colors">Tracking</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Carga Aérea</li>
              <li>Carga Marítima</li>
              <li>Carga Terrestre</li>
              <li>Carga Multimodal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Calle 123 #45-67, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+57 1 234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@jil-logistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Just International Logistics. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F8A23B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F8A23B] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F8A23B] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F8A23B] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
