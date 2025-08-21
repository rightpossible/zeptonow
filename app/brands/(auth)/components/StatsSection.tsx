import React from 'react';

const StatsSection = () => {
  return (
    <div className="flex flex-col justify-between h-[calc(100%-5rem)] py-20 w-10/12 mx-auto">
      <div className="w-full px-4 flex-1 xl:pt-16">
        <div className="flex flex-col w-full items-center">
          <img 
            alt="rocket icon" 
            src="https://brands-onboarding.zepto.co.in/assets/icons/rocket.svg" 
            className="h-18 w-18" 
          />
          <h5 className="font-medium !mt-4 text-gray-500 text-xl">
            Grow your Business Faster By
          </h5>
          <h4 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-2xl">
            Selling through Supr
          </h4>
        </div>
        
        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="flex items-center">
            <img 
              alt="customer icon" 
              src="https://brands-onboarding.zepto.co.in/assets/icons/customer-icon.svg" 
              className="w-14 h-14" 
            />
            <div className="ml-4 flex flex-col">
              <h5 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-xl">
                55 Million+
              </h5>
              <p className="text-gray-700">Customer Reach PAN India</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <img 
              alt="cart icon" 
              src="https://brands-onboarding.zepto.co.in/assets/icons/cart.svg" 
              className="w-14 h-14" 
            />
            <div className="ml-4 flex flex-col">
              <h5 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-xl">
                1100+ Stores
              </h5>
              <p className="text-gray-700">Serviceable Stores PAN India</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <img 
              alt="store icon" 
              src="https://brands-onboarding.zepto.co.in/assets/icons/store.svg" 
              className="w-14 h-14" 
            />
            <div className="ml-4 flex flex-col">
              <h5 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-xl">
                320+ Categories
              </h5>
              <p className="text-gray-700">Category agnostic, customer obsessed</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <img 
              alt="delivery boy icon" 
              src="https://brands-onboarding.zepto.co.in/assets/icons/delivery-boy.svg" 
              className="w-14 h-14" 
            />
            <div className="ml-4 flex flex-col">
              <h5 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-xl">
                60Cr+ Deliveries
              </h5>
              <p className="text-gray-700">till now across multiple pincodes</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-25 rounded-xl p-9 w-full">
        <p className="!text-primary-500 !font-medium">
          Over <span className="text-[#3C006B] font-semibold">10K+ Brands</span> trust Supr to help grow their business from <span className="text-[#3C006B] font-bold">2X to 10X across 1500+ Pincodes.</span>
        </p>
        <div className="flex justify-between h-10 mt-4 gap-x-1 items-center overflow-hidden">
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/cadbury.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/coca-cola.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/sugar.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/whole-truth.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/minimalist.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/itc.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/id.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/storia.svg" className="min-w-9 xl:min-w-10" />
          <img alt="brand icon" src="http://brands-onboarding.zepto.co.in/assets/icons//brands/beyond-snack.svg" className="min-w-9 xl:min-w-10" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
