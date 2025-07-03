import { MetadataRoute } from 'next';
import { db } from '../../lib/db';
import { blogTable } from '../../db/schema';

const paths = [
  '',
  '/about-us',
  '/career',
  '/contact-us',
  '/hire-us',
  '/services',
  '/blog',
  '/privacy-policy',
  '/terms-and-conditions',
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
