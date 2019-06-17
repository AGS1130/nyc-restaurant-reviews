const appName = 'Restaurant Reviews';

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(appName).then(function (cache) {
    cache.addAll([
      '/',
      'css/styles.css',
      'data/restaurants.json',
      'js/dbhelper.js',
      'js/index.js',
      'js/main.js',
      'js/restaurant_info.js',
      '/restaurant.html',
      '/register-sw.js',
      '/index.html',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
      '/img/5.jpg',
      '/img/6.jpg',
      '/img/7.jpg',
      '/img/.jpg',
      '/img/9.jpg',
      '/img/10.jpg',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
    ]);
  }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith(appName) && cacheName != appName;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      if (res) {
        return res;
      }
      fetchRequest(event)
    }));
});

function fetchRequest(event) {
  var requestClone = event.request.clone();
  return fetch(requestClone).then(function (res) {
    //if not a valid response send the error
    if (!res || res.status !== 200 || res.type !== 'basic') {
      return res;
    }

    var response = res.clone();

    caches.open(appName).then(function (cache) {
      cache.put(event.request, response);
    });

    return res;
  })
}