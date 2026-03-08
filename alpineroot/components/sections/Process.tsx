'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tabContentEnter, staggerContainer, staggerChild } from '@/lib/animations';

type Tab = 'webdev' | 'seo' | 'branding';

interface Step {
  number: number;
  name: string;
  timeline: string;
  detail: string;
}

const PROCESS_DATA: Record<Tab, Step[]> = {
  webdev: [
    {
      number: 1,
      name: 'Discovery & Brief',
      timeline: 'Week 1',
      detail: 'We review your brief, your existing site (if any), your competitors, and the goals the website needs to achieve. Output: project scope document signed off before design.',
    },
    {
      number: 2,
      name: 'Design',
      timeline: 'Week 2–3',
      detail: 'Wireframes and visual design presented for review. One considered direction — not three concepts that dilute the brief. Structured revisions, not open-ended.',
    },
    {
      number: 3,
      name: 'Development',
      timeline: 'Week 3–6',
      detail: 'Design built into working code. Speed and performance tested throughout — not as a last-minute check before launch.',
    },
    {
      number: 4,
      name: 'SEO & Launch Prep',
      timeline: 'Week 6–7',
      detail: 'On-page SEO applied. Analytics and Search Console connected. Staging review. Pre-launch checklist completed — not assumed.',
    },
    {
      number: 5,
      name: 'Launch & Handover',
      timeline: 'Week 7–8',
      detail: 'Site goes live. Team CMS walkthrough. 30-day post-launch monitoring. Care plan options provided.',
    },
  ],
  seo: [
    {
      number: 1,
      name: 'Audit & Research',
      timeline: 'Month 1',
      detail: 'Technical audit, keyword research, competitor gap analysis. Output: prioritised action plan with rationale for every item.',
    },
    {
      number: 2,
      name: 'On-Page Optimisation',
      timeline: 'Month 1–2',
      detail: 'Title tags, meta descriptions, heading structure, internal linking, schema markup, and content updates applied to priority pages first.',
    },
    {
      number: 3,
      name: 'Content & Links',
      timeline: 'Month 2+',
      detail: 'New content created to target gap keywords. Link acquisition begins. GBP optimisation and local citations for local SEO clients.',
    },
    {
      number: 4,
      name: 'Review & Report',
      timeline: 'Monthly',
      detail: 'Plain-language monthly report: rankings moved, content published, links built, what\'s next. Strategy call to review and adjust.',
    },
  ],
  branding: [
    {
      number: 1,
      name: 'Discovery',
      timeline: 'Week 1',
      detail: 'Brief, competitive review, audience research. Workshop for strategy packages. Output: discovery summary shared before strategy begins.',
    },
    {
      number: 2,
      name: 'Strategy',
      timeline: 'Week 1–2',
      detail: 'Positioning statement, messaging framework, tone of voice. Approved before any design begins. This is the brief the design responds to.',
    },
    {
      number: 3,
      name: 'Design',
      timeline: 'Week 2–4',
      detail: 'Logo concepts developed and presented with written rationale. Structured revision rounds. Design decisions are explained, not just shown.',
    },
    {
      number: 4,
      name: 'Delivery',
      timeline: 'Week 4–6',
      detail: 'Final files in every format. Brand guidelines document. Post-delivery walkthrough. 90-day support window on strategy packages.',
    },
  ],
};

const TABS: { id: Tab; label: string }[] = [
  { id: 'webdev', label: 'Web Development' },
  { id: 'seo', label: 'SEO' },
  { id: 'branding', label: 'Branding' },
];

export default function Process() {
  const [activeTab, setActiveTab] = useState<Tab>('webdev');

  return (
    <AnimatedSection
      id="process"
      className="bg-teal py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          How It Works
        </p>
        <h2 className="font-display text-mist text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          Our Process
        </h2>
        <p className="font-body text-teal-light text-base leading-relaxed max-w-[720px] mb-12">
          Every service AlpineRoot delivers follows a structured process. Each
          phase has defined inputs, outputs, and client touchpoints — so you
          always know where the project is and what comes next.
        </p>

        {/* Tab + Steps layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Tab cards — left column */}
          <div className="flex lg:flex-col gap-3 lg:gap-3 shrink-0 lg:w-[220px]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 lg:flex-none text-left px-5 py-4 rounded-xl
                  font-body text-[0.875rem] font-semibold
                  transition-all duration-200 cursor-pointer
                  ${
                    activeTab === tab.id
                      ? 'bg-white/[0.12] border-l-[3px] border-l-orange text-orange'
                      : 'bg-white/[0.06] border-l-[3px] border-l-transparent text-mist hover:bg-white/[0.09] hover:border-l-mist'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Step cards — right column */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabContentEnter}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col divide-y divide-white/10"
                >
                  {PROCESS_DATA[activeTab].map((step) => (
                    <motion.div
                      key={step.number}
                      variants={staggerChild}
                      className="flex items-start gap-5 py-5 first:pt-0 last:pb-0"
                    >
                      {/* Number badge */}
                      <div className="shrink-0 w-10 h-10 rounded-full bg-orange flex items-center justify-center">
                        <span className="font-display text-navy text-sm font-bold">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                          <h4 className="font-display text-mist text-base font-semibold">
                            {step.name}
                          </h4>
                          <span className="font-body text-teal-light text-xs italic">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="font-body text-teal-light text-sm leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
