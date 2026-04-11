const CACHE_NAME = 'fluent-v2'

// 설치: 즉시 활성화
self.addEventListener('install', () => {
  self.skipWaiting()
})

// 활성화: 이전 캐시 모두 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      )
    })
  )
  self.clients.claim()
})

// 요청 처리: Network First (모든 요청)
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // 외부 요청은 무시
  if (url.origin !== self.location.origin) return

  // 모든 요청: Network First, 오프라인일 때만 캐시
  event.respondWith(
    fetch(request)
      .then((response) => {
        // 성공 시 캐시 업데이트
        if (response.ok) {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
        }
        return response
      })
      .catch(() => {
        // 오프라인: 캐시에서 서빙
        return caches.match(request).then((cached) => {
          return cached || caches.match('/index.html')
        })
      })
  )
})
