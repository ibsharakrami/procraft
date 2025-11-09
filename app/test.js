'use client';

import { motion } from 'framer-motion';
import BorderedSquare from '@/components/BorderedSquare';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            ProCraft
          </motion.div>
          <nav>
            <ul className="flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer hover:text-gray-400 transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:60px_60px] px-4  md:px-12  lg:bg-[size:75px_75px]">
          <div className="absolute inset-0 -z-10">
            <BorderedSquare className="w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900 to-black opacity-70" />
            </BorderedSquare>
          </div>
          
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Crafting Digital Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-24"
            >
              We create stunning digital experiences that drive results. Let's build something amazing together.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-8 py-10 border-2 border-amber-300 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-32">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies.'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful and intuitive interfaces that enhance user experience.'
              },
              {
                title: 'Mobile Apps',
                description: 'Cross-platform mobile applications for iOS and Android.'
              },
              {
                title: 'E-commerce',
                description: 'Complete e-commerce solutions to grow your online business.'
              },
              {
                title: 'Branding',
                description: 'Create a strong brand identity that stands out.'
              },
              {
                title: 'SEO & Marketing',
                description: 'Drive more traffic and increase your online visibility.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BorderedSquare className="h-full p-6 hover:bg-gray-900 transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </BorderedSquare>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-32 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} ProCraft. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
              <a 
                key={social} 
                href={`#${social.toLowerCase()}`} 
                className="hover:text-gray-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

