import { useSearchParams, useNavigate } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { Header } from '@/components/layout/Header'
import { levels, getThemesForLevel, getUnitsForTheme, getExpressionsForUnit, getVocabularyForUnit } from '@/data/curriculum'
import { ChevronRightIcon, CheckIcon } from '@/components/ui/Icons'
import { EmptyState } from '@/components/ui/EmptyState'
import { cn } from '@/lib/utils'
import { generateSessionActivities } from '@/features/learning/activityGenerator'
import { getReviewItems, getReviewCount } from '@/features/learning/reviewScheduler'

export default function Learn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { settings, unitProgress, startSession } = useStore()
  const unitParam = searchParams.get('unit')

  // 유닛이 지정되면 바로 세션 시작
  if (unitParam) {
    const allExpressions = getExpressionsForUnit(unitParam)
    const allVocab = getVocabularyForUnit(unitParam)

    if (allExpressions.length > 0 || allVocab.length > 0) {
      // 학습량 설정 반영
      const exprLimit = settings.dailyExpressionGoal || 3
      const vocabLimit = settings.dailyVocabGoal || 5
      const newExpressions = allExpressions.slice(0, exprLimit)
      const newVocab = allVocab.slice(0, vocabLimit)

      // 복습 항목 가져오기
      const reviewCount = getReviewCount(settings.currentLevel, 15)
      const { expressions: reviewExprs, vocabulary: reviewVocab } = getReviewItems(reviewCount)

      const activities = generateSessionActivities(newExpressions, newVocab, reviewExprs, reviewVocab, settings.categoryWeakness)
      startSession(unitParam, activities)
      navigate('/session', { replace: true })
      return null
    }
  }

  // 레벨별 유닛 선택 화면
  const currentLevel = levels.find((l) => l.level === settings.currentLevel)
  const themesForLevel = getThemesForLevel(settings.currentLevel)

  return (
    <div className="max-w-lg mx-auto pb-24 animate-fade-in">
      <Header title={`${currentLevel?.name ?? '학습'}`} />

      <div className="px-4 space-y-5 mt-2">
        {themesForLevel.length === 0 && (
          <EmptyState
            icon="book"
            title="학습 콘텐츠 준비 중"
            description="이 레벨의 학습 콘텐츠가 곧 추가될 예정이에요"
          />
        )}
        {themesForLevel.map((theme) => {
          const themeUnits = getUnitsForTheme(theme.id)

          return (
            <div key={theme.id}>
              <div className="mb-3">
                <h2 className="text-base font-semibold">{theme.name}</h2>
                <p className="text-xs text-fluent-text-muted">{theme.description}</p>
              </div>

              <div className="space-y-2">
                {themeUnits.map((unit) => {
                  const status = unitProgress[unit.id] ?? 'not_started'
                  const exprCount = getExpressionsForUnit(unit.id).length
                  const vocabCount = getVocabularyForUnit(unit.id).length

                  return (
                    <button
                      key={unit.id}
                      onClick={() => navigate(`/learn?unit=${unit.id}`)}
                      className={cn(
                        'card w-full text-left flex items-center justify-between gap-3 active:scale-[0.98] transition-transform',
                        status === 'completed' && 'border-fluent-success/30'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {status === 'completed' && (
                            <CheckIcon size={16} className="text-fluent-success flex-shrink-0" />
                          )}
                          <p className="font-medium text-sm truncate">{unit.name}</p>
                        </div>
                        <p className="text-xs text-fluent-text-muted mt-0.5 truncate">{unit.description}</p>
                        <div className="flex gap-2 mt-1.5">
                          <span className="text-[10px] text-fluent-text-muted">표현 {exprCount}</span>
                          <span className="text-[10px] text-fluent-text-muted">어휘 {vocabCount}</span>
                        </div>
                      </div>
                      <ChevronRightIcon size={18} className="text-fluent-text-muted flex-shrink-0" />
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
