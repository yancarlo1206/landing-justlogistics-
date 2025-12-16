import { motion } from 'framer-motion';
import { effectiveFadeUp } from './ui/animations';
import frontierLogo from '../assets/img/Frontier logo.jpeg';

export function AlliedBrands() {
    // Array with Frontier logo and placeholders for future partners
    const brands = [
        {
            name: 'Frontier',
            logo: frontierLogo,
        },
        // Descomentar y agregar logos reales cuando estén disponibles:
        // { name: 'Aliado 2', logo: null },
        // { name: 'Aliado 3', logo: null },
        // { name: 'Aliado 4', logo: null },
        // { name: 'Aliado 5', logo: null },
        // { name: 'Aliado 6', logo: null },
        // { name: 'Aliado 7', logo: null },
        // { name: 'Aliado 8', logo: null },
    ];

    return (
        <section id="brands" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={effectiveFadeUp}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-[#26306a] mb-4 text-2xl sm:text-3xl lg:text-4xl"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                        Marcas Aliadas
                    </h2>
                    <div className="w-20 h-1 bg-[#36e7f6] mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="flex flex-wrap justify-center gap-8 items-center"
                >
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            variants={effectiveFadeUp}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-40 h-32 sm:w-60 sm:h-40 border border-gray-100"
                        >
                            {brand.logo ? (
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            ) : (
                                <div className="text-center">
                                    <span className="block text-4xl font-bold text-gray-200 mb-2">?</span>
                                    <span className="text-xs text-gray-400">{brand.name}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
