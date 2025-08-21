import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white mt-40 py-6 px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Hero Illustration */}
        <div className="mb-4">
          <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
            <Image 
              src="https://cdn.zeptonow.com/app/images/unserviceable-graphic.png"
              alt="Supr delivery illustration"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Sit Tight! We&apos;re Coming Soon!
        </h1>

        {/* Subtitle */}
        <p className="text-xs md:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
          Our team is working tirelessly to bring 10 minute deliveries to your location
        </p>
      </div>
    </section>
  );
};

export default Hero;
