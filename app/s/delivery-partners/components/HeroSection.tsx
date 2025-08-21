import React from 'react';
import Image from 'next/image';
import DeliveryPartnerForm from './DeliveryPartnerForm';

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full pb-6">
      {/* Hero Image */}
      <Image 
        alt="Zepto delivery rider and partner jobs" 
        src="https://rider.zepto.co.in/assets/riders-cover-MH9xPDtT.png"
        width={400}
        height={300}
        className="w-full"
      />
      
      {/* Form Card */}
      <div className="flex flex-col space-y-4 bg-white shadow-lg rounded-xl -mt-10 mx-auto w-11/12 p-4">
        <div className="flex flex-col space-y-0.5">
          <span className="text-sm font-normal text-gray-700">Join Supr as a Delivery Partner</span>
          <span className="text-2xl font-semibold text-gray-900">
            Earn up to <span className="text-primary-600">₹60,000/month</span>
          </span>
        </div>
        
        <DeliveryPartnerForm />
      </div>
    </div>
  );
};

export default HeroSection;
