import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      icon: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.9.0/images/pdp/enjoy.svg",
      title: "Open the app",
      description: "Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more"
    },
    {
      icon: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.9.0/images/pdp/place-order.svg",
      title: "Place an order",
      description: "Add your favourite items to the cart & avail the best offers"
    },
    {
      icon: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.9.0/images/pdp/do-not-blink.svg",
      title: "Get free delivery",
      description: "Experience lighting-fast speed & get all your items delivered in 10 minutes"
    }
  ];

  return (
    <section className="bg-gray-50 py-6 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-lg md:text-xl font-bold text-center text-gray-900 mb-6">
          How it Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <Image 
                  src={step.icon}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
