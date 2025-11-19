'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { contactInfo } from '@/data/contactData';

export default function ContactMap() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3756284529373!2d55.3017!3d25.2761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzM0LjAiTiA1NcKwMTgnMDYuMSJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`;

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#74B4D9] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-3 font-urbanist">
            Our Location
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-blatant">
            Visit Our Office in Dubai
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-urbanist">
            Located in Deira's Gold Souq Extension, we're easily accessible from all parts of Dubai.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Google Maps Embed */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProCraft Office Location - Gold Souq Extension, Deira, Dubai"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white rounded-xl shadow-2xl p-6 max-w-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#10367D] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-blatant">
                  ProCraft HQ
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-urbanist">
                  {contactInfo.address}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#10367D] hover:text-[#74B4D9] font-semibold text-sm transition-colors font-urbanist"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 font-urbanist">
            <span className="font-semibold">Parking:</span> Visitor parking available{' '}
            <span className="mx-2">•</span>
            <span className="font-semibold">Metro:</span> Gold Souq Station (2 min walk)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
