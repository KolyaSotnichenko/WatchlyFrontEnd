/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/movie/*': { page: '/movie/[slug]' },
    }
  },
  async rewrites(){
    return [
      {
        source: '/api/:path*',
        destination: process.env.REACT_APP_SERVER_URL + '/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: process.env.REACT_APP_SERVER_URL + '/uploads/:path*'
      },
    ]
  }
}

module.exports = nextConfig
