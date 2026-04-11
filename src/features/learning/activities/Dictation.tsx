import { useState, useEffect } from 'react'
import type { Activity } from '@/data/types'
import { checkAnswer, speak } from '@/lib/utils'
import { VolumeIcon } from '@/components/ui/Icons'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function Dictation({ activity, onSubmit }: Props) {
  const [answer, setAnswer] = useState('')
  const [playCount, setPlayCount] = useState(0)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    // 자동 재생
    setTimeout(() => {
      speak(activity.answer)
      setPlayCount(1)
    }, 500)
  }, [activity.answer])

  const handlePlay = () => {
    speak(activity.answer)
    setPlayCount((c) => c + 1)
  }

  const handlePlaySlow = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(activity.answer)
      utterance.lang = 'en-US'
      utterance.rate = 0.5
      utterance.pitch = 1
      speechSynthesis.speak(utterance)
    }
    setPlayCount((c) => c + 1)
  }

  const handleSubmit = () => {
    if (!answer.trim()) return
    const correct = checkAnswer(answer, activity.answer)
    onSubmit(correct, answer)
  }

  // 힌트: 단어 개수와 첫/끝 글자
  const words = activity.answer.split(' ')
  const hintText = words
    .map((w) => {
      if (w.length <= 2) return w
      return `${w[0]}${'_'.repeat(w.length - 2)}${w[w.length - 1]}`
    })
    .join(' ')

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-fluent-teal-400 font-medium mb-2">받아쓰기</p>
        <p className="text-sm text-fluent-text-secondary">음성을 듣고 영어로 받아쓰세요</p>
      </div>

      {/* 재생 버튼 */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePlay}
          className="w-20 h-20 rounded-full bg-fluent-teal-400/20 flex items-center justify-center
                     active:scale-95 transition-transform border-2 border-fluent-teal-400"
        >
          <VolumeIcon size={32} className="text-fluent-teal-400" />
        </button>
        <button
          onClick={handlePlaySlow}
          className="text-sm text-fluent-text-secondary underline"
        >
          느리게
        </button>
      </div>

      <p className="text-center text-xs text-fluent-text-muted">
        재생 횟수: {playCount}
      </p>

      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="들은 내용을 입력하세요..."
        className="input-field text-center"
        autoFocus
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
      />

      {showHint && (
        <p className="text-center text-sm text-fluent-text-muted font-mono animate-fade-in tracking-wider">
          {hintText}
        </p>
      )}

      <div className="flex gap-3">
        {!showHint && (
          <button onClick={() => setShowHint(true)} className="btn-secondary flex-1 text-sm">
            힌트
          </button>
        )}
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="btn-primary flex-1 disabled:opacity-40"
        >
          확인
        </button>
      </div>
    </div>
  )
}
