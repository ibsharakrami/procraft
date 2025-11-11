'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudyHero({ project }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Breadcrumb */}
      <div className="absolute top-8 left-8 md:left-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-white">{project.title}</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-[#74B4D9] text-sm md:text-base uppercase tracking-wider mb-4">
            {project.category.join(' · ')}
          </p>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-white/80 text-xl md:text-2xl">
            {project.tagline}
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
