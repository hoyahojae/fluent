import { useState } from 'react'
import type { Activity } from '@/data/types'
import { checkAnswer, speak } from '@/lib/utils'
import { VolumeIcon } from '@/components/ui/Icons'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function Translation({ activity, onSubmit }: Props) {
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
        <p className="text-xs text-fluent-teal-400 font-medium mb-2">한국어 → 영어 번역</p>
        <p className="text-lg font-semibold">{activity.question}</p>
      </div>

      <div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="영어로 번역하세요..."
          className="input-field min-h-[100px] resize-none"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit()
            }
          }}
        />
      </div>

      {showHint && activity.hint && (
        <p className="text-sm text-fluent-text-muted animate-fade-in">
          힌트: {activity.hint}
        </p>
      )}

      <div className="flex gap-3">
        {!showHint && activity.hint && (
          <button
            onClick={() => setShowHint(true)}
            className="btn-secondary flex-1 text-sm"
          >
            힌트
          </button>
        )}
        <button
          onClick={() => speak(activity.answer)}
          className="btn-secondary p-3"
        >
          <VolumeIcon size={20} />
        </button>
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
