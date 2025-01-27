/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
