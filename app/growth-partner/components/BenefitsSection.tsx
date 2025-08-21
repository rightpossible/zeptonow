import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      image: "https://franchise.zepto.co.in/assets/icons/grow-exponentially.svg",
      title: "Grow exponentially with a proven business model",
      description: "Scale your business with a proven model designed for rapid and sustainable growth.",
      width: "md:w-1/3",
      borderClass: "border-b md:border-r"
    },
    {
      image: "https://franchise.zepto.co.in/assets/icons/leverage.svg",
      title: "Leverage our marketing efforts & customer base", 
      description: "Use Supr's marketing power and extensive customer base to boost your store's visibility.",
      width: "md:w-1/3",
      borderClass: "border-b md:border-r"
    },
    {
      image: "https://franchise.zepto.co.in/assets/icons/manage-store.svg",
      title: "Manage your store with tested processes & SLAs",
      description: "We'll help you find the right strategic location & we'll set up all the essential processes",
      width: "md:w-1/3", 
      borderClass: "border-b"
    },
    {
      image: "https://franchise.zepto.co.in/assets/icons/accounting.svg",
      title: "Get transparent accounting of your returns",
      description: "Track and manage returns with complete transparency for better financial clarity.",
      width: "md:w-1/2",
      borderClass: "border-b md:border-b-0 md:border-r"
    },
    {
      image: "https://franchise.zepto.co.in/assets/icons/purchase-transaction.svg",
      title: "Help your community with all the essentials they need",
      description: "Provide your community with essential products and build a strong local presence.",
      width: "md:w-1/2",
      borderClass: ""
    }
  ];

  return (
    <div className="flex justify-center bg-gray-100 py-12 px-4">
      <div className="max-w-5xl">
        <div className="pb-8">
          <h4 className="text-2xl font-bold text-black">What&apos;s in it for you?</h4>
          <p className="text-gray-500 md:w-3/4">Benefits of becoming a supr growth partner</p>
        </div>
        
        <div className="rounded-lg bg-white flex flex-wrap md:flex-row flex-col">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`p-4 border-gray-200 ${benefit.width} ${benefit.borderClass} w-full`}
            >
              <Image 
                alt={benefit.title.toLowerCase().replace(/\s+/g, '-')} 
                src={benefit.image} 
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <h6 className="leading-none pt-4 text-black font-semibold text-lg">
                {benefit.title}
              </h6>
              <p className="text-xs pt-1 text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
