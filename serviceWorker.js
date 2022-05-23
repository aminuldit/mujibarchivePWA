const staticDevCoffee = "mujib-archive-pwa";
const assets = [
  "/",
  "/index.html",
  "/css/bootstrap.min.css",
  "/css/custom_animation.css",
  "/css/custom.css",
  "/images/mujib.jpeg",
  "/images/mujibIcon.png",
  "/images/mujibicon296.png",
  "/images/favicon.ico",
  "/js/bootstrap.bundle.min.js",
  "/js/pwa.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});