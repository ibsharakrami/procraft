'use client';

import { motion } from 'framer-motion';

export default function LocationTabs() {
  return (
    <section data-theme="light" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-[100px] lg:px-[110px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          {/* Single Static Tab */}
          <div className="relative">
            <span className="inline-block px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-medium text-gray-900 tracking-wider lowercase font-urbanist cursor-default">
              dubai
            </span>
            {/* Active Underline */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#10367D]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
