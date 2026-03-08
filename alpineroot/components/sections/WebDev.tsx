'use client';
import { motion } from 'framer-motion';
import { Layers, Code2, ShoppingCart, RefreshCw } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import PackageCard from '@/components/ui/PackageCard';
import { staggerContainer, staggerChild } from '@/lib/animations';

const SERVICES = [
  {
    icon: <Layers size={22} />,
    title: 'WordPress Website Design & Development',
    body: 'WordPress powers over 40% of all websites globally — and when it\'s built properly, it\'s one of the most capable platforms for service businesses, trades, professional practices, and growing eCommerce brands. AlpineRoot\'s WordPress website design covers the full build: custom design to your brief, responsive layout on every device, SEO-ready structure from day one, and delivery with a CMS your team can actually use without training. Every site is built on clean, performance-optimised code — not page-builder shortcuts that slow you down.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Custom Website Design & Development',
    body: 'When your business has requirements beyond an off-the-shelf platform — custom user accounts, booking systems, client portals, database-driven directories, API integrations, or multi-site architecture — we build from the ground up. Custom development at AlpineRoot means a codebase owned entirely by you, built to spec, documented for your team, with performance and security standards built in from the first commit.',
  },
  {
    icon: <ShoppingCart size={22} />,
    title: 'eCommerce Website Design & Development',
    body: 'Running a successful online store requires more than a product catalogue with a payment button. AlpineRoot builds eCommerce websites on WooCommerce, Shopify, and custom platforms — designed with conversion rate as the primary metric, not just visual design. Intuitive navigation, fast product pages, a checkout that doesn\'t abandon customers, and a back-end your team can manage without calling a developer every time a product changes.',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Website Redesign & Rebuilds',
    body: 'Your current website might be holding your business back in ways you can\'t see from the front end. Slow load speed kills rankings and conversions. An outdated CMS creates security risks. A website redesign with AlpineRoot begins with an audit — we review your site for technical issues, content gaps, speed bottlenecks, and conversion barriers before a single design decision is made.',
  },
];

const PACKAGES = [
  {
    badge: 'SMALL BUSINESS',
    name: 'Starter Website',
    price: 'From $999',
    features: [
      'Up to 5 pages',
      'WordPress CMS',
      'Mobile-responsive design',
      'Basic on-page SEO',
      'Contact form + Maps',
      'Google Analytics setup',
      '30-day support',
    ],
  },
  {
    name: 'Growth Website',
    price: 'From $2,500',
    isFeatured: true,
    features: [
      'Up to 15 pages + blog',
      'Custom WordPress theme',
      'WooCommerce or booking integration',
      'Full on-page SEO',
      'Core Web Vitals optimisation',
      'Content migration',
      '60-day support',
    ],
  },
  {
    badge: 'CUSTOM / COMPLEX',
    name: 'Premium Build',
    price: 'From $5,000',
    features: [
      'Unlimited pages',
      'Custom development (portals, APIs)',
      'Advanced eCommerce',
      'Full SEO architecture + schema',
      'CDN + caching + WebP',
      'QA testing',
      'Team CMS training',
      '90-day support',
    ],
  },
];

export default function WebDev() {
  return (
    <AnimatedSection
      id="web-dev"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Website Design & Development
        </p>

        {/* H2 */}
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          Website Design & Development Services
        </h2>

        {/* Intro */}
        <p className="font-body text-teal text-base leading-relaxed max-w-[720px] mb-12">
          A website that looks good but doesn&apos;t convert is just an expensive
          brochure. AlpineRoot builds websites designed around business outcomes
          — clear user journeys, fast load times, search-ready structure, and
          content that explains what you do to the right people at the right
          moment.
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
          Packages & Pricing
        </p>
        <h2 className="font-display text-navy text-3xl sm:text-4xl mb-4">
          Website Design & Development Packages
        </h2>
        <p className="font-body text-teal text-base mb-12 max-w-[640px]">
          Every project is scoped and priced on a defined scope document agreed
          before any work begins. The tiers below are typical starting points.
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
              variant="light"
              ctaLabel="Enquire Now"
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
