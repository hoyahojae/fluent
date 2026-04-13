import type { Activity } from '@/data/types'
import { speak } from '@/lib/utils'
import { VolumeIcon } from '@/components/ui/Icons'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function Preview({ activity, onSubmit }: Props) {
  const expressions = activity.expressions ?? []

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-fluent-teal-400 font-medium mb-1">📖 오늘의 학습 표현</p>
        <p className="text-sm text-fluent-text-secondary">
          아래 표현을 먼저 읽어보고, 발음을 들어보세요
        </p>
      </div>

      <div className="space-y-3">
        {expressions.map((expr, i) => (
          <div
            key={expr.id}
            className="card py-3 px-4 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[15px] mb-1">{expr.english}</p>
                <p className="text-sm text-fluent-text-secondary">{expr.korean}</p>
                {expr.context && (
                  <p className="text-xs text-fluent-text-muted mt-1">💡 {expr.context}</p>
                )}
              </div>
              <button
                onClick={() => speak(expr.english)}
                className="text-fluent-teal-400 p-2 flex-shrink-0"
              >
                <VolumeIcon size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(true, '')}
        className="w-full btn-primary text-base py-3.5"
      >
        학습 시작하기
      </button>
    </div>
  )
}
