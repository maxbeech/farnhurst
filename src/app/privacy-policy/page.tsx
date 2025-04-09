'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PrivacyPolicyPage = () => {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Farnhurst ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-serif mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote</li>
              <li>Engage with our services</li>
            </ul>

            <h3 className="text-xl font-serif mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times</li>
              <li>Pages visited</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@farnhurst.co.uk<br />
              Address: 123 Design Street, London, UK, SW1A 1AA
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 