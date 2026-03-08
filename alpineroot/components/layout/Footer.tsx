import Image from 'next/image';
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

const SERVICES = [
  { label: 'Web Design Perth', href: '#web-dev' },
  { label: 'WordPress Maintenance', href: '#maintenance' },
  { label: 'SEO Services', href: '#seo' },
  { label: 'SEO Packages', href: '#seo-packages' },
  { label: 'Branding Services', href: '#branding' },
];

const COMPANY = [
  { label: 'About AlpineRoot', href: '#why-us' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog & Insights', href: '#blog' },
  { label: 'Contact', href: '#hero' },
];

const CONTACT = [
  { icon: Mail, label: 'info@rootalpine.com', href: 'mailto:info@rootalpine.com' },
  { icon: Phone, label: '+977 9840033691', href: 'tel:+9779840033691' },
  { icon: Globe, label: 'rootalpine.com', href: 'https://rootalpine.com' },
];

const SOCIAL = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-mist">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-white.svg"
              alt="AlpineRoot"
              width={160}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="font-body text-sm text-mist/60 leading-relaxed mb-6 max-w-[240px]">
              Web Design, SEO & Branding for Perth businesses. No middlemen, no
              vague promises.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                    text-mist hover:text-orange hover:bg-orange/10
                    transition-all duration-200 hover:scale-110
                  "
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-display text-orange text-xs tracking-[0.12em] uppercase font-semibold mb-5">
              Services
            </h5>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-mist/70 hover:text-orange transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-display text-orange text-xs tracking-[0.12em] uppercase font-semibold mb-5">
              Company
            </h5>
            <ul className="flex flex-col gap-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-mist/70 hover:text-orange transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-display text-orange text-xs tracking-[0.12em] uppercase font-semibold mb-5">
              Contact
            </h5>
            <ul className="flex flex-col gap-4">
              {CONTACT.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 font-body text-sm text-mist/70 hover:text-orange transition-colors duration-150 group"
                  >
                    <Icon
                      size={15}
                      className="shrink-0 group-hover:text-orange text-orange/60"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-mist/40">
            © 2026 Alpine Root Technologies · rootalpine.com
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-mist/40 hover:text-orange transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-mist/40 hover:text-orange transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
