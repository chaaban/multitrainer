// Keeps the game playable without internet. Change VERSION whenever a file changes.
const VERSION = '2.0.0';
const CACHE = 'multitrainer-' + VERSION;
const FILES = ['./', 'app.css?v=' + VERSION, 'engine.js?v=' + VERSION, 'monsters.js?v=' + VERSION, 'app.js?v=' + VERSION,
  'manifest.json', 'fonts/baloo-latin.woff2', 'fonts/baloo-latin-ext.woff2', 'fonts/baloo-arabic.woff2', 'sounds/clapping.wav',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('multitrainer-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') {
    // The page: fresh when online, so updates arrive; the saved copy when offline.
    e.respondWith(fetch(e.request).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
