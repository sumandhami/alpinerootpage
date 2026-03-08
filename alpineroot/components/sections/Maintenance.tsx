'use client';
import { motion } from 'framer-motion';
import { Shield, BookCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import PackageCard from '@/components/ui/PackageCard';
import { staggerContainer, staggerChild } from '@/lib/animations';

const SERVICES = [
  {
    icon: <Shield size={22} />,
    title: 'What Is a WordPress Care Plan and Why Your Site Needs One',
    body: 'A care plan is a monthly service that keeps your site secure, fast, and operational while you focus on running your business. AlpineRoot\'s care plans go beyond \'update plugins and call it done\' — each plan includes proactive performance monitoring, regular off-site backups, uptime alerts, and monthly content update hours so your site reflects your current business, not where it was when the site launched.',
  },
  {
    icon: <BookCheck size={22} />,
    title: 'What\'s Included in AlpineRoot\'s WordPress Maintenance Plans',
    body: 'All plans include: WordPress core, theme, and plugin updates; daily off-site backups with 30-day retention; uptime monitoring with email alerts; monthly security scan and malware check; and a monthly site health report. Higher tiers add priority response times, monthly content update hours, Analytics and Search Console review, and quarterly SEO health checks.',
  },
];

const PACKAGES = [
  {
    badge: 'STARTER',
    name: 'Essential Care',
    price: '$149/month',
    features: [
      'Core, theme & plugin updates',
      'Daily off-site backups (30-day retention)',
      'Uptime monitoring',
      'Monthly security scan',
      'Monthly health report',
    ],
  },
  {
    name: 'Growth Care',
    price: '$299/month',
    isFeatured: true,
    features: [
      'Everything in Essential',
      '1hr/month content updates',
      'Analytics review',
      'Priority 24hr support',
      'Quarterly SEO health check',
      'Performance monitoring',
    ],
  },
  {
    badge: 'HIGH TRAFFIC',
    name: 'Premium Care',
    price: '$499/month',
    features: [
      'Everything in Growth',
      '3hrs/month content updates',
      'Monthly strategy call',
      'Advanced security firewall',
      'CDN setup & management',
      '2hr emergency SLA',
    ],
  },
];

export default function Maintenance() {
  return (
    <AnimatedSection
      id="maintenance"
      className="bg-teal py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          WordPress Maintenance
        </p>

        {/* H2 */}
        <h2 className="font-display text-mist text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[720px]">
          WordPress Maintenance & Care Plans
        </h2>

        {/* Intro */}
        <p className="font-body text-teal-light text-base leading-relaxed max-w-[720px] mb-12">
          A WordPress website isn&apos;t a one-time project. It&apos;s software running on
          a platform that releases security updates, plugin updates, and PHP
          version changes continuously. Most hacked sites aren&apos;t targeted —
          they&apos;re found by automated scripts scanning for outdated software. A
          site that hasn&apos;t been updated in three months is a soft target.
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
                variant="dark"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Packages */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Care Plan Pricing
        </p>
        <h2 className="font-display text-mist text-3xl sm:text-4xl mb-4">
          WordPress Care Plan Packages
        </h2>
        <p className="font-body text-teal-light text-base mb-12 max-w-[640px]">
          All plans are month-to-month — no lock-in contracts. Cancel anytime.
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
