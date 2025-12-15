import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { effectiveFadeUp } from './ui/animations';
import ascensoIcon from '../assets/img/Icono ascenso turquesa.png';
import recargaIcon from '../assets/img/Icono recarga turquesa.png';
import barcoIcon from '../assets/img/Icono barco turquesa.png';
import cajaIcon from '../assets/img/Icono caja turquesa.png';
import avionIcon from '../assets/img/Icono avion turquesa.png';

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, {
        damping: 20,
        stiffness: 120,
        duration: 1
    });

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Format the number to remove decimal places if it's an integer target
                const formatted = Math.floor(latest).toLocaleString();
                ref.current.textContent = `${prefix}${formatted}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, prefix, suffix]);

    return <span ref={ref} className="tabular-nums" />;
}

export function Statistics() {
    const stats = [
        {
            icon: ascensoIcon,
            value: 8,
            prefix: '+',
            suffix: '',
            label: 'Años de Experiencia',
        },
        {
            icon: recargaIcon,
            value: 80,
            prefix: '+',
            label: 'Operaciones Realizadas',
        },
        {
            icon: barcoIcon,
            value: 150,
            prefix: '+',
            label: 'Contenedores',
        },
        {
            icon: cajaIcon,
            value: 800,
            prefix: '+',
            label: 'Carga Movilizada',
        },
        {
            icon: avionIcon,
            value: 2500,
            prefix: '+',
            label: 'Kg Aéreos',
        },
    ];

    return (
        <section className="py-12 sm:py-16 bg-[#26306a] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2
                        className="!text-[#36e7f6] mb-4 text-3xl sm:text-4xl"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                        Nuestras Cifras
                    </h2>
                    <div className="w-20 h-1 bg-[#36e7f6] mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-center gap-8 text-center"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={effectiveFadeUp}
                            whileHover={{
                                scale: 1.08,
                                translateY: -15,
                                transition: { type: "spring", stiffness: 400, damping: 15 }
                            }}
                            className="flex flex-col items-center group relative p-6 w-full md:w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="mb-4 p-4 rounded-full bg-[#36e7f6]/10 group-hover:bg-[#36e7f6]/20 transition-colors duration-300"
                            >
                                <img
                                    src={stat.icon}
                                    alt={stat.label}
                                    className="object-contain"
                                    style={{ width: '48px', height: '48px' }}
                                />
                            </motion.div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-2 !text-[#F8A23B] tracking-tight flex items-center justify-center gap-1">
                                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </h3>
                            <p className="text-base !text-[#26306a] font-bold uppercase tracking-wider leading-snug">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
