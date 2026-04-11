import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { MasteryRecord, SessionLog, UserSettings, SessionState, ActivityResult, Activity, Expression, Vocabulary } from '@/data/types'

interface FluentStore {
  // 사용자 커스텀 콘텐츠
  customExpressions: Expression[]
  customVocabulary: Vocabulary[]
  addExpression: (expr: Expression) => void
  updateExpression: (id: string, updates: Partial<Expression>) => void
  deleteExpression: (id: string) => void
  addVocabulary: (vocab: Vocabulary) => void
  updateVocabulary: (id: string, updates: Partial<Vocabulary>) => void
  deleteVocabulary: (id: string) => void

  // 사용자 설정
  settings: UserSettings
  updateSettings: (updates: Partial<UserSettings>) => void

  // 마스터리 추적
  mastery: Record<string, MasteryRecord>
  updateMastery: (itemId: string, isCorrect: boolean, itemType: 'expression' | 'vocabulary') => void
  getMastery: (itemId: string) => MasteryRecord | undefined
  getWeakItems: () => MasteryRecord[]

  // 세션 기록
  sessionLogs: SessionLog[]
  addSessionLog: (log: SessionLog) => void
  getTodaySessions: () => SessionLog[]

  // 현재 세션 상태
  session: SessionState
  startSession: (unitId: string, activities: Activity[]) => void
  submitAnswer: (result: ActivityResult) => void
  nextActivity: () => void
  endSession: () => void

  // 유닛 진행도
  unitProgress: Record<string, 'not_started' | 'in_progress' | 'completed'>
  setUnitProgress: (unitId: string, status: 'not_started' | 'in_progress' | 'completed') => void

  // XP & 스트릭
  totalXp: number
  addXp: (amount: number) => void
  streak: number
  lastStudyDate: string | null
  updateStreak: () => void

  // 배지/업적
  earnedBadges: Record<string, string> // badgeId → earnedAt ISO string
  earnBadge: (badgeId: string) => void
  perfectSessions: number // 만점 세션 횟수
  incrementPerfectSessions: () => void

  // 레벨 테스트 이력
  levelTestHistory: { date: string; oldLevel: number; newLevel: number; score: number }[]
  addLevelTestResult: (result: { oldLevel: number; newLevel: number; score: number }) => void
  unitsSinceLastTest: number // 마지막 테스트 이후 완료한 유닛 수
  incrementUnitsSinceTest: () => void
  resetUnitsSinceTest: () => void

  // 온보딩
  isOnboarded: boolean
  setOnboarded: () => void
}

const today = () => new Date().toISOString().split('T')[0]!

export const useStore = create<FluentStore>()(
  persist(
    (set, get) => ({
      // 사용자 커스텀 콘텐츠
      customExpressions: [],
      customVocabulary: [],
      addExpression: (expr) =>
        set((state) => ({ customExpressions: [...state.customExpressions, expr] })),
      updateExpression: (id, updates) =>
        set((state) => ({
          customExpressions: state.customExpressions.map((e) =>
            e.id === id ? { ...e, ...updates } : e
          ),
        })),
      deleteExpression: (id) =>
        set((state) => ({
          customExpressions: state.customExpressions.filter((e) => e.id !== id),
        })),
      addVocabulary: (vocab) =>
        set((state) => ({ customVocabulary: [...state.customVocabulary, vocab] })),
      updateVocabulary: (id, updates) =>
        set((state) => ({
          customVocabulary: state.customVocabulary.map((v) =>
            v.id === id ? { ...v, ...updates } : v
          ),
        })),
      deleteVocabulary: (id) =>
        set((state) => ({
          customVocabulary: state.customVocabulary.filter((v) => v.id !== id),
        })),

      // 사용자 설정
      settings: {
        currentLevel: 1,
        dailyExpressionGoal: 3,
        dailyVocabGoal: 5,
        reviewRatio: 0.3,
        darkMode: true,
      },
      updateSettings: (updates) =>
        set((state) => ({ settings: { ...state.settings, ...updates } })),

      // 마스터리 추적
      mastery: {},
      updateMastery: (itemId, isCorrect, itemType) =>
        set((state) => {
          const existing = state.mastery[itemId]
          const now = new Date().toISOString()

          if (!existing) {
            return {
              mastery: {
                ...state.mastery,
                [itemId]: {
                  itemId,
                  itemType,
                  weaknessScore: isCorrect ? 0 : 2,
                  correctStreak: isCorrect ? 1 : 0,
                  totalAttempts: 1,
                  correctAttempts: isCorrect ? 1 : 0,
                  lastAttemptAt: now,
                },
              },
            }
          }

          let newWeakness = existing.weaknessScore
          let newStreak = existing.correctStreak

          if (isCorrect) {
            newStreak += 1
            // 연속 정답 시 약점 점수 감소
            if (newStreak >= 2) {
              newWeakness = Math.max(0, newWeakness - 1)
            }
          } else {
            newStreak = 0
            // 오답 시 약점 점수 증가
            newWeakness = Math.min(5, newWeakness + 1)
          }

          return {
            mastery: {
              ...state.mastery,
              [itemId]: {
                ...existing,
                weaknessScore: newWeakness,
                correctStreak: newStreak,
                totalAttempts: existing.totalAttempts + 1,
                correctAttempts: existing.correctAttempts + (isCorrect ? 1 : 0),
                lastAttemptAt: now,
              },
            },
          }
        }),
      getMastery: (itemId) => get().mastery[itemId],
      getWeakItems: () =>
        Object.values(get().mastery)
          .filter((m) => m.weaknessScore > 0)
          .sort((a, b) => b.weaknessScore - a.weaknessScore),

      // 세션 기록
      sessionLogs: [],
      addSessionLog: (log) =>
        set((state) => ({ sessionLogs: [...state.sessionLogs, log] })),
      getTodaySessions: () => {
        const todayStr = today()
        return get().sessionLogs.filter((s) => s.startedAt.startsWith(todayStr))
      },

      // 현재 세션 상태
      session: {
        isActive: false,
        currentActivityIndex: 0,
        activities: [],
        results: [],
        unitId: '',
      },
      startSession: (unitId, activities) =>
        set({
          session: {
            isActive: true,
            currentActivityIndex: 0,
            activities,
            results: [],
            unitId,
          },
        }),
      submitAnswer: (result) =>
        set((state) => ({
          session: {
            ...state.session,
            results: [...state.session.results, result],
          },
        })),
      nextActivity: () =>
        set((state) => ({
          session: {
            ...state.session,
            currentActivityIndex: state.session.currentActivityIndex + 1,
          },
        })),
      endSession: () => {
        const { session, addSessionLog, addXp, updateStreak } = get()
        const correctCount = session.results.filter((r) => r.isCorrect).length
        const xpEarned = correctCount * 10 + session.results.length * 2

        addSessionLog({
          id: crypto.randomUUID(),
          startedAt: new Date().toISOString(),
          completedAt: new Date().toISOString(),
          unitId: session.unitId,
          totalActivities: session.activities.length,
          correctCount,
          xpEarned,
        })

        addXp(xpEarned)
        updateStreak()

        set({
          session: {
            isActive: false,
            currentActivityIndex: 0,
            activities: [],
            results: [],
            unitId: '',
          },
        })
      },

      // 유닛 진행도
      unitProgress: {},
      setUnitProgress: (unitId, status) =>
        set((state) => ({
          unitProgress: { ...state.unitProgress, [unitId]: status },
        })),

      // XP & 스트릭
      totalXp: 0,
      addXp: (amount) => set((state) => ({ totalXp: state.totalXp + amount })),
      streak: 0,
      lastStudyDate: null,
      updateStreak: () =>
        set((state) => {
          const todayStr = today()
          if (state.lastStudyDate === todayStr) return {}

          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          const yesterdayStr = yesterday.toISOString().split('T')[0]

          const newStreak =
            state.lastStudyDate === yesterdayStr ? state.streak + 1 : 1

          return { streak: newStreak, lastStudyDate: todayStr }
        }),

      // 배지/업적
      earnedBadges: {},
      earnBadge: (badgeId) =>
        set((state) => {
          if (state.earnedBadges[badgeId]) return {} // 이미 획득
          return {
            earnedBadges: {
              ...state.earnedBadges,
              [badgeId]: new Date().toISOString(),
            },
          }
        }),
      perfectSessions: 0,
      incrementPerfectSessions: () =>
        set((state) => ({ perfectSessions: state.perfectSessions + 1 })),

      // 레벨 테스트 이력
      levelTestHistory: [],
      addLevelTestResult: (result) =>
        set((state) => ({
          levelTestHistory: [
            ...state.levelTestHistory,
            { ...result, date: new Date().toISOString() },
          ],
        })),
      unitsSinceLastTest: 0,
      incrementUnitsSinceTest: () =>
        set((state) => ({ unitsSinceLastTest: state.unitsSinceLastTest + 1 })),
      resetUnitsSinceTest: () => set({ unitsSinceLastTest: 0 }),

      // 온보딩
      isOnboarded: false,
      setOnboarded: () => set({ isOnboarded: true }),
    }),
    {
      name: 'fluent-storage',
    },
  ),
)
