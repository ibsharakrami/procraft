'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Mail, Phone, Smartphone } from 'lucide-react';
import { contactInfo } from '@/data/contactData';

export default function OfficeInfo() {
  const officeDetails = [
    { label: 'Office', value: 'Business Bay', icon: Building2 },
    { label: 'Area', value: 'Business Bay, Dubai', icon: MapPin },
    { label: 'City', value: 'Dubai', icon: null },
    { label: 'Country', value: 'United Arab Emirates', icon: null },
  ];

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: '#10367D'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+971 4 564 8887',
      href: 'tel:+97145648887',
      color: '#10367D'
    },
    {
      icon: Smartphone,
      label: 'Mobile',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      color: '#74B4D9'
    },
  ];

  return (
    <div className="relative h-full bg-white">
      {/* Blue Accent Line */}
      <div className="absolute left-[83px] top-0 bottom-0 w-1 bg-[#10367D]"></div>

      {/* Content */}
      <div className="p-8 md:p-12 lg:p-16 pl-[100px] md:pl-[116px] lg:pl-[130px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:space-y-10"
        >
          {/* Label */}
          <div>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-xs md:text-sm font-light mb-4 font-urbanist">
              LOCAL OFFICE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#10367D] lowercase font-blatant leading-tight">
              dubai, uae
            </h2>
          </div>

          {/* Office Address Details */}
          <div className="space-y-4">
            {officeDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  {Icon && (
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-[#10367D]" />
                    </div>
                  )}
                  <div className={Icon ? '' : 'ml-9'}>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1 font-urbanist">
                      {detail.label}
                    </p>
                    <p className="text-base font-medium text-gray-900 font-urbanist">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactDetails.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                  whileHover={{ x: 3 }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${contact.color}15` }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors"
                      style={{ color: contact.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5 font-urbanist">
                      {contact.label}
                    </p>
                    <p className="text-sm md:text-base font-medium text-gray-900 group-hover:text-[#10367D] transition-colors font-urbanist">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
