'use client';

import { testimonials } from '@/data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section data-theme="light" className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-[83px] md:px-[100px] lg:px-[110px]">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Our Customer <br className="hidden md:block" />
            Think We Are Best
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl leading-relaxed">
            Our Customers Have Witnessed Tangible And Remarkable Results With Our Services. From Skyrocketing ROI To Substantial Revenue Growth, Our Strategies Consistently Deliver Exceptional Outcomes. We Take Immense Pride In Being Recognized As The Best In The Industry.
          </p>
        </div>

        {/* Testimonials Grid/Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className={`relative ${testimonial.cardBg} rounded-[28px] p-10 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
      {/* Quote Icon and Star Rating - Top Row */}
      <div className="flex items-center justify-between mb-8">
        {/* Quote Icon */}
        <div className={`${testimonial.iconBg} rounded-[14px] w-12 h-12 flex items-center justify-center shrink-0`}>
          <svg 
            className="w-5 h-5 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Star Rating */}
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, index) => (
            <svg 
              key={index} 
              className="w-5 h-5 text-yellow-400 fill-current" 
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-lg leading-[1.7] mb-10 flex-grow">
        {testimonial.quote}
      </p>

      {/* Customer Info */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-200">
            {/* Replace with actual image when available */}
            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-300" />
          </div>
          
          {/* Name and Title */}
          <div>
            <h4 className="font-bold text-gray-900 text-base leading-tight mb-1">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 text-sm leading-tight">
              {testimonial.title}, {testimonial.company}
            </p>
          </div>
        </div>

        {/* Thumbs Up Icon */}
        <div className={`${testimonial.thumbColor} shrink-0`}>
          <svg 
            className="w-8 h-8" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
