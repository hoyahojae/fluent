import { useState, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { getQuestionsForLevel, type LevelTestQuestion, type QuestionCategory } from '@/data/levelTestQuestions'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { XIcon, CheckIcon, TrophyIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'
import { playSound } from '@/lib/sounds'

const TOTAL_SETS = 3
const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  vocabulary: '어휘',
  reading: '독해',
  grammar: '문법',
}

interface SetResult {
  level: number
  answers: { question: LevelTestQuestion; userAnswer: string; isCorrect: boolean }[]
  score: number
  total: number
}

export default function LevelTest() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isPeriodic = searchParams.get('type') === 'periodic'
  const { updateSettings, setOnboarded, settings, addLevelTestResult, resetUnitsSinceTest } = useStore()
  const previousLevel = settings.currentLevel

  // 셋트 상태
  const [currentSet, setCurrentSet] = useState(0) // 0, 1, 2
  const [currentSetLevel, setCurrentSetLevel] = useState(isPeriodic ? settings.currentLevel : 1) // 초기: 쉬운 레벨 or 현재 레벨
  const [setResults, setSetResults] = useState<SetResult[]>([])

  // 현재 셋트 내 문제 상태
  const [questions, setQuestions] = useState<LevelTestQuestion[]>(() => getQuestionsForLevel(isPeriodic ? settings.currentLevel : 1))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentAnswers, setCurrentAnswers] = useState<{ question: LevelTestQuestion; userAnswer: string; isCorrect: boolean }[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // 셋트 전환 화면
  const [showSetTransition, setShowSetTransition] = useState(false)

  // 최종 결과
  const [showFinalResult, setShowFinalResult] = useState(false)

  const startTimeRef = useRef(Date.now())

  const current = questions[currentIndex]
  const totalQuestions = TOTAL_SETS * 6 // 3셋트 × 6문제
  const globalIndex = currentSet * 6 + currentIndex
  const progress = (globalIndex / totalQuestions) * 100

  // 다음 셋트 레벨 결정
  function getNextSetLevel(score: number, total: number, currentLv: number): number {
    const ratio = score / total
    if (ratio >= 0.8) {
      // 잘 함 → 한 단계 위
      return Math.min(currentLv + 1, 10)
    } else if (ratio <= 0.3) {
      // 못 함 → 한 단계 아래
      return Math.max(currentLv - 1, 1)
    }
    // 비슷 → 유지
    return currentLv
  }

  // 최종 레벨 계산
  function calculateFinalLevel(results: SetResult[]): number {
    // 각 셋트의 레벨과 점수를 가중 평균
    let weightedSum = 0
    let weightTotal = 0
    results.forEach((r, i) => {
      const weight = i + 1 // 나중 셋트에 더 높은 가중치
      const ratio = r.score / r.total
      // 해당 셋트 레벨에서의 성적 반영
      const effectiveLevel = r.level + (ratio >= 0.8 ? 0.5 : ratio <= 0.3 ? -0.5 : 0)
      weightedSum += effectiveLevel * weight
      weightTotal += weight
    })
    const rawLevel = weightedSum / weightTotal
    return Math.max(1, Math.min(10, Math.round(rawLevel)))
  }

  const handleSelect = (option: string) => {
    if (selectedOption !== null || !current) return
    setSelectedOption(option)

    const isCorrect = option === current.answer
    const newAnswers = [...currentAnswers, { question: current, userAnswer: option, isCorrect }]
    setCurrentAnswers(newAnswers)

    // 짧은 딜레이 후 다음 문제 (정오답 표시 없이)
    setTimeout(() => {
      setSelectedOption(null)

      if (currentIndex + 1 >= questions.length) {
        // 현재 셋트 완료
        const score = newAnswers.filter(a => a.isCorrect).length
        const result: SetResult = {
          level: currentSetLevel,
          answers: newAnswers,
          score,
          total: newAnswers.length,
        }
        const newResults = [...setResults, result]
        setSetResults(newResults)

        if (currentSet + 1 >= TOTAL_SETS) {
          // 모든 셋트 완료 → 최종 결과
          const finalLevel = calculateFinalLevel(newResults)
          updateSettings({ currentLevel: finalLevel })

          if (isPeriodic) {
            const totalScore = newResults.reduce((s, r) => s + r.score, 0)
            addLevelTestResult({ oldLevel: previousLevel, newLevel: finalLevel, score: totalScore })
            resetUnitsSinceTest()
          } else {
            setOnboarded()
          }

          playSound('levelup')
          setShowFinalResult(true)
        } else {
          // 다음 셋트 준비
          const nextLevel = getNextSetLevel(score, newAnswers.length, currentSetLevel)
          setShowSetTransition(true)

          // 1.5초 후 다음 셋트 시작
          setTimeout(() => {
            setCurrentSet(currentSet + 1)
            setCurrentSetLevel(nextLevel)
            setQuestions(getQuestionsForLevel(nextLevel))
            setCurrentIndex(0)
            setCurrentAnswers([])
            setShowSetTransition(false)
          }, 2000)
        }
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 400)
  }

  // ===== 최종 결과 화면 =====
  if (showFinalResult) {
    const { settings } = useStore.getState()
    const level = settings.currentLevel
    const allAnswers = setResults.flatMap(r => r.answers)
    const totalCorrect = allAnswers.filter(a => a.isCorrect).length
    const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000)
    const minutes = Math.floor(elapsed / 60)
    const seconds = elapsed % 60

    const levelDiff = level - previousLevel

    // 영역별 분석
    const categoryStats = (['vocabulary', 'reading', 'grammar'] as QuestionCategory[]).map(cat => {
      const catAnswers = allAnswers.filter(a => a.question.category === cat)
      const correct = catAnswers.filter(a => a.isCorrect).length
      return { category: cat, correct, total: catAnswers.length, ratio: catAnswers.length > 0 ? correct / catAnswers.length : 0 }
    })

    return (
      <div className="max-w-lg mx-auto min-h-screen px-6 py-12 animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-fluent-xp/20 flex items-center justify-center mx-auto mb-4 animate-bounce-sm">
            <TrophyIcon size={40} className="text-fluent-xp" />
          </div>
          <h1 className="text-2xl font-bold mb-2">레벨 테스트 완료!</h1>
          <p className="text-fluent-text-secondary">당신의 영어 실력을 분석했어요</p>
        </div>

        {/* 배정 레벨 */}
        <div className="card mb-4">
          <div className="text-center py-4">
            <p className="text-fluent-text-muted text-xs mb-1">
              {isPeriodic ? '테스트 결과' : '배정된 레벨'}
            </p>
            <p className="text-4xl font-bold text-fluent-teal-400">Lv.{level}</p>
            <p className="text-sm text-fluent-text-secondary mt-1">
              {level <= 2 ? 'A1 입문/기초' : level <= 4 ? 'A2 초급' : level <= 6 ? 'B1 중급' : level <= 8 ? 'B2 상급' : 'C1 고급'}
            </p>
            {isPeriodic && (
              <p className={cn(
                'text-sm font-semibold mt-3',
                levelDiff > 0 ? 'text-fluent-success' : levelDiff < 0 ? 'text-fluent-warning' : 'text-fluent-text-secondary'
              )}>
                {levelDiff > 0 ? '🎉 ' : levelDiff < 0 ? '📉 ' : '✅ '}
                {levelDiff > 0 ? `Lv.${previousLevel} → Lv.${level} 레벨 업!`
                  : levelDiff < 0 ? `Lv.${previousLevel} → Lv.${level} 레벨 조정`
                  : `Lv.${level} 유지`}
              </p>
            )}
          </div>
        </div>

        {/* 전체 성적 */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="card text-center py-3">
            <p className="text-xl font-bold">{totalCorrect}/{allAnswers.length}</p>
            <p className="text-[10px] text-fluent-text-muted mt-0.5">총 정답</p>
          </div>
          <div className="card text-center py-3">
            <p className="text-xl font-bold">{minutes}:{seconds.toString().padStart(2, '0')}</p>
            <p className="text-[10px] text-fluent-text-muted mt-0.5">소요 시간</p>
          </div>
        </div>

        {/* 영역별 분석 */}
        <div className="card mb-4">
          <h3 className="font-semibold text-sm mb-3">영역별 분석</h3>
          <div className="space-y-3">
            {categoryStats.map(({ category, correct, total, ratio }) => (
              <div key={category}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{CATEGORY_LABELS[category]}</span>
                  <span className={cn(
                    ratio >= 0.7 ? 'text-fluent-success' : ratio >= 0.4 ? 'text-fluent-warning' : 'text-fluent-error'
                  )}>
                    {correct}/{total} ({Math.round(ratio * 100)}%)
                  </span>
                </div>
                <ProgressBar
                  value={ratio * 100}
                  color={ratio >= 0.7 ? 'success' : ratio >= 0.4 ? 'warning' : 'error'}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 셋트별 결과 */}
        <div className="card mb-4">
          <h3 className="font-semibold text-sm mb-3">셋트별 결과</h3>
          <div className="space-y-2">
            {setResults.map((r, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-fluent-navy-700/50 last:border-0">
                <div>
                  <p className="text-xs font-medium">셋트 {i + 1} (Lv.{r.level} 난이도)</p>
                </div>
                <span className={cn(
                  'text-sm font-semibold',
                  r.score / r.total >= 0.7 ? 'text-fluent-success' : r.score / r.total >= 0.4 ? 'text-fluent-warning' : 'text-fluent-error'
                )}>
                  {r.score}/{r.total}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 전체 정오답 상세 */}
        <div className="card mb-6">
          <h3 className="font-semibold text-sm mb-3">문제별 결과</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {setResults.map((r, si) =>
              r.answers.map((a, qi) => (
                <div key={`${si}-${qi}`} className="flex items-start gap-2 py-1.5 border-b border-fluent-navy-700/50 last:border-0">
                  {a.isCorrect ? (
                    <CheckIcon size={14} className="text-fluent-success flex-shrink-0 mt-0.5" />
                  ) : (
                    <XIcon size={14} className="text-fluent-error flex-shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-fluent-text-muted">
                      셋트{si + 1} · {CATEGORY_LABELS[a.question.category]} · Lv.{a.question.level}
                    </p>
                    <p className="text-xs truncate">{a.question.question}</p>
                    {!a.isCorrect && (
                      <p className="text-[10px] text-fluent-error mt-0.5">
                        내 답: {a.userAnswer} → 정답: {a.question.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {isPeriodic && levelDiff < 0 && (
          <div className="card mb-4 bg-fluent-warning/5 border border-fluent-warning/20">
            <p className="text-sm text-fluent-text-secondary text-center">
              레벨이 조정되었지만 걱정하지 마세요! 기초를 탄탄히 하면 더 빠르게 성장할 수 있어요.
            </p>
          </div>
        )}

        <button
          onClick={() => navigate('/', { replace: true })}
          className="w-full btn-primary text-lg py-4"
        >
          {isPeriodic ? '돌아가기' : '학습 시작하기'}
        </button>
      </div>
    )
  }

  // ===== 셋트 전환 화면 =====
  if (showSetTransition) {
    const lastResult = setResults[setResults.length - 1]!
    return (
      <div className="max-w-lg mx-auto min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
        <div className="text-center">
          <p className="text-fluent-teal-400 text-sm font-medium mb-2">셋트 {currentSet + 1} 완료!</p>
          <p className="text-2xl font-bold mb-4">{lastResult.score}/{lastResult.total} 정답</p>
          <p className="text-fluent-text-secondary text-sm mb-6">
            다음 셋트를 준비하고 있어요...
          </p>
          <div className="flex justify-center gap-3">
            {[0, 1, 2].map(i => (
              <div key={i} className={cn(
                'w-3 h-3 rounded-full transition-all',
                i <= currentSet ? 'bg-fluent-teal-400' : 'bg-fluent-navy-600'
              )} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ===== 문제 풀기 화면 =====
  if (!current) return null

  const categoryLabel = CATEGORY_LABELS[current.category]

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col">
      {/* 상단 바 */}
      <div className="sticky top-0 bg-fluent-bg-dark/95 backdrop-blur-lg z-40 px-4 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-1">
          <button onClick={() => navigate(isPeriodic ? '/' : '/welcome')} className="text-fluent-text-muted p-1">
            <XIcon size={20} />
          </button>
          <ProgressBar value={progress} color="teal" size="sm" className="flex-1" />
          <span className="text-xs text-fluent-text-muted min-w-[3rem] text-right">
            {globalIndex + 1}/{totalQuestions}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-fluent-text-muted">
            셋트 {currentSet + 1}/{TOTAL_SETS} · {categoryLabel}
          </p>
          <p className="text-[10px] text-fluent-text-muted">
            Lv.{currentSetLevel} 난이도
          </p>
        </div>
      </div>

      {/* 문제 영역 */}
      <div className="flex-1 px-4 py-6">
        <div key={current.id} className="animate-fade-in space-y-6">
          {/* 영역 배지 */}
          <div className="flex items-center gap-2">
            <span className={cn(
              'text-[10px] font-medium px-2 py-0.5 rounded',
              current.category === 'vocabulary' ? 'bg-fluent-teal-400/20 text-fluent-teal-300' :
              current.category === 'reading' ? 'bg-fluent-xp/20 text-fluent-xp' :
              'bg-fluent-success/20 text-fluent-success'
            )}>
              {categoryLabel}
            </span>
          </div>

          {/* 독해 지문 */}
          {current.passage && (
            <div className="bg-fluent-navy-700/50 rounded-xl p-4 border-l-2 border-fluent-xp/50">
              <p className="text-sm leading-relaxed text-fluent-text-secondary">{current.passage}</p>
            </div>
          )}

          {/* 문제 */}
          <p className="text-lg font-semibold leading-relaxed">{current.question}</p>

          {/* 선택지 */}
          <div className="space-y-2">
            {current.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option)}
                disabled={selectedOption !== null}
                className={cn(
                  'w-full text-left card py-3.5 transition-all active:scale-[0.98]',
                  selectedOption === option ? 'border-fluent-teal-400 bg-fluent-teal-400/10' : '',
                )}
              >
                <span className="text-sm">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
