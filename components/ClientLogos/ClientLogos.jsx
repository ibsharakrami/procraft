'use client';

import { clientLogos } from '@/data/clientLogos';
import Image from 'next/image';

export default function ClientLogos() {
  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <>
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-left {
          animation: scrollLeft 40s linear infinite;
        }

        .marquee-right {
          animation: scrollRight 40s linear infinite;
        }

        .marquee-container:hover .marquee-left,
        .marquee-container:hover .marquee-right {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .marquee-left,
          .marquee-right {
            animation-duration: 50s;
          }
        }

        @media (min-width: 1024px) {
          .marquee-left,
          .marquee-right {
            animation-duration: 30s;
          }
        }
      `}</style>

      <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.3em] font-urbanist">
              We're grateful to work with incredible clients
            </h2>
          </div>

          {/* Marquee Rows Container */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {/* First Row - Scrolling Left */}
            <div className="marquee-container overflow-hidden">
              <div className="marquee-left flex items-center">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`left-${logo.id}-${index}`}
                    className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12 transition-all duration-300"
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
              </div>
            </div>

            {/* Second Row - Scrolling Right (Hidden on Mobile) */}
            <div className="marquee-container overflow-hidden hidden md:block">
              <div className="marquee-right flex items-center">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`right-${logo.id}-${index}`}
                    className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12 transition-all duration-300"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
