// ── Section colour token maps ─────────────────────────────────────────
// Used by all section components to apply correct light/dark styling.

export const SECTION = {
  light: {
    section: 'bg-mist',
    heading: 'text-navy font-display',
    h2: 'text-navy',
    h3: 'text-navy',
    body: 'text-teal',
    label: 'text-teal tracking-[0.12em] uppercase text-xs font-semibold',
    card: 'bg-white border border-mist-dark',
    cardHover: 'hover:border-teal hover:shadow-hover',
    accentBar: 'border-l-4 border-l-teal hover:border-l-orange',
    packageCard: {
      default: 'bg-white border border-mist-dark',
      featured: 'bg-navy border-2 border-orange shadow-orange scale-[1.03]',
    },
  },
  dark: {
    section: 'bg-teal',
    heading: 'text-mist font-display',
    h2: 'text-mist',
    h3: 'text-mist',
    body: 'text-teal-light',
    label: 'text-teal-light tracking-[0.12em] uppercase text-xs font-semibold opacity-75',
    card: 'bg-white/[0.06] border border-white/[0.15]',
    cardHover: 'hover:border-mist hover:bg-white/[0.10]',
    accentBar: 'border-l-4 border-l-white/30 hover:border-l-orange',
    packageCard: {
      default: 'bg-white/[0.06] border border-white/[0.15]',
      featured: 'bg-navy border-2 border-orange shadow-orange scale-[1.03]',
    },
  },
} as const;

export type SectionVariant = keyof typeof SECTION;
