/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = {
  webpack: (nextConfig, options) => {
    nextConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return nextConfig;
  },
};
