"use client";

import React, { useState } from 'react';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white p-4 flex justify-center">
      <div className="flex justify-center max-w-5xl md:flex-row flex-col">
        {/* Left Side - Content */}
        <div className="pr-6 md:py-10 py-6 md:w-2/5 flex flex-col gap-2.5">
          <img 
            alt="Growth Partner icon" 
            src="https://franchise.zepto.co.in/assets/icons/growth-partners-logo.svg" 
            className="w-48"
          />
          <p className="text-gray-500 font-medium md:max-w-64 md:pb-6">
            Enter the perfect playground for your ambition
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium w-fit transition-colors duration-200"
          >
            Register Now
          </button>
        </div>

        {/* Right Side - Images Grid */}
        <div className="md:w-3/5 flex gap-2 pt-4">
          <div className="flex flex-col gap-2 justify-center">
            <div>
              <img alt="person-1" src="https://franchise.zepto.co.in/assets/icons/person-1.webp" />
            </div>
            <div>
              <img alt="person-2" src="https://franchise.zepto.co.in/assets/icons/person-2.webp" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div>
              <img alt="person-3" src="https://franchise.zepto.co.in/assets/icons/person-3.webp" />
            </div>
            <div>
              <img alt="person-4" src="https://franchise.zepto.co.in/assets/icons/person-4.webp" />
            </div>
            <div>
              <img alt="person-5" src="https://franchise.zepto.co.in/assets/icons/person-5.webp" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 justify-center">
            <div>
              <img alt="person-6" src="https://franchise.zepto.co.in/assets/icons/person-6.webp" />
            </div>
            <div>
              <img alt="person-7" src="https://franchise.zepto.co.in/assets/icons/person-7.webp" />
            </div>
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

export default HeroSection;
