import React from 'react';

export default function DelAreas() {
  const cities = [
    {
      name: "Bangalore",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/62325218743fb0399e7805f1_brocolli.svg",
      areas: "Hebbal | Koramangala | Peenya | Malleswaram | Jayanagar | Chickpet | Indiranagar | Kr Puram | Ramamurthy Nagar | Bhadrappa Layout | C V Raman Nagar | Bannerghatta | Hennur | Bellandur | Richmond Town | Rn Nagar | Nagarbhavi | Sarjapur | Electronic City | Gunjur | Jp Nagar | Btm Layout | Singasandra | Hsr Layout | Marathahalli | Sonnenahalli | Kothnur | Basavanapura | Brookefield | Whitefield | Kalyan Nagar New | Yeshwantpur | Mico Layout | Raghavendra Layout | Banashankari | Yelahanka New Town | Jakkur | Jalahalli | Vijay Nagar | Shivaji Nagar"
    },
    {
      name: "Chennai",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/623251f2f7cdda59d31f103a_chips.svg",
      areas: "Kknagar | Sholinganallur | Nandambakkam | Nungambakkam | T Nagar | Mylapore | Annanagar | Thoraipakkam | Perambur | Otteri | Kelambakkam | Adyar | Mogappair | Madambakkam | Navalur | Medavakkam | Mudichur | Perumbakkam | Velachery | Pallikaranai | Ambattur | Nanganallur | Tambaram | Pammal | Vandalur | Gerugambakkam"
    },
    {
      name: "Delhi",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/62325184af68ce2f74064142_egg.svg",
      areas: "Karol Bagh | Dilshad Garden | Mayur Vihar | Model Town | Pitampura | South Extension | Rohini Sector 3 | Rohini Sector 15 | Sector 10 Dwarka | Paschim Vihar | Uttam Nagar | Shakti Nagar | Kalkaji | Kirti Nagar | Rk Puram | Sector 12 Dwarka | New Friends Colony | Vikaspuri | Malviya Nagar | Vasant Kunj | Mahavir Enclave | Janakpuri | Anand Vihar | Ip Extension | East Of Kailash | Rajouri Garden | Wazirpur | Karol Bagh"
    },
    {
      name: "Ghaziabad",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/6232527fe6aa599abaa06624_grape.svg",
      areas: "Indirapuram | Vaishali | Gaur City | Rajnagar Extension | Raj Nagar"
    },
    {
      name: "Gurgaon",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/62325208f86a0f47504a4d46_apple.svg",
      areas: "Sector 12 | Sector66 | Udyog Vihar | Sector 71 | Sector 53 | Sector 39 | Sun City | Sector 63 | Sector 27 | Ardee City | Sector 69"
    },
    {
      name: "Hyderabad",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/6232523c796b8fe32dda4ae8_mango.svg",
      areas: "Ramanthapur | Madhapur | Secunderabad | Chandanagar | Uppal | Jubleehills | Moosapet | Ecil | Dammaiguda | Begumpet | Musheerabad | Suchitra | Himayathnagar | Sainikpuri | Banjarahills | Kondapur | Bachupally | Kothapet | Gachibowli | Kukatpally | Mehdipatnam | Tarnaka | Bowenpally | Rc Puram | Vivekananda Nagar | Nizampet | Manikonda | Miyapur | Nallagandla"
    },
    {
      name: "Kolkata",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/6232526fa011c162c1d4caaf_tomato.svg",
      areas: "Rajarhat | New Town | Phoolbagan | Behala | Salt Lake | Lake Town | Bhawanipore | Jadavpur"
    },
    {
      name: "Mumbai",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/6232522cace94b241be52097_orange.svg",
      areas: "Bhandup | Santacruz | Bhayender | Andheri (w) | Matunga | Kharghar | Andheri (e) | Malad | Bandra (w) | Waghle Estate | Vashi Sector 19A | Powai Network | Parel | Bkc | Kothari Compound | Lower Parel | Borivali | Goregaon (e) | Palava | Majiwada | Kandivali (e) | Panvel | Ghatkopar (w) | Kandivali (w) | Chembur | Dombivali (w) | Powai | Marol | Koparkhairne | Waghbil Belapur | Mira Road | Mumbai Central"
    },
    {
      name: "Noida",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/6232525d4643e4e0368a423f_cookie.svg",
      areas: "Sector 63 | Sector 142 | Sector 117 | Sector 10 | Sector 46 | Sector 73"
    },
    {
      name: "Pune",
      icon: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/62325250f08f34b608a5bf6d_avocado.svg",
      areas: "Marketyard | Baner | Nibm Road | Ravet | Viman Nagar | Pimple Saudagar | Aundh | Shivajinagar | Hinjewadi Phase-1 | Koregaon Park | Kharadi | Kothrud | Hadapsar | Magarpatta"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-900 min-h-screen">
      {/* Cities Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-purple-800 p-8 rounded-lg border border-purple-600 hover:shadow-lg transition-shadow">
              {/* City Header */}
              <div className="flex items-center mb-6">
                <img 
                  src={city.icon} 
                  alt={`${city.name} icon`}
                  className="w-14 h-14 mr-4"
                />
                <h2 className="text-2xl font-bold text-white">
                  {city.name}
                </h2>
              </div>
              
              {/* Areas List */}
              <p className="text-white leading-relaxed">
                {city.areas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
