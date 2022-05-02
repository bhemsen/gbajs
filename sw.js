self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('gba').then((cache) => cache.addAll([
             '/index.html',
             '/js/util.js',
             '/js/core.js',
             '/js/arm.js',
             '/js/thumb.js',
             '/js/mmu.js',
             '/js/io.js',
             '/js/audio.js',
             '/js/video.js',
             '/js/video/proxy.js',
             '/js/video/software.js',
             '/js/irq.js',
             '/js/keypad.js',
             '/js/sio.js',
             '/js/savedata.js',
             '/js/gpio.js',
             '/js/gba.js',
             '/resources/xhr.js',
             '/manifest.json',
             '/resources/main.css',
             '/resources/pwa.js'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
