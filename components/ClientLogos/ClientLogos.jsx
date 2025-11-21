'use client';

import { clientLogos } from '@/data/clientLogos';
import Image from 'next/image';
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '@/registry/magicui/scroll-based-velocity';

export default function ClientLogos() {
  return (
    <section data-theme="light" className="bg-white py-16 md:py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-[96px]">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {/* Label */}
            <div className="flex justify-center mb-4">
              <span className='inline-block text-xs md:text-sm uppercase tracking-wider text-[#74B4D9] font-light border-l-4 border-[#74B4D9] pl-4'>
                Our Clients
              </span>
            </div>
            {/* Heading */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-blatant'>
              Trusted by <span className='text-[#10367D]'>Amazing</span> Brands
            </h2>
          </div>

          {/* Scroll-Velocity Logo Rows */}
          <ScrollVelocityContainer className="w-full">
            {/* First Row - Scroll down=right, up=left */}
            <ScrollVelocityRow baseVelocity={0.7} direction={1} className="py-4 md:py-6">
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                >
                  {logo.website ? (
                    <a
                      href={logo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                        <Image
                          src={logo.logo}
                          alt={`${logo.name} - ProCraft client logo | Digital agency Dubai`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Image
                        src={logo.logo}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                      />
                    </div>
                  )}
                </div>
              ))}
            </ScrollVelocityRow>

            {/* Second Row - Scroll down=left, up=right (OPPOSITE) */}
            <ScrollVelocityRow baseVelocity={0.7} direction={-1} className="py-4 md:py-6">
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                >
                    {logo.website ? (
                      <a
                        href={logo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                          <Image
                            src={logo.logo}
                            alt={`${logo.name} - ProCraft client logo | Digital agency Dubai`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <Image
                          src={logo.logo}
                          alt={logo.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>

        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 md:w-1/6 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 md:w-1/6 bg-gradient-to-l from-white to-transparent"></div>
      </section>
  );
}
