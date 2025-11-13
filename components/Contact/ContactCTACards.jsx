'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ctaCards } from '@/data/contactData';

const iconMap = {
  Calendar,
  MessageCircle,
  Mail
};

export default function ContactCTACards() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#74B4D9] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-3 font-urbanist">
            Quick Actions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-blatant">
            Other Ways to Reach Us
          </h2>
        </motion.div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ctaCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.a
                key={card.id}
                href={card.action}
                target={card.id === 'whatsapp' ? '_blank' : undefined}
                rel={card.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#10367D]/20"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#10367D] group-hover:bg-[#74B4D9] flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-blatant group-hover:text-[#10367D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 font-urbanist leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <div className="flex items-center gap-2 text-[#10367D] font-semibold group-hover:gap-4 transition-all duration-300 font-urbanist">
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#10367D]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
