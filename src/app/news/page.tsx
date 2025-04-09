'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NewsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsItems = [
    {
      title: "Farnhurst Expands Financial Advisory Services",
      date: "March 1, 2024",
      category: "Company News",
      excerpt: "We are pleased to announce the expansion of our financial advisory services to better serve our growing client base.",
      image: "/media/pexels-rdne-7821915.jpg",
      readTime: "5 min read"
    },
    {
      title: "Key Financial Trends for 2024",
      date: "February 28, 2024",
      category: "Industry Insights",
      excerpt: "Explore the latest trends in financial management and business advisory that are shaping the future of entrepreneurship.",
      image: "/media/pexels-mikhail-nilov-6963857.jpg",
      readTime: "7 min read"
    },
    {
      title: "New Financial Systems Implementation Success",
      date: "February 25, 2024",
      category: "Company News",
      excerpt: "Farnhurst celebrates another successful financial systems implementation, helping clients streamline their operations.",
      image: "/media/pexels-sora-shimazaki-5668835-min.jpg",
      readTime: "4 min read"
    },
    {
      title: "The Future of Business Finance",
      date: "February 20, 2024",
      category: "Industry Insights",
      excerpt: "Discover how technology is revolutionizing financial management and creating more efficient business operations.",
      image: "/media/pexels-rdne-8293651.jpg",
      readTime: "6 min read"
    },
    {
      title: "Client Success Story: Business Turnaround",
      date: "February 15, 2024",
      category: "Case Studies",
      excerpt: "How we helped a struggling business achieve sustainable growth through improved financial management.",
      image: "/media/pexels-august-de-richelieu-4427611-min.jpg",
      readTime: "5 min read"
    },
    {
      title: "Financial Planning for Growth",
      date: "February 10, 2024",
      category: "Industry Insights",
      excerpt: "Essential financial planning strategies for businesses looking to scale and grow in today's market.",
      image: "/media/pexels-karolina-grabowska-7875834-min.jpg",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-8293651.jpg"
          alt="Farnhurst News"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white text-center"
          >
            News & Insights
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-white/80 text-sm mb-2 block">{newsItems[0].date}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{newsItems[0].title}</h2>
              <p className="text-white/90 mb-4 max-w-2xl">{newsItems[0].excerpt}</p>
              <a
                href="/contact"
                className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.category}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="text-xl font-serif mb-2 group-hover:text-gray-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <a
                href="/contact"
                className="text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Read More →
              </a>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-serif mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter for the latest news and insights.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsPage; 