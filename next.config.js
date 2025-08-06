/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: '/aqibmedes',
  assetPrefix: '/aqibmedes/',
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
