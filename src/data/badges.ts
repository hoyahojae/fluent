export interface Badge {
  id: string
  name: string
  description: string
  icon: string // emoji
  category: 'learning' | 'streak' | 'mastery' | 'milestone'
  condition: BadgeCondition
}

export type BadgeCondition =
  | { type: 'sessions_completed'; count: number }
  | { type: 'streak_days'; count: number }
  | { type: 'units_completed'; count: number }
  | { type: 'total_xp'; amount: number }
  | { type: 'weak_items_conquered'; count: number }
  | { type: 'perfect_sessions'; count: number }
  | { type: 'level_reached'; level: number }
  | { type: 'vocab_mastered'; count: number }
  | { type: 'expressions_mastered'; count: number }

export const badges: Badge[] = [
  // 학습 마일스톤
  {
    id: 'first-session',
    name: '첫 걸음',
    description: '첫 번째 학습 세션 완료',
    icon: '🎯',
    category: 'learning',
    condition: { type: 'sessions_completed', count: 1 },
  },
  {
    id: 'sessions-10',
    name: '꾸준한 학습자',
    description: '10번째 학습 세션 완료',
    icon: '📚',
    category: 'learning',
    condition: { type: 'sessions_completed', count: 10 },
  },
  {
    id: 'sessions-50',
    name: '학습 마니아',
    description: '50번째 학습 세션 완료',
    icon: '🏅',
    category: 'learning',
    condition: { type: 'sessions_completed', count: 50 },
  },
  {
    id: 'sessions-100',
    name: '영어 전사',
    description: '100번째 학습 세션 완료',
    icon: '⚔️',
    category: 'learning',
    condition: { type: 'sessions_completed', count: 100 },
  },

  // 유닛 완료
  {
    id: 'first-unit',
    name: '유닛 클리어',
    description: '첫 번째 유닛 완료',
    icon: '✅',
    category: 'milestone',
    condition: { type: 'units_completed', count: 1 },
  },
  {
    id: 'units-5',
    name: '다섯 고개',
    description: '5개 유닛 완료',
    icon: '🏔️',
    category: 'milestone',
    condition: { type: 'units_completed', count: 5 },
  },
  {
    id: 'units-10',
    name: '열 번째 정복',
    description: '10개 유닛 완료',
    icon: '🗻',
    category: 'milestone',
    condition: { type: 'units_completed', count: 10 },
  },
  {
    id: 'units-25',
    name: '정복자',
    description: '25개 유닛 완료',
    icon: '👑',
    category: 'milestone',
    condition: { type: 'units_completed', count: 25 },
  },

  // 스트릭
  {
    id: 'streak-3',
    name: '3일 연속',
    description: '3일 연속 학습 달성',
    icon: '🔥',
    category: 'streak',
    condition: { type: 'streak_days', count: 3 },
  },
  {
    id: 'streak-7',
    name: '일주일 불꽃',
    description: '7일 연속 학습 달성',
    icon: '🔥',
    category: 'streak',
    condition: { type: 'streak_days', count: 7 },
  },
  {
    id: 'streak-14',
    name: '2주 챔피언',
    description: '14일 연속 학습 달성',
    icon: '💪',
    category: 'streak',
    condition: { type: 'streak_days', count: 14 },
  },
  {
    id: 'streak-30',
    name: '한 달의 기적',
    description: '30일 연속 학습 달성',
    icon: '🌟',
    category: 'streak',
    condition: { type: 'streak_days', count: 30 },
  },

  // XP 마일스톤
  {
    id: 'xp-100',
    name: 'XP 100 돌파',
    description: '총 100 XP 획득',
    icon: '⭐',
    category: 'milestone',
    condition: { type: 'total_xp', amount: 100 },
  },
  {
    id: 'xp-500',
    name: 'XP 500 돌파',
    description: '총 500 XP 획득',
    icon: '🌟',
    category: 'milestone',
    condition: { type: 'total_xp', amount: 500 },
  },
  {
    id: 'xp-1000',
    name: 'XP 마스터',
    description: '총 1,000 XP 획득',
    icon: '💎',
    category: 'milestone',
    condition: { type: 'total_xp', amount: 1000 },
  },
  {
    id: 'xp-5000',
    name: 'XP 레전드',
    description: '총 5,000 XP 획득',
    icon: '🏆',
    category: 'milestone',
    condition: { type: 'total_xp', amount: 5000 },
  },

  // 마스터리
  {
    id: 'weak-conquered-5',
    name: '약점 극복',
    description: '약점 항목 5개 정복',
    icon: '💪',
    category: 'mastery',
    condition: { type: 'weak_items_conquered', count: 5 },
  },
  {
    id: 'weak-conquered-10',
    name: '약점 사냥꾼',
    description: '약점 항목 10개 정복',
    icon: '🎯',
    category: 'mastery',
    condition: { type: 'weak_items_conquered', count: 10 },
  },
  {
    id: 'perfect-3',
    name: '퍼펙트 세션',
    description: '3번 만점 세션 달성',
    icon: '💯',
    category: 'mastery',
    condition: { type: 'perfect_sessions', count: 3 },
  },
  {
    id: 'vocab-50',
    name: '어휘 수집가',
    description: '50개 어휘 마스터',
    icon: '📖',
    category: 'mastery',
    condition: { type: 'vocab_mastered', count: 50 },
  },
  {
    id: 'expressions-30',
    name: '표현의 달인',
    description: '30개 표현 마스터',
    icon: '🗣️',
    category: 'mastery',
    condition: { type: 'expressions_mastered', count: 30 },
  },

  // 레벨 달성
  {
    id: 'level-3',
    name: '초중급 진입',
    description: 'Lv.3 달성',
    icon: '📗',
    category: 'milestone',
    condition: { type: 'level_reached', level: 3 },
  },
  {
    id: 'level-5',
    name: '중급 돌파',
    description: 'Lv.5 달성',
    icon: '📘',
    category: 'milestone',
    condition: { type: 'level_reached', level: 5 },
  },
  {
    id: 'level-7',
    name: '상급 진입',
    description: 'Lv.7 달성',
    icon: '📕',
    category: 'milestone',
    condition: { type: 'level_reached', level: 7 },
  },
  {
    id: 'level-10',
    name: '최고 레벨',
    description: 'Lv.10 달성 — 네이티브 수준!',
    icon: '🏆',
    category: 'milestone',
    condition: { type: 'level_reached', level: 10 },
  },
]
