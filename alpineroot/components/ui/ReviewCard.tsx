'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { staggerChild } from '@/lib/animations';

interface ReviewCardProps {
  stars?: number;
  reviewText: string;
  reviewerName: string;
  business: string;
  date: string;
}

export default function ReviewCard({
  stars = 5,
  reviewText,
  reviewerName,
  business,
  date,
}: ReviewCardProps) {
  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(22,35,43,0.18)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="
        relative flex flex-col gap-4 p-6 bg-white rounded-2xl
        border-t-[3px] border-t-orange border border-mist-dark
        shadow-card cursor-default
      "
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} className="text-orange fill-orange" />
        ))}
        {Array.from({ length: 5 - stars }).map((_, i) => (
          <Star key={i} size={16} className="text-mist-dark" />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-mist-dark" />

      {/* Review text */}
      <p className="font-body text-sm text-teal leading-relaxed italic flex-1">
        &ldquo;{reviewText}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-end justify-between gap-2 mt-auto pt-2 border-t border-mist-dark">
        <div>
          <p className="font-display text-navy text-base font-semibold leading-snug">
            {reviewerName}
          </p>
          <p className="font-body text-teal text-xs mt-0.5">
            {business} &middot; {date}
          </p>
        </div>
        {/* Google badge */}
        <div className="shrink-0 text-[0.6rem] font-semibold tracking-wide text-teal/50 uppercase">
          Google
        </div>
      </div>
    </motion.div>
  );
}
