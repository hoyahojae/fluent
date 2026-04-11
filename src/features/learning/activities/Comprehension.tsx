import { useState } from 'react'
import type { Activity } from '@/data/types'
import { speak } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { VolumeIcon } from '@/components/ui/Icons'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function Comprehension({ activity, onSubmit }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (option: string) => {
    setSelected(option)
    setTimeout(() => {
      onSubmit(option === activity.answer, option)
    }, 300)
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-fluent-teal-400 font-medium mb-2">영어 → 한국어 이해</p>
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold flex-1">{activity.question}</p>
          <button onClick={() => speak(activity.question)} className="text-fluent-teal-400 p-1">
            <VolumeIcon size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {activity.options?.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(option)}
            disabled={selected !== null}
            className={cn(
              'w-full text-left card py-3.5 transition-all',
              selected === null && 'active:scale-[0.98]',
              selected === option && option === activity.answer && 'border-fluent-success bg-fluent-success/10',
              selected === option && option !== activity.answer && 'border-fluent-error bg-fluent-error/10',
            )}
          >
            <span className="text-sm">{option}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
