'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyTechnologies({ project }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
            Technologies Used
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-[#10367D] hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
