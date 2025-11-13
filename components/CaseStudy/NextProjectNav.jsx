'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight } from 'lucide-react';

export default function NextProjectNav({ currentSlug }) {
  // Find current project index
  const currentIndex = caseStudies.findIndex((p) => p.slug === currentSlug);

  // Get next project (loop back to first if at end)
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  const nextProject = caseStudies[nextIndex];

  return (
    <section data-theme="dark" className="relative overflow-hidden">
      <Link href={`/work/${nextProject.slug}`}>
        <motion.div
          className="relative min-h-[60vh] flex items-center justify-center cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${nextProject.thumbnailImage})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/70 text-sm uppercase tracking-wider mb-4">
                Next Project
              </p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {nextProject.title}
              </h2>
              <div className="flex items-center justify-center gap-3 text-[#74B4D9] text-lg group-hover:gap-5 transition-all duration-300">
                <span>View Case Study</span>
                <ArrowRight size={24} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
