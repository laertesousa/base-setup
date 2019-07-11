const path = require('path');
// const nextBuildId = require('next-build-id');

const { ANALYZE } = process.env;

module.exports = {
  // generateBuildId: async () => {
  //   const fromGit = await nextBuildId({ dir: __dirname });
  //   return fromGit.id;
  // },
  publicRuntimeConfig: {
    env: process.env.NODE_ENV,
    DOMAIN_NAME: process.env.DOMAIN_NAME || 'localhost:3000',
    ANALYTICS_TRACKING_ID: process.env.ANALYTICS_TRACKING_ID,
  },
  webpack: (config, options) => {
    config.resolve.alias.components = path.resolve(__dirname, 'components/');
    config.resolve.alias.helpers = path.resolve(__dirname, 'helpers/');
    config.resolve.alias.views = path.resolve(__dirname, 'views/');

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    }

    return config;
  }
};
