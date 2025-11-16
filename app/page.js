'use client';

import Script from 'next/script';
import ServicesSection from "@/components/Services/ServiceSection";
import Portfolio from '@/components/Portfolio/Portfolio';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import PricingSection from '@/components/Pricing/PricingSection';
import TestimonialsCarousel from '@/components/Testimonials/TestimonialsCarousel';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { useNavigationTheme } from '@/hooks/useNavigationTheme';
import { useState, useEffect } from 'react';

export default function Home() {
  const { topTheme } = useNavigationTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection to hide fixed phone number when navbar is visible
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
          <section
            data-theme="dark"
            className="relative min-h-screen flex items-center justify-center overflow-hidden "
            aria-label="Hero section"
          >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="ProCraft creative digital agency showreel"
          style={{ contentVisibility: 'auto' }}
        >
          <source src="/bg-video-herosection-homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay - Primary Blue with opacity */}
        <div className="absolute inset-0 bg-[#10367D]/70" />

        {/* Contact Info - Top Right - Fixed Position - Hidden on mobile (below 768px) and when scrolled on desktop */}
        <div className={`hidden md:fixed top-8 md:top-10 right-8 md:right-16 z-60 transition-opacity duration-300 ${isScrolled ? 'md:opacity-0 md:pointer-events-none' : 'md:opacity-100'}`}>
          <a
            href="tel:+971545866866"
            className={`text-[11px] md:text-xs hover:text-white transition-colors duration-300 font-light tracking-wider ${topTheme === 'dark' ? 'text-white/80' : 'text-[#10367D]/80'}`}
          >
            +971 545 866 866
          </a>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="w-full  ">
            {/* Small intro text */}
            <div className="">
              <p className="text-white text-xl px-4 tracking-wide font-normal mb-6">
                we are procraft
              </p>
            </div>

            {/* Main Heading Line 1 */}
            <div>
              <h1 className="text-white text-3xl px-4  md:text-[68px] lg:text-[80px] xl:text-[92px] font-bold leading-none tracking-wide uppercase">
                A CREATIVE DIGITAL
              </h1>
            </div>

            {/* Main Heading Line 2 */}
            <div className="mb-4">
              <h1 className="text-white text-3xl px-4 sm:text-[50px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-bold leading-none tracking-wide uppercase">
                GROWTH AGENCY
              </h1>
            </div>

            {/* Subheading */}
            <div className="">
              <p className="text-white px-4 text-sm md:text-base lg:text-lg font-semibold tracking-wide ">
                transforming ideas into digital success stories
              </p>
            </div>

            {/* Services Text - Positioned at bottom */}
            <div className="absolute bottom-8 px-4  w-auto">
              <div className="flex flex-col gap-2">
                <p className="text-white md:text-md text-sm  tracking-[0.15em] leading-relaxed font-semibold uppercase">
                  STRATEGIC CONSULTING
                </p>
                <p className="text-white md:text-md text-sm  tracking-[0.15em] leading-relaxed font-semibold uppercase">
                  CREATIVE DESIGN
                </p>
                <p className="text-white md:text-md text-sm tracking-[0.15em] leading-relaxed font-semibold uppercase">
                  TECHNICAL EXCELLENCE
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Bottom Center (Mobile) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce md:hidden">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Services / How Can We Help Section */}
      <ServicesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* WebPage Schema Markup */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://procraft.ae/#webpage",
            "url": "https://procraft.ae",
            "name": "ProCraft - Creative Digital Growth Agency in Dubai",
            "description": "Award-winning creative digital agency in Dubai specializing in business consulting, web design, e-commerce, digital marketing, SEO, and branding. Transform your business with strategic growth solutions.",
            "inLanguage": "en-AE",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://procraft.ae/#website",
              "url": "https://procraft.ae",
              "name": "ProCraft",
              "description": "Creative Digital Growth Agency in Dubai",
              "publisher": {
                "@id": "https://procraft.ae/#organization"
              }
            },
            "about": {
              "@type": "Organization",
              "@id": "https://procraft.ae/#organization",
              "name": "ProCraft",
              "url": "https://procraft.ae",
              "logo": "https://procraft.ae/images/Pro-Create-icon@3x-8.png",
              "sameAs": [
                "https://www.linkedin.com/company/procraft",
                "https://www.instagram.com/procraft",
                "https://www.facebook.com/procraft"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://procraft.ae"
                }
              ]
            },
            "mainEntity": {
              "@type": "ProfessionalService",
              "@id": "https://procraft.ae/#organization",
              "name": "ProCraft",
              "telephone": "+971-545-866-866",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business Bay",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://procraft.ae/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>

  );
}

