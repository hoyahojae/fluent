/**
 * AI 콘텐츠 생성 서비스 (Mock)
 *
 * 실제 Gemini API 연동 시 이 파일의 mock 함수들을 API 호출로 교체하면 됩니다.
 * 현재는 레벨/테마에 맞는 템플릿 기반 콘텐츠를 생성합니다.
 */

export interface GeneratedExpression {
  english: string
  korean: string
  context?: string
  difficulty: number
}

export interface GeneratedVocabulary {
  word: string
  meaning: string
  exampleSentence: string
  difficulty: number
}

export interface GeneratedContent {
  expressions: GeneratedExpression[]
  vocabulary: GeneratedVocabulary[]
}

// 레벨별 표현 템플릿
const expressionTemplates: Record<number, GeneratedExpression[]> = {
  1: [
    { english: 'Nice to meet you.', korean: '만나서 반가워요.', context: '처음 만난 사람에게 인사할 때', difficulty: 1 },
    { english: 'How are you doing?', korean: '어떻게 지내세요?', context: '안부를 물을 때', difficulty: 1 },
    { english: 'See you later!', korean: '나중에 봐요!', context: '헤어질 때', difficulty: 1 },
  ],
  2: [
    { english: 'Could you help me with this?', korean: '이것 좀 도와주시겠어요?', context: '도움을 요청할 때', difficulty: 2 },
    { english: 'I\'d like to order, please.', korean: '주문하고 싶습니다.', context: '레스토랑에서', difficulty: 2 },
  ],
  3: [
    { english: 'What do you think about this?', korean: '이것에 대해 어떻게 생각하세요?', context: '의견을 물을 때', difficulty: 3 },
    { english: 'I\'m looking forward to it.', korean: '기대하고 있어요.', context: '앞으로의 일에 대해 말할 때', difficulty: 3 },
  ],
  4: [
    { english: 'It\'s worth considering.', korean: '고려해볼 만해요.', context: '제안에 대해 반응할 때', difficulty: 4 },
    { english: 'Let me get back to you on that.', korean: '그건 나중에 다시 연락드릴게요.', context: '비즈니스 상황에서', difficulty: 4 },
  ],
  5: [
    { english: 'I see where you\'re coming from.', korean: '당신의 관점을 이해합니다.', context: '상대방 의견에 공감할 때', difficulty: 5 },
    { english: 'That\'s a valid point.', korean: '일리 있는 말씀이에요.', context: '토론 중', difficulty: 5 },
  ],
  6: [
    { english: 'I\'d be inclined to agree.', korean: '동의하는 쪽에 가깝습니다.', context: '격식 있는 논의에서', difficulty: 6 },
  ],
  7: [
    { english: 'The implications are far-reaching.', korean: '그 영향은 광범위합니다.', context: '분석적 논의에서', difficulty: 7 },
  ],
  8: [
    { english: 'That remains to be seen.', korean: '그건 두고 봐야 할 일이에요.', context: '불확실성을 표현할 때', difficulty: 8 },
  ],
  9: [
    { english: 'It\'s a double-edged sword.', korean: '양날의 검이에요.', context: '장단점을 동시에 말할 때', difficulty: 9 },
  ],
  10: [
    { english: 'The nuances are often overlooked.', korean: '미묘한 차이들이 종종 간과됩니다.', context: '깊은 분석에서', difficulty: 10 },
  ],
}

// 레벨별 어휘 템플릿
const vocabularyTemplates: Record<number, GeneratedVocabulary[]> = {
  1: [
    { word: 'grateful', meaning: '감사하는', exampleSentence: 'I\'m grateful for your help.', difficulty: 1 },
    { word: 'friendly', meaning: '친근한', exampleSentence: 'She\'s very friendly.', difficulty: 1 },
    { word: 'busy', meaning: '바쁜', exampleSentence: 'I\'m busy right now.', difficulty: 1 },
  ],
  2: [
    { word: 'comfortable', meaning: '편안한', exampleSentence: 'Make yourself comfortable.', difficulty: 2 },
    { word: 'recommend', meaning: '추천하다', exampleSentence: 'I recommend this restaurant.', difficulty: 2 },
  ],
  3: [
    { word: 'opportunity', meaning: '기회', exampleSentence: 'This is a great opportunity.', difficulty: 3 },
    { word: 'experience', meaning: '경험', exampleSentence: 'It was an amazing experience.', difficulty: 3 },
  ],
  4: [
    { word: 'negotiate', meaning: '협상하다', exampleSentence: 'We need to negotiate the terms.', difficulty: 4 },
    { word: 'perspective', meaning: '관점', exampleSentence: 'From my perspective, it makes sense.', difficulty: 4 },
  ],
  5: [
    { word: 'comprehensive', meaning: '종합적인', exampleSentence: 'We need a comprehensive review.', difficulty: 5 },
    { word: 'elaborate', meaning: '정교한; 자세히 설명하다', exampleSentence: 'Could you elaborate on that?', difficulty: 5 },
  ],
  6: [
    { word: 'nuance', meaning: '뉘앙스, 미묘한 차이', exampleSentence: 'There\'s a subtle nuance in meaning.', difficulty: 6 },
  ],
  7: [
    { word: 'paradigm', meaning: '패러다임, 모범', exampleSentence: 'This represents a paradigm shift.', difficulty: 7 },
  ],
  8: [
    { word: 'pragmatic', meaning: '실용적인', exampleSentence: 'We need a pragmatic approach.', difficulty: 8 },
  ],
  9: [
    { word: 'ubiquitous', meaning: '어디에나 있는', exampleSentence: 'Smartphones are ubiquitous now.', difficulty: 9 },
  ],
  10: [
    { word: 'juxtapose', meaning: '나란히 놓다, 대비하다', exampleSentence: 'The report juxtaposes the two approaches.', difficulty: 10 },
  ],
}

/**
 * 레벨과 테마에 맞는 학습 콘텐츠를 AI로 생성합니다 (Mock)
 */
export async function generateContent(
  level: number,
  _themeName?: string,
  expressionCount = 2,
  vocabCount = 3
): Promise<GeneratedContent> {
  // 실제 API 호출 시뮬레이션을 위한 딜레이
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200))

  const lvl = Math.min(Math.max(level, 1), 10)
  const exprPool = expressionTemplates[lvl] ?? expressionTemplates[1]!
  const vocabPool = vocabularyTemplates[lvl] ?? vocabularyTemplates[1]!

  // 가용한 개수만큼 반환
  const expressions = exprPool.slice(0, expressionCount)
  const vocabulary = vocabPool.slice(0, vocabCount)

  return { expressions, vocabulary }
}
