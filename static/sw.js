const version = "0.0.0";
const cacheName = `pwa-next-${version}`;

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

self.addEventListener('install', e => {
  const env = new URL(location).searchParams.get('env');
  e.waitUntil(preCache(env));
});
