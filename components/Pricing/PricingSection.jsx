'use client';

import { pricingPackages } from '@/data/pricingData';

export default function PricingSection() {
  return (
    <section data-theme="light" className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Selecting Right Plan <br className="hidden md:block" />
            for Your Business
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl leading-relaxed">
            Our Pricing Plans Are Thoughtfully Crafted To Cater To Businesses Of All Sizes, From Startups And Small Enterprises To Large Corporations. Each Plan Comes With A Distinct Set Of Features And Benefits, Allowing You To Customize Your Experience And Investment According To Your Priorities.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {pricingPackages.map((pkg) => (
            <PricingCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ package: pkg }) {
  const isDark = pkg.theme === 'dark';

  return (
    <div className="relative">
      {/* SVG for custom shape with tab/notch - refined */}
      <svg width="0" height="0">
        <defs>
          <clipPath id={`card-shape-${pkg.id}`} clipPathUnits="objectBoundingBox">
            <path d="M 0.07,0 L 0.5,0 Q 0.54,0 0.56,0.01 L 0.68,0.035 Q 0.72,0.045 0.78,0.045 L 0.93,0.045 Q 1,0.045 1,0.115 L 1,0.93 Q 1,1 0.93,1 L 0.07,1 Q 0,1 0,0.93 L 0,0.07 Q 0,0 0.07,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div 
        className={`relative ${
          isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
        }`}
        style={{
          clipPath: `url(#card-shape-${pkg.id})`,
          border: isDark ? 'none' : '3px solid #EF4444',
        }}
      >
        <div className="p-8 md:p-10 lg:p-12">
        {/* Package Name */}
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {pkg.name}
        </h3>

        {/* Description */}
        <p className={`text-sm md:text-base mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {pkg.description}
        </p>

        {/* Features List */}
        <ul className="space-y-4 mb-10">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2" />
              <span className={`text-sm md:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mb-8">
          <p className={`text-xs md:text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Starting Price
          </p>
          <div className="flex items-baseline gap-1">
            <span className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              ${pkg.price}
            </span>
            <span className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {pkg.priceLabel}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-4 px-6 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 ${
            isDark
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
          }`}
        >
          {pkg.buttonText}
        </button>
        </div>
      </div>
    </div>
  );
}
