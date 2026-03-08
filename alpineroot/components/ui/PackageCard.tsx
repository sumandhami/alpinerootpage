'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { staggerChild } from '@/lib/animations';
import Button from './Button';

interface PackageCardProps {
  badge?: string;
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  isFeatured?: boolean;
  ctaLabel?: string;
  variant?: 'light' | 'dark';
  onCtaClick?: () => void;
}

export default function PackageCard({
  badge,
  name,
  price,
  priceNote,
  features,
  isFeatured = false,
  ctaLabel = 'Get Started',
  variant = 'light',
  onCtaClick,
}: PackageCardProps) {
  const isLight = variant === 'light';

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{
        y: isFeatured ? -8 : -6,
        boxShadow: isFeatured
          ? '0 16px 48px rgba(255,91,4,0.28)'
          : '0 12px 40px rgba(22,35,43,0.18)',
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`
        relative flex flex-col rounded-2xl p-8 cursor-pointer
        transition-all duration-300
        ${
          isFeatured
            ? 'bg-navy border-2 border-orange shadow-orange scale-[1.03] z-10'
            : isLight
            ? 'bg-white border border-mist-dark shadow-card'
            : 'bg-white/[0.06] border border-white/[0.15]'
        }
      `}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`
            inline-block self-start mb-4 px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-[0.08em] uppercase
            ${isFeatured ? 'bg-orange text-navy' : isLight ? 'bg-teal text-mist' : 'bg-white/20 text-mist'}
          `}
        >
          {isFeatured ? '★ Most Popular' : badge}
        </span>
      )}

      {!badge && isFeatured && (
        <span className="inline-block self-start mb-4 px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-[0.08em] uppercase bg-orange text-navy">
          ★ Most Popular
        </span>
      )}

      {/* Package name */}
      <h3
        className={`font-display text-xl mb-1 ${isFeatured ? 'text-mist' : isLight ? 'text-navy' : 'text-mist'}`}
      >
        {name}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <span className="font-display text-3xl font-bold text-orange">
          {price}
        </span>
        {priceNote && (
          <span
            className={`ml-2 text-sm ${isFeatured ? 'text-mist/60' : isLight ? 'text-teal/60' : 'text-teal-light/60'}`}
          >
            {priceNote}
          </span>
        )}
      </div>

      {/* Divider */}
      <div
        className={`w-full h-px mb-6 ${isFeatured ? 'bg-white/10' : isLight ? 'bg-mist-dark' : 'bg-white/10'}`}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              size={16}
              className="shrink-0 mt-0.5 text-orange"
              strokeWidth={2.5}
            />
            <span
              className={`text-sm leading-snug ${isFeatured ? 'text-mist' : isLight ? 'text-teal' : 'text-teal-light'}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={isFeatured ? 'orange' : 'primary'}
        className="w-full justify-center"
        onClick={onCtaClick}
      >
        {ctaLabel}
      </Button>
    </motion.div>
  );
}
