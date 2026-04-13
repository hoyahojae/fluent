import { useState } from 'react'
import type { Activity } from '@/data/types'
import { checkAnswer, speak } from '@/lib/utils'
import { VolumeIcon } from '@/components/ui/Icons'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string, hintLevel?: number) => void
}

export function Translation({ activity, onSubmit }: Props) {
  const [answer, setAnswer] = useState('')
  const [hintLevel, setHintLevel] = useState(0) // 0=안 씀, 1~3=사용 단계

  const hints = activity.hints ?? (activity.hint ? [activity.hint] : [])
  const maxHints = hints.length

  const handleSubmit = () => {
    if (!answer.trim()) return
    const correct = checkAnswer(answer, activity.answer)
    onSubmit(correct, answer, hintLevel)
  }

  const handleShowNextHint = () => {
    setHintLevel(prev => Math.min(prev + 1, maxHints))
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

      {/* 3단계 힌트 표시 */}
      {hintLevel > 0 && (
        <div className="space-y-2 animate-fade-in">
          {hints.slice(0, hintLevel).map((hint, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-sm bg-fluent-navy-700/40 rounded-lg px-3 py-2"
            >
              <span className="text-fluent-teal-400 font-bold text-xs mt-0.5">
                힌트{i + 1}
              </span>
              <span className="text-fluent-text-secondary">{hint}</span>
            </div>
          ))}
          {hintLevel > 0 && (
            <p className="text-[10px] text-fluent-text-muted text-right">
              힌트 사용 시 획득 XP가 줄어듭니다
            </p>
          )}
        </div>
      )}

      <div className="flex gap-3">
        {hintLevel < maxHints && (
          <button
            onClick={handleShowNextHint}
            className="btn-secondary flex-1 text-sm"
          >
            {hintLevel === 0 ? '힌트' : `힌트 ${hintLevel + 1}`}
            <span className="text-[10px] ml-1 opacity-60">
              ({hintLevel}/{maxHints})
            </span>
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
