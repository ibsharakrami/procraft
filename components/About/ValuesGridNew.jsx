'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { coreValues } from '@/data/aboutData';
import { useState } from 'react';

export default function ValuesGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const activeValue = coreValues[activeTab];

  return (
    <section data-theme="light" className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-xs md:text-sm uppercase tracking-wider text-gray-400 font-medium mb-4">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            What Drives Us Forward
          </h2>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 border-b border-gray-200">
            {coreValues.map((value, index) => {
              const isActive = activeTab === index;

              return (
                <motion.button
                  key={value.id}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 md:px-8 md:py-4 transition-all duration-300 ${
                    isActive
                      ? 'text-black'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {/* Title */}
                  <span className="text-sm md:text-base lg:text-lg font-semibold">
                    {value.title}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-gray-500 font-medium"
              >
                {activeValue.tagline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                {activeValue.description}
              </motion.p>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4"
              >
                {activeValue.keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2" />
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
