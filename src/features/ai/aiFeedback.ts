/**
 * AI 피드백 서비스 (Mock)
 *
 * 실제 Gemini API 연동 시 이 파일의 mock 함수들을 API 호출로 교체하면 됩니다.
 * 현재는 규칙 기반으로 피드백을 생성합니다.
 */

export interface WritingFeedback {
  score: number // 0-100
  isAcceptable: boolean
  grammar: string[]
  naturalness: string[]
  praise: string[]
  suggestedAnswer: string
}

// 간단한 문법 검사 규칙
const grammarRules: { pattern: RegExp; message: string }[] = [
  { pattern: /\bi\b(?!\s)/i, message: "'I'는 항상 대문자로 써야 해요" },
  { pattern: /^[a-z]/, message: "문장은 대문자로 시작해야 해요" },
  { pattern: /[a-zA-Z]$/, message: "문장 끝에 마침표(.)나 물음표(?)를 추가해보세요" },
  { pattern: /\s{2,}/, message: "불필요한 공백이 있어요" },
  { pattern: /dont\b/i, message: "\"don't\"로 축약형을 올바르게 써보세요" },
  { pattern: /cant\b/i, message: "\"can't\"로 축약형을 올바르게 써보세요" },
  { pattern: /wont\b/i, message: "\"won't\"로 축약형을 올바르게 써보세요" },
  { pattern: /im\b/i, message: "\"I'm\"으로 축약형을 올바르게 써보세요" },
  { pattern: /\bhe go\b|\bshe go\b|\bit go\b/i, message: "3인칭 단수에는 \"goes\"를 사용해요" },
  { pattern: /\bhe have\b|\bshe have\b|\bit have\b/i, message: "3인칭 단수에는 \"has\"를 사용해요" },
  { pattern: /\ba [aeiou]/i, message: "모음 앞에는 \"an\"을 사용하는 것이 자연스러워요" },
]

// 자연스러움 체크
const naturalnessTips: { pattern: RegExp; tip: string }[] = [
  { pattern: /\bi am\b/i, tip: "구어체에서는 \"I'm\"이 더 자연스러워요" },
  { pattern: /\bi will\b/i, tip: "구어체에서는 \"I'll\"이 더 자연스러워요" },
  { pattern: /\bdo not\b/i, tip: "구어체에서는 \"don't\"가 더 자연스러워요" },
  { pattern: /\bcan not\b/i, tip: "\"cannot\" 또는 \"can't\"로 써보세요" },
  { pattern: /\bvery good\b/i, tip: "\"great\", \"excellent\", \"wonderful\" 등이 더 다양한 표현이에요" },
  { pattern: /\bvery big\b/i, tip: "\"huge\", \"enormous\" 등이 더 풍부한 표현이에요" },
  { pattern: /\bvery small\b/i, tip: "\"tiny\", \"minute\" 등이 더 풍부한 표현이에요" },
]

// 칭찬 규칙
function generatePraise(userAnswer: string, correctAnswer: string): string[] {
  const praise: string[] = []
  const userWords = userAnswer.toLowerCase().split(/\s+/)
  const correctWords = correctAnswer.toLowerCase().split(/\s+/)

  // 핵심 단어를 잘 사용했는지
  const keyWordsUsed = correctWords.filter(w => w.length > 3 && userWords.includes(w))
  if (keyWordsUsed.length > 0) {
    praise.push(`핵심 표현을 잘 사용했어요!`)
  }

  // 문장이 충분히 긴지
  if (userWords.length >= 5) {
    praise.push('적절한 길이의 문장을 작성했어요')
  }

  // 마침표를 잘 사용했는지
  if (/[.!?]$/.test(userAnswer.trim())) {
    praise.push('문장 부호를 올바르게 사용했어요')
  }

  // 대문자를 잘 시작했는지
  if (/^[A-Z]/.test(userAnswer.trim())) {
    praise.push('대문자 시작이 정확해요')
  }

  if (praise.length === 0) {
    praise.push('영어로 작성하려는 시도 자체가 훌륭해요!')
  }

  return praise.slice(0, 3)
}

// 유사도 계산 (단어 기반)
function wordSimilarity(a: string, b: string): number {
  const wordsA = new Set(a.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean))
  const wordsB = new Set(b.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean))
  const intersection = [...wordsA].filter(w => wordsB.has(w))
  const union = new Set([...wordsA, ...wordsB])
  return union.size > 0 ? intersection.length / union.size : 0
}

/**
 * 사용자의 작문에 대한 AI 피드백을 생성합니다 (Mock)
 */
export async function getWritingFeedback(
  userAnswer: string,
  correctAnswer: string,
  _context?: string
): Promise<WritingFeedback> {
  // 실제 API 호출 시뮬레이션을 위한 딜레이
  await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500))

  const grammar: string[] = []
  const naturalness: string[] = []

  // 문법 검사
  for (const rule of grammarRules) {
    if (rule.pattern.test(userAnswer)) {
      grammar.push(rule.message)
    }
  }

  // 자연스러움 검사
  for (const tip of naturalnessTips) {
    if (tip.pattern.test(userAnswer)) {
      naturalness.push(tip.tip)
    }
  }

  // 칭찬
  const praise = generatePraise(userAnswer, correctAnswer)

  // 점수 계산
  const similarity = wordSimilarity(userAnswer, correctAnswer)
  const grammarPenalty = grammar.length * 10
  const baseScore = Math.round(similarity * 80 + 20) // 20-100 range
  const score = Math.max(10, Math.min(100, baseScore - grammarPenalty))
  const isAcceptable = score >= 50

  return {
    score,
    isAcceptable,
    grammar: grammar.slice(0, 3),
    naturalness: naturalness.slice(0, 2),
    praise,
    suggestedAnswer: correctAnswer,
  }
}
