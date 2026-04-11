import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { levels, getThemesForLevel, getUnitsForTheme, getExpressionsForUnit, getVocabularyForUnit } from '@/data/curriculum'
import { getGreeting, formatXp } from '@/lib/utils'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { FireIcon, StarIcon, TrophyIcon, BookIcon } from '@/components/ui/Icons'
import { getPendingReviewCount } from '@/features/learning/reviewScheduler'
import { getEarnedBadges } from '@/features/gamification/badgeChecker'

type Intensity = 'light' | 'normal' | 'hard'

const INTENSITY_CONFIG: Record<Intensity, { label: string; desc: string; expressions: number; vocab: number; maxActivities: number }> = {
  light:  { label: '가볍게', desc: '표현 1 + 어휘 2', expressions: 1, vocab: 2, maxActivities: 8 },
  normal: { label: '보통',   desc: '표현 3 + 어휘 5', expressions: 3, vocab: 5, maxActivities: 15 },
  hard:   { label: '빡세게', desc: '표현 5 + 어휘 8', expressions: 5, vocab: 8, maxActivities: 20 },
}

export default function Home() {
  const navigate = useNavigate()
  const { settings, updateSettings, totalXp, streak, unitProgress, getTodaySessions, unitsSinceLastTest } = useStore()
  const [intensity, setIntensity] = useState<Intensity>('normal')

  const currentLevel = levels.find((l) => l.level === settings.currentLevel)
  const todaySessions = getTodaySessions()
  const todayXp = todaySessions.reduce((sum, s) => sum + s.xpEarned, 0)
  const todayExpressions = todaySessions.reduce((sum, s) => sum + s.correctCount, 0)

  // 현재 레벨 진행도 계산
  const currentThemes = getThemesForLevel(settings.currentLevel)
  const allUnits = currentThemes.flatMap((t) => getUnitsForTheme(t.id))
  const completedUnits = allUnits.filter((u) => unitProgress[u.id] === 'completed').length
  const levelProgress = allUnits.length > 0 ? (completedUnits / allUnits.length) * 100 : 0

  // 복습 대기 항목 수
  const pendingReviews = getPendingReviewCount()

  // 최근 획득 배지
  const recentBadges = getEarnedBadges().slice(0, 3)

  // 다음 학습할 유닛 찾기
  const nextUnit = allUnits.find((u) => unitProgress[u.id] !== 'completed')
  const nextUnitExprCount = nextUnit ? getExpressionsForUnit(nextUnit.id).length : 0
  const nextUnitVocabCount = nextUnit ? getVocabularyForUnit(nextUnit.id).length : 0

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-24 animate-fade-in">
      {/* 인사 & 레벨 */}
      <div className="mb-6">
        <p className="text-fluent-text-secondary text-sm">{getGreeting()}</p>
        <h1 className="text-2xl font-bold mt-1">
          {currentLevel?.name ?? 'Fluent'}
        </h1>
        <p className="text-fluent-text-muted text-xs mt-1">
          {currentLevel?.cefr} · {currentLevel?.description}
        </p>
      </div>

      {/* 오늘의 통계 카드 */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="card flex flex-col items-center py-4">
          <FireIcon size={20} className="text-orange-400 mb-1" />
          <span className="text-xl font-bold">{streak}</span>
          <span className="text-[10px] text-fluent-text-muted mt-0.5">연속 학습</span>
        </div>
        <div className="card flex flex-col items-center py-4">
          <StarIcon size={20} className="text-fluent-xp mb-1" />
          <span className="text-xl font-bold">{formatXp(totalXp)}</span>
          <span className="text-[10px] text-fluent-text-muted mt-0.5">총 XP</span>
        </div>
        <div className="card flex flex-col items-center py-4">
          <BookIcon size={20} className="text-fluent-teal-400 mb-1" />
          <span className="text-xl font-bold">{todayExpressions}</span>
          <span className="text-[10px] text-fluent-text-muted mt-0.5">오늘 학습</span>
        </div>
      </div>

      {/* 복습 대기 알림 */}
      {pendingReviews > 0 && (
        <div className="card mb-4 border border-fluent-warning/20 bg-fluent-warning/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-fluent-warning">복습 대기</p>
              <p className="text-xs text-fluent-text-muted mt-0.5">
                {pendingReviews}개 항목이 복습을 기다리고 있어요
              </p>
            </div>
            <span className="text-lg font-bold text-fluent-warning">{pendingReviews}</span>
          </div>
        </div>
      )}

      {/* 정기 레벨 테스트 제안 */}
      {unitsSinceLastTest >= 5 && (
        <div className="card mb-4 border border-fluent-teal-400/20 bg-fluent-teal-400/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-fluent-teal-300">레벨 테스트 추천</p>
              <p className="text-xs text-fluent-text-muted mt-0.5">
                {unitsSinceLastTest}개 유닛 완료! 실력을 확인해보세요
              </p>
            </div>
            <button
              onClick={() => navigate('/level-test?type=periodic')}
              className="bg-fluent-teal-400 text-white text-xs font-medium px-3 py-1.5 rounded-lg"
            >
              테스트
            </button>
          </div>
        </div>
      )}

      {/* 오늘의 XP */}
      <div className="card mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">오늘의 XP</span>
          <span className="text-sm text-fluent-xp font-semibold">+{todayXp} XP</span>
        </div>
        <ProgressBar
          value={(todayXp / 100) * 100}
          color="xp"
          size="sm"
        />
        <p className="text-[10px] text-fluent-text-muted mt-1.5">일일 목표: 100 XP</p>
      </div>

      {/* 레벨 진행도 */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">{currentLevel?.name} 진행도</span>
          <span className="text-xs text-fluent-text-secondary">{completedUnits}/{allUnits.length} 유닛</span>
        </div>
        <ProgressBar value={levelProgress} color="teal" size="md" />
      </div>

      {/* 학습 강도 선택 */}
      {nextUnit && (
        <div className="card mb-4">
          <p className="text-xs text-fluent-text-muted mb-2">오늘의 학습 강도</p>
          <div className="flex gap-2">
            {(Object.entries(INTENSITY_CONFIG) as [Intensity, typeof INTENSITY_CONFIG[Intensity]][]).map(([key, config]) => (
              <button
                key={key}
                onClick={() => {
                  setIntensity(key)
                  updateSettings({ dailyExpressionGoal: config.expressions, dailyVocabGoal: config.vocab })
                }}
                className={`flex-1 py-2.5 rounded-xl text-center transition-all ${
                  intensity === key
                    ? 'bg-fluent-teal-400 text-white'
                    : 'bg-fluent-navy-700 text-fluent-text-secondary'
                }`}
              >
                <p className="text-sm font-medium">{config.label}</p>
                <p className={`text-[10px] mt-0.5 ${intensity === key ? 'text-white/70' : 'text-fluent-text-muted'}`}>
                  {config.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 학습 시작 CTA */}
      {nextUnit ? (
        <button
          onClick={() => navigate(`/learn?unit=${nextUnit.id}&intensity=${intensity}`)}
          className="w-full btn-primary text-lg py-4 mb-4 flex items-center justify-center gap-3 shadow-lg shadow-fluent-teal-400/20"
        >
          <BookIcon size={22} />
          학습 시작
        </button>
      ) : (
        <div className="card text-center py-6 mb-4">
          <TrophyIcon size={32} className="text-fluent-xp mx-auto mb-2" />
          <p className="font-semibold">레벨 완료!</p>
          <p className="text-sm text-fluent-text-secondary mt-1">모든 유닛을 완료했습니다</p>
        </div>
      )}

      {/* 최근 업적 */}
      {recentBadges.length > 0 && (
        <div className="card mb-4">
          <p className="text-xs text-fluent-text-muted mb-2">최근 업적</p>
          <div className="flex gap-3">
            {recentBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-1.5">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-xs font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 다음 유닛 미리보기 */}
      {nextUnit && (
        <div className="card">
          <p className="text-xs text-fluent-text-muted mb-1">다음 학습</p>
          <p className="font-semibold">{nextUnit.name}</p>
          <p className="text-sm text-fluent-text-secondary mt-1">{nextUnit.description}</p>
          <div className="flex gap-3 mt-3">
            <span className="chip-pending">표현 {nextUnitExprCount}개</span>
            <span className="chip-pending">어휘 {nextUnitVocabCount}개</span>
          </div>
        </div>
      )}

      {/* 디버그 모드 진입 */}
      <button
        onClick={() => navigate('/debug')}
        className="w-full mt-4 py-3 rounded-xl text-xs text-fluent-text-muted bg-fluent-navy-800/50 border border-fluent-navy-700/30"
      >
        🛠 디버그 모드
      </button>
    </div>
  )
}
