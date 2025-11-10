export const caseStudies = [
  {
    id: "sharma-space",
    slug: "sharma-space",
    title: "Sharma Space",
    client: "Sharma Space",
    category: ["Web Design", "E-commerce"],
    year: "2024",

    // Brief description for card
    tagline: "Premium Interior Design Studio Website",

    // Hero section
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",

    // Card thumbnail
    thumbnailImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",

    // Overview
    description: "A sophisticated Next.js website for Bangalore's premier interior design studio, featuring consultation booking, multi-language support, and seamless service presentation.",

    // Challenge
    challenge: "Create a premium digital presence that matches Sharma Space's high-end interior design services while enabling direct client bookings and showcasing 150+ completed projects.",

    // Solution highlights
    solution: [
      "Next.js implementation with SSR for optimal performance",
      "Integrated consultation booking system",
      "Multi-language support (English, Hindi, Kannada)",
      "SEO-optimized with structured data markup",
      "Responsive design with custom animations",
      "Image optimization with WebP format"
    ],

    // Services provided
    services: [
      "Website Design",
      "Next.js Development",
      "Booking System Integration",
      "SEO Optimization",
      "Multi-language Implementation",
      "Performance Optimization"
    ],

    // Results/metrics
    results: {
      clientRating: "4.8/5",
      projects: "150+",
      happyClients: "500+",
      performance: "90+ PageSpeed Score"
    },

    // Tech stack
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "WebP Optimization",
      "Schema Markup",
      "Multi-language API"
    ],

    // Link
    liveUrl: "https://sharmaspace.in",

    // Featured flag
    featured: true,

    // Color theme for card
    themeColor: "#da532c",

    // Grid size variant for layout
    size: "featured"
  },

  {
    id: "virtual-greens",
    slug: "virtual-greens",
    title: "The Virtual Greens",
    client: "The Virtual Greens",
    category: ["Web Design", "Hospitality"],
    year: "2024",

    tagline: "Indoor Golf Simulator Entertainment Venue",

    heroImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",

    thumbnailImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80",

    description: "A modern website for Riyadh's premier indoor golf simulator lounge, combining entertainment booking with venue information and social engagement.",

    challenge: "Design a vibrant digital presence for a golf entertainment venue that appeals to both serious golfers and social entertainment seekers in the Riyadh market.",

    solution: [
      "Modern typography with Inter font family for contemporary feel",
      "Performance-optimized hosting infrastructure for high traffic",
      "Social media integration for community engagement",
      "Mobile-responsive design for on-the-go bookings",
      "Enterprise-level hosting with Singapore datacenter"
    ],

    services: [
      "Website Design",
      "Web Development",
      "Performance Optimization",
      "Social Media Integration",
      "Infrastructure Setup"
    ],

    results: {
      hosting: "Enterprise Infrastructure",
      performance: "High-Speed Singapore Hosting",
      reach: "Middle East Market",
      integration: "Full Social Media Integration"
    },

    technologies: [
      "Google Fonts API",
      "Performance Monitoring",
      "GoDaddy Infrastructure",
      "Responsive Design",
      "Social Media APIs"
    ],

    liveUrl: "https://thevirtualgreens.com",

    featured: true,

    themeColor: "#10367D",

    // Grid size variant for layout
    size: "large"
  }
];

// Helper function to get all unique categories
export const getCategories = () => {
  const categoriesSet = new Set();
  caseStudies.forEach(study => {
    study.category.forEach(cat => categoriesSet.add(cat));
  });
  return ["All", ...Array.from(categoriesSet)];
};

// Helper function to filter case studies by category
export const filterCaseStudies = (category) => {
  if (category === "All") return caseStudies;
  return caseStudies.filter(study => study.category.includes(category));
};

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(study => study.slug === slug);
};
