/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cleaner.dadata.ru/api/:path*', // Замените на ваш URL
      },
    ];
  },
};