/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      // Redirect /blog to /blog/
      {
        source: '/blog',
        destination: '/blog/',
        permanent: true,
      },
      // Redirect /blog/:id (no trailing slash) to /blog/:id/
      {
        source: '/blog/:id',
        has: [
          {
            type: 'header',
            key: 'x-nextjs-data',
            value: '^(?!1)$',
          },
        ],
        destination: '/blog/:id/',
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
