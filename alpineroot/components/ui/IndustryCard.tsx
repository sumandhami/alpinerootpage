'use client';
import { motion } from 'framer-motion';
import { staggerChild } from '@/lib/animations';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  variant?: 'light' | 'dark';
}

export default function IndustryCard({
  icon,
  title,
  body,
  variant = 'dark',
}: IndustryCardProps) {
  const isLight = variant === 'light';

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -6, borderColor: '#FF5B04' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        group flex flex-col gap-4 p-6 rounded-2xl cursor-pointer
        transition-all duration-250
        ${
          isLight
            ? 'bg-white border border-mist-dark hover:shadow-hover'
            : 'bg-white/[0.06] border border-white/[0.15] hover:bg-white/[0.10] hover:shadow-hover'
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-14 h-14 rounded-2xl flex items-center justify-center
          transition-all duration-300
          group-hover:scale-110 group-hover:rotate-[8deg]
          ${isLight ? 'bg-orange/10 text-orange' : 'bg-orange/20 text-orange'}
        `}
      >
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3
          className={`font-display text-lg font-semibold mb-2 ${isLight ? 'text-navy' : 'text-mist'}`}
        >
          {title}
        </h3>
        <p
          className={`font-body text-sm leading-relaxed ${isLight ? 'text-teal' : 'text-teal-light'}`}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}
