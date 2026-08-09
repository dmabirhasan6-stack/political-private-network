/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/political-private-network',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
