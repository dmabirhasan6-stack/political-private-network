/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/political-private-network',
  assetPrefix: '/political-private-network/',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
