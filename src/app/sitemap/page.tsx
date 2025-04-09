'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import the navigation structure from Navbar component
const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Our Experience', href: '/about/experience' },
      { name: 'Our Approach', href: '/about/approach' },
    ],
  },
  {
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Cash Flow Management', href: '/services/cash-flow' },
      { name: 'Fundraising', href: '/services/fundraising' },
      { name: 'Strategic Analysis', href: '/services/strategy' },
      { name: 'Systems Implementation', href: '/services/systems' },
      { name: 'Management Reporting', href: '/services/reporting' },
      { name: 'Exit Planning', href: '/services/exit-planning' },
    ],
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

// Additional footer links
const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

export default function SitemapPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">Find all pages on our website</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Main Navigation */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Main Navigation</h2>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link 
                            href={child.href}
                            className="text-gray-600 hover:text-primary-600"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Pages */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Legal Pages</h2>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact</h2>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Contact Us
                </Link>
              </li>
              <li className="text-gray-600">
                <p>Farnhurst</p>
                <p>Finance Directors</p>
                <p>London, UK</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 