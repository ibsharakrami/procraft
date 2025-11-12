'use client';

import { useState } from 'react';
import { caseStudies, getCategories } from '@/data/caseStudies';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = getCategories();

  const filteredProjects =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((p) => p.category.includes(activeCategory));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#10367D] py-24 md:py-32 lg:py-40">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#74B4D9] text-sm md:text-base uppercase tracking-wider mb-4">
              Our Portfolio
            </p>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have helped businesses grow and thrive in the digital landscape.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12 sticky top-0 z-30 border-b border-gray-200">
        <Container size="wide">
          <div className="flex gap-4 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === cat
                    ? 'bg-[#10367D] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-16 md:py-24">
        <Container size="wide">
          <motion.div
            layout
            className="grid grid-cols-1 gap-16 md:gap-20 lg:gap-24"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="group cursor-pointer">
                    {/* Project Image */}
                    <div className="relative overflow-hidden mb-8 rounded-lg aspect-video md:aspect-[21/9]">
                      <img
                        src={project.thumbnailImage}
                        alt={`${project.title} - ${project.tagline} | ${project.category.join(', ')} project by ProCraft`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-[#10367D] text-sm uppercase tracking-wider mb-2">
                          {project.category.join(' · ')}
                        </p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-[#10367D] transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-lg">{project.tagline}</p>
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-2 text-[#10367D] font-medium group-hover:gap-4 transition-all duration-300">
                          View Case Study
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
