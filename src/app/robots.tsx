import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Admin and API
          '/admin/',
          '/admin/*',
          '/api/',
          '/api/*',

          // Disallow static files
          '/*.jpg$',
          '/*.jpeg$',
          '/*.png$',
          '/*.gif$',
          '/*.webp$',
          '/*.svg$',
          '/*.mp4$',
          '/*.webm$',
          '/*.mov$',
          '/*.pdf$',
          '/*.doc$',
          '/*.docx$',

          // Specific pages to block
          '/how-to-develop-a-logistics-app/',
          '/industries/',
          '/car-rental-app-development/',
          '/case-study/',
          '/category/seo/',
          '/why-is-content-marketing-important/',
          '/golf-app-development-complete-guide/',
          '/hire-dev/',
          '/liquor-delivery-mobile-app-development/',
          '/category/app-development/',
          '/maintenance/',
          '/healthcare-app-marketing-strategies/',
          '/company/',
          '/is-seo-still-relevant/',
          '/ev-charging-app-development-complete-guide/',
          '/futuristic-ai-app-ideas/',
          '/real-estate-marketing-strategies/',
          '/bumble-alternatives-15-apps-similar-to-bumble/',
          '/ar-app-ideas/',
          '/yoga-app-development/',
          '/category/content-marketing/',
          '/Hireus/',
          '/company',
          '/latest-web-development-trends/',
          '/ultimate-marketing-strategy-for-ebook-app/',
        ],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
