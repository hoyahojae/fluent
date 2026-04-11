import type { Expression, Vocabulary, MasteryRecord } from '@/data/types'
import { expressions, vocabulary } from '@/data/curriculum'
import { useStore } from '@/stores/useStore'

// 간격 반복 간격 (시간 단위)
// weaknessScore가 높을수록 짧은 간격으로 복습
const REVIEW_INTERVALS: Record<number, number> = {
  0: 168,   // 마스터리: 7일 후
  1: 72,    // 약간 약함: 3일 후
  2: 24,    // 약함: 1일 후
  3: 12,    // 꽤 약함: 12시간 후
  4: 4,     // 매우 약함: 4시간 후
  5: 1,     // 최약: 1시간 후 (즉시 복습)
}

// 레벨별 복습 비율 (세션 내 복습 활동 비중)
const REVIEW_RATIO_BY_LEVEL: Record<number, number> = {
  1: 0.2,   // 낮은 레벨: 복습 20%
  2: 0.2,
  3: 0.25,
  4: 0.25,
  5: 0.3,   // 중급: 복습 30%
  6: 0.3,
  7: 0.35,
  8: 0.35,
  9: 0.4,   // 고급: 복습 40%
  10: 0.4,
}

interface ReviewItem {
  id: string
  type: 'expression' | 'vocabulary'
  mastery: MasteryRecord
  priority: number // 높을수록 우선 복습
}

// 복습이 필요한 항목을 우선순위로 정렬하여 반환
export function getReviewItems(maxCount: number): { expressions: Expression[]; vocabulary: Vocabulary[] } {
  const store = useStore.getState()
  const mastery = store.mastery
  const now = Date.now()

  const reviewItems: ReviewItem[] = []

  for (const [itemId, record] of Object.entries(mastery)) {
    // 복습 간격 계산
    const intervalHours = REVIEW_INTERVALS[record.weaknessScore] ?? 24
    const intervalMs = intervalHours * 60 * 60 * 1000
    const lastAttempt = new Date(record.lastAttemptAt).getTime()
    const timeSince = now - lastAttempt

    // 복습 시간이 되었는지 확인
    if (timeSince >= intervalMs) {
      // 우선순위: weakness 높을수록 + 오래될수록 높음
      const priority =
        record.weaknessScore * 10 +
        Math.min(timeSince / (1000 * 60 * 60), 100) // 최대 100시간 보너스

      reviewItems.push({
        id: itemId,
        type: record.itemType,
        mastery: record,
        priority,
      })
    }
  }

  // 우선순위 내림차순 정렬
  reviewItems.sort((a, b) => b.priority - a.priority)

  // 최대 개수만큼 선택
  const selected = reviewItems.slice(0, maxCount)

  const reviewExprIds = selected.filter(r => r.type === 'expression').map(r => r.id)
  const reviewVocabIds = selected.filter(r => r.type === 'vocabulary').map(r => r.id)

  // 커스텀 콘텐츠 포함
  const customExpressions = store.customExpressions
  const customVocabulary = store.customVocabulary

  const reviewExprs = [
    ...expressions.filter(e => reviewExprIds.includes(e.id)),
    ...customExpressions.filter(e => reviewExprIds.includes(e.id)),
  ]
  const reviewVocab = [
    ...vocabulary.filter(v => reviewVocabIds.includes(v.id)),
    ...customVocabulary.filter(v => reviewVocabIds.includes(v.id)),
  ]

  return { expressions: reviewExprs, vocabulary: reviewVocab }
}

// 현재 레벨에 맞는 복습 항목 개수 계산
export function getReviewCount(level: number, totalSessionSize: number): number {
  const ratio = REVIEW_RATIO_BY_LEVEL[level] ?? 0.3
  return Math.max(1, Math.floor(totalSessionSize * ratio))
}

// 복습 대기 중인 항목 총 개수
export function getPendingReviewCount(): number {
  const mastery = useStore.getState().mastery
  const now = Date.now()
  let count = 0

  for (const record of Object.values(mastery)) {
    const intervalHours = REVIEW_INTERVALS[record.weaknessScore] ?? 24
    const intervalMs = intervalHours * 60 * 60 * 1000
    const lastAttempt = new Date(record.lastAttemptAt).getTime()

    if (now - lastAttempt >= intervalMs) {
      count++
    }
  }

  return count
}
