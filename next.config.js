/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    // Ваши другие настройки
  
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.node$/,
          use: 'file-loader',
        });
      }
  
      return config;
    },
  };
