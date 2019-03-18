import 'isomorphic-fetch';
import getConfig from 'next/config'

const { publicRuntimeConfig: config } = getConfig();

export const urlPrefix = `${config.env === 'development' ? 'http://' : 'https://'}${config.DOMAIN_NAME}/api/`;
export const formatResponse = (res) => (new Promise(resolve => {
  return res.json().then(data => resolve({
    status: res.status,
    ok: res.ok,
    data
  }))
}));

export const request = (resource, method = 'GET', body = null, options = {}) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options,
    },
    credentials: 'same-origin',
  };
  if(['POST', 'PATCH', 'DELETE'].includes(method) && body) config.body = JSON.stringify(body);
  return fetch(`${urlPrefix}${resource}`, config).then(formatResponse);
};
