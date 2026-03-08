'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tabContentEnter, staggerContainer, staggerChild } from '@/lib/animations';

type FaqTab = 'webdev' | 'seo' | 'branding';

interface FAQ {
  question: string;
  answer: string;
}

const FAQ_DATA: Record<FaqTab, FAQ[]> = {
  webdev: [
    {
      question: 'How much does a website cost in Perth?',
      answer: 'Web design costs in Perth range from around $999 for a straightforward small business WordPress site, to $5,000+ for custom-built sites with complex functionality. Cost depends on page count, whether custom design is used, feature complexity (booking, eCommerce, portals), and content work required. AlpineRoot provides fixed-price quotes based on a defined scope — not hourly rates that expand without warning.',
    },
    {
      question: 'How long does a website build take?',
      answer: 'A standard small business WordPress website takes 5–8 weeks from brief to launch. eCommerce or custom-developed applications take 10–16 weeks depending on scope. The most common cause of delays is slow content delivery from the client side. AlpineRoot provides a content requirements guide at the start of every project to keep builds on schedule.',
    },
    {
      question: 'Do you build websites on WordPress or custom platforms?',
      answer: 'Both. For most service businesses, trades, professional practices, and small-to-medium eCommerce operations, WordPress is the right choice. For businesses with complex custom requirements — bespoke portals, database-driven platforms, API integrations — we build on modern frameworks to specification.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Every website AlpineRoot builds is fully responsive — adapting correctly to mobile, tablet, and desktop without requiring a separate mobile version. We test on real devices across iOS and Android before every launch. Mobile usability is a confirmed Google ranking factor.',
    },
    {
      question: 'Will I be able to update my own website after launch?',
      answer: 'Yes. WordPress is built for non-technical users. After launch, we provide a CMS walkthrough. For ongoing updates you prefer not to handle yourself, our care plan includes monthly content update hours so the site stays current without calling a developer.',
    },
    {
      question: 'Do you offer website hosting?',
      answer: 'Yes — on quality Australian-based servers through managed WordPress hosting providers with Australian data centres. You own your hosting account directly. We can also work with your existing hosting provider if it meets the technical requirements of your build.',
    },
    {
      question: 'What happens after the website launches?',
      answer: 'The 30 days after launch are technically active — we monitor for indexation, Search Console errors, performance issues, and content adjustments. We offer ongoing care plans and provide a handover document covering what you have, where it\'s hosted, what credentials to keep safe, and what the ongoing maintenance requirements are.',
    },
  ],
  seo: [
    {
      question: 'How long does SEO take to show results?',
      answer: 'For local SEO in Perth targeting suburb-level or specific service terms with low-to-medium competition, measurable ranking improvements typically appear within 3–4 months. For competitive terms like \'web design perth\' or \'seo company perth\', ranking in the top 5 is a 6–12+ month project. AlpineRoot provides a realistic timeline estimate at the outset based on your specific keyword targets.',
    },
    {
      question: 'What is the difference between local SEO and general SEO?',
      answer: 'Local SEO focuses on appearing in searches with geographic intent — \'plumber Perth\', \'accountant Subiaco\', \'café near me\' — and in Google Maps and the Local Pack. It involves Google Business Profile management, local citation building, and suburb-specific on-page optimisation. General SEO covers ranking for broader terms that may or may not include a location modifier. Most Perth service businesses need both.',
    },
    {
      question: 'How much does SEO cost per month?',
      answer: 'AlpineRoot\'s SEO packages start from $500/month for foundational local SEO through to $2,000/month for competitive markets, eCommerce, or multi-location targeting. All packages are fixed-fee rather than hourly — you know what you\'re getting and what it costs each month.',
    },
    {
      question: 'Can SEO work alongside Google Ads?',
      answer: 'Yes — and they work better together. Ads give immediate visibility while organic rankings build. Ad data (which keywords convert, which landing pages perform) informs the SEO strategy, and rankings reduce long-term dependence on paid traffic.',
    },
    {
      question: 'Will you write content for my website as part of SEO?',
      answer: 'Yes, on content-inclusive SEO packages. Growth and Authority packages include monthly SEO content — service pages, location pages, and blog content targeted at keyword gaps. Written by professional writers, not outsourced to text generators.',
    },
    {
      question: 'Do you work with businesses outside Perth?',
      answer: 'Yes. AlpineRoot provides SEO services for businesses in Melbourne, Sydney, Brisbane, and across regional Australia. For national businesses, we develop strategies targeting both location-specific and national non-geographic terms. The methodology is the same regardless of location.',
    },
    {
      question: 'What do I actually get in an SEO report?',
      answer: 'Every monthly report includes: keyword ranking positions with week-on-week changes, organic traffic data from Google Analytics, Search Console impression and click data, actions completed with explanations, and planned actions for next month. Reports are reviewed before sending — if something unexpected happened, we flag it before you have to ask.',
    },
  ],
  branding: [
    {
      question: 'What is the difference between a logo and a brand identity?',
      answer: 'A logo is the mark — the graphic symbol representing your business. A brand identity is the complete system that makes the mark work: the colour palette, typography, tone of voice, and the rules governing how all elements are applied consistently across every channel. A logo without a brand identity is just an image.',
    },
    {
      question: 'How much does logo design cost in Perth?',
      answer: 'Logo design pricing ranges from $800 for a basic logo-only project to $3,500+ for a complete brand identity package with strategy. Pricing is based on scope — AlpineRoot provides a fixed-price quote based on the specific scope of your project.',
    },
    {
      question: 'How long does a branding project take?',
      answer: 'A Brand Identity Package typically takes 4–6 weeks from brief to final delivery. A Full Brand Strategy Package, which includes a strategy phase before design, takes 8–12 weeks. Brand refresh engagements are typically 3–5 weeks.',
    },
    {
      question: 'Do I need brand strategy before getting a logo designed?',
      answer: 'For most businesses, even a focused one-hour strategy session significantly improves the quality of the logo design outcome. Strategy answers the questions that inform design decisions: who the audience is, what position the brand needs to occupy, and what the visual system needs to communicate. Without that, design is guesswork.',
    },
    {
      question: 'What do I receive at the end of a branding project?',
      answer: 'Final logo in all variants (primary, secondary, icon), all colour specifications (RGB, HEX, CMYK), all font files or licence references, a brand guidelines document, and all final files in every format (SVG, PDF, EPS, PNG transparent, JPEG). You own everything — no licensing fees.',
    },
    {
      question: 'Can you redesign or refresh an existing logo?',
      answer: 'Yes. A brand refresh retains what has equity and recognition in your existing brand while modernising the elements working against you. Typically 3–5 weeks and includes a review of what\'s worth keeping before any design decisions are made.',
    },
  ],
};

const FAQ_TABS: { id: FaqTab; label: string }[] = [
  { id: 'webdev', label: 'Website Design' },
  { id: 'seo', label: 'SEO Services' },
  { id: 'branding', label: 'Branding' },
];

function AccordionItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        rounded-xl overflow-hidden bg-white border border-mist-dark
        transition-all duration-250
        ${open ? 'border-l-4 border-l-orange' : 'border-l-4 border-l-transparent'}
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <h4
          className={`
            font-display text-base leading-snug flex-1
            transition-colors duration-200
            ${open ? 'text-orange' : 'text-navy'}
          `}
        >
          {faq.question}
        </h4>
        <span
          className={`
            shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5
            transition-all duration-200
            ${open ? 'bg-orange/10 text-orange rotate-45' : 'bg-teal/10 text-teal'}
          `}
        >
          {open ? <X size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 border-t border-mist-dark pt-3">
              <p className="font-body text-teal text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [activeTab, setActiveTab] = useState<FaqTab>('webdev');
  const faqs = FAQ_DATA[activeTab];

  return (
    <AnimatedSection
      id="faqs"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          FAQ
        </p>
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-teal text-base leading-relaxed max-w-[640px] mb-12">
          Straight answers to the questions we get asked most. No vague
          generalities.
        </p>

        {/* Tab + Accordion layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Tab cards — left column */}
          <div className="flex lg:flex-col gap-3 shrink-0 lg:w-[220px]">
            {FAQ_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 lg:flex-none text-left px-5 py-4 rounded-xl
                  font-body text-[0.875rem] font-semibold
                  transition-all duration-200 cursor-pointer
                  ${
                    activeTab === tab.id
                      ? 'bg-navy text-mist border-l-[3px] border-l-orange shadow-card'
                      : 'bg-white text-navy border border-mist-dark hover:border-teal hover:text-teal'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ accordion — right column */}
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
                  className="flex flex-col gap-3"
                >
                  {faqs.map((faq, idx) => (
                    <motion.div key={idx} variants={staggerChild}>
                      <AccordionItem faq={faq} />
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
