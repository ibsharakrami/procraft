// src/components/ServicesSection.js
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
    <div className="min-h-screen bg-blue-400">
      {/* Black and Green Header Section */}
      <div className="relative bg-black overflow-hidden ">
        {/* Top right cut */}

        
        <div className="relative max-w-7xl  mx-auto px-8 py-10 ">
          <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-6 md:mb-0">
              How can we <span className="font-bold text-emerald-400">Help?</span>
            </h1>
            <div className="border-2 border-emerald-400 px-6 py-3 rounded text-emerald-400 text-lg font-light whitespace-nowrap transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:scale-105 cursor-pointer">
              +971 545 866 866
            </div>
          </div>
          
      
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-[url('/images/london-architecture.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative pt-0 pb-0 overflow-hidden  bg-red-300">
        <div className="absolute inset-0 bg-black transition-all duration-500">
          {services.map((service) => (
            hoveredCard === service.id && (
              <div
                key={service.id}
                className="absolute inset-0 bg-cover bg-center opacity-40"
                   style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )
          ))}
        </div>

   

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 pt-16 pb-24">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-white mb-12 md:ml-4">EXPERTISE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:ml-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-black text-white p-8 md:p-10 rounded-sm shadow-2xl overflow-hidden transition-colors duration-300 group-hover:text-slate-900">
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <div className="w-1 h-10 bg-emerald-500 flex-shrink-0 mb-4 group-hover:bg-emerald-600" />
                    <h3 className="text-lg md:text-xl font-light tracking-widest mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base mb-8 leading-relaxed font-light group-hover:text-slate-700">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block text-emerald-500 text-sm font-medium hover:text-emerald-600 transition-colors group-hover:text-emerald-600"
                    >
                      {service.link} <span className="ml-2">{">"}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection