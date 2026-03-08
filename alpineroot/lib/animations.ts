import type { Variants } from 'framer-motion';

// ── Section entrance — whole section fades + rises ──────────────────
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Staggered children container ─────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// ── Individual stagger child ─────────────────────────────────────────
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Card hover lift (Framer Motion animate prop, not variants) ────────
export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 24px rgba(22,35,43,0.10)' },
  hover: {
    y: -6,
    boxShadow: '0 12px 40px rgba(22,35,43,0.18)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
};

// ── Number counter reveal (Why Choose Us stats) ───────────────────────
export const numberReveal: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

// ── Horizontal slide variants ─────────────────────────────────────────
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── FAQ/Accordion content expand ─────────────────────────────────────
export const accordionContent: Variants = {
  closed: { height: 0, opacity: 0, overflow: 'hidden' },
  open: {
    height: 'auto',
    opacity: 1,
    overflow: 'hidden',
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Tab content swap (Process & FAQs) ────────────────────────────────
export const tabContentEnter: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  exit: { opacity: 0, x: -30, transition: { duration: 0.2 } },
};

// ── Hero entrance animations (page load, NOT scroll-triggered) ────────
export const heroH1Word: (index: number) => object = (i) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
});

export const heroH2Variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroFormVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 200,
      damping: 22,
    },
  },
};

export const heroTrustBadge: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.0, duration: 0.4 },
  },
};

// ── Portfolio filter card animation ──────────────────────────────────
export const portfolioCard: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
};
