/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: 'imgix',
    // path: 'https://ik.imagekit.io/avtechnosys/',
    loader: 'custom',
    loaderFile: './image/loader.js',
  },
  trailingSlash: true,
};

export default nextConfig;
