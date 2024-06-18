const cacheName = 'background-images-v1';
const imagesToCache = [
  '/images/loginPageImages/anime.jpg',
  '/images/loginPageImages/anime2.jpg',
  '/images/loginPageImages/anime3.jpg',
  '/images/loginPageImages/fatestaynight.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(imagesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  if (imagesToCache.includes(new URL(event.request.url).pathname)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request).then(response => {
            const responseClone = response.clone();
            caches.open(cacheName).then(cache => {
              cache.put(event.request, responseClone);
            });
            return response;
          });
        })
    );
  }
});
