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

import { Preview } from '@/features/learning/activities/Preview'
import { Translation } from '@/features/learning/activities/Translation'
import { Comprehension } from '@/features/learning/activities/Comprehension'
import { FillBlank } from '@/features/learning/activities/FillBlank'
import { WordOrder } from '@/features/learning/activities/WordOrder'
import { VocabMatch } from '@/features/learning/activities/VocabMatch'
import { VocabSpelling } from '@/features/learning/activities/VocabSpelling'
import { ContextualWriting } from '@/features/learning/activities/ContextualWriting'
import { Dictation } from '@/features/learning/activities/Dictation'

const SECTION_LABELS: Record<string, { label: string; emoji: string }> = {
  preview: { label: '오늘의 표현', emoji: '📖' },
  vocabulary: { label: '어휘 학습', emoji: '📝' },
  practice: { label: '연습', emoji: '💪' },
  test: { label: '테스트', emoji: '🎯' },
}

// 힌트 사용 단계별 XP 계산
function calculateXp(isCorrect: boolean, hintLevel?: number): number {
  if (!isCorrect) return 2 // 오답 참여 XP
  if (!hintLevel || hintLevel === 0) return 10 // 힌트 미사용
  if (hintLevel === 1) return 7
  if (hintLevel === 2) return 4
  return 2 // 힌트 3단계
}

export default function Session() {
  const navigate = useNavigate()
  const { session, submitAnswer, nextActivity, endSession, updateMastery, setUnitProgress, incrementUnitsSinceTest } = useStore()
  const [feedback, setFeedback] = useState<{
    show: boolean
    isCorrect: boolean
    correctAnswer: string
    explanation?: string
    hintLevel?: number
    xpEarned: number
  } | null>(null)
  const [showSummary, setShowSummary] = useState(false)
  const [newBadges, setNewBadges] = useState<Badge[]>([])
  const [xpTrigger, setXpTrigger] = useState(0)
  const startTimeRef = useRef(Date.now())

  const { activities, currentActivityIndex, results, unitId } = session
  const currentActivity = activities[currentActivityIndex]
  const unit = getUnitById(unitId)
  const progress = activities.length > 0 ? ((currentActivityIndex) / activities.length) * 100 : 0

  // 현재 섹션
  const currentSection = currentActivity?.section
  const prevActivity = currentActivityIndex > 0 ? activities[currentActivityIndex - 1] : null
  const showSectionTransition = prevActivity?.section !== currentActivity?.section && currentActivity?.section !== 'preview'

  if (!session.isActive || !currentActivity) {
    if (!showSummary) {
      navigate('/', { replace: true })
      return null
    }
  }

  const handleSubmit = (isCorrect: boolean, userAnswer: string, hintLevel?: number) => {
    const timeSpent = Date.now() - startTimeRef.current

    // 미리보기는 피드백 없이 바로 다음으로
    if (currentActivity!.type === 'preview') {
      submitAnswer({
        activityIndex: currentActivityIndex,
        isCorrect: true,
        userAnswer: '',
        timeSpent,
      })
      handleNextDirect()
      return
    }

    const xpEarned = calculateXp(isCorrect, hintLevel)

    submitAnswer({
      activityIndex: currentActivityIndex,
      isCorrect,
      userAnswer,
      timeSpent,
      hintLevel,
    })

    // 마스터리 업데이트
    const itemId = currentActivity!.expression?.id ?? currentActivity!.vocabulary?.id
    const itemType = currentActivity!.expression ? 'expression' : 'vocabulary'
    if (itemId) {
      updateMastery(itemId, isCorrect, itemType as 'expression' | 'vocabulary')
    }

    // XP 플로팅
    if (isCorrect) {
      setXpTrigger((t) => t + 1)
    }

    playSound(isCorrect ? 'correct' : 'incorrect')

    setFeedback({
      show: true,
      isCorrect,
      correctAnswer: currentActivity!.answer,
      explanation: currentActivity!.explanation,
      hintLevel,
      xpEarned,
    })
  }

  const handleNextDirect = () => {
    startTimeRef.current = Date.now()
    if (currentActivityIndex + 1 >= activities.length) {
      finishSession()
    } else {
      nextActivity()
    }
  }

  const handleNext = () => {
    setFeedback(null)
    handleNextDirect()
  }

  const finishSession = () => {
    const allResults = results
    const allCorrect = allResults.every(r => r.isCorrect) && feedback?.isCorrect
    if (allCorrect && allResults.length > 0) {
      useStore.getState().incrementPerfectSessions()
    }

    setUnitProgress(unitId, 'completed')
    incrementUnitsSinceTest()
    playSound('complete')

    setTimeout(() => {
      const earned = checkAndAwardBadges()
      if (earned.length > 0) {
        setNewBadges(earned)
        playSound('levelup')
      }
    }, 100)

    setShowSummary(true)
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
    const allResults = [...results, ...(feedback ? [{ isCorrect: feedback.isCorrect, hintLevel: feedback.hintLevel }] : [])]
    const scoredResults = allResults.filter((_, i) => activities[i]?.type !== 'preview')
    const totalCorrect = scoredResults.filter(r => r.isCorrect).length
    const totalCount = scoredResults.length
    const accuracy = totalCount > 0 ? Math.round((totalCorrect / totalCount) * 100) : 0

    // 힌트 기반 XP 합산
    const totalXp = scoredResults.reduce((sum, r) => {
      return sum + calculateXp(r.isCorrect, r.hintLevel)
    }, 0)

    return (
      <div className="max-w-lg mx-auto px-4 pt-16 pb-8 animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-fluent-xp/20 flex items-center justify-center mx-auto mb-4">
            <TrophyIcon size={40} className="text-fluent-xp" />
          </div>
          <h1 className="text-2xl font-bold">학습 완료!</h1>
          <p className="text-fluent-text-secondary mt-1">{unit?.name}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="card text-center py-4">
            <CheckIcon size={20} className="text-fluent-success mx-auto mb-1" />
            <span className="text-xl font-bold">{totalCorrect}/{totalCount}</span>
            <span className="text-[10px] text-fluent-text-muted block mt-0.5">정답</span>
          </div>
          <div className="card text-center py-4">
            <StarIcon size={20} className="text-fluent-xp mx-auto mb-1" />
            <span className="text-xl font-bold">+{totalXp}</span>
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
              if (act.type === 'preview') return null
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
                    {result && result.hintLevel && result.hintLevel > 0 && (
                      <p className="text-[10px] text-fluent-warning">힌트 {result.hintLevel}단계 사용</p>
                    )}
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
      case 'preview': return <Preview {...props} />
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

  const sectionInfo = currentSection ? SECTION_LABELS[currentSection] : null

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
            {sectionInfo && (
              <span className="text-[10px] bg-fluent-navy-700 text-fluent-text-secondary px-1.5 py-0.5 rounded">
                {sectionInfo.emoji} {sectionInfo.label}
              </span>
            )}
            <span className="text-xs text-fluent-text-muted">
              {currentActivityIndex + 1}/{activities.length}
            </span>
          </div>
        </div>
      </div>

      {/* 활동 영역 */}
      <div className="flex-1 px-4 py-6">
        {/* 섹션 전환 배너 */}
        {showSectionTransition && !feedback?.show && sectionInfo && (
          <div className="mb-4 bg-fluent-teal-400/10 border border-fluent-teal-400/20 rounded-xl px-4 py-3 text-center animate-slide-up">
            <p className="text-sm font-medium text-fluent-teal-300">
              {sectionInfo.emoji} {sectionInfo.label} 단계
            </p>
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
                    <p className="text-sm text-fluent-text-secondary">
                      +{feedback.xpEarned} XP
                      {feedback.hintLevel && feedback.hintLevel > 0 && (
                        <span className="text-fluent-warning ml-1">(힌트 {feedback.hintLevel}단계)</span>
                      )}
                    </p>
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

            {/* 문제 해설 */}
            {feedback.explanation && (
              <div className="bg-fluent-navy-700/30 rounded-xl p-4 mb-4 border-l-2 border-fluent-teal-400/50">
                <p className="text-xs text-fluent-teal-400 font-medium mb-1">💡 해설</p>
                <p className="text-sm text-fluent-text-secondary leading-relaxed">
                  {feedback.explanation}
                </p>
              </div>
            )}

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
