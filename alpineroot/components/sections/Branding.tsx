'use client';
import { motion } from 'framer-motion';
import { Palette, Target } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import PackageCard from '@/components/ui/PackageCard';
import { staggerContainer, staggerChild } from '@/lib/animations';

const SERVICES = [
  {
    icon: <Palette size={22} />,
    title: 'Logo Design & Brand Identity',
    body: 'Our logo design service begins with understanding your business, your market, and your audience — and ends with a logo that is distinctive, scalable, and built for the long term. Every project includes primary and secondary mark variants, a colour palette with RGB, HEX, and CMYK values, a typography system, and final files in every format for print, digital, and embroidery.',
  },
  {
    icon: <Target size={22} />,
    title: 'Brand Strategy & Positioning',
    body: 'Brand strategy is the work that happens before any design begins. It answers the questions that determine whether your visual identity will perform: Who is the audience? What position does your brand occupy relative to competitors? What does the brand need to communicate? AlpineRoot\'s brand strategy includes competitive analysis, audience definition, positioning statement, messaging framework, and tone of voice guidelines.',
  },
];

const PACKAGES = [
  {
    badge: 'NEW BUSINESSES',
    name: 'Brand Identity',
    price: 'From $800',
    features: [
      'Logo design (primary + secondary + icon)',
      'Colour palette (RGB, HEX, CMYK)',
      'Typography system',
      'Brand guidelines document',
      'All file formats (SVG, PDF, PNG, JPG)',
    ],
  },
  {
    name: 'Growth Brand',
    price: 'From $1,800',
    isFeatured: true,
    features: [
      'Everything in Brand Identity',
      'Social media template suite',
      'Document & email signature templates',
      'Tone of voice guide',
      'Brand application review',
      'Extended asset library',
    ],
  },
  {
    badge: 'STRATEGIC REBUILD',
    name: 'Full Brand Strategy',
    price: 'From $3,500',
    features: [
      'Strategy workshop + documentation',
      'Positioning + messaging framework',
      'Complete logo & identity system',
      'Full brand guidelines',
      '90-day post-delivery support',
      'Naming architecture (if required)',
    ],
  },
];

export default function Branding() {
  return (
    <AnimatedSection
      id="branding"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Branding Services
        </p>

        {/* H2 */}
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          Branding Services
        </h2>

        {/* Intro */}
        <p className="font-body text-teal text-base leading-relaxed max-w-[720px] mb-6">
          Your brand is not your logo. It&apos;s the reason a customer chooses you
          over a competitor whose price is lower, whose office is closer, or
          whose ad appeared first. AlpineRoot&apos;s branding services are for
          businesses that understand design is not decoration — it&apos;s a
          commercial asset.
        </p>

        {/* Sub-description card (H3 card 3's content) */}
        <p className="font-body text-teal/80 text-sm leading-relaxed max-w-[640px] mb-12">
          Small business branding does not require an enterprise budget. Our
          three-tier package structure is designed to match investment to stage
          — so whether you&apos;re starting out or scaling up, there&apos;s a clear
          starting point.
        </p>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4 mb-20"
        >
          {SERVICES.map((s) => (
            <motion.div key={s.title} variants={staggerChild}>
              <ServiceCard
                icon={s.icon}
                title={s.title}
                body={s.body}
                variant="light"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Packages */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Branding Packages
        </p>
        <h2 className="font-display text-navy text-3xl sm:text-4xl mb-12">
          Branding Packages for Every Stage
        </h2>

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
              variant="light"
              ctaLabel="Get Started"
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
