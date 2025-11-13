'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export default function CaseStudySolution({ project }) {
  return (
    <section data-theme="light" className="bg-[#EBEBEB] py-16 md:py-24">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
            Our Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.solution.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 items-start bg-white p-6"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#10367D] flex items-center justify-center">
                  <Check className="text-white" size={16} />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
