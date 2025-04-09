'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ExperiencePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const experienceAreas = [
    {
      title: "Start-ups and Early Stage Companies",
      description: "We have extensive experience working with start-ups and early-stage companies, helping them establish solid financial foundations and implement scalable processes.",
      image: "/media/pexels-rdne-7821915.jpg",
      highlights: [
        "Business planning and strategy",
        "Financial modeling",
        "Investor relations",
        "Growth planning"
      ]
    },
    {
      title: "High-Growth Environments",
      description: "Our expertise in managing rapid growth helps businesses scale effectively while maintaining financial stability and operational efficiency.",
      image: "/media/pexels-mikhail-nilov-6963857.jpg",
      highlights: [
        "Scalable systems implementation",
        "Cash flow management",
        "Team structure and development",
        "Process optimization"
      ]
    },
    {
      title: "Systems Implementation",
      description: "We guide businesses through the complete lifecycle of financial systems implementation, from initial planning to successful deployment.",
      image: "/media/pexels-sora-shimazaki-5668835-min.jpg",
      highlights: [
        "Requirements analysis",
        "System selection",
        "Implementation planning",
        "Training and support"
      ]
    },
    {
      title: "International Business",
      description: "Our experience with international operations helps businesses navigate complex global markets and regulatory environments.",
      image: "/media/pexels-rdne-8293651.jpg",
      highlights: [
        "Cross-border operations",
        "International compliance",
        "Currency management",
        "Global expansion strategy"
      ]
    },
    {
      title: "Mergers and Acquisitions",
      description: "We provide comprehensive support for businesses undergoing mergers, acquisitions, or disposals, ensuring smooth transitions.",
      image: "/media/pexels-august-de-richelieu-4427611-min.jpg",
      highlights: [
        "Due diligence",
        "Valuation analysis",
        "Integration planning",
        "Post-merger support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="Farnhurst Experience"
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
            Our Experience
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
          <h2 className="text-3xl font-serif mb-6">Proven Expertise Across Industries</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With years of experience working with businesses of all sizes and across various sectors, 
            we bring a wealth of knowledge and practical expertise to every client engagement.
          </p>
        </motion.div>

        {/* Experience Areas */}
        <div className="space-y-24">
          {experienceAreas.map((area, index) => (
            <motion.div
              key={area.title}
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
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-serif mb-4">{area.title}</h3>
                <p className="text-gray-700 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center">
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
                      {highlight}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-3xl font-serif mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how our experience can benefit your business.
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

export default ExperiencePage; 