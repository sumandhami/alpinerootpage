'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const DROP_WEB = [
  { label: 'WordPress Development', href: '#web-dev' },
  { label: 'Custom Development', href: '#web-dev' },
  { label: 'eCommerce Websites', href: '#web-dev' },
  { label: 'Website Redesigns', href: '#web-dev' },
  { label: 'Care Plans', href: '#maintenance' },
];

const DROP_SEO = [
  { label: 'Local SEO Perth', href: '#seo' },
  { label: 'eCommerce SEO', href: '#seo' },
  { label: 'Technical SEO & Audits', href: '#seo' },
  { label: 'SEO Content Writing', href: '#seo' },
  { label: 'SEO Packages', href: '#seo-packages' },
];

const DROP_BRAND = [
  { label: 'Logo Design', href: '#branding' },
  { label: 'Brand Strategy', href: '#branding' },
  { label: 'Branding Packages', href: '#branding' },
];

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'Web Design', href: '#web-dev', id: 'web-dev', dropdown: DROP_WEB },
  { label: 'SEO', href: '#seo', id: 'seo', dropdown: DROP_SEO },
  { label: 'Branding', href: '#branding', id: 'branding', dropdown: DROP_BRAND },
  { label: 'Industries', href: '#industries', id: 'industries' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'Blog', href: '#blog', id: 'blog' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-[68px]
          bg-mist border-b border-mist-dark
          transition-all duration-300
          ${scrolled ? 'backdrop-blur-[12px] shadow-card bg-mist/95' : ''}
        `}
      >
        <nav className="h-full max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="shrink-0 flex items-center"
            aria-label="AlpineRoot home"
          >
            <Image
              src="/images/logo.svg"
              alt="AlpineRoot"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop nav */}
          <div
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() =>
                    item.dropdown
                      ? setOpenDropdown(
                          openDropdown === item.id ? null : item.id
                        )
                      : scrollTo(item.href)
                  }
                  onMouseEnter={() =>
                    item.dropdown ? setOpenDropdown(item.id) : undefined
                  }
                  className={`
                    flex items-center gap-1 px-3 py-2 rounded-lg font-body text-[0.875rem] font-medium tracking-[0.03em]
                    transition-colors duration-150 whitespace-nowrap
                    ${
                      activeSection === item.id
                        ? 'text-orange border-b-2 border-orange pb-[6px]'
                        : 'text-navy hover:text-orange'
                    }
                  `}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0, y: -4 }}
                      animate={{ opacity: 1, scaleY: 1, y: 0 }}
                      exit={{ opacity: 0, scaleY: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      style={{ transformOrigin: 'top' }}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="
                        absolute top-full left-0 mt-1 min-w-[220px]
                        bg-navy rounded-xl shadow-hover overflow-hidden z-50
                        border border-white/5
                      "
                    >
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => scrollTo(sub.href)}
                          className="
                            w-full text-left px-4 py-3 font-body text-sm text-mist
                            hover:text-orange hover:border-l-2 hover:border-l-orange hover:pl-[14px]
                            border-b border-white/5 last:border-b-0
                            transition-all duration-150
                          "
                        >
                          {sub.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden lg:inline-flex whitespace-nowrap"
              onClick={() => scrollTo('#hero')}
            >
              Get a Free Quote
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-navy hover:text-orange transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-navy/60 z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="
                fixed top-0 right-0 bottom-0 w-[300px] z-50 lg:hidden
                bg-navy flex flex-col pt-[68px] pb-8 px-6 overflow-y-auto
              "
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-2 text-mist/60 hover:text-orange"
              >
                <X size={24} />
              </button>

              <nav className="flex flex-col gap-1 mt-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className={`
                        w-full text-left px-4 py-3 font-body text-[0.95rem] font-medium rounded-lg
                        transition-colors duration-150
                        ${activeSection === item.id ? 'text-orange' : 'text-mist hover:text-orange'}
                      `}
                    >
                      {item.label}
                    </button>
                    {item.dropdown &&
                      item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => scrollTo(sub.href)}
                          className="
                            w-full text-left px-8 py-2 font-body text-sm text-mist/60
                            hover:text-orange transition-colors
                          "
                        >
                          {sub.label}
                        </button>
                      ))}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-white/10">
                <Button
                  className="w-full justify-center"
                  onClick={() => scrollTo('#hero')}
                >
                  Get a Free Quote
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
