'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedH1 from '@/components/ui/AnimatedH1';
import Button from '@/components/ui/Button';
import { Star, Shield, MapPin } from 'lucide-react';
import {
  heroH2Variants,
  heroFormVariants,
  heroTrustBadge,
  staggerContainer,
  staggerChild,
} from '@/lib/animations';

const SERVICES = [
  'Web Design & Development',
  'WordPress Maintenance',
  'SEO Services',
  'Branding & Logo Design',
  'Custom Development',
  'eCommerce Development',
];

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-teal flex items-center overflow-hidden"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.07]"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,400 200,180 400,280 650,100 900,200 1200,50 1200,400" fill="#E5ECF2" />
          <polygon points="0,400 350,220 600,320 900,150 1200,220 1200,400" fill="#E5ECF2" opacity="0.5" />
        </svg>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-light/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-[1200px] mx-auto px-6 py-24 pt-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Left — headline */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-white/10 border border-white/20"
            >
              <MapPin size={14} className="text-orange" />
              <span className="font-body text-xs text-mist/80 tracking-wide">
                Perth-based · Australia-wide
              </span>
            </motion.div>

            {/* H1 */}
            <AnimatedH1
              text="Web Design, SEO & Branding Services in Perth That Actually Grow Your Business"
              className="text-mist text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]"
            />

            {/* H2 */}
            <motion.p
              variants={heroH2Variants}
              initial="hidden"
              animate="visible"
              className="font-body text-teal-light text-base sm:text-lg leading-relaxed max-w-[520px]"
            >
              AlpineRoot builds websites, drives SEO rankings, and creates
              brands for Perth businesses — no middlemen, no junior staff, no
              vague promises.
            </motion.p>

            {/* Key benefits list */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3 mt-2"
            >
              {[
                'Fixed-price quotes — no hourly billing surprises',
                'No lock-in contracts on ongoing services',
                'Direct access to the people doing the work',
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={staggerChild}
                  className="flex items-center gap-3 font-body text-sm text-mist/80"
                >
                  <Shield size={15} className="text-orange shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right — form card */}
          <motion.div
            variants={heroFormVariants}
            initial="hidden"
            animate="visible"
            className="
              bg-mist rounded-[24px] p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
              border border-white/20
            "
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                  <Shield size={32} className="text-teal" />
                </div>
                <h3 className="font-display text-navy text-2xl">
                  Enquiry Received!
                </h3>
                <p className="font-body text-teal text-sm">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-navy text-2xl mb-6">
                  Get a Free Quote
                </h2>

                <motion.form
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Name */}
                  <motion.div variants={staggerChild}>
                    <label className="block font-body text-xs font-semibold text-navy mb-1.5 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                      className="
                        w-full px-4 py-3 rounded-xl bg-white border border-navy/20 text-teal
                        font-body text-sm placeholder:text-navy/30
                        focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-200
                      "
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={staggerChild}>
                    <label className="block font-body text-xs font-semibold text-navy mb-1.5 tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@business.com.au"
                      className="
                        w-full px-4 py-3 rounded-xl bg-white border border-navy/20 text-teal
                        font-body text-sm placeholder:text-navy/30
                        focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-200
                      "
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={staggerChild}>
                    <label className="block font-body text-xs font-semibold text-navy mb-1.5 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="04xx xxx xxx"
                      className="
                        w-full px-4 py-3 rounded-xl bg-white border border-navy/20 text-teal
                        font-body text-sm placeholder:text-navy/30
                        focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-200
                      "
                    />
                  </motion.div>

                  {/* Service */}
                  <motion.div variants={staggerChild}>
                    <label className="block font-body text-xs font-semibold text-navy mb-1.5 tracking-wide">
                      Service Required *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="
                        w-full px-4 py-3 rounded-xl bg-white border border-navy/20 text-teal
                        font-body text-sm
                        focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-200
                        appearance-none cursor-pointer
                      "
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={staggerChild}>
                    <label className="block font-body text-xs font-semibold text-navy mb-1.5 tracking-wide">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Brief description of what you need..."
                      className="
                        w-full px-4 py-3 rounded-xl bg-white border border-navy/20 text-teal
                        font-body text-sm placeholder:text-navy/30 resize-none
                        focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-200
                      "
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={staggerChild}>
                    <Button
                      type="submit"
                      className="w-full justify-center mt-1"
                    >
                      Send My Enquiry
                    </Button>
                  </motion.div>
                </motion.form>
              </>
            )}

            {/* Trust badge */}
            <motion.div
              variants={heroTrustBadge}
              initial="hidden"
              animate="visible"
              className="mt-5 pt-5 border-t border-navy/10 flex items-center justify-center gap-3 flex-wrap"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange fill-orange" />
                ))}
              </div>
              <span className="font-body text-xs text-teal">
                Rated 5.0 on Google
              </span>
              <span className="text-teal-light/30">·</span>
              <span className="font-body text-xs text-teal">Perth-based</span>
              <span className="text-teal-light/30">·</span>
              <span className="font-body text-xs text-teal">
                No lock-in contracts
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
