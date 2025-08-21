import React from 'react';

const BrandStatsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-center w-[90vw] md:w-[80vw] text-gray-700">
          Trusted by{' '}
          <span className="bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
            10K+ Brands Across 30+ Categories
          </span>
        </h3>
      </div>
    </div>
  );
};

export default BrandStatsSection;
