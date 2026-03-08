'use client';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = '',
  id,
}: Props) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
