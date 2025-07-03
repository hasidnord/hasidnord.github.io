/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig