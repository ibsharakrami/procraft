'use client';

import WelcomeText from './WelcomeText';
import ContactFormEdirect from './ContactFormEdirect';

export default function WelcomeFormSection() {
  return (
    <section data-theme="light" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-[100px] lg:px-[110px]">
        {/* Grid Layout: 50/50 split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Welcome Text */}
          <div className="flex items-start">
            <WelcomeText />
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactFormEdirect />
          </div>
        </div>
      </div>
    </section>
  );
}
