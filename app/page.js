'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import ServicesSection from "@/components/Services/ServiceSection";
import Portfolio from '@/components/Portfolio/Portfolio';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8; // 80vh
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
          <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-blue"
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

        {/* Contact Info - Top Right - Fixed Position */}
        <div className="fixed top-8 md:top-10 right-8 md:right-16 z-60">
          <a
            href="tel:+971545866866"
            className={`text-[11px] md:text-xs transition-colors duration-300 font-light tracking-wider ${
              isScrolled
                ? 'text-gray-900/70 hover:text-gray-900'
                : 'text-white/70 hover:text-white'
            }`}
          >
            +971 545 866 866
          </a>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="w-full pl-24 md:pl-32 pr-6 md:pr-12 lg:pr-20">
            {/* Small intro text */}
            <div className="mb-8 md:mb-10">
              <p className="text-white text-sm md:text-base tracking-wide font-normal">
                we are procraft
              </p>
            </div>

            {/* Main Heading Line 1 */}
            <div>
              <h1 className="text-white text-[36px] sm:text-[50px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-bold leading-none tracking-wide uppercase">
                A CREATIVE DIGITAL
              </h1>
            </div>

            {/* Main Heading Line 2 */}
            <div className="mb-8 md:mb-10">
              <h1 className="text-white text-[36px] sm:text-[50px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-bold leading-none tracking-wide uppercase">
                GROWTH AGENCY
              </h1>
            </div>

            {/* Subheading */}
            <div className="mb-8 md:mb-10">
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold tracking-wide">
                transforming ideas into digital success stories
              </p>
            </div>

            {/* Services Text */}
            <div className="mb-1">
              <p className="text-white text-[10px] md:text-xs tracking-[0.15em] leading-relaxed font-semibold uppercase">
                STRATEGIC CONSULTING
              </p>
            </div>
            <div className="mb-1">
              <p className="text-white text-[10px] md:text-xs tracking-[0.15em] leading-relaxed font-semibold uppercase">
                CREATIVE DESIGN
              </p>
            </div>
            <div>
              <p className="text-white text-[10px] md:text-xs tracking-[0.15em] leading-relaxed font-semibold uppercase">
                TECHNICAL EXCELLENCE
              </p>
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

