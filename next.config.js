const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  generateBuildId: async () => {
    return 'production';
  },
  publicRuntimeConfig: {
    env: process.env.NODE_ENV,
    PUSH_NOTIFICATIONS_KEY: process.env.PUSH_NOTIFICATIONS_KEY,
    DOMAIN_NAME: process.env.DOMAIN_NAME || 'localhost:3000',
  },
  webpack: (config, options) => {
    config.resolve.alias.components = path.resolve(__dirname, 'components/');
    config.resolve.alias.helpers = path.resolve(__dirname, 'helpers/');
    config.resolve.alias.views = path.resolve(__dirname, 'views/');

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    }

    return config;
  }
};
