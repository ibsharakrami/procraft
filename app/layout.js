
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GridLines from "@/components/ui/GridLines";
import Script from "next/script";

const blatant = localFont({
  src: [
    {
      path: "../public/Font/Blatant.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Font/Blatant-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-blatant",
});

const urbanist = localFont({
  src: [
    {
      path: "../public/Font/Urbanist-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-urbanist",
});

export const metadata = {
  metadataBase: new URL('https://procraft.ae'),
  title: {
    default: 'ProCraft - Creative Digital Growth Agency in Dubai',
    template: '%s | ProCraft Dubai'
  },
  description: 'Award-winning creative digital agency in Dubai specializing in business consulting, web design, e-commerce, digital marketing, SEO, and branding. Transform your business with strategic growth solutions in Business Bay, UAE.',
  keywords: [
    'digital agency Dubai',
    'creative agency UAE',
    'web design Dubai',
    'digital marketing Dubai',
    'business consulting UAE',
    'e-commerce development Dubai',
    'branding agency Dubai',
    'SEO services Dubai',
    'social media marketing Dubai',
    'Business Bay agency',
    'Dubai web development',
    'graphic design Dubai'
  ],
  authors: [{ name: 'ProCraft' }],
  creator: 'ProCraft',
  publisher: 'ProCraft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ProCraft - Creative Digital Growth Agency in Dubai',
    description: 'Transform your business with strategic consulting, creative design, and cutting-edge technology from Dubai\'s leading digital growth agency.',
    url: 'https://procraft.ae',
    siteName: 'ProCraft',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ProCraft - Creative Digital Growth Agency in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProCraft - Creative Digital Growth Agency in Dubai',
    description: 'Transform your business with strategic consulting, creative design, and cutting-edge technology.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here after setting up GSC
    // google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/Pro-Create-icon@3x-8.png',
        color: '#10367D',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10367D' },
    { media: '(prefers-color-scheme: dark)', color: '#10367D' },
  ],
  appleWebApp: {
    capable: true,
    title: 'ProCraft',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({ children }) {
  // Organization and LocalBusiness Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ProCraft",
    "alternateName": "ProCraft Digital Agency",
    "description": "Creative digital growth agency in Dubai specializing in business consulting, web design, e-commerce, digital marketing, and branding solutions.",
    "url": "https://procraft.ae",
    "logo": "https://procraft.ae/images/Pro-Create-icon@3x-8.png",
    "image": "https://procraft.ae/images/Pro-Create-icon@3x-8.png",
    "telephone": "+971-545-866-866",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Bay",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.1872",
      "longitude": "55.2744"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.1872",
        "longitude": "55.2744"
      },
      "geoRadius": "100000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-545-866-866",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/procraft",
      "https://www.instagram.com/procraft",
      "https://www.facebook.com/procraft"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Consulting",
            "description": "Strategic business consulting, retention strategy, startup guidance, and investment advisory."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development",
            "description": "Custom website design and development services with responsive, SEO-friendly solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Solutions",
            "description": "Secure, scalable online stores with seamless shopping experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing & SEO",
            "description": "Keyword optimization, ad campaigns, and visibility strategies for online growth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Audience growth and engagement strategies for Instagram, Facebook, and LinkedIn."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design",
            "description": "Logo design, branding kits, and comprehensive visual identity systems."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <body
       className={`${blatant.variable} ${urbanist.variable} antialiased`}
      >
        <GridLines />
        <Navigation />
        <main className="">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </body>
    </html>
  );
}

