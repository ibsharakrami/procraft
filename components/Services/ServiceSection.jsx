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
      bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
    },
    {
      id: "website",
      title: "WEBSITE DESIGN & DEVELOPMENT",
      description: "Our website design team will work closely with you to plan the structure of your website content and even suggest new content and promotional ideas.",
      link: "Our Web Design",
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
    },
    {
      id: "ecommerce",
      title: "E-COMMERCE",
      description: "Build powerful online stores with seamless shopping experiences, secure payment processing, inventory management, and conversion optimization strategies.",
      link: "Our E-Commerce",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
    },
    {
      id: "seo",
      title: "DIGITAL MARKETING & SEO",
      description: "Enhance your online visibility with comprehensive SEO strategies, content optimization, and data-driven digital marketing campaigns tailored to your audience.",
      link: "Our SEO Services",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
    },
    {
      id: "social",
      title: "SOCIAL MEDIA MARKETING",
      description: "The majority of social media platforms offer paid advertising with the main candidates being Facebook, Instagram, Twitter and LinkedIn.",
      link: "Our Social Media",
      bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
    },
    {
      id: "graphic",
      title: "GRAPHIC DESIGN",
      description: "Create stunning visual identities with custom graphics, illustrations, and design assets that captivate your audience and strengthen your brand presence.",
      link: "Our Design",
      bgImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80"
    },
  ]

  return (
    <section data-theme="dark" className="relative overflow-hidden bg-[#10367D]/70">
      {/* Green background section */}
      <div className="relative ">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-[url('/images/london-architecture.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-500 opacity-90" /> */}

        {/* Top content - "How can we Help?" - respects grid lines */}
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-[96px]">
          <div className="flex flex-col md:flex-row md:items-center items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
                How can we <span className="text-white font-bold">Help?</span>
              </h2>
            </div>
            <div>
              <a
                href="tel:+971545866866"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                +971 545 866 866
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Green diagonal section that wraps behind black with top-right cut */}
      <div className="relative -mt-1">
        <div 
          className="absolute inset-0  h-[450px] md:h-[550px] -z-10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }}
        />

        {/* Black expertise container - respects grid lines at 83px from edges */}
        <div className="relative w-full lg:ml-[83px] lg:w-[calc(90%-50px)]">
          <div className="relative bg-black text-white pt-16 pb-20 md:pt-20 md:pb-24 px-4 md:px-[100px] lg:px-[83px] lg:pr-[83px] overflow-hidden lg:[clip-path:polygon(0_0,95%_0,100%_8%,100%_100%,0_100%)]">
            
            {/* Background image container - shows hovered card's image */}
            <div className="absolute inset-0 transition-all duration-500">
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

            {/* EXPERTISE heading */}
            <h3 className="relative z-10 text-2xl font-semibold uppercase tracking-[0.3em] text-gray-400 mb-4 px-8">
              EXPERTISE
            </h3>
            
            {/* Services grid with animations */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative group h-full"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full flex flex-col bg-black text-white p-8 md:p-10 rounded-sm shadow-2xl overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:text-slate-900 group-hover:shadow-emerald-500/20 group-hover:shadow-2xl">
                    {/* Animated white overlay that slides up on hover */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-1 h-10 bg-emerald-500 shrink-0 mb-6 group-hover:bg-emerald-600 transition-colors duration-300" />
                      <h3 className="text-lg md:text-xl font-bold tracking-wide mb-4 leading-tight uppercase">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base mb-8 leading-relaxed font-light group-hover:text-slate-700 grow transition-colors duration-300">
                        {service.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-emerald-500 text-sm font-semibold hover:text-emerald-600 transition-all duration-300 group-hover:text-emerald-600 group-hover:translate-x-1 mt-auto"
                      >
                        {service.link} <span className="ml-2">&gt;&gt;</span>
                      </a>
                    </div>
                  </div>
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