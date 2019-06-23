if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/service.js', {scope: '/'}).then(registration => {
    console.log('ServiceWorker registration successful:', registration);
  }).catch(err => {
    console.log('ServiceWorker registration failed:', err);
  });
};