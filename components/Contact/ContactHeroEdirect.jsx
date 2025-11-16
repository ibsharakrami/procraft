'use client';

import { motion } from 'framer-motion';
import { contactInfo } from '@/data/contactData';

export default function ContactHeroEdirect() {
  return (
    <section
      className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center bg-[#F5F5F5] overflow-hidden"
      data-theme="light"
    >
      {/* Dotted World Map Pattern Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#10367D" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Phone Number - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-8 md:top-10 lg:top-12 right-8 md:right-12 lg:right-16"
      >
        <a
          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
          className="text-sm md:text-base text-gray-700 hover:text-[#10367D] transition-colors font-semibold tracking-wide font-urbanist"
        >
          {contactInfo.phone}
        </a>
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-[100px] lg:px-[110px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <p className="text-gray-400 uppercase tracking-[0.4em] text-xs md:text-sm font-light mb-4 md:mb-6 font-urbanist">
            CONTACT US
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 md:mb-6 leading-tight font-blatant">
            GET IN TOUCH!
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8 leading-snug font-blatant">
            WE'D LOVE TO HEAR FROM YOU
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-urbanist leading-relaxed">
            Our office is nestled in the heart of Business Bay, Dubai - a perfect environment to let creativity flow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
