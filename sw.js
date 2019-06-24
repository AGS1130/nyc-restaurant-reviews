// Files to cache for offline use
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

// Listen for `install` event when Service Worker is installed.
self.addEventListener('install', function (e) {
  e.waitUntil( // Installation has completed
    caches.open('v1').then(function (cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith( // Prevent default promise event with own response Object
    caches.match(e.request).then(function (response) {
      if (response) {
        console.log('Found ', e.request, ' in cache');
        return response;
      } else {
        console.log('Could not find ', e.request, ' in cache, FETCHING!');
        return fetch(e.request)
          .then(function (response) {
            const clonedResponse = response.clone();
            caches.open('v1').then(function (cache) {
              cache.put(e.request, clonedResponse);
            })
            return response;
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    })
  );
});

// Taken from Matthew Cranford: https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/