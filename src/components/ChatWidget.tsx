import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hola, necesito información sobre servicios logísticos o cotización"
    );
    window.open(`https://wa.me/5730240432009?text=${msg}`, "_blank", "noopener");
  };

  return (
    <>
      <motion.button
  animate={{
    boxShadow: [
      "0 0 0px rgba(0,86,166,0.6)",
      "0 0 12px 2px rgba(0,86,166,0.6)",
      "0 0 0px rgba(0,86,166,0.6)",
    ],
  }}
  transition={{
    repeat: Infinity,
    duration: 2.5,
    ease: "easeInOut",
  }}
  onClick={() => setIsOpen((o) => !o)}
  className="fixed bottom-6 right-6 z-50 bg-[#0056A6] hover:bg-[#004080] text-white p-4 rounded-full shadow-lg"
  aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
>
  {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
</motion.button>


      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0056A6] text-white">
              <div className="flex items-center space-x-3">
                <div className="bg-blue px-3 py-2 rounded-lg flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/TPC0DVSN/Chat-GPT-Image-9-nov-2025-21-40-45-removebg-preview.png"
                    alt="JIL Logo"
                    className="h-8 w-auto"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Asistente Virtual</h3>
                  <p className="text-xs text-green-200">En línea</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <X size={18} />
              </button>
            </div>

            {/* Mensaje de bienvenida */}
            <div className="p-4 bg-gray-50 text-gray-700 text-sm leading-relaxed space-y-2 overflow-y-auto max-h-[60vh]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                👋 <strong>Hola, buen día.</strong>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Soy la asesora de logística de{" "}
                <strong>Just International Logistics</strong>, y estoy aquí para
                ayudarte con cualquier consulta o cotización que necesites.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Con gusto te brindaré toda la información relacionada con nuestros servicios,
                envíos y seguimiento de carga.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-2"
              >
                🚚 Da clic en el botón <strong>“Iniciar chat en WhatsApp”</strong> y con gusto te atenderemos de inmediato.
              </motion.p>
            </div>

            {/* Botón WhatsApp */}
            <div className="p-4 border-t bg-white flex justify-center">
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0px #25D366",
                    "0 0 10px #25D366",
                    "0 0 0px #25D366",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-3 rounded-lg font-semibold"
              >
                <Phone size={18} />
                Iniciar chat en WhatsApp
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
