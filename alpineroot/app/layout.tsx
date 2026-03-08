import type { Metadata } from 'next';
import './globals.css';

// Fonts are loaded via @font-face in globals.css
// Place TheRetroFontDemo.woff2 and MicrosoftTaiLe.woff2 in /public/fonts/

export const metadata: Metadata = {
  title: 'Web Design Perth | SEO & Branding Services | AlpineRoot',
  description:
    'AlpineRoot builds websites, drives SEO, and creates brands for Perth businesses. WordPress, custom web development & digital growth — get a free quote.',
  keywords:
    'web design Perth, SEO services Perth, branding Perth, WordPress website design, custom web development Australia',
  authors: [{ name: 'Alpine Root Technologies' }],
  metadataBase: new URL('https://rootalpine.com'),
  alternates: { canonical: 'https://rootalpine.com/' },
  openGraph: {
    type: 'website',
    url: 'https://rootalpine.com/',
    title: 'Web Design Perth | SEO & Branding Services | AlpineRoot',
    description:
      'AlpineRoot builds websites, drives SEO, and creates brands for Perth businesses. WordPress, custom web development & digital growth — get a free quote.',
    siteName: 'Alpine Root Technologies',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Alpine Root Technologies — Web Design, SEO & Branding Perth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Perth | SEO & Branding Services | AlpineRoot',
    description:
      'AlpineRoot builds websites, drives SEO, and creates brands for Perth businesses.',
    images: ['/images/og-homepage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Alpine Root Technologies',
      url: 'https://rootalpine.com',
      logo: 'https://rootalpine.com/images/logo.svg',
      image: 'https://rootalpine.com/images/og-homepage.jpg',
      telephone: '+977-9840033691',
      email: 'info@rootalpine.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perth',
        addressRegion: 'WA',
        addressCountry: 'AU',
      },
      areaServed: ['Perth', 'Melbourne', 'Sydney', 'Brisbane', 'Australia'],
      priceRange: '$$',
      sameAs: [],
    },
    {
      '@type': 'Service',
      name: 'Web Design & Development Perth',
      provider: { '@type': 'LocalBusiness', name: 'Alpine Root Technologies' },
      areaServed: 'Perth, WA',
      description:
        'WordPress website design, custom web development, and eCommerce websites for Perth businesses.',
    },
    {
      '@type': 'Service',
      name: 'SEO Services Perth',
      provider: { '@type': 'LocalBusiness', name: 'Alpine Root Technologies' },
      areaServed: 'Perth, WA',
    },
    {
      '@type': 'Service',
      name: 'Branding Services Perth',
      provider: { '@type': 'LocalBusiness', name: 'Alpine Root Technologies' },
      areaServed: 'Perth, WA',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a website cost in Perth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Web design costs in Perth range from around $999 for a straightforward small business WordPress site, to $5,000+ for custom-built sites with complex functionality. AlpineRoot provides fixed-price quotes based on a defined scope.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does SEO take to show results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For local SEO in Perth targeting suburb-level or specific service terms with low-to-medium competition, measurable ranking improvements typically appear within 3–4 months. For competitive terms, ranking in the top 5 is a 6–12+ month project.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a logo and a brand identity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A logo is the mark — the graphic symbol representing your business. A brand identity is the complete system: colour palette, typography, tone of voice, and usage rules. A logo without a brand identity is just an image.',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      url: 'https://rootalpine.com',
      name: 'Alpine Root Technologies',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://rootalpine.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
