import React from 'react';
import Image from 'next/image';

const ReferEarnSection = () => {
  return (
    <div id="referAndEarn" className="m-4 bg-gray-800 rounded-xl scroll-mt-16">
      <div className="flex flex-col py-5 pl-5 space-y-2">
        <span className="text-base text-gray-200">Not interested in becoming a rider?</span>
        <div className="flex items-end">
          <span className="text-2xl font-semibold text-white flex-1">
            You can still earn by referring riders. Earn up to ₹2000 per referral
          </span>
          <Image 
            alt="refer-and-earn" 
            className="flex-1 h-32 w-44" 
            src="https://rider.zepto.co.in/assets/referAndEarnAnnouncement-6xU5yiwj.png"
            width={176}
            height={128}
          />
        </div>
      </div>
      
      <div className="p-4 w-full">
        <button className="flex items-center justify-center text-base rounded-md !font-medium bg-primary-700 text-white h-12 h-12 bg-primary-500 font-medium w-full">
          Refer Here
        </button>
      </div>
    </div>
  );
};

export default ReferEarnSection;
