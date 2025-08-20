import React from 'react';

const Categories = () => {
  const categories = [
    "Fruits & Vegetables",
    "Atta, Rice, Oil & Dals", 
    "Masala & Dry Fruits",
    "Sweet Cravings",
    "Frozen Food & Ice Creams",
    "Baby Food",
    "Dairy, Bread & Eggs",
    "Cold Drinks & Juices", 
    "Munchies",
    "Meats, Fish & Eggs",
    "Breakfast & Sauces",
    "Tea, Coffee & More",
    "Biscuits",
    "Makeup & Beauty",
    "Bath & Body",
    "Cleaning Essentials",
    "Home Needs",
    "Electricals & Accessories",
    "Hygiene & Grooming",
    "Health & Baby Care",
    "Homegrown Brands",
    "Paan Corner"
  ];

  const popularSearches = {
    "Products": [
      "Avocado", "Strawberry", "Pomegranate", "Beetroot", "Ash gourd", "Bottle gourd", 
      "Lady finger", "Potato", "Lemon", "Dalchini", "Fennel seeds", "Blueberry", 
      "Papaya", "Dragon fruit", "Mushroom", "Lettuce"
    ],
    "Brands": [
      "Yakult", "My Muse", "Aashirvaad Atta", "Too Yumm", "Lays", "Figaro Olive Oil", 
      "Nandini Milk", "Amul", "Mother Dairy Near Me", "Fortune Oil", "Superyou", 
      "Durex Condoms", "Ferns and Petals"
    ],
    "Categories": [
      "Grocery", "Cigarettes", "Chips", "Curd", "Hukka flavour", "Paan shop near me", 
      "Eggs price", "Cheese slice", "Fresh fruits", "Fresh vegetables", "Refined oil", 
      "Butter price", "Paneer price"
    ]
  };

  return (
    <section className="bg-white py-6 px-10">
      <div className="max-w-full mx-auto">
        {/* Popular Searches Section FIRST */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-gray-900 mb-4">Popular Searches</h3>
          
          <div className="space-y-3">
            {Object.entries(popularSearches).map(([category, items]) => (
              <div key={category}>
                <span className="text-xs font-semibold text-gray-900 mr-2">
                  {category}:
                </span>
                <span className="inline">
                  {items.map((item, index) => (
                    <React.Fragment key={item}>
                      <a
                        href="#"
                        className="text-xs text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      >
                        {item}
                      </a>
                      {index < items.length - 1 && (
                        <span className="text-gray-400 mx-1">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section SECOND */}
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-4">
            Categories
          </h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="block p-2 text-xs text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
