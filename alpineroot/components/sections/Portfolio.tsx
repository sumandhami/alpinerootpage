'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { staggerContainer, portfolioCard } from '@/lib/animations';

type FilterKey = 'all' | 'web' | 'ecommerce' | 'seo' | 'branding';

interface PortfolioItem {
  title: string;
  industry: string;
  service: string;
  filter: FilterKey;
  image: string;
  slug: string;
}

const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'Halloway Plumbing',
    industry: 'Trades & Home Services',
    service: 'Web Design',
    filter: 'web',
    image: 'https://picsum.photos/seed/plumbing/800/450',
    slug: 'halloway-plumbing',
  },
  {
    title: 'Chen Legal',
    industry: 'Professional Services',
    service: 'Web Design + SEO',
    filter: 'seo',
    image: 'https://picsum.photos/seed/legal/800/450',
    slug: 'chen-legal',
  },
  {
    title: 'Willow Oak Collective',
    industry: 'eCommerce & Retail',
    service: 'eCommerce',
    filter: 'ecommerce',
    image: 'https://picsum.photos/seed/retail/800/450',
    slug: 'willow-oak-collective',
  },
  {
    title: 'Rossi Osteria',
    industry: 'Hospitality',
    service: 'Branding + Web',
    filter: 'branding',
    image: 'https://picsum.photos/seed/restaurant/800/450',
    slug: 'rossi-osteria',
  },
  {
    title: 'Nair Allied Health',
    industry: 'Healthcare & Medical',
    service: 'Web Design + SEO',
    filter: 'web',
    image: 'https://picsum.photos/seed/health/800/450',
    slug: 'nair-allied-health',
  },
  {
    title: 'Park Accountants',
    industry: 'Professional Services',
    service: 'Custom Portal',
    filter: 'web',
    image: 'https://picsum.photos/seed/accounting/800/450',
    slug: 'park-accountants',
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Work' },
  { key: 'web', label: 'Web Design' },
  { key: 'ecommerce', label: 'eCommerce' },
  { key: 'seo', label: 'SEO' },
  { key: 'branding', label: 'Branding' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered =
    activeFilter === 'all'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.filter === activeFilter);

  return (
    <AnimatedSection
      id="portfolio"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Portfolio
        </p>
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-4 max-w-[640px]">
          Our Work
        </h2>
        <p className="font-body text-teal text-base leading-relaxed max-w-[640px] mb-10">
          A selection of website, SEO, and branding projects for Perth businesses
          and national clients.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`
                px-4 py-2 rounded-lg font-body text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${
                  activeFilter === f.key
                    ? 'bg-navy text-mist shadow-card'
                    : 'text-navy hover:text-orange border border-mist-dark bg-white'
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.slug}
                layout
                variants={portfolioCard}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-hover"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: 'bottom' }}
                    className="
                      absolute inset-0 bg-navy/85
                      flex flex-col justify-end p-5 gap-3
                    "
                  >
                    <span className="inline-block self-start px-2.5 py-1 bg-orange text-navy text-[0.65rem] font-bold tracking-[0.08em] uppercase rounded-full">
                      {item.service}
                    </span>
                    <p className="font-display text-mist text-lg leading-tight">
                      {item.title}
                    </p>
                    <p className="font-body text-teal-light text-xs">
                      {item.industry}
                    </p>
                    <div className="flex items-center gap-2 text-orange text-sm font-semibold mt-1">
                      View Case Study <ExternalLink size={13} />
                    </div>
                  </motion.div>
                </div>

                {/* Card footer */}
                <div className="px-5 py-4 bg-white border-t border-mist-dark">
                  <p className="font-display text-navy text-base font-semibold">
                    {item.title}
                  </p>
                  <p className="font-body text-teal text-xs mt-0.5">
                    {item.industry}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
