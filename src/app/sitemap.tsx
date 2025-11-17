import { MetadataRoute } from 'next';
import { db } from '../../lib/db';
import { blogTable } from '../../db/schema';

const servicesAndIndustries = [
  '/digital-marketing-services',
  '/website-development-services',
  '/mobile-app-development',
  '/no-code-software-development',
  '/ai-agent-development-company',
  '/it-consulting-services',
  '/astrology-app-development',
  '/temple-management-software',
  '/fintech-app-development',
  '/trading-app-development-company',
  '/ai-fintech-app-development-services',
  '/digital-wallet-integration-services',
  '/insurance-app-development-company',
  '/mobile-banking-app-company',
  '/loan-lending-app-development-services',
  '/lms-development-company',
  '/education-app-development-company',
  '/real-estate-app-development',
  '/laundry-app-development',
  '/doctor-on-demand-app-development',
  '/beauty-salon-app-development-company',
  '/event-management-app-development',
  '/restaurant-app-development-company',
  '/agriculture-software-development',
  '/travel-app-development-company',
  '/healthcare-software-development',
  '/dating-app-development',
  '/ecommerce-app-development',
  '/pet-care-app-development-company',
  '/veterinary-app-development',
  '/pet-food-delivery-app-development',
  '/ai-development-company',
  '/mobile-app-development',
];

const paths = [
  '',
  '/about-us',
  '/career',
  '/contact-us',
  '/hire-us',
  '/blog',
  '/privacy-policy',
  '/terms-and-conditions',
  ...servicesAndIndustries,
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const pathEntries = paths.map((path) => ({
    url: `${baseUrl}${path}/`,
    lastModified: new Date().toISOString(),
  }));

  const blogData = await db
    .select({
      slug: blogTable.slug,
    })
    .from(blogTable);

  const blogEntries = blogData.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`,
    lastModified: new Date().toISOString(),
  }));

  return [...pathEntries, ...blogEntries];
}
