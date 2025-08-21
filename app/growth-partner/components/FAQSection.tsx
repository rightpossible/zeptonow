"use client";

import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(2); // Third item expanded by default

  const faqs = [
    {
      question: "How will my store get orders?",
      answer: "All the demand is driven by the Supr app. Orders Placed within your store's catchment automatically flow to your dashboard. You don't need any local marketing to generate orders."
    },
    {
      question: "What will be my core responsibilities?",
      answer: "As a zepto growth partner, you'll be responsible for creating processes and ensuring a smooth flow of inventory and outbound processes including picking, packing, billing, and a seamless handover to our delivery partners."
    },
    {
      question: "Do I deliver the orders to customers?",
      answer: "No, your responsibility will end at handing over orders to delivery partners. Supr's delivery fleet will handle the last mile deliveries to customers."
    },
    {
      question: "How soon can I break even in this business?",
      answer: "The ROI of your investment depends on your store's throughput, efficiency, and service levels. Our transparent revenue-share models and growth trajectory create a clear path to profitability."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="flex gap-2 px-8 py-20 max-w-5xl flex-col md:flex-row">
        <h2 className="text-3xl font-bold pb-8 md:pb-0 md:pt-2 text-gray-900">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col gap-5 w-full md:w-3/4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="rounded-lg bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={expandedFAQ === index}
                >
                  <div>
                    <h6 className="text-gray-950 font-medium text-lg">
                      {faq.question}
                    </h6>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
