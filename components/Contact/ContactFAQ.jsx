'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { contactFaqs as faqs } from '@/data/contactData';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-[#74B4D9]" />
            <p className="text-[#74B4D9] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold font-urbanist">
              FAQ
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-blatant">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-urbanist text-lg">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#10367D]/30 transition-colors"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-bold text-gray-900 pr-8 font-blatant">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-6 h-6 transition-colors ${
                          isOpen ? 'text-[#10367D]' : 'text-gray-400'
                        }`}
                      />
                    </motion.div>
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <div className="border-t-2 border-gray-100 pt-6">
                            <p className="text-gray-700 leading-relaxed font-urbanist text-base md:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-50 rounded-2xl p-8 md:p-10">
            <p className="text-lg text-gray-700 mb-4 font-urbanist">
              Still have questions?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-[#10367D] hover:bg-[#10367D]/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl font-urbanist"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
