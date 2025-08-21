"use client";

import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  
  const testimonials = [
    {
      videoId: "fI4Xuh6Klcs",
      name: "Mr. Mahesh",
      description: "Our first dark store owner in Ahmedabad"
    },
    {
      videoId: "D9iVpbr0bd8", 
      name: "Mr. Ekansh",
      description: "Owns 4 dark stores"
    },
    {
      videoId: "0n-SgghcWbE",
      name: "Ms. Kiran", 
      description: "Owns a dark store in Gurgaon"
    }
  ];

  return (
    <div className="flex justify-center bg-gray-900 p-4">
      <div className="pb-16 md:py-20 flex max-w-5xl gap-2 justify-center items-center flex-col sm:flex-row">
        {/* Left Side - Text and Button */}
        <div className="lg:w-2/5 w-1/3 py-10 lg:px-12 md:w-1/4 md:px-4">
          <h1 className="text-white pb-4 font-semibold text-3xl lg:text-4xl">
            Join 200+ entrepreneurs in shaping the future Today!
          </h1>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Register Now
          </button>
        </div>

        {/* Right Side - Video Carousel */}
        <div className="lg:w-3/5 md:w-1/2 w-2/5 flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <iframe 
                className="md:w-4/5 h-full w-5/6 rounded-lg lg:min-h-80 min-h-64" 
                src={`https://www.youtube.com/embed/${testimonials[currentSlide].videoId}`}
                title={`Testimonial by ${testimonials[currentSlide].name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
              <h6 className="text-white font-normal pt-4 text-lg">
                {testimonials[currentSlide].name}
              </h6>
              <p className="text-xs text-white pb-2">
                {testimonials[currentSlide].description}
              </p>
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Google Form Modal */}
      {showForm && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/PLACEHOLDER_FORM_ID/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading...
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;
