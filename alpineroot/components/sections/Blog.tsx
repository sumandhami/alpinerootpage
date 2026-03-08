'use client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BlogCard from '@/components/ui/BlogCard';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

const POSTS = [
  {
    image: 'https://picsum.photos/seed/webdesign/800/450',
    category: 'Web Design',
    title: 'How Much Does a Website Cost in Perth?',
    excerpt:
      'Web design costs in Perth range from $999 to $10,000+. Here\'s a plain guide to what actually drives the price — and how to avoid paying for things you don\'t need.',
    date: '4 March 2026',
    slug: 'website-cost-perth',
  },
  {
    image: 'https://picsum.photos/seed/seoguide/800/450',
    category: 'SEO',
    title: 'Local SEO Perth: A Plain-English Guide for Small Businesses',
    excerpt:
      'If you\'re a Perth service business and you\'re not visible on Google Maps, you\'re invisible to the people most likely to call you today. Here\'s how local SEO works and where to start.',
    date: '18 February 2026',
    slug: 'local-seo-perth-guide',
  },
  {
    image: 'https://picsum.photos/seed/wordpress/800/450',
    category: 'WordPress',
    title: 'WordPress Care Plans Explained: What\'s Included and Why',
    excerpt:
      'Most hacked sites aren\'t targeted — they\'re found by automated scripts scanning for outdated plugins. A WordPress maintenance plan isn\'t optional for any site you rely on.',
    date: '2 February 2026',
    slug: 'wordpress-care-plans-explained',
  },
];

export default function Blog() {
  return (
    <AnimatedSection
      id="blog"
      className="bg-teal py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-teal-light/70 tracking-[0.12em] uppercase text-xs font-semibold mb-4">
          Latest Insights
        </p>
        <h2 className="font-display text-mist text-3xl sm:text-4xl lg:text-[3rem] mb-4 max-w-[640px]">
          Latest Insights
        </h2>
        <p className="font-body text-teal-light text-base leading-relaxed max-w-[640px] mb-12">
          Plain-language articles on web design, SEO, and branding for Perth
          and Australian businesses — written by the people doing the work.
        </p>

        {/* Blog cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} variant="dark" />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
