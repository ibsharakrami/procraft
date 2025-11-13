'use client';

import { motion } from 'framer-motion';

export default function WelcomeText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black lowercase leading-tight font-urbanist">
        we welcome you to start your project.
      </h2>

      {/* Label */}
      <div>
        <p className="text-[#10367D] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 font-urbanist">
          new business enquiries
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-urbanist">
          Each project is a new opportunity to bring your vision to life. Let us inspire you by discussing your creative goals and business needs.
        </p>
      </div>

      {/* Call to Action */}
      <div className="pt-4">
        <a
          href="#contact-form"
          className="inline-block text-[#10367D] hover:text-[#74B4D9] font-semibold text-base md:text-lg transition-colors duration-300 font-urbanist"
        >
          book a consultation →
        </a>
      </div>

      {/* Additional Info */}
      <div className="pt-8 border-t border-gray-200 space-y-3">
        <p className="text-sm text-gray-500 font-urbanist">
          <span className="font-semibold">Response Time:</span> Within 24 hours
        </p>
        <p className="text-sm text-gray-500 font-urbanist">
          <span className="font-semibold">Consultation:</span> Free 30-minute discovery call
        </p>
      </div>
    </motion.div>
  );
}
