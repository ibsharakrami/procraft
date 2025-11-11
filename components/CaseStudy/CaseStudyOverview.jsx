'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { ExternalLink } from 'lucide-react';

export default function CaseStudyOverview({ project }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Overview
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              {project.description}
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              The Challenge
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          {/* Metadata Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                {/* Client */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Client
                  </h4>
                  <p className="text-black font-medium">{project.client}</p>
                </div>

                {/* Year */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Year
                  </h4>
                  <p className="text-black font-medium">{project.year}</p>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Services
                  </h4>
                  <ul className="space-y-1">
                    {project.services.map((service, i) => (
                      <li key={i} className="text-black">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#10367D] hover:text-[#74B4D9] transition-colors font-medium mt-6"
                  >
                    Visit Live Site
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
