'use client';

import Container from '@/components/ui/Container';
import ContactForm from './ContactForm';
import ContactSidebar from './ContactSidebar';

export default function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="py-16 md:py-24 lg:py-32 bg-gray-50"
    >
      <Container>
        {/* Grid Layout: 60/40 split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form Column (60% on desktop - 3/5) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar Column (40% on desktop - 2/5) */}
          <div className="lg:col-span-2">
            <ContactSidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
