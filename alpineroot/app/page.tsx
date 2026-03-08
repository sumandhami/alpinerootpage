import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WebDev from '@/components/sections/WebDev';
import Maintenance from '@/components/sections/Maintenance';
import SEOServices from '@/components/sections/SEOServices';
import SEOPackages from '@/components/sections/SEOPackages';
import Branding from '@/components/sections/Branding';
import Industries from '@/components/sections/Industries';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Process from '@/components/sections/Process';
import Reviews from '@/components/sections/Reviews';
import ServiceAreas from '@/components/sections/ServiceAreas';
import Portfolio from '@/components/sections/Portfolio';
import Blog from '@/components/sections/Blog';
import FAQs from '@/components/sections/FAQs';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — teal bg */}
        <Hero />

        {/* 1 — LIGHT: Website Design & Development */}
        <WebDev />

        {/* 2 — DARK: WordPress Maintenance & Care Plans */}
        <Maintenance />

        {/* 3 — LIGHT: SEO Services */}
        <SEOServices />

        {/* 4 — DARK: SEO Packages */}
        <SEOPackages />

        {/* 5 — LIGHT: Branding Services */}
        <Branding />

        {/* 6 — DARK: Industries We Serve */}
        <Industries />

        {/* 7 — LIGHT: Why Choose AlpineRoot */}
        <WhyChooseUs />

        {/* 8 — DARK: Our Process */}
        <Process />

        {/* 9 — LIGHT: Customer Reviews */}
        <Reviews />

        {/* 10 — DARK: Service Areas */}
        <ServiceAreas />

        {/* 11 — LIGHT: Portfolio */}
        <Portfolio />

        {/* 12 — DARK: Latest Insights */}
        <Blog />

        {/* 13 — LIGHT: FAQs */}
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
