import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/career`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hire-us`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      lastModified: new Date().toISOString(),
    },
  ];
}
