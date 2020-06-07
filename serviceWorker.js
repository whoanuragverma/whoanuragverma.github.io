const cacheName = "v1::static";

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache
                .addAll([
                    "/",
                    "/index.html",
                    "/css/main.css",
                    "/assets/img.jpeg",
                    "/assets/instagram-bck.jpg",
                    "/assets/icons/icon.jpg",
                    "/assets/icons/shortcut-icon.ico",
                    "/assets/cert/ss1.jpg",
                    "/assets/cert/ss2.jpg",
                    "/assets/projects/ss1.jpg",
                    "/assets/projects/ss2.jpg",
                    "/assets/projects/ss3.jpg",
                    "/assets/projects/ss4.jpg",
                    "/js/animations.js",
                    "/js/scroll.js",
                    "/js/jq-clipthru.min.js",
                    "/js/jquery-ui-1.10.4.custom.min.js",
                ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        // ensure we check the *right* cache to match against
        caches.open(cacheName).then((cache) => {
            return cache.match(event.request).then((res) => {
                return res || fetch(event.request);
            });
        })
    );
});
