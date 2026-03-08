'use client';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PackageCard from '@/components/ui/PackageCard';
import { staggerContainer } from '@/lib/animations';

const PACKAGES = [
  {
    badge: 'START HERE',
    name: 'Foundation SEO',
    price: '$500/month',
    features: [
      'Keyword research & mapping (20 terms)',
      'Google Business Profile optimisation',
      'On-page SEO (5 pages)',
      'Technical audit + fixes',
      'Monthly ranking report',
      'Local citation building (10/mo)',
    ],
  },
  {
    name: 'Growth SEO',
    price: '$1,000/month',
    isFeatured: true,
    features: [
      'Everything in Foundation',
      'Full site keyword mapping (50+ terms)',
      '2× SEO content pieces/month',
      'Link acquisition (5 quality links/mo)',
      'Competitor tracking',
      'Monthly strategy call',
    ],
  },
  {
    badge: 'COMPETITIVE MARKETS',
    name: 'Authority SEO',
    price: '$2,000/month',
    features: [
      'Everything in Growth',
      '4× SEO content pieces/month',
      'Advanced link acquisition (10+/mo)',
      'eCommerce SEO',
      'Dedicated SEO strategist',
      'Weekly ranking dashboard',
      'Quarterly audit & strategy review',
    ],
  },
];

export default function SEOPackages() {
  return (
    <AnimatedSection
      id="seo-packages"
      className="bg-teal py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          SEO Pricing
        </p>

        {/* H2 */}
        <h2 className="font-display text-mist text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          SEO Packages & Pricing
        </h2>

        {/* Intro */}
        <p className="font-body text-teal-light text-base leading-relaxed max-w-[720px] mb-12">
          AlpineRoot&apos;s SEO packages are structured for three stages of
          business. All packages include monthly reporting with plain-language
          explanations of what was done, why, and what changed.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {PACKAGES.map((p) => (
            <PackageCard
              key={p.name}
              {...p}
              variant="dark"
              ctaLabel="Get Started"
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
