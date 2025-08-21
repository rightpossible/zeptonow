import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "https://rider.zepto.co.in/assets/flexible-hours-B4gN5LTM.png",
      title: "Flexible Hours",
      description: "Work when you want"
    },
    {
      icon: "https://rider.zepto.co.in/assets/short-distance-afK2HsEZ.png",
      title: "Short Distance Rides",
      description: "Faster trips, more earnings"
    },
    {
      icon: "https://rider.zepto.co.in/assets/daily-incentives-CN7kJwsm.png",
      title: "Daily Incentives",
      description: "Finish daily goals & earn more"
    },
    {
      icon: "https://rider.zepto.co.in/assets/insurance-cover-Dk9dlcte.png",
      title: "Insurance Cover",
      description: "Up to ₹10 lakhs for you & family"
    }
  ];

  return (
    <div id="benefits" className="flex flex-col w-full scroll-mt-16">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center space-x-4 w-full px-5">
          <Image 
            alt={benefit.title} 
            className="h-12 w-12" 
            src={benefit.icon}
            width={48}
            height={48}
          />
          <div className="flex flex-col py-4 border-b border-dashed border-gray-300 flex-1">
            <span className="text-xs text-gray-500">{benefit.title}</span>
            <span className="text-base font-semibold text-gray-900">{benefit.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
