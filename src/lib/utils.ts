export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 6) return '새벽에도 열심히!'
  if (hour < 12) return '좋은 아침이에요'
  if (hour < 18) return '좋은 오후예요'
  return '좋은 저녁이에요'
}

export function formatXp(xp: number): string {
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}K`
  return xp.toString()
}

// Edge TTS (고품질 Neural 음성) + Web Speech API 폴백
let currentAudio: HTMLAudioElement | null = null

export function speak(text: string, _lang = 'en-US') {
  // 이전 재생 중단
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel()
  }

  // Edge TTS API 호출
  const params = new URLSearchParams({ text, voice: 'en-US-AriaNeural' })
  const audio = new Audio(`/api/tts?${params}`)
  currentAudio = audio

  audio.play().catch(() => {
    // Edge TTS 실패 시 Web Speech API 폴백
    speakFallback(text)
  })
}

function speakFallback(text: string) {
  if (!('speechSynthesis' in window)) return
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.92
  utterance.pitch = 1.05

  const voices = speechSynthesis.getVoices()
  const preferred = voices.find(v =>
    v.lang.startsWith('en') && /samantha|karen|moira|tessa|fiona|victoria|ava|allison|susan/i.test(v.name)
  ) ?? voices.find(v =>
    v.lang.startsWith('en-') && v.localService
  )
  if (preferred) utterance.voice = preferred
  speechSynthesis.speak(utterance)
}

// 음성 목록 미리 로드 (폴백용)
if ('speechSynthesis' in window) {
  speechSynthesis.getVoices()
  speechSynthesis.addEventListener?.('voiceschanged', () => speechSynthesis.getVoices())
}

export function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ')
}

export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)
}
