'use client';

import { motion } from 'framer-motion';
import OfficeInfo from './OfficeInfo';
import { contactInfo } from '@/data/contactData';

export default function MapWithSidebar() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2847374477673!2d55.2567!3d25.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzE0LjAiTiA1NcKwMTYnMjcuOCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae`;

  return (
    <section data-theme="light" className="relative">
      {/* Grid Layout: 40/60 split */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
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
    </section>
  );
}
