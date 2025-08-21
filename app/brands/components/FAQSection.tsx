"use client";

import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the documents required to start selling on Supr?",
      answer: "You will need your PAN Card, GSTIN Certificate, Cancelled Cheque, Authorized Signatory Signature Copy & Original Trademark Certificate or Authorisation Letter/NOC on brand owner's letterhead."
    },
    {
      question: "What are the prerequisites for listing & cataloging your products to get onboarded with Supr?",
      answer: "You will need to provide your brand tag details, accurate product sizing details and article images for cataloging meeting up-to Supr specifications & guidelines to uphold the shopping experience on Supr"
    },
    {
      question: "How much time does it take to get onboarded on Supr?",
      answer: "To get onboarded on Supr, your brand should have a sizeable catalog width & quality product with a unique value proposition. If your brand qualifies Supr's defined selection criteria, you can be onboarded within 15 business days. This might be longer during major sale events extending up-to 45 days."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-start w-[90vw] lg:w-[80vw] gap-16 md:gap-[3rem]">
      {/* Left Side - Title */}
      <div className="flex flex-col gap-5 lg:gap-10 basis-1/2">
        <div className="flex justify-center lg:justify-start">
          <span className="py-2 px-[10px] border rounded-[100px] text-gray-700 text-sm">
            Any Queries
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 text-center lg:text-start">
          Frequently Asked
          <div className="bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
            Questions
          </div>
        </h1>
      </div>

      {/* Right Side - FAQ Items */}
      <div className="lg:w-[50vw] flex flex-col items-center gap-4 justify-self-start">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <div 
              className="cursor-pointer w-full flex items-center justify-between gap-2 md:gap-5 py-6"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-5">
                <div className="flex justify-between items-center transition duration-150 ease-in-out">
                  <h6 className="text-gray-800 font-semibold text-lg">
                    {faq.question}
                  </h6>
                </div>
              </div>
              <img 
                alt="chevron-down" 
                src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/chevron-down-black.svg" 
                className={`w-6 h-6 transition-transform duration-200 ${
                  expandedFAQ === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="text-gray-800 text-wrap pb-6">
                {faq.answer}
              </p>
            </div>
            
            <div className="w-full">
              <div 
                className="h-[0.063rem] w-full"
                style={{background: 'linear-gradient(to right, rgba(61, 1, 107, 0.40), white)'}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
