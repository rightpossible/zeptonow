import React from 'react';
import Image from 'next/image';

const ProcessSection = () => {
  const processSteps = [
    {
      image: "https://franchise.zepto.co.in/assets/icons/setting-up-store.png",
      title: "Setting up store",
      description: "We'll help you find the right strategic location & we'll set up all the essential processes"
    },
    {
      image: "https://franchise.zepto.co.in/assets/icons/hiring-people.png", 
      title: "Hiring the right people",
      description: "Pick the right people from your community & train them using our proven modules"
    },
    {
      image: "https://franchise.zepto.co.in/assets/icons/start-earning.png",
      title: "Start earning the returns", 
      description: "Once the store is set up and orders start coming in, you will receive monthly payouts"
    }
  ];

  return (
    <div className="flex justify-center p-4 bg-white">
      <div className="md:py-10 max-w-5xl px-2 md:px-0">
        <div className="pt-10">
          <h4 className="text-2xl font-bold text-black">How the magic happens</h4>
          <p className="text-gray-500 pb-4">The blueprint of your growth</p>
          
          <div className="flex flex-col md:flex-row gap-16 md:gap-4 py-4 px-1">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <Image 
                  alt={step.title.toLowerCase().replace(/\s+/g, '-')} 
                  src={step.image} 
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h6 className="pt-4 text-black font-semibold text-lg">
                  {step.title}
                </h6>
                <p className="text-xs pt-1 text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
