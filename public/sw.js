// Service Worker for aggressive image caching
const CACHE_NAME = 'adulting-images-v1'
const IMAGE_CACHE_NAME = 'adulting-images-cache'

// All images to cache
const IMAGES_TO_CACHE = [
  '/images/iPhone-Vectors-1.png',
  '/images/Benefits-Icon-1.png',
  '/images/Benefits-Icon-2.png', 
  '/images/Benefits-Icon-3.png',
  '/images/iphone-frame-x3.png',
  '/images/app-screenshots/documents-new.png',
  '/images/app-screenshots/emergency-safety-new.png',
  '/images/app-screenshots/mealprep-new.png',
  '/images/app-screenshots/grocery-list-new.png',
  '/images/app-screenshots/recipe-details-new.png',
  '/images/app-screenshots/travel-assistant-new.png',
  '/images/app-screenshots/travel-documents-new.png',
  '/images/app-screenshots/trip-details-new.png',
  '/images/app-screenshots/packing-list-new.png',
  '/images/app-screenshots/digital-will-new.png',
  '/images/app-screenshots/reminders-new.png',
  '/images/app-screenshots/pet-tracker-new.png',
  '/images/app-screenshots/vault-new.png',
  '/images/app-screenshots/documents.png',
  '/images/app-screenshots/emergency-safety.png',
  '/images/app-screenshots/mealprep.png',
  '/images/app-screenshots/grocery-list.png',
  '/images/app-screenshots/recipe-details.png',
  '/images/app-screenshots/travel-assistant.png',
  '/images/app-screenshots/travel-documents.png',
  '/images/app-screenshots/trip-details.png',
  '/images/app-screenshots/packing-list.png',
  '/images/app-screenshots/digital-will.png',
  '/images/app-screenshots/reminders.png',
  '/images/app-screenshots/pet-tracker.png',
  '/images/app-screenshots/vault.png',
  '/images/app-screenshots/HomeScreen New 8 Modules.PNG',
  '/images/iphone-frame-slanted.png',
  '/images/adulting-app.png'
]

// Install event - cache images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then((cache) => {
        console.log('Caching images for ADULTING app')
        return cache.addAll(IMAGES_TO_CACHE)
      })
      .catch((error) => {
        console.error('Failed to cache images:', error)
      })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== IMAGE_CACHE_NAME && cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve images from cache
self.addEventListener('fetch', (event) => {
  // Only handle image requests
  if (event.request.destination === 'image' || 
      event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version or fetch from network
          return response || fetch(event.request)
            .then((fetchResponse) => {
              // Cache the new image
              if (fetchResponse.ok) {
                const responseClone = fetchResponse.clone()
                caches.open(IMAGE_CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseClone)
                  })
              }
              return fetchResponse
            })
        })
        .catch(() => {
          // Fallback for offline scenarios
          console.log('Image fetch failed, serving from cache if available')
        })
    )
  }
})
