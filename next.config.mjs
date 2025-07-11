/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './image/loader.js',
  },
  trailingSlash: true,
};

export default nextConfig;
