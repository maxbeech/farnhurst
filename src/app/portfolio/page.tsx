'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PortfolioPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'growth', name: 'Business Growth' },
    { id: 'turnaround', name: 'Business Turnaround' },
    { id: 'systems', name: 'Systems Implementation' },
  ];

  const projects = [
    {
      title: "Tech Startup Growth",
      category: "growth",
      description: "Helped a technology startup achieve 300% growth through strategic financial planning and cash flow management.",
      image: "/media/pexels-rdne-7821915.jpg",
      year: "2023"
    },
    {
      title: "Manufacturing Turnaround",
      category: "turnaround",
      description: "Successfully turned around a struggling manufacturing business through improved financial controls and systems.",
      image: "/media/pexels-mikhail-nilov-6963857.jpg",
      year: "2023"
    },
    {
      title: "Retail Systems Upgrade",
      category: "systems",
      description: "Implemented new financial systems for a retail chain, improving efficiency and reporting capabilities.",
      image: "/media/pexels-sora-shimazaki-5668835-min.jpg",
      year: "2022"
    },
    {
      title: "Professional Services Growth",
      category: "growth",
      description: "Supported a professional services firm in expanding to new markets through strategic financial planning.",
      image: "/media/pexels-rdne-8293651.jpg",
      year: "2022"
    },
    {
      title: "Distribution Business Turnaround",
      category: "turnaround",
      description: "Helped a distribution business improve profitability through better working capital management.",
      image: "/media/pexels-august-de-richelieu-4427611-min.jpg",
      year: "2022"
    },
    {
      title: "Healthcare Systems Implementation",
      category: "systems",
      description: "Successfully implemented new financial systems for a healthcare provider, improving efficiency.",
      image: "/media/pexels-karolina-grabowska-7875834-min.jpg",
      year: "2021"
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-8293651.jpg"
          alt="Farnhurst Portfolio"
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
            Our Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500">{project.year}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
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
          <h2 className="text-3xl font-serif mb-4">Start Your Project</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's create something extraordinary together.
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

export default PortfolioPage; 