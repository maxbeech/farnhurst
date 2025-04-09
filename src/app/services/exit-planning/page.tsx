'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ExitPlanningPage = () => {
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
      title: "Exit Strategy Development",
      description: "Comprehensive exit strategy planning to maximize the value of your business.",
      features: [
        "Valuation analysis",
        "Market assessment",
        "Timing optimization",
        "Exit route planning"
      ],
      image: "/media/pexels-august-de-richelieu-4427611-min.jpg"
    },
    {
      title: "Business Preparation",
      description: "Prepare your business for a successful exit by addressing key value drivers.",
      features: [
        "Financial optimization",
        "Operational improvements",
        "Documentation review",
        "Management team assessment"
      ],
      image: "/media/pexels-karolina-grabowska-7875834-min.jpg"
    },
    {
      title: "Transaction Support",
      description: "Expert guidance throughout the exit process to ensure a smooth transaction.",
      features: [
        "Buyer identification",
        "Due diligence support",
        "Negotiation assistance",
        "Transaction management"
      ],
      image: "/media/pexels-a-darmel-7641842-min.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="Exit Planning"
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
            Exit Planning
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
          <h2 className="text-3xl font-serif mb-6">Expert Exit Planning</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our exit planning services help business owners maximize the value of their 
            business and ensure a smooth transition. We guide you through every step of 
            the exit process, from initial planning to successful completion.
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
          <h2 className="text-3xl font-serif text-center mb-12">Our Exit Planning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment",
                description: "Evaluate your business and identify value drivers"
              },
              {
                title: "Strategy",
                description: "Develop a comprehensive exit strategy"
              },
              {
                title: "Preparation",
                description: "Prepare your business for sale"
              },
              {
                title: "Execution",
                description: "Execute the exit plan and complete the transaction"
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
          <h2 className="text-3xl font-serif mb-4">Ready to Plan Your Exit?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can help you maximize the value of your business and ensure a successful exit.
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

export default ExitPlanningPage; 