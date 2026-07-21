const CACHE_NAME = "logsmart-v1";

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
  "./img/logo.png",
  "./img/icon-192.png",
  "./img/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});