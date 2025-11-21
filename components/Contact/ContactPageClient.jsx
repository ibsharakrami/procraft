'use client';

import { Toaster } from 'react-hot-toast';
import ContactHeroEdirect from './ContactHeroEdirect';
import LocationTabs from './LocationTabs';
import MapWithSidebar from './MapWithSidebar';
import WelcomeFormSection from './WelcomeFormSection';
import ContactFAQ from './ContactFAQ';

export default function ContactPageClient() {
  return (
    <main className="overflow-hidden">
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '16px',
            fontFamily: 'var(--font-urbanist)'
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff'
            }
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff'
            }
          }
        }}
      />

      {/* Page Sections - edirect.ae Structure */}
      <ContactHeroEdirect />
      <LocationTabs />
      <MapWithSidebar />
      <WelcomeFormSection />
      <ContactFAQ />
    </main>
  );
}
