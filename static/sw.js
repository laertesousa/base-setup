const version = "1.0.0";
const cacheName = `base-setup-${version}`;
const env = '{{NODE_ENV}}';

const getFilesToCache = (env) => {
  const files = [
    '/manifest.json',
    '/static/assets/icon.png',
  ];

  return files;
};

const preCache = async (env) => {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(getFilesToCache(env));
  } catch (e) {
    console.log(e);
  }
};

const cacheFetch = async (event) => {
  try {
    const cache = await caches.open(cacheName);
    const cacheResponse = await cache.match(event.request);

    if (cacheResponse) return cacheResponse;

    const fetchResponse = await fetch(event.request);

    if (env.isProduction) cache.put(event.request, fetchResponse.clone());

    return fetchResponse;
  } catch (e) {
    console.log(e);
  }
};

self.addEventListener('fetch', async event => {
  event.respondWith(cacheFetch(event));
});

self.addEventListener('install', e => {
  e.waitUntil(preCache());
});
