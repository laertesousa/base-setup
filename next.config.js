module.exports = {
  generateBuildId: async () => {
    return 'production';
  },
  publicRuntimeConfig: {
    env: process.env.NODE_ENV,
    PUSH_NOTIFICATIONS_KEY: process.env.PUSH_NOTIFICATIONS_KEY,
    DOMAIN_NAME: process.env.DOMAIN_NAME || 'localhost:3000',
  }
};
