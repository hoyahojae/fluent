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
  | 'preview'            // 오늘 배울 표현 미리보기
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
  expressions?: Expression[] // 미리보기용 여러 표현
  question: string
  answer: string
  options?: string[] // 객관식 선택지
  hint?: string
  hints?: string[] // 3단계 점진적 힌트
  explanation?: string // 문제 해설
  isReview?: boolean // 복습 활동 여부
  section?: 'preview' | 'vocabulary' | 'practice' | 'test' // 학습 단계
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

// 테마 모드
export type ThemeMode = 'auto' | 'light' | 'dark'

// 영역별 약점 정보 (레벨테스트 결과)
export interface CategoryWeakness {
  vocabulary: number // 0~1 정답률
  reading: number
  grammar: number
}

// 사용자 설정
export interface UserSettings {
  currentLevel: number
  dailyExpressionGoal: number
  dailyVocabGoal: number
  reviewRatio: number // 0~1, 복습 비율
  themeMode: ThemeMode
  reminderTime?: string
  categoryWeakness?: CategoryWeakness // 레벨테스트에서 파악된 약점
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
  hintLevel?: number // 0=힌트없음, 1~3=사용한 힌트 단계
}
