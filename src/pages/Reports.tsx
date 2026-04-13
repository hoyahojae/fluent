import { useState, useMemo } from 'react'
import { Header } from '@/components/layout/Header'
import { useStore } from '@/stores/useStore'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { FireIcon, StarIcon, TrophyIcon, ChartIcon } from '@/components/ui/Icons'
import { formatXp } from '@/lib/utils'
import { badges } from '@/data/badges'
import { EmptyState } from '@/components/ui/EmptyState'

type Period = 'week' | 'month' | 'all'

export default function Reports() {
  const { totalXp, streak, sessionLogs, mastery, earnedBadges, levelTestHistory, settings } = useStore()
  const [period, setPeriod] = useState<Period>('week')

  // 기간별 세션 필터
  const filteredSessions = useMemo(() => {
    if (period === 'all') return sessionLogs
    const cutoff = new Date()
    if (period === 'week') cutoff.setDate(cutoff.getDate() - 7)
    else cutoff.setMonth(cutoff.getMonth() - 1)
    return sessionLogs.filter(s => new Date(s.startedAt) >= cutoff)
  }, [sessionLogs, period])

  const totalSessions = sessionLogs.length
  const totalCorrect = sessionLogs.reduce((s, l) => s + l.correctCount, 0)
  const totalActivities = sessionLogs.reduce((s, l) => s + l.totalActivities, 0)
  const accuracy = totalActivities > 0 ? Math.round((totalCorrect / totalActivities) * 100) : 0

  // 기간별 통계
  const periodSessions = filteredSessions.length
  const periodXp = filteredSessions.reduce((s, l) => s + l.xpEarned, 0)
  const periodCorrect = filteredSessions.reduce((s, l) => s + l.correctCount, 0)
  const periodTotal = filteredSessions.reduce((s, l) => s + l.totalActivities, 0)
  const periodAccuracy = periodTotal > 0 ? Math.round((periodCorrect / periodTotal) * 100) : 0

  // 일별 학습량 차트 데이터 (최근 7일 또는 30일)
  const chartDays = period === 'month' ? 30 : 7
  const dailyData = useMemo(() => {
    const days: { date: string; label: string; sessions: number; xp: number }[] = []
    for (let i = chartDays - 1; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().split('T')[0]!
      const daySessions = sessionLogs.filter(s => s.startedAt.startsWith(dateStr))
      days.push({
        date: dateStr,
        label: d.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' }),
        sessions: daySessions.length,
        xp: daySessions.reduce((s, l) => s + l.xpEarned, 0),
      })
    }
    return days
  }, [sessionLogs, chartDays])

  const maxXp = Math.max(...dailyData.map(d => d.xp), 1)

  // 마스터리 통계
  const masteryEntries = Object.values(mastery)
  const masteredCount = masteryEntries.filter(m => m.weaknessScore === 0 && m.totalAttempts >= 2).length
  const weakCount = masteryEntries.filter(m => m.weaknessScore >= 3).length

  // 영역별 분석 (expression vs vocabulary)
  const exprMastery = masteryEntries.filter(m => m.itemType === 'expression')
  const vocabMastery = masteryEntries.filter(m => m.itemType === 'vocabulary')
  const exprAccuracy = exprMastery.length > 0
    ? Math.round(exprMastery.reduce((s, m) => s + (m.correctAttempts / Math.max(m.totalAttempts, 1)), 0) / exprMastery.length * 100)
    : 0
  const vocabAccuracy = vocabMastery.length > 0
    ? Math.round(vocabMastery.reduce((s, m) => s + (m.correctAttempts / Math.max(m.totalAttempts, 1)), 0) / vocabMastery.length * 100)
    : 0

  // 복습 효과: 약점 풀 진입 후 극복된 비율
  const enteredWeakPool = masteryEntries.filter(m => m.totalAttempts > m.correctAttempts).length
  const conqueredFromPool = masteryEntries.filter(
    m => m.weaknessScore === 0 && m.totalAttempts > m.correctAttempts
  ).length
  const reviewEffectiveness = enteredWeakPool > 0
    ? Math.round((conqueredFromPool / enteredWeakPool) * 100)
    : 0

  if (sessionLogs.length === 0) {
    return (
      <div className="max-w-lg mx-auto pb-24 animate-fade-in">
        <Header title="리포트" />
        <EmptyState
          icon="chart"
          title="아직 학습 데이터가 없어요"
          description="첫 번째 학습을 완료하면 여기서 진행 상황을 확인할 수 있어요"
        />
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto pb-24 animate-fade-in">
      <Header title="리포트" />

      <div className="px-4 mt-2 space-y-4">
        {/* 요약 카드 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="card flex flex-col items-center py-5">
            <StarIcon size={24} className="text-fluent-xp mb-2" />
            <span className="text-2xl font-bold">{formatXp(totalXp)}</span>
            <span className="text-xs text-fluent-text-muted mt-1">총 XP</span>
          </div>
          <div className="card flex flex-col items-center py-5">
            <FireIcon size={24} className="text-orange-400 mb-2" />
            <span className="text-2xl font-bold">{streak}</span>
            <span className="text-xs text-fluent-text-muted mt-1">연속 학습일</span>
          </div>
          <div className="card flex flex-col items-center py-5">
            <ChartIcon size={24} className="text-fluent-teal-400 mb-2" />
            <span className="text-2xl font-bold">{totalSessions}</span>
            <span className="text-xs text-fluent-text-muted mt-1">총 세션</span>
          </div>
          <div className="card flex flex-col items-center py-5">
            <TrophyIcon size={24} className="text-fluent-success mb-2" />
            <span className="text-2xl font-bold">{accuracy}%</span>
            <span className="text-xs text-fluent-text-muted mt-1">정답률</span>
          </div>
        </div>

        {/* 기간 선택 + 학습량 차트 */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">학습량 추이</h3>
            <div className="flex gap-1">
              {(['week', 'month', 'all'] as Period[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg transition-colors ${
                    period === p
                      ? 'bg-fluent-teal-400 text-white'
                      : 'bg-fluent-navy-700 text-fluent-text-muted'
                  }`}
                >
                  {p === 'week' ? '7일' : p === 'month' ? '30일' : '전체'}
                </button>
              ))}
            </div>
          </div>

          {/* 기간 통계 요약 */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <span className="text-lg font-bold">{periodSessions}</span>
              <p className="text-[10px] text-fluent-text-muted">세션</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold text-fluent-xp">+{periodXp}</span>
              <p className="text-[10px] text-fluent-text-muted">XP</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold">{periodAccuracy}%</span>
              <p className="text-[10px] text-fluent-text-muted">정답률</p>
            </div>
          </div>

          {/* 바 차트 */}
          {period !== 'all' && (
            <div className="flex items-end gap-1 h-24">
              {dailyData.map((day) => (
                <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col justify-end h-16">
                    <div
                      className="w-full bg-fluent-teal-400/70 rounded-t transition-all"
                      style={{ height: `${Math.max((day.xp / maxXp) * 100, day.xp > 0 ? 8 : 0)}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-fluent-text-muted">
                    {chartDays <= 7 ? day.label : ''}
                  </span>
                </div>
              ))}
            </div>
          )}
          {period !== 'all' && chartDays <= 7 && (
            <p className="text-[10px] text-fluent-text-muted text-center mt-1">일별 XP</p>
          )}
        </div>

        {/* 영역별 분석 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">영역별 분석</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>표현 (읽기/쓰기)</span>
                <span className="text-fluent-text-secondary">{exprAccuracy}%</span>
              </div>
              <ProgressBar value={exprAccuracy} color="teal" size="sm" />
              <p className="text-[10px] text-fluent-text-muted mt-0.5">
                {exprMastery.length}개 항목 학습
              </p>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>어휘</span>
                <span className="text-fluent-text-secondary">{vocabAccuracy}%</span>
              </div>
              <ProgressBar value={vocabAccuracy} color="teal" size="sm" />
              <p className="text-[10px] text-fluent-text-muted mt-0.5">
                {vocabMastery.length}개 항목 학습
              </p>
            </div>
          </div>
        </div>

        {/* 레벨테스트 약점 분석 */}
        {settings.categoryWeakness && (
          <div className="card">
            <h3 className="font-semibold text-sm mb-3">레벨테스트 약점 분석</h3>
            <p className="text-[10px] text-fluent-text-muted mb-3">최근 레벨테스트 결과 기반 · 약한 영역에 학습 활동이 더 배분됩니다</p>
            <div className="space-y-3">
              {([
                { key: 'vocabulary' as const, label: '어휘', icon: '📝' },
                { key: 'reading' as const, label: '독해', icon: '📖' },
                { key: 'grammar' as const, label: '문법', icon: '✏️' },
              ]).map(({ key, label, icon }) => {
                const ratio = settings.categoryWeakness![key]
                const pct = Math.round(ratio * 100)
                return (
                  <div key={key}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{icon} {label}</span>
                      <span className={pct >= 70 ? 'text-fluent-success' : pct >= 40 ? 'text-fluent-warning' : 'text-fluent-error'}>
                        {pct}%
                        {pct < 50 && ' — 집중 강화 중'}
                      </span>
                    </div>
                    <ProgressBar
                      value={pct}
                      color={pct >= 70 ? 'success' : pct >= 40 ? 'warning' : 'error'}
                      size="sm"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 마스터리 현황 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">학습 마스터리</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-fluent-success">마스터</span>
                <span className="text-fluent-text-secondary">{masteredCount}개</span>
              </div>
              <ProgressBar
                value={masteryEntries.length > 0 ? (masteredCount / masteryEntries.length) * 100 : 0}
                color="success"
                size="sm"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-fluent-error">취약</span>
                <span className="text-fluent-text-secondary">{weakCount}개</span>
              </div>
              <ProgressBar
                value={masteryEntries.length > 0 ? (weakCount / masteryEntries.length) * 100 : 0}
                color="error"
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* 복습 효과 분석 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">복습 효과</h3>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" className="text-fluent-navy-700" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15" fill="none" stroke="currentColor"
                  className="text-fluent-teal-400"
                  strokeWidth="3"
                  strokeDasharray={`${reviewEffectiveness * 0.94} 94`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                {reviewEffectiveness}%
              </span>
            </div>
            <div>
              <p className="text-xs text-fluent-text-secondary">약점 풀 진입 후 극복</p>
              <p className="text-[10px] text-fluent-text-muted mt-1">
                {conqueredFromPool}/{enteredWeakPool}개 항목 정복
              </p>
            </div>
          </div>
        </div>

        {/* Top 10 약점 항목 */}
        {masteryEntries.filter(m => m.weaknessScore > 0).length > 0 && (
          <div className="card">
            <h3 className="font-semibold text-sm mb-3">약점 항목 TOP 10</h3>
            <div className="space-y-2">
              {masteryEntries
                .filter(m => m.weaknessScore > 0)
                .sort((a, b) => b.weaknessScore - a.weaknessScore)
                .slice(0, 10)
                .map((m, i) => (
                  <div key={m.itemId} className="flex items-center justify-between py-1.5 border-b border-fluent-navy-700/50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-fluent-text-muted w-4">{i + 1}</span>
                      <div>
                        <p className="text-xs font-medium truncate max-w-[200px]">{m.itemId}</p>
                        <p className="text-[10px] text-fluent-text-muted">
                          {m.correctAttempts}/{m.totalAttempts} 정답 · 연속 {m.correctStreak}회
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div
                          key={j}
                          className={`w-2 h-2 rounded-full ${j < m.weaknessScore ? 'bg-fluent-error' : 'bg-fluent-navy-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* 레벨 변경 이력 */}
        {levelTestHistory.length > 0 && (
          <div className="card">
            <h3 className="font-semibold text-sm mb-3">레벨 변경 이력</h3>
            <div className="space-y-2">
              {[...levelTestHistory].reverse().map((entry, i) => {
                const diff = entry.newLevel - entry.oldLevel
                return (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-fluent-navy-700/50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${diff > 0 ? 'text-fluent-success' : diff < 0 ? 'text-fluent-warning' : 'text-fluent-text-secondary'}`}>
                        {diff > 0 ? '↑' : diff < 0 ? '↓' : '→'}
                      </span>
                      <div>
                        <p className="text-xs font-medium">
                          Lv.{entry.oldLevel} → Lv.{entry.newLevel}
                          {diff > 0 ? ' 레벨 업' : diff < 0 ? ' 레벨 다운' : ' 유지'}
                        </p>
                        <p className="text-[10px] text-fluent-text-muted">
                          {new Date(entry.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}
                          {' · '}{entry.score}점
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 배지 컬렉션 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">
            업적 ({Object.keys(earnedBadges).length}/{badges.length})
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {badges.map((badge) => {
              const earned = !!earnedBadges[badge.id]
              return (
                <div
                  key={badge.id}
                  className={`flex flex-col items-center py-3 rounded-xl transition-all ${
                    earned ? 'bg-fluent-navy-700' : 'bg-fluent-navy-800 opacity-40'
                  }`}
                >
                  <span className={`text-2xl ${earned ? '' : 'grayscale'}`}>{badge.icon}</span>
                  <span className="text-[10px] text-center mt-1.5 leading-tight px-1">
                    {badge.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* 최근 세션 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">최근 학습 기록</h3>
          {sessionLogs.length === 0 ? (
            <p className="text-sm text-fluent-text-muted text-center py-4">아직 학습 기록이 없어요</p>
          ) : (
            <div className="space-y-2">
              {sessionLogs.slice(-5).reverse().map((log) => (
                <div key={log.id} className="flex items-center justify-between py-2 border-b border-fluent-navy-700/50 last:border-0">
                  <div>
                    <p className="text-xs text-fluent-text-secondary">
                      {new Date(log.startedAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <p className="text-xs text-fluent-text-muted">
                      {log.correctCount}/{log.totalActivities} 정답
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-fluent-xp">+{log.xpEarned} XP</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
