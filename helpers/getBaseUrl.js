import getConfig from 'next/config'
const config = getConfig();

export default () => {
  const { publicRuntimeConfig } = config;
  if(!publicRuntimeConfig.ENV || publicRuntimeConfig.ENV === 'development') {
    return `http://${publicRuntimeConfig.DOMAIN_NAME || 'localhost:3000'}/`;
  } else {
    return `https://${publicRuntimeConfig.DOMAIN_NAME}/`;
  }
};