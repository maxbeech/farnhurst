import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Farnhurst | Making Finance Work',
  description:
    'Farnhurst Enterprises is an accounting consultancy dedicated to helping entrepreneurial clients grow in a profitable and cash generative way.',
  keywords:
    'Farnhurst, accounting consultancy, finance director, business growth, cash flow management, financial systems, business advice, start-ups, high-growth companies, international business',
  openGraph: {
    title: 'Farnhurst | Making Finance Work',
    description:
      'Farnhurst Enterprises provides flexible and cost effective Finance Director level support to help entrepreneurial clients grow in a profitable and cash generative way.',
    url: 'https://farnhurst.co.uk',
    siteName: 'Farnhurst',
    images: [
      {
        url: '/media/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Farnhurst Enterprises',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farnhurst | Making Finance Work',
    description:
      'Farnhurst Enterprises provides flexible and cost effective Finance Director level support to help entrepreneurial clients grow in a profitable and cash generative way.',
    images: ['/media/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-12">
              <Image
                src="/media/logo.png"
                alt="Farnhurst Logo"
                width={70}
                height={70}
                className="w-auto h-16 mb-4"
              />
              <h2 className="text-2xl font-bold text-primary-400 mb-2">Farnhurst</h2>
              <p className="text-gray-400 text-center max-w-2xl">
                Making finance work for your business. Providing flexible and cost effective Finance Director level support to help entrepreneurial clients grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary-400">Location</h3>
                <p className="text-gray-400">Farnhurst</p>
                <p className="text-gray-400">Finance Directors</p>
                <p className="text-gray-400">London, UK</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary-400">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/services/cash-flow" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Cash Flow Management</Link></li>
                  <li><Link href="/services/fundraising" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Equity & Debt Fundraising</Link></li>
                  <li><Link href="/services/strategy" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Strategic Analysis</Link></li>
                  <li><Link href="/services/systems" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Systems Implementation</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About Us</Link></li>
                  <li><Link href="/case-studies" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Case Studies</Link></li>
                  <li><Link href="/news" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">News</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Phone:</span> +44 (0) 20 1234 5678
                  </li>
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Email:</span> info@farnhurst.co.uk
                  </li>
                  <li className="flex space-x-4 mt-6">
                    <a href="https://www.facebook.com/farnhurst" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/farnhurst" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/farnhurst" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Farnhurst Ltd. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary-400 transition-colors duration-300">Terms & Conditions</Link>
                <Link href="/sitemap.xml" className="hover:text-primary-400 transition-colors duration-300">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 