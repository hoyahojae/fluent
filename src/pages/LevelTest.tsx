import { useState, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { levelTestQuestions } from '@/data/levelTestQuestions'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { XIcon, CheckIcon, TrophyIcon } from '@/components/ui/Icons'
import { cn, normalizeAnswer } from '@/lib/utils'
import { playSound } from '@/lib/sounds'

export default function LevelTest() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isPeriodic = searchParams.get('type') === 'periodic'
  const { updateSettings, setOnboarded, settings, addLevelTestResult, resetUnitsSinceTest } = useStore()
  const previousLevel = settings.currentLevel

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [fillAnswer, setFillAnswer] = useState('')
  const [translateAnswer, setTranslateAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const startTimeRef = useRef(Date.now())

  const questions = levelTestQuestions
  const current = questions[currentIndex]!
  const progress = ((currentIndex) / questions.length) * 100

  const checkTranslateAnswer = (userAnswer: string, correctAnswer: string): boolean => {
    const norm = (s: string) => normalizeAnswer(s)
    if (norm(userAnswer) === norm(correctAnswer)) return true
    // 유연한 채점: 핵심 단어 70% 이상 포함 시 정답
    const correctWords = norm(correctAnswer).split(' ')
    const userWords = norm(userAnswer).split(' ')
    const matchCount = correctWords.filter(w => userWords.includes(w)).length
    return matchCount / correctWords.length >= 0.7
  }

  const handleAnswer = (correct: boolean) => {
    setIsCorrect(correct)
    setShowFeedback(true)
    playSound(correct ? 'correct' : 'incorrect')

    setTimeout(() => {
      const newAnswers = [...answers, correct]
      setAnswers(newAnswers)
      setShowFeedback(false)
      setSelectedOption(null)
      setFillAnswer('')
      setTranslateAnswer('')

      if (currentIndex + 1 >= questions.length) {
        // 결과 계산
        const assignedLevel = calculateLevel(newAnswers)
        updateSettings({ currentLevel: assignedLevel })

        if (isPeriodic) {
          // 정기 테스트: 이력 저장 + 카운터 리셋
          const score = newAnswers.filter(Boolean).length
          addLevelTestResult({ oldLevel: previousLevel, newLevel: assignedLevel, score })
          resetUnitsSinceTest()
        } else {
          setOnboarded()
        }

        playSound('levelup')
        setShowResult(true)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 1200)
  }

  const handleChoiceSelect = (option: string) => {
    if (showFeedback) return
    setSelectedOption(option)
    handleAnswer(option === current.answer)
  }

  const handleFillSubmit = () => {
    if (!fillAnswer.trim()) return
    handleAnswer(normalizeAnswer(fillAnswer) === normalizeAnswer(current.answer))
  }

  const handleTranslateSubmit = () => {
    if (!translateAnswer.trim()) return
    handleAnswer(checkTranslateAnswer(translateAnswer, current.answer))
  }

  // 레벨 계산: 연속 정답 기반 + 난이도 가중치
  function calculateLevel(results: boolean[]): number {
    let score = 0
    let streak = 0
    for (let i = 0; i < results.length; i++) {
      const q = questions[i]!
      if (results[i]) {
        score += q.level
        streak++
        if (streak >= 2) score += 1 // 연속 정답 보너스
      } else {
        streak = 0
      }
    }

    // 점수 범위를 레벨로 매핑
    if (score <= 5) return 1
    if (score <= 12) return 2
    if (score <= 20) return 3
    if (score <= 30) return 4
    if (score <= 40) return 5
    if (score <= 52) return 6
    if (score <= 65) return 7
    if (score <= 80) return 8
    if (score <= 95) return 9
    return 10
  }

  // 결과 화면
  if (showResult) {
    const { settings } = useStore.getState()
    const level = settings.currentLevel
    const correctCount = answers.filter(Boolean).length
    const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000)
    const minutes = Math.floor(elapsed / 60)
    const seconds = elapsed % 60

    const levelDiff = level - previousLevel
    const levelChangeText = isPeriodic
      ? levelDiff > 0 ? `Lv.${previousLevel} → Lv.${level} 레벨 업!`
      : levelDiff < 0 ? `Lv.${previousLevel} → Lv.${level} 레벨 조정`
      : `Lv.${level} 유지`
      : null

    return (
      <div className="max-w-lg mx-auto min-h-screen flex flex-col items-center justify-center px-6 animate-slide-up">
        <div className="w-20 h-20 rounded-full bg-fluent-xp/20 flex items-center justify-center mb-6 animate-bounce-sm">
          <TrophyIcon size={40} className="text-fluent-xp" />
        </div>

        <h1 className="text-2xl font-bold mb-2">레벨 테스트 완료!</h1>
        <p className="text-fluent-text-secondary text-center mb-8">
          당신의 영어 실력을 분석했어요
        </p>

        <div className="w-full card mb-6">
          <div className="text-center py-4">
            <p className="text-fluent-text-muted text-xs mb-1">
              {isPeriodic ? '테스트 결과' : '배정된 레벨'}
            </p>
            <p className="text-4xl font-bold text-fluent-teal-400">Lv.{level}</p>
            <p className="text-sm text-fluent-text-secondary mt-1">
              {level <= 2 ? 'A2 기초' : level <= 4 ? 'B1 중급' : level <= 6 ? 'B1+ 중급+' : level <= 8 ? 'B2 상급' : 'C1 고급'}
            </p>
            {levelChangeText && (
              <p className={cn(
                'text-sm font-semibold mt-3',
                levelDiff > 0 ? 'text-fluent-success' : levelDiff < 0 ? 'text-fluent-warning' : 'text-fluent-text-secondary'
              )}>
                {levelDiff > 0 ? '🎉 ' : levelDiff < 0 ? '📉 ' : '✅ '}
                {levelChangeText}
              </p>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-3 mb-8">
          <div className="card text-center py-3">
            <p className="text-xl font-bold">{correctCount}/{questions.length}</p>
            <p className="text-[10px] text-fluent-text-muted mt-0.5">정답</p>
          </div>
          <div className="card text-center py-3">
            <p className="text-xl font-bold">{minutes}:{seconds.toString().padStart(2, '0')}</p>
            <p className="text-[10px] text-fluent-text-muted mt-0.5">소요 시간</p>
          </div>
        </div>

        {isPeriodic && levelDiff < 0 && (
          <div className="w-full card mb-4 bg-fluent-warning/5 border border-fluent-warning/20">
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

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col">
      {/* 상단 */}
      <div className="sticky top-0 bg-fluent-bg-dark/95 backdrop-blur-lg z-40 px-4 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-1">
          <button onClick={() => navigate('/')} className="text-fluent-text-muted p-1">
            <XIcon size={20} />
          </button>
          <ProgressBar value={progress} color="teal" size="sm" className="flex-1" />
          <span className="text-xs text-fluent-text-muted min-w-[2.5rem] text-right">
            {currentIndex + 1}/{questions.length}
          </span>
        </div>
        <p className="text-[10px] text-fluent-text-muted text-center">레벨 테스트</p>
      </div>

      {/* 문제 영역 */}
      <div className="flex-1 px-4 py-6">
        {!showFeedback ? (
          <div key={currentIndex} className="animate-fade-in space-y-6">
            {/* 객관식 */}
            {current.type === 'choice' && (
              <>
                <div>
                  <p className="text-xs text-fluent-teal-400 font-medium mb-2">빈칸에 알맞은 것을 고르세요</p>
                  <p className="text-lg font-semibold leading-relaxed">{current.question}</p>
                </div>
                <div className="space-y-2">
                  {current.options!.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoiceSelect(option)}
                      disabled={selectedOption !== null}
                      className={cn(
                        'w-full text-left card py-3.5 transition-all active:scale-[0.98]',
                        selectedOption === option && option === current.answer && 'border-fluent-success bg-fluent-success/10',
                        selectedOption === option && option !== current.answer && 'border-fluent-error bg-fluent-error/10',
                      )}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* 빈칸 채우기 */}
            {current.type === 'fill' && (
              <>
                <div>
                  <p className="text-xs text-fluent-teal-400 font-medium mb-2">빈칸에 알맞은 단어를 입력하세요</p>
                  <p className="text-lg font-semibold leading-relaxed">{current.question}</p>
                </div>
                <input
                  type="text"
                  value={fillAnswer}
                  onChange={(e) => setFillAnswer(e.target.value)}
                  placeholder="답을 입력하세요"
                  className="input-field text-center text-lg"
                  autoFocus
                  autoComplete="off"
                  autoCapitalize="off"
                  onKeyDown={(e) => { if (e.key === 'Enter') handleFillSubmit() }}
                />
                <button
                  onClick={handleFillSubmit}
                  disabled={!fillAnswer.trim()}
                  className="w-full btn-primary disabled:opacity-40"
                >
                  확인
                </button>
              </>
            )}

            {/* 번역 */}
            {current.type === 'translate' && (
              <>
                <div>
                  <p className="text-xs text-fluent-teal-400 font-medium mb-2">한국어를 영어로 번역하세요</p>
                  <p className="text-lg font-semibold leading-relaxed">{current.question}</p>
                </div>
                <textarea
                  value={translateAnswer}
                  onChange={(e) => setTranslateAnswer(e.target.value)}
                  placeholder="영어로 번역하세요..."
                  className="input-field min-h-[100px] resize-none"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleTranslateSubmit()
                    }
                  }}
                />
                <button
                  onClick={handleTranslateSubmit}
                  disabled={!translateAnswer.trim()}
                  className="w-full btn-primary disabled:opacity-40"
                >
                  확인
                </button>
              </>
            )}
          </div>
        ) : (
          /* 피드백 */
          <div className={cn(
            'animate-slide-up rounded-2xl p-6',
            isCorrect ? 'bg-fluent-success/10' : 'bg-fluent-error/10'
          )}>
            <div className="flex items-center gap-3">
              {isCorrect ? (
                <>
                  <div className="w-10 h-10 rounded-full bg-fluent-success/20 flex items-center justify-center animate-bounce-sm">
                    <CheckIcon size={24} className="text-fluent-success" />
                  </div>
                  <p className="font-bold text-fluent-success">정답!</p>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full bg-fluent-error/20 flex items-center justify-center animate-shake">
                    <XIcon size={24} className="text-fluent-error" />
                  </div>
                  <div>
                    <p className="font-bold text-fluent-error">오답</p>
                    <p className="text-sm text-fluent-text-secondary mt-1">정답: {current.answer}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
