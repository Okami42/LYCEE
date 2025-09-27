import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lgt-pierre-de-la-ramee-saint-quentin.02.ac-amiens.fr',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
