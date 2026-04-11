import type { Expression, Vocabulary, Activity, ActivityType } from '@/data/types'
import { shuffleArray } from '@/lib/utils'
import { expressions as allExpressions } from '@/data/curriculum'

function createFillBlank(expr: Expression): Activity {
  const words = expr.english.split(' ')
  if (words.length < 3) {
    return createTranslation(expr)
  }

  // 핵심 단어 중 하나를 빈칸으로
  const candidates = words.filter((w, i) => i > 0 && w.length > 2)
  const blankWord = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]!
    : words[Math.floor(Math.random() * words.length)]!

  const blanked = expr.english.replace(blankWord, '____')

  return {
    type: 'fill-blank',
    expression: expr,
    question: blanked,
    answer: blankWord.replace(/[.,!?;:'"]/g, ''),
    hint: expr.korean,
  }
}

function createTranslation(expr: Expression): Activity {
  return {
    type: 'translation',
    expression: expr,
    question: expr.korean,
    answer: expr.english,
    hint: `${expr.english.split(' ').length}개 단어`,
  }
}

function createComprehension(expr: Expression): Activity {
  // 다른 표현들에서 오답 보기 생성
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
  }
}

function createVocabSpelling(vocab: Vocabulary): Activity {
  return {
    type: 'vocab-spelling',
    vocabulary: vocab,
    question: vocab.meaning,
    answer: vocab.word,
    hint: vocab.exampleSentence,
  }
}

function createContextualWriting(expr: Expression): Activity {
  // 상황을 설명하고 영어로 표현하도록
  return {
    type: 'contextual-writing',
    expression: expr,
    question: `다음 상황에 맞는 영어 표현을 작성하세요:\n"${expr.korean}"`,
    answer: expr.english,
    hint: `첫 단어: ${expr.english.split(' ')[0]}`,
  }
}

function createDictation(expr: Expression): Activity {
  return {
    type: 'dictation',
    expression: expr,
    question: '음성을 듣고 영어로 받아쓰세요',
    answer: expr.english,
  }
}

// 표현/어휘로부터 활동 생성 (내부 공통 로직)
function buildActivitiesFromContent(
  exprs: Expression[],
  vocabList: Vocabulary[],
  isReview: boolean,
): Activity[] {
  const activities: Activity[] = []

  for (const expr of exprs) {
    const types: ActivityType[] = shuffleArray([
      'translation', 'comprehension', 'fill-blank', 'word-order', 'contextual-writing', 'dictation',
    ]).slice(0, 2) as ActivityType[]

    for (const type of types) {
      let activity: Activity
      switch (type) {
        case 'translation': activity = createTranslation(expr); break
        case 'comprehension': activity = createComprehension(expr); break
        case 'fill-blank': activity = createFillBlank(expr); break
        case 'word-order': activity = createWordOrder(expr); break
        case 'contextual-writing': activity = createContextualWriting(expr); break
        case 'dictation': activity = createDictation(expr); break
        default: activity = createTranslation(expr); break
      }
      activity.isReview = isReview
      activities.push(activity)
    }
  }

  if (vocabList.length >= 4) {
    const m1 = createVocabMatch(vocabList)
    const m2 = createVocabMatch(shuffleArray(vocabList))
    m1.isReview = isReview
    m2.isReview = isReview
    activities.push(m1, m2)
  }

  for (const v of shuffleArray(vocabList).slice(0, 3)) {
    const sp = createVocabSpelling(v)
    sp.isReview = isReview
    activities.push(sp)
  }

  return activities
}

export function generateActivities(expressions: Expression[], vocab: Vocabulary[]): Activity[] {
  const activities = buildActivitiesFromContent(expressions, vocab, false)
  return shuffleArray(activities).slice(0, 15)
}

// 복습 + 새 학습을 결합한 세션 생성
export function generateSessionActivities(
  newExpressions: Expression[],
  newVocab: Vocabulary[],
  reviewExpressions: Expression[],
  reviewVocab: Vocabulary[],
): Activity[] {
  // 복습 활동 생성
  const reviewActivities = buildActivitiesFromContent(reviewExpressions, reviewVocab, true)
  // 복습은 항목당 1개 활동으로 제한 (너무 많으면 지루)
  const reviewCount = reviewExpressions.length + reviewVocab.length
  const limitedReview = shuffleArray(reviewActivities).slice(0, Math.min(reviewCount, 5))

  // 새 학습 활동 생성
  const newActivities = buildActivitiesFromContent(newExpressions, newVocab, false)
  const limitedNew = shuffleArray(newActivities).slice(0, 10)

  // 복습 먼저, 그다음 새 학습 (각 섹션 내에서는 셔플)
  return [...limitedReview, ...limitedNew]
}
