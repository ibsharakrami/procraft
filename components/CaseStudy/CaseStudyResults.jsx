'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyResults({ project }) {
  // Convert results object to array of metrics
  const metrics = Object.entries(project.results).map(([key, value]) => ({
    label: key
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/^./, (str) => str.toUpperCase()),
    value: value,
  }));

  return (
    <section className="bg-gradient-to-b from-[#10367D] to-black py-16 md:py-24">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#74B4D9] mb-3">
                  {metric.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
