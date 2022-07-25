/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['image.tmdb.org', 'images.unsplash.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
