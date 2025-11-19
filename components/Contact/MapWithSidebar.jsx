'use client';

import { motion } from 'framer-motion';
import OfficeInfo from './OfficeInfo';
import { contactInfo } from '@/data/contactData';

export default function MapWithSidebar() {
  const mapUrl = `https://maps.google.com/maps?q=25.2761,55.3017&hl=en&z=15&output=embed`;

  return (
    <section data-theme="light" className="relative py-8 md:py-0">
      {/* Container with grid constraints */}
      <div className="max-w-[1920px] mx-auto px-[83px] md:px-[100px] lg:px-[110px]">
        {/* Grid Layout: 40/60 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left Sidebar - Office Info (40%) */}
          <div className="lg:col-span-2 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <OfficeInfo />
          </div>

          {/* Right Map (60%) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProCraft Office Location - Gold Souq Extension, Deira, Dubai"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
