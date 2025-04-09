import { NextResponse } from 'next/server';

// Import the navigation structure
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

// Additional pages
const additionalPages = [
  { href: '/privacy-policy' },
  { href: '/terms-of-service' },
  { href: '/sitemap' },
];

// Function to generate the sitemap XML
function generateSitemapXML() {
  const baseUrl = 'https://farnhurst.co.uk'; // Replace with your actual domain
  const currentDate = new Date().toISOString().split('T')[0];

  // Start XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add main navigation pages
  navigation.forEach(item => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${item.href}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${item.href === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;

    // Add child pages if they exist
    if (item.children) {
      item.children.forEach(child => {
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}${child.href}</loc>\n`;
        xml += `    <lastmod>${currentDate}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += `  </url>\n`;
      });
    }
  });

  // Add additional pages
  additionalPages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${page.href}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.5</priority>\n`;
    xml += `  </url>\n`;
  });

  // End XML
  xml += '</urlset>';

  return xml;
}

export async function GET() {
  const sitemap = generateSitemapXML();
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 