'use client';

import { useState, useEffect } from 'react';
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
          preload="metadata"
          poster="/images/hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="ProCraft creative digital agency showreel"
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
              <p className="text-white text-base md:text-lg tracking-wide font-normal">
                we are procraft
              </p>
            </div>

            {/* Main Heading Line 1 */}
            <div>
              <h1 className="text-white text-[42px] sm:text-[60px] md:text-[80px] lg:text-[95px] xl:text-[110px] font-bold leading-none tracking-wide uppercase">
                A CREATIVE DIGITAL
              </h1>
            </div>

            {/* Main Heading Line 2 */}
            <div className="mb-8 md:mb-10">
              <h1 className="text-white text-[42px] sm:text-[60px] md:text-[80px] lg:text-[95px] xl:text-[110px] font-bold leading-none tracking-wide uppercase">
                GROWTH AGENCY
              </h1>
            </div>

            {/* Subheading */}
            <div className="mb-8 md:mb-10">
              <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
                transforming ideas into digital success stories
              </p>
            </div>

            {/* Services Text */}
            <div className="mb-1">
              <p className="text-white text-[11px] md:text-[13px] tracking-[0.15em] leading-relaxed font-semibold uppercase">
                STRATEGIC CONSULTING
              </p>
            </div>
            <div className="mb-1">
              <p className="text-white text-[11px] md:text-[13px] tracking-[0.15em] leading-relaxed font-semibold uppercase">
                CREATIVE DESIGN
              </p>
            </div>
            <div>
              <p className="text-white text-[11px] md:text-[13px] tracking-[0.15em] leading-relaxed font-semibold uppercase">
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

    </>

  );
}

