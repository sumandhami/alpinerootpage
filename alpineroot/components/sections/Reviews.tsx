'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ReviewCard from '@/components/ui/ReviewCard';
import { staggerContainer } from '@/lib/animations';
import { ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    stars: 5,
    reviewText:
      'AlpineRoot redesigned our plumbing business website and our Google enquiries tripled within six months. They explained everything clearly at each stage and delivered exactly what they promised. Worth every dollar.',
    reviewerName: 'Mark Halloway',
    business: 'Halloway Plumbing · Perth',
    date: 'January 2026',
  },
  {
    stars: 5,
    reviewText:
      'Our SEO results since working with AlpineRoot have been outstanding. We now rank page one for twelve target keywords in Perth and have cut our Google Ads spend significantly. The monthly reports are actually useful.',
    reviewerName: 'Sarah Chen',
    business: 'Chen Legal · Subiaco',
    date: 'February 2026',
  },
  {
    stars: 5,
    reviewText:
      'The branding work AlpineRoot did for our restaurant launch was exceptional. They understood our vision immediately and the logo and identity they delivered positioned us perfectly in the Fremantle market from day one.',
    reviewerName: 'Tom & Lisa Rossi',
    business: 'Rossi Osteria · Fremantle',
    date: 'March 2026',
  },
  {
    stars: 5,
    reviewText:
      'We had a complicated custom web development need — a client portal with booking and document management. AlpineRoot built it on time, within budget, and documented it properly. A rare experience.',
    reviewerName: 'David Park',
    business: 'Park Accountants · Joondalup',
    date: 'December 2025',
  },
  {
    stars: 5,
    reviewText:
      'After three previous agencies failed to improve our e-commerce rankings, AlpineRoot fixed the technical issues that had been suppressing us for years. Revenue from organic traffic is up 180% year-on-year.',
    reviewerName: 'Jessica Williamson',
    business: 'Willow Oak Collective · Claremont',
    date: 'November 2025',
  },
  {
    stars: 5,
    reviewText:
      'Direct, honest advice and genuinely excellent work. They told us what we actually needed rather than upselling. Our care plan keeps the site running flawlessly and the quarterly SEO reports are always insightful.',
    reviewerName: 'Dr. Priya Nair',
    business: 'Nair Allied Health · Osborne Park',
    date: 'October 2025',
  },
];

function AnimatedRating() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span
      ref={ref}
      className="font-display text-5xl text-navy"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.7)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      5.0
    </span>
  );
}

export default function Reviews() {
  return (
    <AnimatedSection
      id="reviews"
      className="bg-mist py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Customer Reviews
        </p>
        <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[3rem] mb-10 max-w-[640px]">
          What Our Clients Say
        </h2>

        {/* Aggregate rating */}
        <div className="flex items-center gap-6 mb-12 flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <AnimatedRating />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange text-xl">★</span>
              ))}
            </div>
            <span className="font-body text-xs text-teal/60 mt-0.5">out of 5</span>
          </div>
          <div className="w-px h-16 bg-mist-dark hidden sm:block" />
          <div>
            <p className="font-body text-sm text-teal">Based on Google Reviews</p>
            <p className="font-body text-xs text-teal/60 mt-1">Perth businesses & national clients</p>
          </div>
          <a
            href="#"
            className="ml-auto flex items-center gap-2 font-body text-sm font-semibold text-teal hover:text-orange transition-colors"
          >
            See all reviews <ExternalLink size={14} />
          </a>
        </div>

        {/* Review cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.reviewerName} {...review} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
