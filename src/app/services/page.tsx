'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: "Finance Director Services",
      description: "Providing flexible and cost-effective Finance Director level support to help your business grow and thrive.",
      features: [
        "Strategic financial planning",
        "Cash flow management",
        "Business performance analysis",
        "Financial reporting"
      ],
      image: "/media/pexels-rdne-7821915.jpg"
    },
    {
      title: "Business Advisory",
      description: "Expert business advice to help you make informed decisions and drive sustainable growth.",
      features: [
        "Business strategy development",
        "Growth planning",
        "Risk management",
        "Performance optimization"
      ],
      image: "/media/pexels-sora-shimazaki-5668835-min.jpg"
    },
    {
      title: "Systems Implementation",
      description: "Comprehensive support for selecting and implementing financial systems that streamline your operations.",
      features: [
        "System selection",
        "Implementation planning",
        "Process optimization",
        "Staff training"
      ],
      image: "/media/pexels-mikhail-nilov-6963857.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/media/pexels-rdne-8293651.jpg"
          alt="Farnhurst Services"
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
            Our Services
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
          <h2 className="text-3xl font-serif mb-6">Comprehensive Financial Solutions</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Farnhurst, we offer a full range of financial services, 
            tailored to meet your specific business needs. Our team of experts works closely with you 
            to deliver exceptional results that drive growth and profitability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-block mt-6 text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Learn More
                </a>
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
          <h2 className="text-3xl font-serif mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how our services can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage; 