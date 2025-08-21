import React from 'react';

const NetworkMapSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-4 lg:justify-between items-center w-[90vw] lg:w-[80vw]">
      {/* Left Content */}
      <div className="lg:!w-[70%] flex flex-col gap-10 items-center lg:items-start">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 text-center lg:text-start">
          <span className="bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
            Grow with Supr&apos;s Nationwide Network
          </span>
          <br />
          Get Seen, Grow Big
        </h1>
        <h6 className="text-lg text-gray-600 text-center lg:text-start">
          Tap into new markets, reach more customers, and elevate your brand with us.
        </h6>
      </div>

      {/* Right Map */}
      <div className="flex justify-end lg:h-[470px] 3xl:h-[624px] 4xl:h-[830px]">
        <img 
          alt="map" 
          src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/landing-page-map.webp" 
          className=""
        />
      </div>
    </div>
  );
};

export default NetworkMapSection;
