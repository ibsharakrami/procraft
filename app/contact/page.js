import ContactPageClient from '@/components/Contact/ContactPageClient';

export const metadata = {
  title: 'Contact ProCraft - Get in Touch with Our Dubai Team',
  description: 'Ready to transform your digital presence? Contact ProCraft\'s team in Business Bay, Dubai. Book a free consultation for web design, digital marketing, and business consulting services.',
  keywords: [
    'contact ProCraft',
    'ProCraft Dubai contact',
    'digital agency Dubai contact',
    'web design consultation Dubai',
    'Business Bay agency contact',
    'ProCraft phone number',
    'ProCraft email',
    'free consultation Dubai',
    'digital marketing agency contact UAE'
  ],
  openGraph: {
    title: 'Contact ProCraft - Dubai Digital Agency',
    description: 'Get in touch with ProCraft\'s team in Business Bay, Dubai. Schedule a free consultation for web design, e-commerce, and digital marketing services.',
    url: 'https://procraft.ae/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://procraft.ae/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
