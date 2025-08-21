"use client";

import React, { useState } from 'react';

const GrowthTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0); // Brand Success is active by default

  const tabs = [
    'Brand Success',
    'Business Ease', 
    'Tech & Data',
    'Trust & Transparency'
  ];

  const tabContent = {
    0: {
      title: "Reach Customers and Drive Impact",
      subtitle: "",
      features: [
        {
          title: "Ads",
          description: "Enhance your brand visibility and recall with customised in-house ads."
        },
        {
          title: "Pricing",
          description: "You set the prices. Reach new customers or re-engage with tailored pricing solutions."
        },
        {
          title: "Events",
          description: "Capitalise on high-demand events for instant impact."
        },
        {
          title: "Sampling",
          description: "Target communities precisely and make lasting connections."
        }
      ],
      image: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/growth-story-image.svg"
    },
    1: {
      title: "Expert Support, Total Visibility",
      subtitle: "",
      features: [
        {
          title: "Dedicated Support",
          description: "Your growth matters to us. Get a dedicated Key Account Manager for every step."
        },
        {
          title: "P2P Visibility",
          description: "At Supr, we give our sellers full visibility into every transaction – all from a single platform."
        }
      ],
      image: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/growth-story-image.svg"
    },
    2: {
      title: "Tech & Data Content", 
      subtitle: "Technology and data features",
      features: [
        {
          title: "Analytics Dashboard",
          description: "Track your performance with detailed analytics"
        },
        {
          title: "API Integration",
          description: "Seamless integration with your existing systems"
        }
      ],
      image: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/growth-story-image.svg"
    },
    3: {
      title: "Trust & Transparency Content",
      subtitle: "Trust and transparency features", 
      features: [
        {
          title: "Secure Payments",
          description: "Safe and secure payment processing"
        },
        {
          title: "Transparent Reporting",
          description: "Clear and detailed transaction reporting"
        }
      ],
      image: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/growth-story-image.svg"
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="flex flex-col gap-10 items-center w-[90vw] md:w-[80vw]">
      <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-start">
        <span className="bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
          The Growth
        </span>{' '}
        <span className="text-gray-700">Your Brand Deserves</span>
      </h1>

      {/* Tab Navigation */}
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          <div className="flex" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 relative ${
                  activeTab === index
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                role="tab"
                aria-selected={activeTab === index}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[550px] w-[90vw] md:w-[80vw]">
        <div className="min-h-[550px] rounded-[32px] bg-gray-50 border border-gray-200 flex justify-between flex-col lg:flex-row md:gap-8 relative overflow-hidden transition-all duration-700 ease-in-out">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col gap-2 mt-10 md:mt-16 ml-5 mr-5 md:ml-10 mb-10">
            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 !mb-2">
                {currentContent.title}
              </h3>
              {currentContent.subtitle && (
                <p className="text-gray-600">
                  {currentContent.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
              {currentContent.features.map((feature, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="right-0 lg:w-[40%]">
            <img 
              alt="growth-story-image" 
              src={currentContent.image}
              className="ml-4 lg:ml-0 mt-10 lg:mt-[30px] h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTabsSection;
