'use client';

import WelcomeText from './WelcomeText';
import ContactFormEdirect from './ContactFormEdirect';

export default function WelcomeFormSection() {
  return (
    <section data-theme="light" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-[100px] lg:px-[110px]">
        {/* Grid Layout: 30/70 split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Welcome Text (30%) */}
          <div className="flex items-start lg:col-span-3">
            <WelcomeText />
          </div>

          {/* Right Column - Contact Form (70%) */}
          <div className="lg:col-span-7">
            <ContactFormEdirect />
          </div>
        </div>
      </div>
    </section>
  );
}
