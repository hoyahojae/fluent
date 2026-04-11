import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// 로딩 스크린 제거
const hideLoading = () => {
  const el = document.getElementById('loading-screen')
  if (el) {
    el.classList.add('fade-out')
    setTimeout(() => el.remove(), 400)
  }
}
window.addEventListener('load', hideLoading)
setTimeout(hideLoading, 3000) // 최대 3초 후 강제 제거

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Service Worker 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // SW 등록 실패 무시 (개발 환경)
    })
  })
}
