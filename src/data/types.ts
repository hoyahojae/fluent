// 레벨 정의
export interface Level {
  id: number
  level: number // 1~10
  name: string
  description: string
  cefr: string // A1, A2, B1, B2, C1
}

// 테마 정의
export interface Theme {
  id: string
  levelId: number
  name: string
  description: string
  order: number
}

// 유닛 정의
export interface Unit {
  id: string
  themeId: string
  name: string
  description: string
  order: number
}

// 핵심 표현
export interface Expression {
  id: string
  unitId: string
  english: string
  korean: string
  difficulty: number // 1~5
  context?: string
  notes?: string
  isAiGenerated: boolean
}

// 핵심 어휘
export interface Vocabulary {
  id: string
  unitId: string
  word: string
  meaning: string
  partOfSpeech: string
  exampleSentence: string
  exampleTranslation: string
  difficulty?: number
  isAiGenerated: boolean
}

// 학습 활동 타입
export type ActivityType =
  | 'translation'        // 한→영 번역
  | 'comprehension'      // 영→한 이해
  | 'fill-blank'         // 빈칸 채우기
  | 'word-order'         // 어순 배열
  | 'vocab-match'        // 어휘 매칭
  | 'vocab-spelling'     // 어휘 철자
  | 'contextual-writing' // 상황 작문
  | 'dictation'          // 받아쓰기

// 학습 활동
export interface Activity {
  type: ActivityType
  expression?: Expression
  vocabulary?: Vocabulary
  question: string
  answer: string
  options?: string[] // 객관식 선택지
  hint?: string
  isReview?: boolean // 복습 활동 여부
}

// 사용자 진행도
export interface UserProgress {
  unitId: string
  status: 'not_started' | 'in_progress' | 'completed'
  completedAt?: string
}

// 표현/어휘 마스터리
export interface MasteryRecord {
  itemId: string
  itemType: 'expression' | 'vocabulary'
  weaknessScore: number // 0(마스터) ~ 5(매우 약함)
  correctStreak: number
  totalAttempts: number
  correctAttempts: number
  lastAttemptAt: string
}

// 세션 기록
export interface SessionLog {
  id: string
  startedAt: string
  completedAt?: string
  unitId: string
  totalActivities: number
  correctCount: number
  xpEarned: number
}

// 사용자 설정
export interface UserSettings {
  currentLevel: number
  dailyExpressionGoal: number
  dailyVocabGoal: number
  reviewRatio: number // 0~1, 복습 비율
  darkMode: boolean
  reminderTime?: string
}

// 세션 상태
export interface SessionState {
  isActive: boolean
  currentActivityIndex: number
  activities: Activity[]
  results: ActivityResult[]
  unitId: string
}

// 활동 결과
export interface ActivityResult {
  activityIndex: number
  isCorrect: boolean
  userAnswer: string
  timeSpent: number // ms
}
