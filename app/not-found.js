'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10367D] via-[#0a2550] to-[#10367D] flex items-center justify-center px-6 pt-20 md:pt-0">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-pattern-404"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#74B4D9" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-404)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold text-white/10 leading-none font-blatant">
              404
            </h1>
            <div className="relative -mt-24 md:-mt-32 lg:-mt-40">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-blatant">
                PAGE NOT FOUND
              </h2>
              <div className="w-24 h-1 bg-[#74B4D9] mx-auto mb-6"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-urbanist leading-relaxed"
          >
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry though, we'll help you get back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Go Home Button */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#74B4D9] text-white rounded-lg font-semibold hover:bg-white hover:text-[#10367D] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-urbanist"
            >
              <Home className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Go to Homepage
            </Link>

            {/* Go Back Button */}
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-lg font-semibold hover:bg-white hover:text-[#10367D] hover:border-white transition-all duration-300 font-urbanist"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="w-5 h-5 text-[#74B4D9]" />
              <p className="text-sm uppercase tracking-wider text-white/60 font-urbanist">
                Popular Pages
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Work', href: '/work' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-[#74B4D9] transition-colors duration-300 font-urbanist text-sm md:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 left-10 w-32 h-32 bg-[#74B4D9] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#74B4D9] rounded-full blur-3xl"
      />
    </main>
  );
}
