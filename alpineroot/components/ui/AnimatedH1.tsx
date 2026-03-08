'use client';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedH1({ text, className = '' }: Props) {
  const words = text.split(' ');
  return (
    <h1
      className={`font-display leading-[1.05] tracking-[0.02em] ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2 + i * 0.06,
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
