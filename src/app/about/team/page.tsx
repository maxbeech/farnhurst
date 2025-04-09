'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & Financial Director",
      bio: "With over 20 years of experience in financial management and business advisory, John has helped numerous businesses achieve sustainable growth.",
      image: "/media/gabrielle-henderson-HJckKnwCXxQ-unsplash-min.jpg",
      expertise: ["Strategic Planning", "Business Growth", "Financial Management"]
    },
    {
      name: "Sarah Johnson",
      role: "Senior Financial Advisor",
      bio: "Sarah brings extensive experience in financial advisory and systems implementation, helping businesses optimize their financial operations.",
      image: "/media/clarisse-meyer-jKU2NneZAbI-unsplash-min.jpg",
      expertise: ["Financial Advisory", "Systems Implementation", "Risk Management"]
    },
    {
      name: "Michael Brown",
      role: "Business Development Manager",
      bio: "Michael specializes in helping businesses identify and capitalize on growth opportunities while maintaining financial stability.",
      image: "/media/inaki-del-olmo-NIJuEQw0RKg-unsplash-min.jpg",
      expertise: ["Business Development", "Growth Strategy", "Market Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="Farnhurst Team"
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
            Our Team
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
          <h2 className="text-3xl font-serif mb-6">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our team of experienced financial professionals brings together diverse expertise 
            in accounting, business advisory, and financial management. We work collaboratively 
            to ensure every client receives the attention and expertise they deserve.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 mb-6">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
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
          <h2 className="text-3xl font-serif mb-4">Work With Our Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how our team can help your business grow and succeed.
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

export default TeamPage; 