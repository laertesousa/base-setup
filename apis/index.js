import 'isomorphic-fetch';
import getBaseUrl from 'helpers/getBaseUrl';

export const urlPrefix = getBaseUrl();

export const request = (resource, method = 'GET', body = null, options = {}) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options,
    },
    credentials: 'same-origin',
  };

  if(['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) && body) config.body = JSON.stringify(body);

  return fetch(`${urlPrefix}${resource}`, config).then(res => {
    const json = res.text().then(text => (text ? { ok: res.ok, status: res.status, data: JSON.parse(text) }  : {}));
    return res.ok ? json : json.then(Promise.reject.bind(Promise));
  });
};