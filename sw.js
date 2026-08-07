// Minimal service worker — sirf "installable" banane ke liye zaroori hai.
// Koi offline caching nahi kar raha, taaki hamesha latest attendance page hi khule.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // Seedha network se fetch karo — koi cache nahi (Firebase live data ke liye zaroori)
  e.respondWith(fetch(e.request));
});
