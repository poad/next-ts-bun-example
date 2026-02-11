import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
