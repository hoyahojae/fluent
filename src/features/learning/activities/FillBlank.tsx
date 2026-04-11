import { useState } from 'react'
import type { Activity } from '@/data/types'
import { checkAnswer } from '@/lib/utils'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function FillBlank({ activity, onSubmit }: Props) {
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)

  const handleSubmit = () => {
    if (!answer.trim()) return
    const correct = checkAnswer(answer, activity.answer)
    onSubmit(correct, answer)
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-fluent-teal-400 font-medium mb-2">빈칸 채우기</p>
        <p className="text-lg font-semibold leading-relaxed">{activity.question}</p>
        {activity.hint && (
          <p className="text-sm text-fluent-text-secondary mt-2">{activity.hint}</p>
        )}
      </div>

      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="빈칸에 들어갈 단어를 입력하세요"
        className="input-field text-center text-lg"
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
      />

      {showHint && (
        <p className="text-sm text-fluent-text-muted animate-fade-in text-center">
          첫 글자: <span className="font-bold text-fluent-teal-300">{activity.answer[0]}</span>
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
