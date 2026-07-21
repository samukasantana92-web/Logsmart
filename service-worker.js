const CACHE_NAME = "logsmart-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./unidades.html",
  "./codigo.html",
  "./verificando.html",
  "./liberado.html",
  "./erro.html",
  "./css/style.css",
  "./js/script.js",
  "./manifest.json",
  "./img/logo.png",
  "./img/icon-192.png",
  "./img/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
