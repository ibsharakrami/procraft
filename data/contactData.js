// Contact Page Static Data
export const contactInfo = {
  phone: '+971 55 562 4052',
  email: 'info@procraft.ae',
  address: 'Gold Souq Extension, Deira, Dubai, United Arab Emirates',
  coordinates: {
    lat: 25.2761,
    lng: 55.3017
  },
  officeHours: {
    weekdays: {
      days: 'Sunday - Thursday',
      hours: '9:00 AM - 6:00 PM GST'
    },
    weekend: {
      days: 'Friday - Saturday',
      hours: 'Closed'
    }
  }
};

export const socialLinks = [
  {
    name: 'Facebook',
    url: '#',
    icon: 'Facebook'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'Twitter'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'Linkedin'
  },
  {
    name: 'Instagram',
    url: '#',
    icon: 'Instagram'
  }
];

export const serviceOptions = [
  'Business Consulting',
  'Website Design & Development',
  'E-Commerce Solutions',
  'Digital Marketing & SEO',
  'Social Media Marketing',
  'Graphic Design'
];

export const ctaCards = [
  {
    id: 'schedule',
    icon: 'Calendar',
    title: 'Schedule a Call',
    description: 'Book a free 30-minute consultation with our team',
    action: 'tel:+971555624052',
    buttonText: 'Call Now'
  },
  {
    id: 'whatsapp',
    icon: 'MessageCircle',
    title: 'WhatsApp Us',
    description: 'Get instant responses to your questions',
    action: 'https://wa.me/971555624052?text=Hi%20ProCraft%2C%20I%27d%20like%20to%20discuss%20a%20project',
    buttonText: 'Chat Now'
  },
  {
    id: 'email',
    icon: 'Mail',
    title: 'Email Us',
    description: 'Send us a detailed message about your project',
    action: 'mailto:info@procraft.ae',
    buttonText: 'Send Email'
  }
];

// All FAQ questions (8 total)
export const faqs = [
  {
    id: 1,
    question: 'What services does ProCraft offer?',
    answer: 'ProCraft offers comprehensive digital solutions including Business Consulting, Website Design & Development, E-Commerce Solutions, Digital Marketing & SEO, Social Media Marketing, and Graphic Design. We tailor our services to meet your unique business needs and goals.'
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A basic website typically takes 3-4 weeks, while comprehensive e-commerce solutions may take 8-12 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the development process.'
  },
  {
    id: 3,
    question: 'Do you work with international clients?',
    answer: 'Absolutely! While we\'re based in Dubai, UAE, we work with clients globally across Saudi Arabia, the Middle East, and internationally. Our team is experienced in remote collaboration and can accommodate different time zones to ensure smooth communication.'
  },
  {
    id: 4,
    question: 'What\'s your consultation process?',
    answer: 'Our consultation process begins with understanding your business goals and challenges. We schedule a free 30-minute discovery call to discuss your needs, followed by a detailed proposal outlining our recommended strategy, timeline, and investment. Once approved, we move into the design and development phase with regular check-ins.'
  },
  {
    id: 5,
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer comprehensive post-launch support and maintenance packages. This includes regular updates, security monitoring, performance optimization, and technical support. We believe in building long-term partnerships with our clients to ensure continued success.'
  },
  {
    id: 6,
    question: 'What makes ProCraft different from other agencies?',
    answer: 'ProCraft combines strategic thinking with creative execution. We don\'t just build websites or run campaigns—we craft comprehensive growth strategies tailored to your business. Our team brings together expertise in design, development, marketing, and business consulting to deliver holistic solutions that drive real results.'
  },
  {
    id: 7,
    question: 'What is your pricing structure?',
    answer: 'Our pricing is project-based and varies depending on scope, complexity, and timeline. We provide transparent, detailed quotes with no hidden fees. During our consultation, we\'ll discuss your budget and recommend solutions that deliver maximum value within your investment range.'
  },
  {
    id: 8,
    question: 'Can you help with rebranding an existing business?',
    answer: 'Definitely! We specialize in rebranding projects, from visual identity redesign to complete digital transformation. We analyze your current brand positioning, identify opportunities for improvement, and create a cohesive strategy that resonates with your target audience while preserving your core values.'
  }
];

// Contact page FAQ subset (first 5 questions)
export const contactFaqs = faqs.slice(0, 5);

export const heroContent = {
  label: 'Get in Touch',
  headline: 'Let\'s Create Something Amazing Together',
  subheadline: 'Ready to transform your digital presence? Our team in Dubai is here to turn your vision into reality.',
  cta: {
    text: 'Start Your Project',
    href: '#contact-form'
  }
};

export const formSection = {
  heading: 'Start Your Project Today',
  subheading: 'Fill out the form below and we\'ll get back to you within 24 hours.',
  successMessage: 'Thank you for reaching out! We\'ve received your message and will respond within 24 hours.',
  errorMessage: 'Oops! Something went wrong. Please try again or contact us directly at info@procraft.ae'
};
