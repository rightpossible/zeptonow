import React from 'react';

export default function Press() {
  const pressArticles = [
    {
      date: "December 21, 2021",
      title: "Grocery Startup Founded by Teens Doubles Value to $570 Million",
      description: "Supr, an instant grocery delivery startup founded by two teenagers, has raised $100 million in a funding round led by Y Combinator, taking its valuation to $570 million within five months...",
      image: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/61c19f9dfc4d044bac4f7956_zepto-funding-yc-continuity.jpeg",
      source: "Bloomberg",
      sourceImage: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f7309e1f9a0b03f01c8cf_Bloomberg.png",
      link: "https://www.bloomberg.com/news/articles/2021-12-20/grocery-startup-founded-by-teens-doubles-value-to-570-million"
    },
    {
      date: "November 1, 2021",
      title: "Supr, a 10-minute grocery delivery app in India, raises $60 million",
      description: "Two 19-year-old entrepreneurs, who previously collaborated on a number of projects including a ride-hailing commute app for school kids and left Stanford...",
      image: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f748b6ebb03f565ec2092_MPV05128.jpeg",
      source: "TechCrunch",
      sourceImage: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f74b3fe14d6a67f005292_download.png",
      link: "https://techcrunch.com/2021/10/31/indias-zepto-a-10-minute-grocery-delivery-app-founded-by-two-19-year-old-stanford-dropouts-raises-60-million/"
    },
    {
      date: "November 1, 2021",
      title: "Teenage Stanford Dropouts Raise $60 Million for Grocery Startup",
      description: "Supr, a 10-minute grocery delivery app startup founded by two teenage Stanford University dropouts has raised $60 million in funding from investors like Y Combinator...",
      image: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f739cbc8062eecea11187_Screenshot%202021-11-01%20at%2010.26.40%20AM.png",
      source: "Bloomberg",
      sourceImage: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f7309e1f9a0b03f01c8cf_Bloomberg.png",
      link: "https://www.bloomberg.com/news/articles/2021-10-31/teenage-stanford-dropouts-grocery-startup-gets-60-million"
    },
    {
      date: "November 1, 2021",
      title: "Grocery delivery app Supr raises $60 mn led by Glade Brook Capital",
      description: "Kiranakart Technologies Pvt Ltd, which runs Supr, a 10-minute grocery delivery app, said it has raised $60 million (around Rs 444 crore)...",
      image: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617ee72385abb263598d92dc_groceryrfxl.jpeg",
      source: "VCCircle",
      sourceImage: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617ee763c283ca4518e8900b_VCC-logo.svg",
      link: "https://www.vccircle.com/grocery-delivery-app-zepto-raises-60-mn-led-by-glade-brook-capital-valued-at-225-mn"
    },
    {
      date: "November 1, 2021",
      title: "Supr raises $60 million to deliver groceries in 10 minutes",
      description: "Quick commerce grocery delivery app Supr has raised $60 million led by US investment fund Glade Brook Capital, at a post-money valuation of $225 million....",
      image: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617ee5a6038328324f618a16_kaivalya-vohra.jpeg",
      source: "Economic Times",
      sourceImage: "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617ee5d2539d0e833a87391f_download.jpeg",
      link: "https://economictimes.indiatimes.com/tech/funding/zepto-raises-60-million-to-deliver-groceries-in-10-minutes/articleshow/87437707.cms?from=mdr"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-800 to-green-900 min-h-screen">
      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-xl text-white mb-16">
          For press inquiries, please contact <a href="mailto:pr@supr.com" className="text-green-300 hover:text-green-200 underline">pr@supr.com</a>.
        </p>
      </div>

      {/* Press Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <a 
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Source and Date */}
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src={article.sourceImage}
                    alt={article.source}
                    className="h-6 object-contain"
                  />
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More */}
                <div className="text-green-600 font-semibold text-sm group-hover:text-green-800 transition-colors">
                  READ MORE
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
