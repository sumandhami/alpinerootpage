'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerChild } from '@/lib/animations';

const AREAS = [
  {
    title: 'Perth & Western Australia',
    body: 'We work with businesses across metropolitan Perth including the CBD, Fremantle, Subiaco, Joondalup, Osborne Park, Cannington, Rockingham, Mandurah, and the broader South West. Responsive web design Perth, local SEO Perth, WordPress website design South Perth — from the coast to the Hills to the northern suburbs.',
    tags: ['Perth CBD', 'Fremantle', 'Subiaco', 'Joondalup', 'Osborne Park', 'Rockingham', 'Mandurah', 'South Perth'],
  },
  {
    title: 'Melbourne, Sydney & National',
    body: 'Remote engagements with Melbourne, Sydney, and Brisbane clients are structured with the same deliverables and communication cadence as local projects. Time zone differences are managed through scheduled touchpoints, shared project management tools, and async video updates. Website development company in Australia — delivering web design, SEO, and branding nationally from our Perth base.',
    tags: ['Melbourne', 'Sydney', 'Brisbane', 'Gold Coast', 'Adelaide', 'Regional AU'],
  },
];

export default function ServiceAreas() {
  return (
    <AnimatedSection
      id="service-areas"
      className="bg-teal py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Service Areas
        </p>
        <h2 className="font-display text-mist text-3xl sm:text-4xl lg:text-[3rem] mb-6 max-w-[640px]">
          Service Areas
        </h2>
        <p className="font-body text-teal-light text-base leading-relaxed max-w-[720px] mb-12">
          AlpineRoot is based in Perth, Western Australia, and delivers web
          design, SEO, and branding services remotely across Australia. Our
          process is built to work without requiring face-to-face meetings.
        </p>

        {/* Area cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-6"
        >
          {AREAS.map((area) => (
            <motion.div
              key={area.title}
              variants={staggerChild}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(22,35,43,0.20)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="
                group flex flex-col sm:flex-row gap-6 p-6 lg:p-8 rounded-2xl
                bg-white/[0.06] border border-white/[0.15] border-l-4 border-l-white/30
                hover:border-l-orange hover:bg-white/[0.10]
                transition-all duration-250 cursor-default
              "
            >
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin size={26} className="text-orange" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-mist text-xl mb-3">
                  {area.title}
                </h3>
                <p className="font-body text-teal-light text-sm leading-relaxed mb-5">
                  {area.body}
                </p>

                {/* Suburb tags */}
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1 rounded-full
                        bg-white/10 text-mist text-xs font-medium
                        border border-white/10
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
