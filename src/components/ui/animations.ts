export const EASING = [0.25, 0.9, 0.3, 1] as const;

// Reduced motion flag (read once on import). Consumers can switch to *RM variants if needed.
const prefersReduced = typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Default variants (gentle and consistent)
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASING } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASING } },
};

export const fadeUpRM = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.001 } },
};

export const fadeInRM = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.001 } },
};

export const effectiveFadeUp = prefersReduced ? fadeUpRM : fadeUp;
export const effectiveFadeIn = prefersReduced ? fadeInRM : fadeIn;

export const staggerContainer = (delay: number = 0.08, stagger: number = 0.06) => ({
  hidden: {},
  show: {
    transition: prefersReduced
      ? { delayChildren: 0, staggerChildren: 0 }
      : { delayChildren: delay, staggerChildren: stagger },
  },
});
