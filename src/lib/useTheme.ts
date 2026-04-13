import { useEffect } from 'react'
import { useStore } from '@/stores/useStore'
import type { ThemeMode } from '@/data/types'

function applyTheme(mode: ThemeMode) {
  const html = document.documentElement
  const meta = document.querySelector('meta[name="theme-color"]')

  if (mode === 'dark') {
    html.classList.add('dark')
    meta?.setAttribute('content', '#0F1923')
  } else if (mode === 'light') {
    html.classList.remove('dark')
    meta?.setAttribute('content', '#F8F9FB')
  } else {
    // auto: OS 설정에 따름
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      html.classList.add('dark')
      meta?.setAttribute('content', '#0F1923')
    } else {
      html.classList.remove('dark')
      meta?.setAttribute('content', '#F8F9FB')
    }
  }
}

export function useTheme() {
  const themeMode = useStore((s) => s.settings.themeMode)

  useEffect(() => {
    applyTheme(themeMode)

    // auto 모드일 때 OS 설정 변경 감지
    if (themeMode === 'auto') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => applyTheme('auto')
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [themeMode])
}
