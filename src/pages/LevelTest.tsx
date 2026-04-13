import { useState, useRef, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { getRandomQuestionsForLevel, type LevelTestQuestion, type QuestionCategory } from '@/data/levelTestQuestions'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { XIcon, CheckIcon, TrophyIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'
import { playSound } from '@/lib/sounds'

const QUESTIONS_PER_SET = 6
const MAX_SETS = 7
const MIN_SETS_FOR_CONVERGENCE = 4
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
  const { setOnboarded, settings, addLevelTestResult, adjustCurriculumForLevel } = useStore()
  const previousLevel = settings.currentLevel

  // 이진탐색 범위
  const [low, setLow] = useState(() => isPeriodic ? Math.max(1, settings.currentLevel - 3) : 1)
  const [high, setHigh] = useState(() => isPeriodic ? Math.min(10, settings.currentLevel + 3) : 10)

  // 첫 셋트 레벨: 중간값
  const initialLevel = isPeriodic ? settings.currentLevel : 5
  const [currentSetLevel, setCurrentSetLevel] = useState(initialLevel)

  // 사용된 문제 ID 추적 (반복 방지)
  const usedQuestionIds = useRef(new Set<string>())

  // 셋트 상태
  const [currentSet, setCurrentSet] = useState(0)
  const [setResults, setSetResults] = useState<SetResult[]>([])

  // 현재 셋트 내 문제 상태
  const [questions, setQuestions] = useState<LevelTestQuestion[]>(() =>
    getRandomQuestionsForLevel(initialLevel, QUESTIONS_PER_SET, usedQuestionIds.current)
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentAnswers, setCurrentAnswers] = useState<{ question: LevelTestQuestion; userAnswer: string; isCorrect: boolean }[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // 셋트 전환 / 최종 결과
  const [showSetTransition, setShowSetTransition] = useState(false)
  const [showFinalResult, setShowFinalResult] = useState(false)
  const [convergedEarly, setConvergedEarly] = useState(false)

  const startTimeRef = useRef(Date.now())

  const current = questions[currentIndex]
  const completedQuestions = setResults.reduce((s, r) => s + r.total, 0) + currentIndex
  const estimatedTotal = MAX_SETS * QUESTIONS_PER_SET
  const progress = (completedQuestions / estimatedTotal) * 100

  // 이진탐색: 다음 레벨 결정
  const getNextSearchState = useCallback((score: number, total: number, currentLv: number, curLow: number, curHigh: number) => {
    const ratio = score / total
    let newLow = curLow
    let newHigh = curHigh

    if (ratio >= 0.7) {
      // 이 레벨은 편안함 → 하한 올림
      newLow = Math.max(newLow, currentLv)
    } else if (ratio < 0.4) {
      // 이 레벨은 어려움 → 상한 내림
      newHigh = Math.min(newHigh, currentLv)
    } else {
      // 경계선 → 범위 소폭 조정
      newLow = Math.max(newLow, currentLv - 1)
      newHigh = Math.min(newHigh, currentLv + 1)
    }

    // 범위가 역전되면 보정
    if (newLow > newHigh) {
      newLow = newHigh
    }

    const nextLevel = Math.round((newLow + newHigh) / 2)
    // 범위가 1 이하로 좁혀져야 수렴
    const isConverged = newHigh - newLow <= 1

    return { newLow, newHigh, nextLevel, isConverged, gap: newHigh - newLow }
  }, [])

  // 최종 레벨 계산
  function calculateFinalLevel(results: SetResult[], finalLow: number, finalHigh: number): number {
    // 이진탐색 결과 기반
    const searchResult = Math.round((finalLow + finalHigh) / 2)

    // 영역별 약점 분석으로 미세 조정
    const allAnswers = results.flatMap(r => r.answers)
    const categoryRatios = (['vocabulary', 'reading', 'grammar'] as const).map(cat => {
      const catAnswers = allAnswers.filter(a => a.question.category === cat)
      return catAnswers.length > 0 ? catAnswers.filter(a => a.isCorrect).length / catAnswers.length : 0.5
    })
    const avgCategoryRatio = categoryRatios.reduce((s, r) => s + r, 0) / 3

    // 최근 셋트(후반부)의 성적에 가중치
    const recentResults = results.slice(-2)
    let adjustment = 0
    for (const r of recentResults) {
      const ratio = r.score / r.total
      if (ratio >= 0.85) adjustment += 0.25
      else if (ratio < 0.3) adjustment -= 0.25
    }

    // 전체 영역 평균이 극단적이면 추가 조정
    if (avgCategoryRatio >= 0.8) adjustment += 0.2
    else if (avgCategoryRatio < 0.35) adjustment -= 0.2

    return Math.max(1, Math.min(10, Math.round(searchResult + adjustment)))
  }

  const handleSelect = (option: string) => {
    if (selectedOption !== null || !current) return
    setSelectedOption(option)

    const isCorrect = option === current.answer
    const newAnswers = [...currentAnswers, { question: current, userAnswer: option, isCorrect }]
    setCurrentAnswers(newAnswers)

    // 사용된 문제 기록
    usedQuestionIds.current.add(current.id)

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

        // 이진탐색 업데이트
        const { newLow, newHigh, nextLevel, isConverged } = getNextSearchState(
          score, newAnswers.length, currentSetLevel, low, high
        )
        setLow(newLow)
        setHigh(newHigh)

        // 수렴했거나 마지막 셋트면 종료 (최소 4셋트는 진행)
        if (currentSet + 1 >= MAX_SETS || (isConverged && currentSet + 1 >= MIN_SETS_FOR_CONVERGENCE)) {
          const finalLevel = calculateFinalLevel(newResults, newLow, newHigh)

          // 영역별 약점 계산
          const allTestAnswers = newResults.flatMap(r => r.answers)
          const calcRatio = (cat: QuestionCategory) => {
            const catAnswers = allTestAnswers.filter(a => a.question.category === cat)
            return catAnswers.length > 0 ? catAnswers.filter(a => a.isCorrect).length / catAnswers.length : 0.5
          }
          const categoryWeakness = {
            vocabulary: calcRatio('vocabulary'),
            reading: calcRatio('reading'),
            grammar: calcRatio('grammar'),
          }

          // 커리큘럼 조정 (레벨 변경 + 유닛 진행도 + 약점 저장)
          adjustCurriculumForLevel(finalLevel, categoryWeakness)

          if (isPeriodic) {
            const totalScore = newResults.reduce((s, r) => s + r.score, 0)
            addLevelTestResult({ oldLevel: previousLevel, newLevel: finalLevel, score: totalScore })
          } else {
            setOnboarded()
          }

          if (isConverged && currentSet + 1 < MAX_SETS && currentSet + 1 >= MIN_SETS_FOR_CONVERGENCE) {
            setConvergedEarly(true)
          }

          playSound('levelup')
          setShowFinalResult(true)
        } else {
          // 다음 셋트 준비
          setShowSetTransition(true)
          setTimeout(() => {
            const nextQuestions = getRandomQuestionsForLevel(nextLevel, QUESTIONS_PER_SET, usedQuestionIds.current)
            setCurrentSet(currentSet + 1)
            setCurrentSetLevel(nextLevel)
            setQuestions(nextQuestions)
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
    const completedSets = setResults.length

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
          <p className="text-fluent-text-secondary">
            {convergedEarly
              ? `${completedSets}셋트 만에 레벨이 확정되었어요!`
              : '당신의 영어 실력을 분석했어요'}
          </p>
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
                {levelDiff > 0 ? `Lv.${previousLevel} → Lv.${level} 레벨 업!`
                  : levelDiff < 0 ? `Lv.${previousLevel} → Lv.${level} 레벨 조정`
                  : `Lv.${level} 유지`}
              </p>
            )}
          </div>
        </div>

        {/* 전체 성적 */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="card text-center py-3">
            <p className="text-xl font-bold">{totalCorrect}/{allAnswers.length}</p>
            <p className="text-[10px] text-fluent-text-muted mt-0.5">총 정답</p>
          </div>
          <div className="card text-center py-3">
            <p className="text-xl font-bold">{completedSets}</p>
            <p className="text-[10px] text-fluent-text-muted mt-0.5">셋트 완료</p>
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

        {/* 셋트별 난이도 경로 */}
        <div className="card mb-4">
          <h3 className="font-semibold text-sm mb-3">적응형 난이도 경로</h3>
          <div className="flex items-center justify-between gap-1 mb-3">
            {setResults.map((r, i) => {
              const ratio = r.score / r.total
              return (
                <div key={i} className="flex-1 text-center">
                  <div className={cn(
                    'text-xs font-bold mb-1',
                    ratio >= 0.7 ? 'text-fluent-success' : ratio >= 0.4 ? 'text-fluent-warning' : 'text-fluent-error'
                  )}>
                    {r.score}/{r.total}
                  </div>
                  <div className={cn(
                    'h-8 rounded-lg flex items-center justify-center text-xs font-medium',
                    ratio >= 0.7 ? 'bg-fluent-success/20 text-fluent-success' :
                    ratio >= 0.4 ? 'bg-fluent-warning/20 text-fluent-warning' :
                    'bg-fluent-error/20 text-fluent-error'
                  )}>
                    Lv.{r.level}
                  </div>
                  <p className="text-[9px] text-fluent-text-muted mt-1">셋트{i + 1}</p>
                </div>
              )
            })}
          </div>
          <p className="text-[10px] text-fluent-text-muted text-center">
            성적에 따라 난이도가 자동 조절되었습니다
          </p>
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
    const ratio = lastResult.score / lastResult.total
    return (
      <div className="max-w-lg mx-auto min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
        <div className="text-center">
          <p className="text-fluent-teal-400 text-sm font-medium mb-2">셋트 {currentSet + 1} 완료!</p>
          <p className="text-2xl font-bold mb-2">{lastResult.score}/{lastResult.total} 정답</p>
          <p className="text-sm text-fluent-text-secondary mb-1">
            Lv.{lastResult.level} 난이도
          </p>
          <p className="text-xs text-fluent-text-muted mb-6">
            {ratio >= 0.7 ? '잘하고 있어요! 난이도를 올려볼게요' :
             ratio < 0.4 ? '난이도를 조절할게요' :
             '실력을 더 정확히 파악하고 있어요'}
          </p>
          <div className="flex justify-center gap-2">
            {Array.from({ length: MAX_SETS }, (_, i) => (
              <div key={i} className={cn(
                'w-3 h-3 rounded-full transition-all',
                i < currentSet + 1 ? 'bg-fluent-teal-400' :
                i === currentSet + 1 ? 'bg-fluent-teal-400/40 animate-pulse' :
                'bg-fluent-navy-600'
              )} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ===== 문제 풀기 화면 =====
  if (!current) {
    return (
      <div className="max-w-lg mx-auto min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-fluent-teal-400/30 border-t-fluent-teal-400 rounded-full animate-spin" />
      </div>
    )
  }

  const categoryLabel = CATEGORY_LABELS[current.category]

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col">
      <div className="sticky top-0 bg-fluent-bg-dark/95 backdrop-blur-lg z-40 px-4 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-1">
          <button onClick={() => navigate(isPeriodic ? '/' : '/welcome')} className="text-fluent-text-muted p-1">
            <XIcon size={20} />
          </button>
          <ProgressBar value={progress} color="teal" size="sm" className="flex-1" />
          <span className="text-xs text-fluent-text-muted min-w-[3rem] text-right">
            {completedQuestions + 1}/{estimatedTotal}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-fluent-text-muted">
            셋트 {currentSet + 1}/{MAX_SETS} · {categoryLabel}
          </p>
          <p className="text-[10px] text-fluent-text-muted">
            Lv.{currentSetLevel} 난이도
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-6">
        <div key={current.id} className="animate-fade-in space-y-6">
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

          {current.passage && (
            <div className="bg-fluent-navy-700/50 rounded-xl p-4 border-l-2 border-fluent-xp/50">
              <p className="text-sm leading-relaxed text-fluent-text-secondary">{current.passage}</p>
            </div>
          )}

          <p className="text-lg font-semibold leading-relaxed">{current.question}</p>

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
