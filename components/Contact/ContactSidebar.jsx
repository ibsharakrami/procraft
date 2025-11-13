'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/contactData';

export default function ContactSidebar() {
  // Check if office is currently open
  const isOfficeOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();

    // Office hours: Sunday-Thursday, 9am-6pm GST
    // Friday-Saturday: Closed
    if (day === 5 || day === 6) return false; // Friday or Saturday
    if (hour >= 9 && hour < 18) return true; // 9am - 6pm
    return false;
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Call Us',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      color: '#10367D'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: '#74B4D9'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: contactInfo.address,
      href: `https://www.google.com/maps/search/?api=1&query=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`,
      color: '#10367D'
    }
  ];

  const iconMap = {
    Facebook,
    Twitter,
    Linkedin,
    Instagram
  };

  return (
    <div className="space-y-6">
      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-blatant">
          Get In Touch
        </h3>

        <div className="space-y-5">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target={item.icon === MapPin ? '_blank' : undefined}
                rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1 font-semibold font-urbanist">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-gray-900 group-hover:text-[#10367D] transition-colors font-urbanist">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Office Hours Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-br from-[#10367D] to-[#0a2454] rounded-2xl shadow-lg p-6 md:p-8 text-white"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-blatant">
            Office Hours
          </h3>
        </div>

        <div className="space-y-4">
          {/* Weekdays */}
          <div className="flex justify-between items-start pb-4 border-b border-white/20">
            <div>
              <p className="font-semibold text-white/90 font-urbanist">
                {contactInfo.officeHours.weekdays.days}
              </p>
              <p className="text-sm text-white/70 font-urbanist">
                {contactInfo.officeHours.weekdays.hours}
              </p>
            </div>
          </div>

          {/* Weekend */}
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-white/90 font-urbanist">
                {contactInfo.officeHours.weekend.days}
              </p>
              <p className="text-sm text-white/70 font-urbanist">
                {contactInfo.officeHours.weekend.hours}
              </p>
            </div>
          </div>

          {/* Current Status */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  isOfficeOpen() ? 'bg-green-400' : 'bg-red-400'
                } animate-pulse`}
              />
              <p className="text-sm font-medium font-urbanist">
                {isOfficeOpen() ? 'We\'re Open Now' : 'Currently Closed'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 font-blatant">
          Follow Us
        </h3>

        <div className="flex gap-3">
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#10367D] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
