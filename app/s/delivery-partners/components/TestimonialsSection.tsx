import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mahesh",
      role: "Delivery Partner",
      quote: "I have been working with Supr over a year now. It has been a game changer for me as I earn up to ₹60,000 per month"
    },
    {
      name: "Syed",
      role: "Delivery Partner", 
      quote: "Having been a rider for Supr since 1.5 years, I'm really happy with the consistent earnings of Supr"
    },
    {
      name: "Nawaz",
      role: "Delivery Partner",
      quote: "Supr provides enough flexibility for working as I earn enough while delivering short distance orders"
    }
  ];

  return (
    <div id="testimonials" className="flex flex-col space-y-2 p-4 w-full scroll-mt-16">
      <p className="text-xl font-semibold text-gray-900 px-4 py-2 w-[65%]">
        Hear from our Delivery Partners
      </p>
      
      <div className="flex flex-nowrap space-x-3 w-full overflow-x-auto pb-4 no-scrollbar">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col border border-gray-200 shadow-lg space-y-3 p-4 rounded-[10px] h-[16.25rem] w-[15.25rem]">
            {/* Quote Icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="#FEF4FF" />
              <path d="M24.6851 13.401C26.2951 13.401 27.6011 14.744 27.6011 16.401C27.6011 18.057 26.2951 19.401 24.6851 19.401C21.7701 19.401 23.7131 25.2 27.6011 25.2V26.6C20.6621 26.601 17.9431 13.401 24.6851 13.401ZM16.2851 13.401C17.8941 13.401 19.2001 14.744 19.2001 16.401C19.2001 18.057 17.8941 19.401 16.2851 19.401C13.3691 19.401 15.3121 25.2 19.2001 25.2V26.6C12.2621 26.601 9.54307 13.401 16.2851 13.401Z" fill="#8E24AA" />
            </svg>
            
            {/* Quote Text */}
            <span className="text-sm text-gray-900 font-normal line-clamp-6">
              {testimonial.quote}
            </span>
            
            {/* Author Info */}
            <div className="flex flex-col space-y-0.5 mt-auto">
              <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500 font-normal">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
