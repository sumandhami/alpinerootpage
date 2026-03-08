'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { slideFromLeft, slideFromRight } from '@/lib/animations';

const REASONS = [
  {
    number: 1,
    title: 'You work with the people doing the work',
    body: 'There are no account managers between you and the developer, the SEO strategist, or the designer. You know exactly who is building what, and you can ask them directly.',
  },
  {
    number: 2,
    title: 'We explain things plainly',
    body: 'Digital jargon is often used to justify fees rather than communicate clearly. Every recommendation we make comes with a plain-English explanation of what it is, why it matters, and what happens if we don\'t do it.',
  },
  {
    number: 3,
    title: 'We own the outcomes, not just the deliverables',
    body: 'A website that launches is not a success. A website that generates enquiries six months after launch is a success. Our process is built around that distinction.',
  },
  {
    number: 4,
    title: 'No lock-in contracts on ongoing services',
    body: 'SEO and maintenance services are month-to-month. If we\'re not delivering, you should be able to leave. We\'d rather earn retention than contractually force it.',
  },
  {
    number: 5,
    title: 'We work across three disciplines',
    body: 'Having web design, SEO, and branding under one roof means the work is connected. Your SEO strategy informs the website structure. Your branding informs the design. The pieces fit because they\'re made to fit.',
  },
];

interface NodeState {
  active: boolean;
  passed: boolean;
}

export default function WhyChooseUs() {
  const [nodeStates, setNodeStates] = useState<NodeState[]>(
    REASONS.map(() => ({ active: false, passed: false }))
  );
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleNodes, setVisibleNodes] = useState<boolean[]>(
    REASONS.map(() => false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    nodeRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleNodes((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            setNodeStates((prev) => {
              const next = prev.map((n, i) => ({
                active: i === idx,
                passed: i < idx ? true : n.passed,
              }));
              next[idx].active = true;
              return next;
            });
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <AnimatedSection
      id="why-us"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Why Choose AlpineRoot
        </p>
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-16 max-w-[640px]">
          Why Choose AlpineRoot
        </h2>

        {/* Timeline — desktop */}
        <div className="relative hidden md:block">
          {/* Center bar */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-teal/20 -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {REASONS.map((reason, idx) => {
              const isLeft = idx % 2 === 0; // odd number (1,3,5) = even index → left
              const state = nodeStates[idx] || { active: false, passed: false };
              const isVisible = visibleNodes[idx];

              return (
                <div
                  key={reason.number}
                  className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6"
                >
                  {/* Left content */}
                  <div className="flex justify-end">
                    {isLeft && (
                      <motion.div
                        variants={slideFromLeft}
                        initial="hidden"
                        animate={isVisible ? 'visible' : 'hidden'}
                        className="
                          max-w-[420px] w-full p-6 bg-white rounded-2xl
                          border-r-4 border-r-orange shadow-card
                        "
                      >
                        <h4 className="font-display text-navy text-lg mb-2">
                          {reason.title}
                        </h4>
                        <p className="font-body text-teal text-sm leading-relaxed">
                          {reason.body}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center node */}
                  <div
                    ref={(el) => {
                      nodeRefs.current[idx] = el;
                    }}
                    className={`
                      relative z-10 w-12 h-12 rounded-full flex items-center justify-center
                      font-display text-base font-bold
                      transition-all duration-400 shrink-0
                      ${
                        state.passed
                          ? 'bg-teal text-mist ring-2 ring-teal'
                          : state.active
                          ? 'bg-navy text-mist ring-4 ring-orange shadow-[0_0_20px_rgba(255,91,4,0.30)]'
                          : 'bg-mist text-navy ring-2 ring-mist-dark'
                      }
                    `}
                  >
                    {reason.number}
                  </div>

                  {/* Right content */}
                  <div className="flex justify-start">
                    {!isLeft && (
                      <motion.div
                        variants={slideFromRight}
                        initial="hidden"
                        animate={isVisible ? 'visible' : 'hidden'}
                        className="
                          max-w-[420px] w-full p-6 bg-white rounded-2xl
                          border-l-4 border-l-orange shadow-card
                        "
                      >
                        <h4 className="font-display text-navy text-lg mb-2">
                          {reason.title}
                        </h4>
                        <p className="font-body text-teal text-sm leading-relaxed">
                          {reason.body}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile — single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex gap-4 p-5 bg-white rounded-2xl border-l-4 border-l-orange shadow-card"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy text-mist flex items-center justify-center font-display font-bold text-sm">
                {reason.number}
              </div>
              <div>
                <h4 className="font-display text-navy text-base mb-2">
                  {reason.title}
                </h4>
                <p className="font-body text-teal text-sm leading-relaxed">
                  {reason.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
