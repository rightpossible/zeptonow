import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "DataPortal: Empowering Everyone to Build and Manage Code-Free Data Pipelines",
      excerpt: "In today's fast-paced, data-driven world, teams spend far too much time manually building pipelines, managing access, and integrating data...",
      author: "Mohitkundu",
      authorImage: "https://miro.medium.com/v2/resize:fill:40:40/0*dEhpZBpzk1fk7M_q",
      date: "5d ago",
      readTime: "6 min read",
      image: "https://miro.medium.com/v2/resize:fill:320:214/format:webp/1*htIVS9bZ2xKgB3Nsy0dnbA.png"
    },
    {
      id: 2,
      title: "Boosting Geospatial Performance at Supr: Learnings from Scaling Tile38",
      excerpt: "Introduction",
      author: "Keshav Kumar",
      authorImage: "https://miro.medium.com/v2/resize:fill:40:40/1*o9b3inODAyLX0l9fk4LASw.png",
      date: "Aug 5",
      readTime: "6 min read",
      image: "https://miro.medium.com/v2/resize:fill:320:214/format:webp/1*fbVxejfm_dvEJRn7tevZVw.png"
    },
    {
      id: 3,
      title: "🚀 How Supr Automates CodePush to 3 App Versions Without Losing Sanity",
      excerpt: "This post is a continuation of our earlier write-up: Why we built our very own in-house React Native CodePush platform aka Project Phoenix...",
      author: "Rishabh Harit",
      authorImage: "https://miro.medium.com/v2/resize:fill:40:40/1*X8GF3dDY-uis2Vqm2bWEXw.png",
      date: "Aug 1",
      readTime: "6 min read",
      image: "https://miro.medium.com/v2/resize:fill:320:214/format:webp/1*aJRNcEHeV8sNVQCNhXBuIw.png"
    },
    {
      id: 4,
      title: "The Ultimate Doppelgänger: Inside Supr's Universal Mock Service",
      excerpt: "In modern software development, reliable testing environments are just as important as writing great code. At Supr, we encountered...",
      author: "RICH GUPTA",
      authorImage: "https://miro.medium.com/v2/resize:fill:40:40/1*80b_XSjw67mantpT7JzBpQ.jpeg",
      date: "Jul 30",
      readTime: "7 min read",
      image: "https://miro.medium.com/v2/resize:fill:320:214/format:webp/1*BRn8lGhpi2Ex4Z6x5zVtQw.png"
    },
    {
      id: 5,
      title: "Rebuilding the Map for 10-Minute Delivery: How Supr Maps is Rewiring Urban Navigation",
      excerpt: "In the world of 10-minute delivery, every meter counts. A misplaced pin, a missing society name, or an unmarked gate can lead to late...",
      author: "Ashutosh Ranjan",
      authorImage: "https://miro.medium.com/v2/resize:fill:40:40/0*o8Qb9msI2RywXzb0",
      date: "Jul 23",
      readTime: "11 min read",
      image: "https://miro.medium.com/v2/resize:fill:320:214/format:webp/1*-O3g7E70YQtm7abUiQ_6mQ.png"
    },
    {
      id: 6,
      title: "Double Growth. Powered by 1 Mindset — Sumit's journey at Supr",
      excerpt: "From a fresher software engineer to now a senior software engineer, Sumit Gupta's journey at Supr is a testament to what rapid ownership...",
      author: "Bhavya Sharma",
      authorImage: "https://miro.medium.com/v2/resize:fill:40:40/0*BPIwqaZS7VDLhsgG",
      date: "Jul 15",
      readTime: "3 min read",
      image: "https://miro.medium.com/v2/resize:fill:320:214/format:webp/1*0nPrXpntvr5I1FLNGHzwOw.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Publication Info */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-80 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
          <img 
            src="https://miro.medium.com/v2/resize:fit:2400/1*rPlcGtT6Qu7i-HB4vxzeeA.png"
            alt="Supr TechXPress Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Publication Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex items-end space-x-6">
              {/* Publication Avatar */}
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-full p-1">
                  <div className="w-full h-full bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                </div>
              </div>

              {/* Publication Details */}
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-2">Supr TechXPress</h1>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <span>745 followers</span>
                  <span>·</span>
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      <img className="w-5 h-5 rounded-full border border-white" src="https://miro.medium.com/v2/resize:fill:40:40/1*1H1e-leUC2DqhMpp1vMW0g.png" alt="Editor" />
                      <img className="w-5 h-5 rounded-full border border-white" src="https://miro.medium.com/v2/resize:fill:40:40/1*nAYn2013SLVlXY7q71y9yw.png" alt="Editor" />
                      <img className="w-5 h-5 rounded-full border border-white" src="https://miro.medium.com/v2/resize:fill:40:40/0*BPIwqaZS7VDLhsgG" alt="Editor" />
                      <img className="w-5 h-5 rounded-full border border-white" src="https://miro.medium.com/v2/resize:fill:40:40/1*dmbNkD5D-u45r44go_cf0g.png" alt="Editor" />
                      <img className="w-5 h-5 rounded-full border border-white" src="https://miro.medium.com/v2/resize:fill:40:40/0*-NwevBQudQIQIGck" alt="Editor" />
                    </div>
                    <span>5 editors</span>
                  </div>
                </div>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button className="py-4 px-1 border-b-2 border-green-600 text-green-600 font-medium text-sm whitespace-nowrap">
              Engineering
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Trending
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Culture
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Careers
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Post Image */}
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <img 
                    src={post.authorImage}
                    alt={post.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-gray-700">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="text-green-600 hover:text-green-700 font-medium">
            Load more stories
          </button>
        </div>
      </div>
    </div>
  );
}
