import type { Expression, Vocabulary, Activity, ActivityType, CategoryWeakness } from '@/data/types'
import { shuffleArray } from '@/lib/utils'
import { expressions as allExpressions } from '@/data/curriculum'

// --- 해설 생성 ---

function generateTranslationExplanation(expr: Expression): string | undefined {
  const words = expr.english.split(' ')
  if (words.length <= 2) return undefined

  const parts: string[] = []

  // 핵심 구문 패턴 분석
  if (/^(I|you|we|they|he|she|it)\s/i.test(expr.english)) {
    parts.push(`"${words[0]}"로 시작하는 ${words.length}단어 문장입니다`)
  }
  if (/\b(have to|has to|need to|want to|going to)\b/i.test(expr.english)) {
    const match = expr.english.match(/\b(have to|has to|need to|want to|going to)\b/i)
    parts.push(`"${match![0]}" 구문이 핵심입니다`)
  }
  if (/\b(can|could|should|would|might|must|may)\b/i.test(expr.english)) {
    const match = expr.english.match(/\b(can|could|should|would|might|must|may)\b/i)
    parts.push(`조동사 "${match![0]}"에 주목하세요`)
  }
  if (/\b(don't|doesn't|didn't|isn't|aren't|wasn't|weren't|won't|can't)\b/i.test(expr.english)) {
    parts.push(`부정문 형태에 주의하세요`)
  }
  if (/\?$/.test(expr.english)) {
    parts.push(`의문문이므로 어순에 주의하세요`)
  }
  if (expr.context) {
    parts.push(expr.context)
  }

  if (parts.length === 0) {
    // 기본 해설: 핵심 단어 강조
    const keyWords = words.filter(w => w.length > 3).slice(0, 2)
    if (keyWords.length > 0) {
      return `핵심 단어: ${keyWords.map(w => `"${w}"`).join(', ')}`
    }
    return undefined
  }

  return parts.join('. ') + '.'
}

function generateFillBlankExplanation(expr: Expression, blankWord: string): string | undefined {
  if (blankWord.length <= 2) return undefined
  return `"${blankWord}"은(는) 이 문장에서 핵심 역할을 합니다. 전체 문장: "${expr.english}"`
}

function generateWordOrderExplanation(expr: Expression): string | undefined {
  const words = expr.english.split(' ')
  if (words.length <= 3) return undefined

  if (/\?$/.test(expr.english)) {
    return `의문문은 "Do/Does/Is/Are" 등이 문장 앞에 옵니다. 어순: ${words.slice(0, 3).join(' ')}...`
  }
  return `영어 어순: 주어 + 동사 + 목적어/보어. "${words.slice(0, 3).join(' ')}..."로 시작합니다.`
}

function generateVocabExplanation(vocab: Vocabulary): string | undefined {
  if (vocab.exampleSentence) {
    return `예문: "${vocab.exampleSentence}" (${vocab.exampleTranslation})`
  }
  return undefined
}

// --- 3단계 힌트 생성 ---

function generateProgressiveHints(expr: Expression): string[] {
  const words = expr.english.split(' ')
  const wordCount = words.length

  // 힌트 1: 단어 수 + 첫 글자
  const hint1 = `${wordCount}개 단어로 이루어진 문장. 첫 글자: "${words[0]![0]!.toUpperCase()}"`

  // 힌트 2: 첫 단어 공개 + 마지막 단어 첫 글자
  const lastWord = words[words.length - 1]!.replace(/[.,!?]/g, '')
  const hint2 = `"${words[0]} ..." — 마지막 단어는 "${lastWord[0]}"로 시작`

  // 힌트 3: 대부분 공개, 핵심 단어 1개만 빈칸
  const candidates = words.filter((w, i) => i > 0 && w.replace(/[.,!?]/g, '').length > 2)
  if (candidates.length > 0) {
    const hideWord = candidates[Math.floor(Math.random() * candidates.length)]!
    const hint3 = words.map(w => w === hideWord ? '____' : w).join(' ')
    return [hint1, hint2, hint3]
  }

  // 후보가 없으면 첫 절반만 공개
  const halfIdx = Math.ceil(wordCount / 2)
  const hint3 = words.slice(0, halfIdx).join(' ') + ' ...'
  return [hint1, hint2, hint3]
}

// --- 활동 생성 함수 ---

function createFillBlank(expr: Expression): Activity {
  const words = expr.english.split(' ')
  if (words.length < 3) {
    return createTranslation(expr)
  }

  const candidates = words.filter((w, i) => i > 0 && w.length > 2)
  const blankWord = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]!
    : words[Math.floor(Math.random() * words.length)]!

  const blanked = expr.english.replace(blankWord, '____')
  const cleanBlank = blankWord.replace(/[.,!?;:'"]/g, '')

  return {
    type: 'fill-blank',
    expression: expr,
    question: blanked,
    answer: cleanBlank,
    hint: expr.korean,
    explanation: generateFillBlankExplanation(expr, cleanBlank),
  }
}

function createTranslation(expr: Expression): Activity {
  return {
    type: 'translation',
    expression: expr,
    question: expr.korean,
    answer: expr.english,
    hints: generateProgressiveHints(expr),
    explanation: generateTranslationExplanation(expr),
  }
}

function createComprehension(expr: Expression): Activity {
  const otherExprs = allExpressions.filter(e => e.id !== expr.id)
  const wrongOptions = shuffleArray(otherExprs)
    .slice(0, 3)
    .map(e => e.korean)

  return {
    type: 'comprehension',
    expression: expr,
    question: expr.english,
    answer: expr.korean,
    options: shuffleArray([expr.korean, ...wrongOptions]),
    explanation: expr.context ? `상황: ${expr.context}` : undefined,
  }
}

function createWordOrder(expr: Expression): Activity {
  const words = expr.english.split(' ')
  if (words.length < 3) {
    return createTranslation(expr)
  }

  return {
    type: 'word-order',
    expression: expr,
    question: expr.korean,
    answer: expr.english,
    options: shuffleArray(words),
    hint: `${words.length}개 단어를 올바른 순서로 배열하세요`,
    explanation: generateWordOrderExplanation(expr),
  }
}

function createVocabMatch(vocabList: Vocabulary[]): Activity {
  if (vocabList.length < 4) {
    return createVocabSpelling(vocabList[0]!)
  }

  const selected = shuffleArray(vocabList).slice(0, 4)
  const target = selected[0]!

  return {
    type: 'vocab-match',
    vocabulary: target,
    question: target.word,
    answer: target.meaning,
    options: shuffleArray(selected.map(v => v.meaning)),
    explanation: generateVocabExplanation(target),
  }
}

function createVocabSpelling(vocab: Vocabulary): Activity {
  return {
    type: 'vocab-spelling',
    vocabulary: vocab,
    question: vocab.meaning,
    answer: vocab.word,
    hint: vocab.exampleSentence,
    explanation: generateVocabExplanation(vocab),
  }
}

function createContextualWriting(expr: Expression): Activity {
  return {
    type: 'contextual-writing',
    expression: expr,
    question: `다음 상황에 맞는 영어 표현을 작성하세요:\n"${expr.korean}"`,
    answer: expr.english,
    hints: generateProgressiveHints(expr),
    explanation: generateTranslationExplanation(expr),
  }
}

function createDictation(expr: Expression): Activity {
  return {
    type: 'dictation',
    expression: expr,
    question: '음성을 듣고 영어로 받아쓰세요',
    answer: expr.english,
    explanation: `${expr.korean} — "${expr.english}"`,
  }
}

// --- 미리보기 활동 ---

function createPreview(exprs: Expression[]): Activity {
  return {
    type: 'preview',
    expressions: exprs,
    question: '오늘 배울 표현을 확인해보세요',
    answer: '',
    section: 'preview',
  }
}

// --- 구조화된 학습 세션 생성 ---

export function generateActivities(expressions: Expression[], vocab: Vocabulary[]): Activity[] {
  return generateSessionActivities(expressions, vocab, [], [])
}

export function generateSessionActivities(
  newExpressions: Expression[],
  newVocab: Vocabulary[],
  reviewExpressions: Expression[],
  reviewVocab: Vocabulary[],
  categoryWeakness?: CategoryWeakness,
): Activity[] {
  const activities: Activity[] = []

  // 약점 기반 활동 유형 가중치 계산
  const getWeightedPracticeTypes = (): ActivityType[] => {
    if (!categoryWeakness) return shuffleArray(['comprehension', 'fill-blank', 'word-order'] as ActivityType[])
    const types: ActivityType[] = []
    // 문법 약하면 fill-blank, word-order 추가
    if (categoryWeakness.grammar < 0.5) { types.push('fill-blank', 'fill-blank', 'word-order') }
    // 독해 약하면 comprehension 추가
    if (categoryWeakness.reading < 0.5) { types.push('comprehension', 'comprehension') }
    // 기본 배분
    types.push('comprehension', 'fill-blank', 'word-order')
    return shuffleArray(types)
  }

  const getWeightedTestTypes = (): ActivityType[] => {
    if (!categoryWeakness) return shuffleArray(['translation', 'contextual-writing', 'dictation'] as ActivityType[])
    const types: ActivityType[] = []
    // 문법 약하면 작문 강화
    if (categoryWeakness.grammar < 0.5) { types.push('contextual-writing', 'contextual-writing') }
    // 어휘 약하면 번역 강화
    if (categoryWeakness.vocabulary < 0.5) { types.push('translation', 'translation') }
    // 독해 약하면 받아쓰기 강화
    if (categoryWeakness.reading < 0.5) { types.push('dictation', 'dictation') }
    types.push('translation', 'contextual-writing', 'dictation')
    return shuffleArray(types)
  }

  // === 1단계: 미리보기 (오늘 배울 표현) ===
  if (newExpressions.length > 0) {
    const preview = createPreview(newExpressions)
    activities.push(preview)
  }

  // === 2단계: 어휘 학습 ===
  const allVocab = [...newVocab, ...reviewVocab]
  // 어휘 약하면 어휘 활동 추가
  const vocabSpellingCount = categoryWeakness && categoryWeakness.vocabulary < 0.5 ? 5 : 3
  if (allVocab.length >= 4) {
    const vm1 = createVocabMatch(allVocab)
    vm1.section = 'vocabulary'
    vm1.isReview = reviewVocab.length > 0 && newVocab.length === 0
    activities.push(vm1)

    const vm2 = createVocabMatch(shuffleArray(allVocab))
    vm2.section = 'vocabulary'
    activities.push(vm2)
  }

  for (const v of shuffleArray(allVocab).slice(0, vocabSpellingCount)) {
    const sp = createVocabSpelling(v)
    sp.section = 'vocabulary'
    sp.isReview = reviewVocab.some(rv => rv.id === v.id)
    activities.push(sp)
  }

  // === 3단계: 연습 (약점 기반 가중치 적용) ===
  const allExprs = [...newExpressions, ...reviewExpressions]
  const practicePool = getWeightedPracticeTypes()
  for (let i = 0; i < allExprs.length; i++) {
    const expr = allExprs[i]!
    const practiceType = practicePool[i % practicePool.length]!
    let activity: Activity
    switch (practiceType) {
      case 'comprehension': activity = createComprehension(expr); break
      case 'fill-blank': activity = createFillBlank(expr); break
      case 'word-order': activity = createWordOrder(expr); break
      default: activity = createComprehension(expr); break
    }
    activity.section = 'practice'
    activity.isReview = reviewExpressions.some(re => re.id === expr.id)
    activities.push(activity)
  }

  // === 4단계: 테스트 (약점 기반 가중치 적용) ===
  const testPool = getWeightedTestTypes()
  const testExprs = shuffleArray(allExprs).slice(0, Math.min(allExprs.length, 5))
  for (let i = 0; i < testExprs.length; i++) {
    const expr = testExprs[i]!
    const testType = testPool[i % testPool.length]!
    let activity: Activity
    switch (testType) {
      case 'translation': activity = createTranslation(expr); break
      case 'contextual-writing': activity = createContextualWriting(expr); break
      case 'dictation': activity = createDictation(expr); break
      default: activity = createTranslation(expr); break
    }
    activity.section = 'test'
    activity.isReview = reviewExpressions.some(re => re.id === expr.id)
    activities.push(activity)
  }

  // 미리보기 이후의 각 섹션 내에서만 셔플 (전체 순서는 유지)
  const preview = activities.filter(a => a.section === 'preview')
  const vocabSection = shuffleArray(activities.filter(a => a.section === 'vocabulary'))
  const practiceSection = shuffleArray(activities.filter(a => a.section === 'practice'))
  const testSection = shuffleArray(activities.filter(a => a.section === 'test'))

  return [...preview, ...vocabSection, ...practiceSection, ...testSection]
}
