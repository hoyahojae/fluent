import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { getUnitById } from '@/data/curriculum'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { XIcon, CheckIcon, StarIcon, TrophyIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'
import { playSound } from '@/lib/sounds'
import { checkAndAwardBadges } from '@/features/gamification/badgeChecker'
import { FloatingXp } from '@/components/ui/FloatingXp'
import type { Badge } from '@/data/badges'

import { Translation } from '@/features/learning/activities/Translation'
import { Comprehension } from '@/features/learning/activities/Comprehension'
import { FillBlank } from '@/features/learning/activities/FillBlank'
import { WordOrder } from '@/features/learning/activities/WordOrder'
import { VocabMatch } from '@/features/learning/activities/VocabMatch'
import { VocabSpelling } from '@/features/learning/activities/VocabSpelling'
import { ContextualWriting } from '@/features/learning/activities/ContextualWriting'
import { Dictation } from '@/features/learning/activities/Dictation'

export default function Session() {
  const navigate = useNavigate()
  const { session, submitAnswer, nextActivity, endSession, updateMastery, setUnitProgress, incrementUnitsSinceTest } = useStore()
  const [feedback, setFeedback] = useState<{ show: boolean; isCorrect: boolean; correctAnswer: string } | null>(null)
  const [showSummary, setShowSummary] = useState(false)
  const [newBadges, setNewBadges] = useState<Badge[]>([])
  const [xpTrigger, setXpTrigger] = useState(0)
  const startTimeRef = useRef(Date.now())

  const { activities, currentActivityIndex, results, unitId } = session
  const currentActivity = activities[currentActivityIndex]
  const unit = getUnitById(unitId)
  const progress = activities.length > 0 ? ((currentActivityIndex) / activities.length) * 100 : 0

  // 복습/새학습 구분
  const isCurrentReview = currentActivity?.isReview
  // 복습→새학습 전환 시점 감지
  const prevActivity = currentActivityIndex > 0 ? activities[currentActivityIndex - 1] : null
  const showSectionTransition = prevActivity?.isReview && !currentActivity?.isReview

  if (!session.isActive || !currentActivity) {
    if (!showSummary) {
      navigate('/', { replace: true })
      return null
    }
  }

  const handleSubmit = (isCorrect: boolean, userAnswer: string) => {
    const timeSpent = Date.now() - startTimeRef.current

    submitAnswer({
      activityIndex: currentActivityIndex,
      isCorrect,
      userAnswer,
      timeSpent,
    })

    // 마스터리 업데이트
    const itemId = currentActivity!.expression?.id ?? currentActivity!.vocabulary?.id
    const itemType = currentActivity!.expression ? 'expression' : 'vocabulary'
    if (itemId) {
      updateMastery(itemId, isCorrect, itemType as 'expression' | 'vocabulary')
    }

    // XP 플로팅 애니메이션
    if (isCorrect) {
      setXpTrigger((t) => t + 1)
    }

    // 효과음
    playSound(isCorrect ? 'correct' : 'incorrect')

    // 피드백 표시
    setFeedback({
      show: true,
      isCorrect,
      correctAnswer: currentActivity!.answer,
    })
  }

  const handleNext = () => {
    setFeedback(null)
    startTimeRef.current = Date.now()

    if (currentActivityIndex + 1 >= activities.length) {
      // 만점 세션 체크
      const allResults = results
      const allCorrect = allResults.every(r => r.isCorrect) && feedback?.isCorrect
      if (allCorrect && allResults.length > 0) {
        useStore.getState().incrementPerfectSessions()
      }

      // 세션 완료
      setUnitProgress(unitId, 'completed')
      incrementUnitsSinceTest()
      playSound('complete')

      // 배지 체크 (약간의 딜레이로 store 업데이트 후 체크)
      setTimeout(() => {
        const earned = checkAndAwardBadges()
        if (earned.length > 0) {
          setNewBadges(earned)
          playSound('levelup')
        }
      }, 100)

      setShowSummary(true)
    } else {
      nextActivity()
    }
  }

  const handleFinish = () => {
    endSession()
    navigate('/', { replace: true })
  }

  const handleQuit = () => {
    endSession()
    navigate('/', { replace: true })
  }

  // 세션 요약 화면
  if (showSummary) {
    const totalCorrect = [...results, ...(feedback ? [{ isCorrect: feedback.isCorrect }] : [])].filter(r => r.isCorrect).length
    const totalCount = results.length + (feedback ? 1 : 0)
    const accuracy = totalCount > 0 ? Math.round((totalCorrect / totalCount) * 100) : 0
    const xpEarned = totalCorrect * 10 + totalCount * 2

    // 복습/새학습 분리 통계
    const reviewActivities = activities.filter(a => a.isReview)
    const newActivities = activities.filter(a => !a.isReview)

    return (
      <div className="max-w-lg mx-auto px-4 pt-16 pb-8 animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-fluent-xp/20 flex items-center justify-center mx-auto mb-4">
            <TrophyIcon size={40} className="text-fluent-xp" />
          </div>
          <h1 className="text-2xl font-bold">학습 완료!</h1>
          <p className="text-fluent-text-secondary mt-1">{unit?.name}</p>
          {reviewActivities.length > 0 && (
            <p className="text-xs text-fluent-text-muted mt-1">
              복습 {reviewActivities.length}개 + 새 학습 {newActivities.length}개
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="card text-center py-4">
            <CheckIcon size={20} className="text-fluent-success mx-auto mb-1" />
            <span className="text-xl font-bold">{totalCorrect}/{totalCount}</span>
            <span className="text-[10px] text-fluent-text-muted block mt-0.5">정답</span>
          </div>
          <div className="card text-center py-4">
            <StarIcon size={20} className="text-fluent-xp mx-auto mb-1" />
            <span className="text-xl font-bold">+{xpEarned}</span>
            <span className="text-[10px] text-fluent-text-muted block mt-0.5">XP</span>
          </div>
          <div className="card text-center py-4">
            <div className="text-xl font-bold">{accuracy}%</div>
            <span className="text-[10px] text-fluent-text-muted block mt-0.5">정답률</span>
          </div>
        </div>

        {/* 새로 획득한 배지 */}
        {newBadges.length > 0 && (
          <div className="card mb-6 border border-fluent-xp/30 bg-fluent-xp/5">
            <h3 className="font-semibold text-sm text-fluent-xp mb-3">새로운 업적 달성!</h3>
            <div className="space-y-2">
              {newBadges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-3 animate-bounce-sm">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <p className="font-medium text-sm">{badge.name}</p>
                    <p className="text-xs text-fluent-text-muted">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 결과 목록 */}
        <div className="card mb-6">
          <h3 className="font-semibold text-sm mb-3">학습 결과</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {activities.map((act, i) => {
              const result = results[i]
              return (
                <div key={i} className="flex items-start gap-2 py-1.5 border-b border-fluent-navy-700/50 last:border-0">
                  {result ? (
                    result.isCorrect ? (
                      <CheckIcon size={16} className="text-fluent-success flex-shrink-0 mt-0.5" />
                    ) : (
                      <XIcon size={16} className="text-fluent-error flex-shrink-0 mt-0.5" />
                    )
                  ) : (
                    <div className="w-4 h-4 flex-shrink-0" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-fluent-text-secondary truncate">
                      {act.expression?.english ?? act.vocabulary?.word ?? act.question}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <button
          onClick={handleFinish}
          className="w-full btn-primary text-lg py-4"
        >
          완료
        </button>
      </div>
    )
  }

  // 활동 렌더링
  const renderActivity = () => {
    if (!currentActivity) return null

    const props = { activity: currentActivity, onSubmit: handleSubmit }

    switch (currentActivity.type) {
      case 'translation': return <Translation {...props} />
      case 'comprehension': return <Comprehension {...props} />
      case 'fill-blank': return <FillBlank {...props} />
      case 'word-order': return <WordOrder {...props} />
      case 'vocab-match': return <VocabMatch {...props} />
      case 'vocab-spelling': return <VocabSpelling {...props} />
      case 'contextual-writing': return <ContextualWriting {...props} />
      case 'dictation': return <Dictation {...props} />
    }
  }

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col">
      <FloatingXp trigger={xpTrigger} />
      {/* 상단 바 */}
      <div className="sticky top-0 bg-fluent-bg-dark/95 backdrop-blur-lg z-40 px-4 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={handleQuit} className="text-fluent-text-muted p-1">
            <XIcon size={20} />
          </button>
          <ProgressBar value={progress} color="teal" size="sm" className="flex-1" />
          <div className="flex items-center gap-1.5 min-w-fit">
            {isCurrentReview && (
              <span className="text-[10px] bg-fluent-warning/20 text-fluent-warning px-1.5 py-0.5 rounded">복습</span>
            )}
            <span className="text-xs text-fluent-text-muted">
              {currentActivityIndex + 1}/{activities.length}
            </span>
          </div>
        </div>
      </div>

      {/* 활동 영역 */}
      <div className="flex-1 px-4 py-6">
        {/* 복습→새학습 전환 배너 */}
        {showSectionTransition && !feedback?.show && (
          <div className="mb-4 bg-fluent-teal-400/10 border border-fluent-teal-400/20 rounded-xl px-4 py-3 text-center animate-slide-up">
            <p className="text-sm font-medium text-fluent-teal-300">복습 완료! 새로운 학습을 시작합니다</p>
          </div>
        )}

        {!feedback?.show ? (
          <div key={currentActivityIndex} className="animate-fade-in">
            {renderActivity()}
          </div>
        ) : (
          /* 피드백 오버레이 */
          <div className={cn(
            'animate-slide-up rounded-2xl p-6',
            feedback.isCorrect ? 'bg-fluent-success/10' : 'bg-fluent-error/10'
          )}>
            <div className="flex items-center gap-3 mb-4">
              {feedback.isCorrect ? (
                <>
                  <div className="w-10 h-10 rounded-full bg-fluent-success/20 flex items-center justify-center animate-bounce-sm">
                    <CheckIcon size={24} className="text-fluent-success" />
                  </div>
                  <div>
                    <p className="font-bold text-fluent-success">정답!</p>
                    <p className="text-sm text-fluent-text-secondary">잘했어요!</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full bg-fluent-error/20 flex items-center justify-center animate-shake">
                    <XIcon size={24} className="text-fluent-error" />
                  </div>
                  <div>
                    <p className="font-bold text-fluent-error">오답</p>
                    <p className="text-sm text-fluent-text-secondary">다음엔 맞출 수 있어요!</p>
                  </div>
                </>
              )}
            </div>

            <div className="bg-fluent-navy-700/50 rounded-xl p-4 mb-4">
              <p className="text-xs text-fluent-text-muted mb-1">정답</p>
              <p className="font-medium">{feedback.correctAnswer}</p>
            </div>

            <button
              onClick={handleNext}
              className="w-full btn-primary"
            >
              {currentActivityIndex + 1 >= activities.length ? '결과 보기' : '다음'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
