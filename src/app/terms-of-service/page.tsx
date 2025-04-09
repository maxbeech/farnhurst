'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TermsOfServicePage = () => {
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
          <h1 className="text-4xl font-serif mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">2. Services</h2>
            <p className="text-gray-700 mb-4">
              Farnhurst provides financial advisory and consulting services. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Financial planning and analysis</li>
              <li>Business strategy development</li>
              <li>Systems implementation</li>
              <li>Cash flow management</li>
              <li>Exit planning</li>
              <li>Fundraising support</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of any login credentials</li>
              <li>Notify us of any unauthorized access</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our website and services are owned by Farnhurst and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Farnhurst shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">6. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: legal@farnhurst.co.uk<br />
              Address: 123 Design Street, London, UK, SW1A 1AA
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 