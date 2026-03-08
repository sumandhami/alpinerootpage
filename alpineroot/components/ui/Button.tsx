'use client';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  variant?: 'primary' | 'orange';
  href?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold text-[0.875rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded-xl cursor-pointer transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 active:scale-[0.98]';

  const variants = {
    primary:
      'bg-navy text-mist shadow-[0_4px_12px_rgba(22,35,43,0.20)] hover:bg-navy-hover active:text-orange',
    orange:
      'bg-orange text-navy shadow-[0_8px_32px_rgba(255,91,4,0.20)] hover:bg-[#e34e00] active:text-navy',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(22,35,43,0.28)' }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
