'use client';
import { motion } from 'framer-motion';
import {
  HardHat,
  Briefcase,
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
  Building2,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import IndustryCard from '@/components/ui/IndustryCard';
import { staggerContainer } from '@/lib/animations';

const INDUSTRIES = [
  {
    icon: <HardHat size={28} />,
    title: 'Construction, Trades & Home Services',
    body: 'Trades businesses generate most work from local search — and most competitors have sites that were built five years ago and never updated. AlpineRoot builds WordPress websites for builders, electricians, plumbers, landscapers, and HVAC businesses across Perth. Fast, mobile-visible, suburb-ranked, and built to convert urgent enquiries into booked jobs.',
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Professional Services — Law, Finance & Accounting',
    body: 'Professional services firms compete on authority and trust before price. A poorly structured website or inconsistent branding signals the opposite of what your clients need to feel before they engage you. We build websites that establish credibility, explain complex services clearly, and make contact low-friction.',
  },
  {
    icon: <HeartPulse size={28} />,
    title: 'Healthcare & Medical',
    body: 'Healthcare websites operate under AHPRA advertising guidelines with specific requirements around patient privacy and medical communication. AlpineRoot works with dental practices, allied health clinics, and specialist medical practices — building websites and local SEO that generate patient enquiries while meeting compliance requirements.',
  },
  {
    icon: <UtensilsCrossed size={28} />,
    title: 'Hospitality, Tourism & Restaurants',
    body: 'Hospitality businesses live and die on first impressions — and that first impression is now a Google search result, a site that loads in under three seconds, and a set of Google reviews. AlpineRoot builds restaurant websites, accommodation booking sites, café and bar presences with direct booking integration, menu management, and local SEO.',
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'eCommerce & Retail',
    body: 'eCommerce needs category architecture built for how people browse and search, product pages that convert, a checkout that doesn\'t lose customers, and SEO targeting the full range of product and category terms. We build WooCommerce and Shopify stores with eCommerce SEO, Google Shopping feeds, and conversion rate optimisation.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Real Estate & Property',
    body: 'Real estate is one of the most competitive local search verticals in Australia. AlpineRoot builds agency websites with property listing integration, suburb-level landing pages, and agent profiles designed to capture organic traffic for location-specific queries. For developers, we build project marketing sites with stage-release management and lead capture built in from launch.',
  },
];

export default function Industries() {
  return (
    <AnimatedSection
      id="industries"
      className="bg-teal py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Industries We Serve
        </p>

        {/* H2 */}
        <h2 className="font-display text-mist text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          Industries We Serve
        </h2>

        {/* Intro */}
        <p className="font-body text-teal-light text-base leading-relaxed max-w-[720px] mb-12">
          AlpineRoot works across industries where digital presence is a
          competitive necessity. Each industry has specific website, SEO, and
          branding requirements — generic solutions produce generic results.
          Here&apos;s where we have the most experience:
        </p>

        {/* Industry grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              body={industry.body}
              variant="dark"
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
