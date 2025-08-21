"use client";

import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the requirements to be a delivery partner?",
      answer: "You need to be 18+ years old, have a valid driving license, own a two-wheeler, and have basic smartphone knowledge."
    },
    {
      question: "Do I need to work every day, or can I take days off?",
      answer: "You have complete flexibility to work when you want. You can take days off as needed and work according to your schedule."
    },
    {
      question: "How much can I earn as a Supr delivery partner?",
      answer: "You can earn up to ₹60,000 per month depending on the number of deliveries you complete and daily incentives you achieve."
    },
    {
      question: "Do I need to own a bike?",
      answer: "Yes, you need to own a two-wheeler (bike or scooter) to become a delivery partner with Supr."
    },
    {
      question: "Do I need a driver's license?",
      answer: "Yes, a valid driving license is mandatory to work as a delivery partner for safety and legal compliance."
    },
    {
      question: "Will I be covered under any insurance while working for Supr?",
      answer: "Yes, Supr provides insurance coverage of up to ₹10 lakhs for you and your family while you're working as a delivery partner."
    },
    {
      question: "What should I do if I face harassment or uncomfortable situations with customers or otherwise?",
      answer: "Immediately contact our support team through the app or helpline. We have zero tolerance for harassment and will take appropriate action."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div id="faqs" className="flex flex-col py-6 scroll-mt-16">
      <span className="text-xl font-semibold text-gray-900 px-5">Questions</span>
      
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="flex flex-col space-y-2 p-5">
            <div className="flex items-center">
              <span className="text-base text-gray-900 flex-1 font-medium">
                {faq.question}
              </span>
              <button 
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-center text-base rounded-md !font-medium text-primary-700 hover:bg-primary py-0"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                >
                  <path 
                    d="M5 7.5L10 12.5L15 7.5" 
                    stroke="#98A2B3" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </button>
            </div>
            
            {expandedFAQ === index && (
              <div className="mt-2 text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
          
          {index < faqs.length - 1 && (
            <div className="w-full border-b border-dashed border-gray-700 !border-gray-200 !w-[90%] !mx-auto"></div>
          )}
        </div>
      ))}
      
      <div className="flex flex-col w-full space-y-3 pt-5 px-4">
        <button className="flex items-center justify-center text-base rounded-md !font-medium bg-primary-700 text-white h-12 !text-primary-600 !bg-primary-50 font-medium text-base w-full h-12">
          Got more questions? Connect with us
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
