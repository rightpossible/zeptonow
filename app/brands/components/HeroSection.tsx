import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex gap-16 lg:gap-32 flex-col lg:flex-row w-[90vw] md:w-[80vw] justify-center items-start">
      {/* Left Side - Content */}
      <div className="flex lg:flex-1 flex-col gap-8 3xl:gap-10 items-center lg:items-start">
        {/* Active Customer Badge */}
        <div className="bg-white flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-3xl">
          <div className="rounded-full w-4 h-4 bg-[#E9D7FE] flex items-center justify-center">
            <div className="rounded-full w-[6px] h-[6px] bg-gradient-to-tr from-gray-900 to-[#8C1D75]"></div>
          </div>
          <span className="text-sm text-gray-600">55M+ active customer</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-700 text-center lg:text-start leading-tight">
          Fuel Your Growth
          <div className="bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
            with Supr
          </div>
        </h1>

        {/* Subtitle */}
        <h6 className="text-base text-gray-600 text-center lg:text-start">
          Reach millions in minutes. Unlock more PIN codes, increase your visibility, and watch your sales soar.
        </h6>

        {/* CTA Buttons */}
        <div className="flex gap-3 w-full justify-center lg:justify-start">
          <button 
            className="rounded-md px-6 py-3 text-white border border-primary-600 transition-colors duration-200 flex items-center gap-2"
            style={{background: 'linear-gradient(to right, #3C006B, #8C1D75)'}}
          >
            Register Now
            <img 
              alt="sell on supr" 
              src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/sell-on-zepto.svg" 
              className="!h-2 md:!h-3 4xl:!h-4 !mx-2"
            />
          </button>
          <button className="border border-primary-600 rounded-md px-6 py-3 text-primary-600 hover:bg-primary-50 transition-colors duration-200">
            Contact Us
          </button>
        </div>

        {/* Stats Grid */}
        <div className="flex gap-6 w-full text-center lg:text-start">
          <div className="flex-1">
            <h4 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
              135k+
              <div>Products</div>
            </h4>
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
              1100+
              <div>Stores</div>
            </h4>
          </div>
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="lg:flex-1 flex items-center justify-center lg:h-[550px] 3xl:h-[688px] 4xl:h-[850px]">
        <video 
          autoPlay 
          loop 
          playsInline 
          muted
          className="object-cover rounded-3xl h-full w-full"
        >
          <source 
            src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/assets/landing-page.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
