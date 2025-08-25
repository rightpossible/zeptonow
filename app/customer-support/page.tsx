import React from 'react';

export default function CustomerSupport() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-20 text-center min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            We're here to help you 24x7<br />
            on Supr App
          </h1>
          
          <div className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              Supr <strong>does not have an official customer support phone number</strong>.
            </p>
            <p className="mb-4">
              <strong>Please beware of fake numbers & spam calls!</strong>
            </p>
            <p>
              For real time priority chat support, please reach out to us through the latest version of the Supr mobile app.
            </p>
          </div>

          {/* App Screenshot Image */}
          <div className="flex justify-center">
            <img 
              src="https://cdn.prod.website-files.com/60be6e42ecea08f815b762c3/67f65eab3d85f75c9b0df24c_Frame%201814106645%201.png"
              alt="Supr App Customer Support Interface"
              className="max-w-full h-auto"
              style={{ maxWidth: '800px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
