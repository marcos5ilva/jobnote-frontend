

self.addEventListener('install', function(event){
  console.log('SW installed');
  event.waitUntil(
    caches.open('static')
      .then(function(cache){
        // cache.add('/');
        // cache.add('/index.html');
        // cache.add('/src/app.js');
        cache.addAll([
          '/', 
          '/index.html',
          '/index.css',
          '/signin',
          '/signup',
          '/lists',
          '/board',
          '/jobnote-icon-96x96.png',
          '/jobnote-icon-144x144.png',
          '/img/jobnoteLogo.png',
          '/img/jobnoteLogoBrand.png',
          '/src/index.js',
          '/src/App.js',
          '/src/App.css',
          '/src/pages',
          '/src/components',
          '/src/components/lists',
          '/src/components/board',
          '/src/components/cards',
          '/static/js/main.chunk.js',
          '/static/js/1.chunk.js',
          '/static/js/bundle.js',
          
         
          
          'https://fonts.googleapis.com/css?family=Poppins|Roboto&display=swap',
          

        ]);
      })
  )
});

self.addEventListener('activate', function(){
  console.log('SW active');
});




self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if(res){
          return res;
        } else{
          return fetch(event.request);
        }
      })
  )
})


