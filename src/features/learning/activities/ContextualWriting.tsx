import { useState } from 'react'
import type { Activity } from '@/data/types'
import { checkAnswer, speak } from '@/lib/utils'
import { VolumeIcon, SparklesIcon } from '@/components/ui/Icons'
import { getWritingFeedback, type WritingFeedback } from '@/features/ai/aiFeedback'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function ContextualWriting({ activity, onSubmit }: Props) {
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null)

  const handleSubmit = async () => {
    if (!answer.trim()) return

    // 정확히 일치하면 바로 정답 처리
    const exactMatch = checkAnswer(answer, activity.answer)
    if (exactMatch) {
      onSubmit(true, answer)
      return
    }

    // AI 피드백 분석
    setIsAnalyzing(true)
    try {
      const result = await getWritingFeedback(answer, activity.answer, activity.question)
      setFeedback(result)
    } catch {
      // 분석 실패 시 기본 채점
      onSubmit(false, answer)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleAcceptFeedback = () => {
    if (feedback) {
      onSubmit(feedback.isAcceptable, answer)
    }
  }

  // 피드백이 있으면 피드백 화면 표시
  if (feedback) {
    return (
      <div className="space-y-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-1">
          <SparklesIcon size={14} className="text-fluent-teal-400" />
          <p className="text-xs text-fluent-teal-400 font-medium">AI 피드백</p>
        </div>

        {/* 점수 */}
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${
            feedback.score >= 70 ? 'bg-fluent-success/20 text-fluent-success' :
            feedback.score >= 40 ? 'bg-fluent-warning/20 text-fluent-warning' :
            'bg-fluent-error/20 text-fluent-error'
          }`}>
            {feedback.score}
          </div>
          <div>
            <p className="font-medium text-sm">
              {feedback.score >= 70 ? '잘 했어요!' : feedback.score >= 40 ? '거의 다 왔어요!' : '다시 도전해봐요!'}
            </p>
            <p className="text-xs text-fluent-text-muted">
              {feedback.isAcceptable ? '의미가 통하는 문장이에요' : '조금 더 연습이 필요해요'}
            </p>
          </div>
        </div>

        {/* 내 답변 */}
        <div className="bg-fluent-navy-700/50 rounded-xl p-3">
          <p className="text-[10px] text-fluent-text-muted mb-1">내 답변</p>
          <p className="text-sm">{answer}</p>
        </div>

        {/* 모범 답안 */}
        <div className="bg-fluent-teal-400/10 border border-fluent-teal-400/20 rounded-xl p-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] text-fluent-teal-300">모범 답안</p>
            <button onClick={() => speak(feedback.suggestedAnswer)} className="p-1">
              <VolumeIcon size={14} className="text-fluent-teal-400" />
            </button>
          </div>
          <p className="text-sm font-medium">{feedback.suggestedAnswer}</p>
        </div>

        {/* 칭찬 */}
        {feedback.praise.length > 0 && (
          <div className="space-y-1">
            <p className="text-[10px] text-fluent-success font-medium">👍 잘한 점</p>
            {feedback.praise.map((p, i) => (
              <p key={i} className="text-xs text-fluent-text-secondary pl-4">• {p}</p>
            ))}
          </div>
        )}

        {/* 문법 피드백 */}
        {feedback.grammar.length > 0 && (
          <div className="space-y-1">
            <p className="text-[10px] text-fluent-error font-medium">📝 문법 개선</p>
            {feedback.grammar.map((g, i) => (
              <p key={i} className="text-xs text-fluent-text-secondary pl-4">• {g}</p>
            ))}
          </div>
        )}

        {/* 자연스러움 팁 */}
        {feedback.naturalness.length > 0 && (
          <div className="space-y-1">
            <p className="text-[10px] text-fluent-warning font-medium">💡 더 자연스러운 표현</p>
            {feedback.naturalness.map((n, i) => (
              <p key={i} className="text-xs text-fluent-text-secondary pl-4">• {n}</p>
            ))}
          </div>
        )}

        <button
          onClick={handleAcceptFeedback}
          className="w-full btn-primary"
        >
          다음
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <SparklesIcon size={14} className="text-fluent-teal-400" />
          <p className="text-xs text-fluent-teal-400 font-medium">상황 작문</p>
        </div>
        <p className="text-base font-medium leading-relaxed whitespace-pre-line">
          {activity.question}
        </p>
      </div>

      <div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="영어로 작성하세요..."
          className="input-field min-h-[120px] resize-none"
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
          <button onClick={() => setShowHint(true)} className="btn-secondary flex-1 text-sm">
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
          disabled={!answer.trim() || isAnalyzing}
          className="btn-primary flex-1 disabled:opacity-40"
        >
          {isAnalyzing ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              분석 중...
            </span>
          ) : (
            '확인'
          )}
        </button>
      </div>
    </div>
  )
}
