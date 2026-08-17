// Self-destructing service worker (task S-9).
// The previous worker cached index.html under a fixed cache name and served it cache-first,
// permanently pinning returning visitors to the build they first loaded. This replacement
// clears all caches and unregisters itself. Because the file contents differ from the old
// worker, browsers detect the change on their next update check and install this one.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      }),
  );
});

// No fetch handler — all requests go straight to the network.
