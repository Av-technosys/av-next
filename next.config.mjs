/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'av-blog-web.s3.ap-south-1.amazonaws.com',
        hostname: '**',
        // port: '',
        // pathname: 'cozzy.corner/**',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
