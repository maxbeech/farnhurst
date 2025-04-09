'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FundraisingPage = () => {
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
      title: "Investment Strategy",
      description: "Development of a comprehensive investment strategy to attract the right investors.",
      features: [
        "Market analysis",
        "Investor targeting",
        "Valuation strategy",
        "Investment thesis"
      ],
      image: "/media/thomas-lefebvre-gp8BLyaTaA0-unsplash-min.jpg"
    },
    {
      title: "Due Diligence Support",
      description: "Expert guidance through the due diligence process to ensure a smooth fundraising journey.",
      features: [
        "Documentation preparation",
        "Financial analysis",
        "Legal compliance",
        "Risk assessment"
      ],
      image: "/media/scott-graham-OQMZwNd3ThU-unsplash-min.jpg"
    },
    {
      title: "Investor Relations",
      description: "Building and maintaining strong relationships with investors throughout the fundraising process.",
      features: [
        "Investor communications",
        "Meeting management",
        "Progress reporting",
        "Relationship building"
      ],
      image: "/media/romain-dancre-doplSDELX7E-unsplash-min.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="Fundraising Services"
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
            Fundraising
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
          <h2 className="text-3xl font-serif mb-6">Expert Fundraising Support</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Raising capital is a critical step in business growth. Our comprehensive fundraising 
            support helps you navigate the process successfully, from strategy development to 
            investor relations.
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-serif text-center mb-12">Our Fundraising Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Strategy Development",
                description: "Define your fundraising strategy and prepare your business for investment."
              },
              {
                title: "Investor Targeting",
                description: "Identify and approach suitable investors aligned with your business goals."
              },
              {
                title: "Due Diligence",
                description: "Support throughout the due diligence process with comprehensive documentation."
              },
              {
                title: "Deal Completion",
                description: "Guide you through negotiations and help close the investment round successfully."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-serif mb-4">Ready to Raise Capital?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can help you successfully raise the capital you need.
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

export default FundraisingPage; 