import { badges } from '@/data/badges'
import type { Badge } from '@/data/badges'
import { useStore } from '@/stores/useStore'

// 새로 달성한 배지를 확인하고 반환
export function checkAndAwardBadges(): Badge[] {
  const store = useStore.getState()
  const {
    sessionLogs,
    streak,
    totalXp,
    unitProgress,
    mastery,
    earnedBadges,
    earnBadge,
    perfectSessions,
    settings,
  } = store

  const newlyEarned: Badge[] = []

  for (const badge of badges) {
    // 이미 획득한 배지는 스킵
    if (earnedBadges[badge.id]) continue

    let earned = false
    const cond = badge.condition

    switch (cond.type) {
      case 'sessions_completed':
        earned = sessionLogs.length >= cond.count
        break

      case 'streak_days':
        earned = streak >= cond.count
        break

      case 'units_completed': {
        const completedCount = Object.values(unitProgress).filter(s => s === 'completed').length
        earned = completedCount >= cond.count
        break
      }

      case 'total_xp':
        earned = totalXp >= cond.amount
        break

      case 'weak_items_conquered': {
        // weakness가 0이 되었고, totalAttempts > 1인 항목 (한번이라도 틀렸다가 극복)
        const conquered = Object.values(mastery).filter(
          m => m.weaknessScore === 0 && m.totalAttempts > m.correctAttempts
        ).length
        earned = conquered >= cond.count
        break
      }

      case 'perfect_sessions':
        earned = perfectSessions >= cond.count
        break

      case 'level_reached':
        earned = settings.currentLevel >= cond.level
        break

      case 'vocab_mastered': {
        const masteredVocab = Object.values(mastery).filter(
          m => m.itemType === 'vocabulary' && m.weaknessScore === 0 && m.correctStreak >= 2
        ).length
        earned = masteredVocab >= cond.count
        break
      }

      case 'expressions_mastered': {
        const masteredExpr = Object.values(mastery).filter(
          m => m.itemType === 'expression' && m.weaknessScore === 0 && m.correctStreak >= 2
        ).length
        earned = masteredExpr >= cond.count
        break
      }
    }

    if (earned) {
      earnBadge(badge.id)
      newlyEarned.push(badge)
    }
  }

  return newlyEarned
}

// 획득한 배지 목록 반환
export function getEarnedBadges(): (Badge & { earnedAt: string })[] {
  const { earnedBadges } = useStore.getState()
  return badges
    .filter(b => earnedBadges[b.id])
    .map(b => ({ ...b, earnedAt: earnedBadges[b.id]! }))
    .sort((a, b) => new Date(b.earnedAt).getTime() - new Date(a.earnedAt).getTime())
}
