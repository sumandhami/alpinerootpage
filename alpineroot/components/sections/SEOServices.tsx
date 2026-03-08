'use client';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Settings2, PenTool } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import { staggerContainer, staggerChild } from '@/lib/animations';

const SERVICES = [
  {
    icon: <MapPin size={22} />,
    title: 'Local SEO for Perth Businesses',
    body: 'Local SEO ensures your business appears in Google search results and Google Maps when people in your area search for what you offer. For most Perth service businesses — trades, professional services, healthcare, hospitality — local search is the single highest-ROI digital marketing channel available. Covers: Google Business Profile optimisation, local citation building, suburb-specific pages, schema markup, and review generation strategies.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'eCommerce SEO Services',
    body: 'eCommerce SEO requires a different approach. Product pages, category pages, and site architecture each present technical pitfalls — duplicate content, thin descriptions, pagination issues, crawl budget problems — that quietly suppress rankings. Our service includes: category and product keyword targeting, product schema markup, technical crawl audit, category page content strategy, and link acquisition. Available for WooCommerce and Shopify across Perth and nationally.',
  },
  {
    icon: <Settings2 size={22} />,
    title: 'Technical SEO & Site Audits',
    body: 'Technical SEO is the foundation everything else sits on. Content and links will not perform on a site with crawl errors, slow load times, broken internal linking, or missing structured data. Our audit covers: Core Web Vitals (LCP, CLS, FID), mobile usability, canonical tags, XML sitemap, robots.txt, structured data validation, and HTTPS checks. You receive a prioritised fix list with plain-English explanations — not a 200-item spreadsheet.',
  },
  {
    icon: <PenTool size={22} />,
    title: 'SEO Content Writing & Strategy',
    body: 'Most SEO content fails because it\'s written for search engines rather than people. AlpineRoot writes SEO content designed to rank and to be read. Covers: keyword research and content mapping, SEO-optimised service page copy, location-specific landing pages, long-form educational content, and content refresh for pages that have dropped. Written by professionals — not outsourced to text generators.',
  },
];

export default function SEOServices() {
  return (
    <AnimatedSection
      id="seo"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          SEO Services
        </p>

        {/* H2 */}
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          SEO Services Perth
        </h2>

        {/* Intro */}
        <p className="font-body text-teal text-base leading-relaxed max-w-[720px] mb-12">
          Getting to the top of Google isn&apos;t luck — it&apos;s the product of
          consistent, structured work across three areas: what your website
          says, how it&apos;s built, and what other websites say about it.
          AlpineRoot&apos;s SEO services address all three. Organic rankings are an
          asset — once built, they work around the clock without a media budget.
        </p>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
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
      </div>
    </AnimatedSection>
  );
}
