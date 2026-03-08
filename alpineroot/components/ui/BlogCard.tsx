'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { staggerChild } from '@/lib/animations';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug?: string;
  variant?: 'light' | 'dark';
}

export default function BlogCard({
  image,
  category,
  title,
  excerpt,
  date,
  slug = '#',
  variant = 'dark',
}: BlogCardProps) {
  const isLight = variant === 'light';

  return (
    <motion.article
      variants={staggerChild}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(22,35,43,0.22)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`
        group flex flex-col rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-250
        ${isLight ? 'bg-white border border-mist-dark shadow-card' : 'bg-white/[0.06] border border-white/[0.15]'}
      `}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-orange text-navy text-[0.65rem] font-bold tracking-[0.08em] uppercase rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h4
          className={`font-display text-base font-semibold leading-snug line-clamp-2 ${isLight ? 'text-navy' : 'text-mist'}`}
        >
          {title}
        </h4>
        <p
          className={`font-body text-sm leading-relaxed line-clamp-2 flex-1 ${isLight ? 'text-teal' : 'text-teal-light'}`}
        >
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span
            className={`text-xs ${isLight ? 'text-teal/60' : 'text-teal-light/60'}`}
          >
            {date}
          </span>
          <span className="flex items-center gap-1 text-orange text-sm font-semibold hover:underline">
            Read Article <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
