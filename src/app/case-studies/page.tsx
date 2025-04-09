'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CaseStudiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const caseStudies = [
    {
      title: "Tech Startup Growth",
      description: "How we helped a rapidly growing tech startup optimize their financial operations and secure Series A funding.",
      results: [
        "Secured £2M in Series A funding",
        "Improved cash flow management",
        "Implemented scalable financial systems",
        "Enhanced investor reporting"
      ],
      image: "/media/pexels-rdne-7821915.jpg",
      industry: "Technology",
      services: ["Financial Planning", "Systems Implementation", "Fundraising"]
    },
    {
      title: "Manufacturing Transformation",
      description: "Supporting a manufacturing business through a successful management buyout and operational transformation.",
      results: [
        "Completed £5M management buyout",
        "Reduced operational costs by 20%",
        "Improved working capital efficiency",
        "Enhanced management reporting"
      ],
      image: "/media/pexels-mikhail-nilov-6963857.jpg",
      industry: "Manufacturing",
      services: ["Exit Planning", "Operational Improvement", "Financial Reporting"]
    },
    {
      title: "Retail Expansion",
      description: "Guiding a retail business through rapid expansion and international market entry.",
      results: [
        "Expanded to 3 new markets",
        "Increased revenue by 150%",
        "Implemented multi-currency systems",
        "Established international operations"
      ],
      image: "/media/pexels-sora-shimazaki-5668835-min.jpg",
      industry: "Retail",
      services: ["Strategic Planning", "International Expansion", "Systems Implementation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="Case Studies"
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
            Case Studies
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-serif mb-6">Success Stories</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve their 
            goals through our comprehensive financial and strategic services.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-4">{study.title}</h3>
                <p className="text-gray-700 mb-6">{study.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-serif mb-3">Key Results:</h4>
                  <ul className="space-y-3">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-black mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-serif mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can help your business achieve its goals and create your own success story.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage; 