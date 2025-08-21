import React from 'react';

const VendorPortalLogo = () => {
  return (
    <div className="flex items-center h-20 relative z-10 justify-start">
      <img 
        alt="zepto logo" 
        src="https://brands-onboarding.zepto.co.in/assets/icons/zepto-icon.svg" 
        className="w-8 h-8 mr-4" 
      />
      <h4 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-xl">
        Vendor Portal
      </h4>
    </div>
  );
};

export default VendorPortalLogo;
