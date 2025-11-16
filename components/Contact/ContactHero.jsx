'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroContent } from '@/data/contactData';

export default function ContactHero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#10367D] to-[#0a2454] py-20 md:py-24 lg:py-28"
      data-theme="dark"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <p className="text-[#74B4D9] uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 md:mb-8 font-urbanist">
            {heroContent.label}
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight font-blatant">
            {heroContent.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-10 md:mb-12 font-light font-urbanist leading-relaxed">
            {heroContent.subheadline}
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-white text-[#10367D] px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-[#74B4D9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl font-urbanist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {heroContent.cta.text}
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
