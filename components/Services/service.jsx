"use client"

import { useState } from "react"

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: "business",
      title: "BUSINESS CONSULTING",
      description: "Expert strategic guidance to optimize your business operations, improve efficiency, and drive growth through proven methodologies and industry insights.",
      link: "Our Consulting",
      bgImage: "/images/business-consulting-bg.jpg"
    },
    {
      id: "website",
      title: "WEBSITE DESIGN & DEVELOPMENT",
      description: "Our website design team will work closely with you to plan the structure of your website content and even suggest new content and promotional ideas.",
      link: "Our Web Design",
      bgImage: "/images/website-design-bg.jpg"
    },
    {
      id: "ecommerce",
      title: "E-COMMERCE",
      description: "Build powerful online stores with seamless shopping experiences, secure payment processing, inventory management, and conversion optimization strategies.",
      link: "Our E-Commerce",
      bgImage: "/images/ecommerce-bg.jpg"
    },
    {
      id: "seo",
      title: "DIGITAL MARKETING & SEO",
      description: "Enhance your online visibility with comprehensive SEO strategies, content optimization, and data-driven digital marketing campaigns tailored to your audience.",
      link: "Our SEO Services",
      bgImage: "/images/seo-bg.jpg"
    },
    {
      id: "social",
      title: "SOCIAL MEDIA MARKETING",
      description: "The majority of social media platforms offer paid advertising with the main candidates being Facebook, Instagram, Twitter and LinkedIn.",
      link: "Our Social Media",
      bgImage: "/images/social-bg.jpg"
    },
    {
      id: "graphic",
      title: "GRAPHIC DESIGN",
      description: "Create stunning visual identities with custom graphics, illustrations, and design assets that captivate your audience and strengthen your brand presence.",
      link: "Our Design",
      bgImage: "/images/graphic-bg.jpg"
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Green background section */}
      <div className="relative bg-emerald-500">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-[url('/images/london-architecture.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-500 opacity-90" />

        {/* Top content - "How can we Help?" */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                How can we <span className="text-white">Help?</span>
              </h2>
            </div>
            <div>
              <a
                href="tel:+971555624052"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                +971 55 562 4052
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Green diagonal section that wraps behind black */}
      <div className="relative -mt-1">
        <div 
          className="absolute inset-0 bg-emerald-500 h-[450px] md:h-[550px] -z-10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 65%, 88% 100%, 0 100%)'
          }}
        />

        {/* Black expertise container */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="bg-black text-white pt-16 pb-20 md:pt-20 md:pb-24 px-8 md:px-12 lg:px-16">
            {/* EXPERTISE heading */}
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 mb-12">
              EXPERTISE
            </h3>
            
            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="space-y-4"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="w-1 h-12 bg-emerald-500" />
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    {service.link} &gt;&gt;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection