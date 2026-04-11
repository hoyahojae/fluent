import { useState } from 'react'
import type { Activity } from '@/data/types'
import { checkAnswer } from '@/lib/utils'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function VocabSpelling({ activity, onSubmit }: Props) {
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
        <p className="text-xs text-fluent-teal-400 font-medium mb-2">어휘 철자</p>
        <p className="text-2xl font-bold">{activity.question}</p>
        <p className="text-xs text-fluent-text-muted mt-1">영어 단어를 입력하세요</p>
      </div>

      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="영어 철자를 입력하세요"
        className="input-field text-center text-xl tracking-widest"
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
      />

      {showHint && activity.hint && (
        <div className="animate-fade-in">
          <p className="text-sm text-fluent-text-muted text-center italic">"{activity.hint}"</p>
          <p className="text-xs text-fluent-text-muted text-center mt-1">
            글자 수: {activity.answer.length}
          </p>
        </div>
      )}

      <div className="flex gap-3">
        {!showHint && activity.hint && (
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
