import React from 'react';

const MeetDriversSection = () => {
  const drivers = [
    {
      name: "Ahmed Hassan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Supr helped me achieve my dream of educating my children. My children are now highly educated just because of Supr."
    },
    {
      name: "Mohammed Ali",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "Supr enables me to maximize my earnings and improve my lifestyle. I love travel and because of Supr I was able to visit 15 countries in last 3 years."
    },
    {
      name: "Omar Abdullah",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      testimonial: "With Supr I got the confidence to support my family and my community. Because of Supr I was able to buy a land to build a home in my country."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet the Drivers
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {drivers.map((driver, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src={driver.image}
                    alt={driver.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-200"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {driver.name}
                </h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "{driver.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetDriversSection;
