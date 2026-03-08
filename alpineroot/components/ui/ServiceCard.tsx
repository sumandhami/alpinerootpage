'use client';
import { motion } from 'framer-motion';
import { staggerChild } from '@/lib/animations';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  variant?: 'light' | 'dark';
}

export default function ServiceCard({
  icon,
  title,
  body,
  variant = 'light',
}: ServiceCardProps) {
  const isLight = variant === 'light';

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(22,35,43,0.18)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        group flex items-start gap-6 p-6 rounded-xl cursor-pointer
        transition-all duration-250
        ${
          isLight
            ? 'bg-white border border-mist-dark border-l-4 border-l-teal hover:border-l-orange hover:shadow-hover'
            : 'bg-white/[0.06] border border-white/[0.15] border-l-4 border-l-white/30 hover:border-l-orange hover:bg-white/[0.10]'
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
          transition-colors duration-250
          ${isLight ? 'bg-teal/10 text-teal group-hover:bg-orange/10 group-hover:text-orange' : 'bg-white/10 text-mist group-hover:text-orange'}
        `}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className={`
            font-display text-[1.1rem] font-semibold mb-2 leading-snug
            transition-colors duration-250
            ${isLight ? 'text-navy group-hover:text-teal' : 'text-mist'}
          `}
        >
          {title}
        </h4>
        <p
          className={`
            font-body text-sm leading-relaxed
            ${isLight ? 'text-teal' : 'text-teal-light'}
          `}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}
