const cacheName = 'daily News';
const staticAssets = [
    './',
    './css/style.css',
    './index.html',
    './api2.html',
    './api3.html',
    './api4.html',
    './api5.html',
    './script/app.js',
    './script/app2.js',
    './script/app3.js',
    './script/app4.js',
    './script/app5.js',
    './icon/dnlogo.jpg'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(staticAssets);
        })
      );
})
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}