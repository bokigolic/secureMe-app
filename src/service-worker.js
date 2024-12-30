/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Trebalo bi da se automatski dodaju URL-ovi koji treba da se keširaju.
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("secureme-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/static/js/bundle.js",
        "/static/css/main.css",
        "/logo192.png",
        "/logo512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
