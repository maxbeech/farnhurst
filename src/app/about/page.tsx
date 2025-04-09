'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="Farnhurst Office"
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
            Our Story
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
          className="mb-16"
        >
          <h2 className="text-3xl font-serif mb-6">Welcome to Farnhurst</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Farnhurst Enterprises is an accounting consultancy dedicated to helping entrepreneurial clients grow in a profitable and cash generative way. 
            We combine traditional financial expertise with modern business practices to deliver exceptional results that exceed our clients' expectations.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Excellence",
              description: "We strive for excellence in every aspect of financial management, maintaining the highest standards of professional service.",
              image: "/media/pexels-rdne-8293651.jpg"
            },
            {
              title: "Innovation",
              description: "Embracing new technologies and financial practices to create forward-thinking solutions for our clients.",
              image: "/media/pexels-mikhail-nilov-6963857.jpg"
            },
            {
              title: "Integrity",
              description: "Building trust through transparent communication and reliable financial guidance.",
              image: "/media/pexels-sora-shimazaki-5668835-min.jpg"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif mb-8">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our team of experienced financial professionals brings together diverse expertise in accounting, 
            business advisory, and financial management. We work collaboratively to ensure every client 
            receives the attention and expertise they deserve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Founder & Financial Director",
                image: "/media/gabrielle-henderson-HJckKnwCXxQ-unsplash-min.jpg"
              },
              {
                name: "Sarah Johnson",
                role: "Senior Financial Advisor",
                image: "/media/clarisse-meyer-jKU2NneZAbI-unsplash-min.jpg"
              },
              {
                name: "Michael Brown",
                role: "Business Development Manager",
                image: "/media/inaki-del-olmo-NIJuEQw0RKg-unsplash-min.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
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
          className="text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-serif mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can bring your vision to life.
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

export default AboutPage; 