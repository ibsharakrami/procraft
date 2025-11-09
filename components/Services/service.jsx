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
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-0">
              How can we <span className="font-bold text-emerald-400">Help?</span>
            </h1>
            <div className="border-2 border-emerald-400 px-6 py-3 rounded text-emerald-400 text-lg font-light whitespace-nowrap transition-all duration-300 hover:bg-emerald-400 hover:text-black cursor-pointer">
              +971 545 866 866
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-12 tracking-wider">EXPERTISE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="relative bg-gray-800 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-400/20"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="w-1 h-10 bg-emerald-400 mb-6"></div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-wider">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 flex-grow">{service.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    {service.link} <span className="ml-2">→</span>
                  </a>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection