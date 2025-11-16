import React from "react";
import { Code, Layout, Palette, Smartphone, Server, Database, Cpu } from "lucide-react";
import ServicesHero from "@/components/Services/ServicesHero";

export const metadata = {
  title: 'Our Services - Digital Solutions',
  description: 'Comprehensive digital services in Dubai: Business Consulting, Web Design & Development, E-Commerce, Digital Marketing, SEO, Social Media Marketing, Branding, and Mobile App Development. Empowering businesses across UAE.',
  keywords: [
    'web design Dubai',
    'digital marketing UAE',
    'SEO services Dubai',
    'e-commerce development Dubai',
    'mobile app development Dubai',
    'branding agency UAE',
    'social media marketing Dubai',
    'business consulting Dubai',
    'graphic design Dubai'
  ],
  openGraph: {
    title: 'ProCraft Services - Full-Service Digital Agency Dubai',
    description: 'From strategy to execution: Business consulting, web development, digital marketing, and branding services for businesses in Dubai and UAE.',
    url: 'https://procraft.ae/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://procraft.ae/services',
  },
};

const services = [
  {
    number: "01",
    name: "Business Consulting",
    title: "Empower Your Growth.",
    description: "From startup strategy to business expansion, we guide entrepreneurs and companies through every stage of growth. Our experts help you refine your business model, attract investors, and build retention strategies that increase loyalty and reduce churn.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "02",
    name: "Website Design & Development",
    title: "Build a Website That Converts.",
    description: "We create stunning, SEO-friendly, and responsive websites that reflect your brand and drive results. Every site is optimized for performance, user experience, and conversions — ensuring your business stands out in the digital space.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "03",
    name: "E-Commerce Solutions",
    title: "Your Online Store, Perfected.",
    description: "Launch a powerful and secure online store with our e-commerce development experts. We design user-friendly platforms with integrated payment systems, inventory management, and responsive design to help you sell smarter and scale faster.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "04",
    name: "Digital Marketing & SEO",
    title: "Boost Visibility & Drive Leads.",
    description: "From keyword research to content strategy and ad campaigns, we make your brand visible to the right audience. Our proven digital marketing and SEO solutions help you rank higher, attract quality traffic, and turn clicks into loyal customers.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "05",
    name: "Social Media Marketing",
    title: "Grow, Engage, and Inspire.",
    description: "We help brands build authentic connections through engaging content and smart social media strategies. From Instagram to LinkedIn, we craft campaigns that grow your audience, strengthen your online presence, and boost engagement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "06",
    name: "Branding & Graphic Design",
    title: "Design That Defines You.",
    description: "Your brand deserves a unique visual identity that stands out. From logos and brand kits to creative marketing materials, our design team blends creativity and strategy to craft visuals that inspire trust and lasting recognition.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "07",
    name: "Mobile App Development",
    title: "Turn Ideas Into Apps.",
    description: "We design and develop innovative, high-performance mobile apps tailored to your business goals. Our apps combine modern UI/UX design, scalability, and functionality to deliver seamless user experiences on both Android and iOS platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Section */}
      <div className="min-h-screen bg-black">
        <section data-theme="dark" className="space-y-4 max-w-7xl mx-auto w-full py-12 md:py-16 lg:py-20 px-6 md:px-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative min-h-48 bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:min-h-64"
            >
              {/* Background Image - Hidden by default, shown on hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-100 opacity-0 group-hover:opacity-100"
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  zIndex: 0
                }}
              ></div>
              
              {/* Content Overlay */}
              <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 h-full  transition-all duration-500  border-white border-b min-h-64 ">
                {/* Left Side - Service Number and Name */}
                <div className="w-full md:w-1/3 flex flex-col  justify-center">

                  <h3 className="text-3xl font-bold text-white  transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
                
                {/* Right Side - Title and Description */}
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-white text-md">
                    {service.description}
                  </p>
                  <div className="flex gap-8 mt-6">
                    <button className="group flex items-center font-semibold text-white text-lg font-medium  transition-colors duration-300">
                      read more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 text-blue-900 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    <button className="group flex items-center font-semibold text-white text-lg font-medium  transition-colors duration-300">
                      enquire online
                      <svg className="w-4 h-4 ml-2 font-semibold group-hover:translate-x-1 transition-transform duration-300 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Services;