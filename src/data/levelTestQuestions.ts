export type QuestionCategory = 'vocabulary' | 'reading' | 'grammar'

export interface LevelTestQuestion {
  id: string
  level: number // 1~10 — 난이도 레벨
  category: QuestionCategory
  question: string
  options: string[]
  answer: string
  passage?: string // 독해 지문
}

// 레벨별로 어휘/독해/문법 각 2문제씩 = 레벨당 6문제
// 셋트 하나 = 한 레벨의 6문제
// 총 10레벨 × 6문제 = 60문제

export const levelTestQuestions: LevelTestQuestion[] = [
  // ===== Level 1 (A1 입문) =====
  // 어휘
  { id: 'lv1-v1', level: 1, category: 'vocabulary', question: '"Happy"의 뜻으로 알맞은 것은?', options: ['슬픈', '행복한', '화난', '피곤한'], answer: '행복한' },
  { id: 'lv1-v2', level: 1, category: 'vocabulary', question: '"Apple"은 무엇인가요?', options: ['바나나', '포도', '사과', '딸기'], answer: '사과' },
  // 독해
  { id: 'lv1-r1', level: 1, category: 'reading', passage: 'My name is Tom. I am 10 years old. I like dogs.', question: 'Tom은 무엇을 좋아하나요?', options: ['고양이', '개', '새', '물고기'], answer: '개' },
  { id: 'lv1-r2', level: 1, category: 'reading', passage: 'Today is sunny. I go to the park with my mom.', question: '오늘 날씨는 어떤가요?', options: ['비가 온다', '눈이 온다', '맑다', '흐리다'], answer: '맑다' },
  // 문법
  { id: 'lv1-g1', level: 1, category: 'grammar', question: 'She ____ a student.', options: ['am', 'is', 'are', 'be'], answer: 'is' },
  { id: 'lv1-g2', level: 1, category: 'grammar', question: 'I have two ____.', options: ['book', 'books', 'bookes', 'booking'], answer: 'books' },

  // ===== Level 2 (A1+ 기초) =====
  { id: 'lv2-v1', level: 2, category: 'vocabulary', question: '"Delicious"의 뜻은?', options: ['아름다운', '맛있는', '위험한', '작은'], answer: '맛있는' },
  { id: 'lv2-v2', level: 2, category: 'vocabulary', question: '"Weather"의 뜻은?', options: ['물', '날씨', '옷', '음식'], answer: '날씨' },
  { id: 'lv2-r1', level: 2, category: 'reading', passage: 'I wake up at 7 o\'clock. I eat breakfast and go to school. After school, I play with my friends.', question: '이 사람은 아침에 일어나서 무엇을 하나요?', options: ['운동한다', '아침을 먹고 학교에 간다', '친구와 논다', 'TV를 본다'], answer: '아침을 먹고 학교에 간다' },
  { id: 'lv2-r2', level: 2, category: 'reading', passage: 'My sister is 15 years old. She likes music and plays the piano every day.', question: '누나/언니는 매일 무엇을 하나요?', options: ['노래를 부른다', '기타를 친다', '피아노를 친다', '춤을 춘다'], answer: '피아노를 친다' },
  { id: 'lv2-g1', level: 2, category: 'grammar', question: 'I usually ____ to school by bus.', options: ['go', 'going', 'goes', 'went'], answer: 'go' },
  { id: 'lv2-g2', level: 2, category: 'grammar', question: 'She ____ her homework yesterday.', options: ['finish', 'finishes', 'finished', 'finishing'], answer: 'finished' },

  // ===== Level 3 (A2 초급) =====
  { id: 'lv3-v1', level: 3, category: 'vocabulary', question: '"Convenient"의 뜻은?', options: ['불편한', '편리한', '위험한', '비싼'], answer: '편리한' },
  { id: 'lv3-v2', level: 3, category: 'vocabulary', question: '"Environment"의 뜻은?', options: ['환경', '장비', '오락', '운동'], answer: '환경' },
  { id: 'lv3-r1', level: 3, category: 'reading', passage: 'Last weekend, I visited a museum with my family. We saw many paintings and sculptures. My favorite was a painting of the ocean.', question: '가장 좋아한 작품은?', options: ['조각상', '산 그림', '바다 그림', '사진'], answer: '바다 그림' },
  { id: 'lv3-r2', level: 3, category: 'reading', passage: 'Tom wants to buy a new phone, but he doesn\'t have enough money. He decided to save money for three months.', question: 'Tom은 왜 바로 폰을 사지 못하나요?', options: ['폰이 없어서', '돈이 부족해서', '마음에 드는 게 없어서', '부모님이 반대해서'], answer: '돈이 부족해서' },
  { id: 'lv3-g1', level: 3, category: 'grammar', question: 'This book is ____ than that one.', options: ['interesting', 'more interesting', 'most interesting', 'interestinger'], answer: 'more interesting' },
  { id: 'lv3-g2', level: 3, category: 'grammar', question: 'If it ____ tomorrow, we\'ll stay home.', options: ['rains', 'will rain', 'rained', 'rain'], answer: 'rains' },

  // ===== Level 4 (A2+ 초중급) =====
  { id: 'lv4-v1', level: 4, category: 'vocabulary', question: '"Opportunity"의 뜻은?', options: ['반대', '기회', '의견', '문제'], answer: '기회' },
  { id: 'lv4-v2', level: 4, category: 'vocabulary', question: '"Hesitate"의 뜻은?', options: ['서두르다', '망설이다', '포기하다', '시작하다'], answer: '망설이다' },
  { id: 'lv4-r1', level: 4, category: 'reading', passage: 'Working from home has become more common. Many people enjoy the flexibility, but some miss the social interaction of an office.', question: '재택근무의 단점으로 언급된 것은?', options: ['유연성 부족', '비용 증가', '사회적 교류 부족', '업무량 증가'], answer: '사회적 교류 부족' },
  { id: 'lv4-r2', level: 4, category: 'reading', passage: 'She asked me if I had ever been to Japan. I told her that I visited Tokyo last year and really enjoyed the food there.', question: '화자는 일본에서 무엇을 즐겼나요?', options: ['쇼핑', '관광', '음식', '온천'], answer: '음식' },
  { id: 'lv4-g1', level: 4, category: 'grammar', question: 'I\'ve ____ in Seoul since 2018.', options: ['live', 'living', 'lived', 'lives'], answer: 'lived' },
  { id: 'lv4-g2', level: 4, category: 'grammar', question: 'By the time we arrived, the movie had already ____.', options: ['start', 'starts', 'starting', 'started'], answer: 'started' },

  // ===== Level 5 (B1 중급) =====
  { id: 'lv5-v1', level: 5, category: 'vocabulary', question: '"Reluctant"의 뜻은?', options: ['열정적인', '꺼리는', '친절한', '정확한'], answer: '꺼리는' },
  { id: 'lv5-v2', level: 5, category: 'vocabulary', question: '"Substantial"의 뜻은?', options: ['사소한', '상당한', '일시적인', '표면적인'], answer: '상당한' },
  { id: 'lv5-r1', level: 5, category: 'reading', passage: 'Studies show that regular exercise not only improves physical health but also has significant benefits for mental well-being. People who exercise regularly report lower levels of stress and anxiety.', question: '이 글의 주요 내용은?', options: ['운동의 위험성', '운동이 신체와 정신 건강 모두에 좋다', '스트레스의 원인', '불안 장애 치료법'], answer: '운동이 신체와 정신 건강 모두에 좋다' },
  { id: 'lv5-r2', level: 5, category: 'reading', passage: 'Although renewable energy sources like solar and wind power are becoming cheaper, many countries still rely heavily on fossil fuels for electricity generation.', question: '많은 나라가 여전히 의존하는 것은?', options: ['태양광', '풍력', '화석 연료', '수력'], answer: '화석 연료' },
  { id: 'lv5-g1', level: 5, category: 'grammar', question: 'I wish I ____ more time to study.', options: ['have', 'had', 'having', 'will have'], answer: 'had' },
  { id: 'lv5-g2', level: 5, category: 'grammar', question: 'She asked me ____ I could help her with the project.', options: ['that', 'what', 'if', 'which'], answer: 'if' },

  // ===== Level 6 (B1+ 중급+) =====
  { id: 'lv6-v1', level: 6, category: 'vocabulary', question: '"Undermine"의 뜻은?', options: ['강화하다', '약화시키다', '무시하다', '설명하다'], answer: '약화시키다' },
  { id: 'lv6-v2', level: 6, category: 'vocabulary', question: '"Comprehensive"의 뜻은?', options: ['부분적인', '종합적인', '반복적인', '임시적인'], answer: '종합적인' },
  { id: 'lv6-r1', level: 6, category: 'reading', passage: 'The company decided to implement a four-day work week on a trial basis. Initial results showed a 20% increase in productivity and improved employee satisfaction, though some clients complained about reduced availability.', question: '4일 근무제의 부작용은?', options: ['생산성 저하', '직원 불만', '고객의 가용성 불만', '비용 증가'], answer: '고객의 가용성 불만' },
  { id: 'lv6-r2', level: 6, category: 'reading', passage: 'Despite advances in artificial intelligence, experts argue that human creativity and emotional intelligence remain irreplaceable in fields such as art, therapy, and education.', question: '전문가들이 AI로 대체 불가능하다고 보는 것은?', options: ['데이터 분석', '반복 업무', '창의성과 감성 지능', '제조 공정'], answer: '창의성과 감성 지능' },
  { id: 'lv6-g1', level: 6, category: 'grammar', question: 'The project ____ by the end of next month.', options: ['will complete', 'will be completed', 'is completing', 'completes'], answer: 'will be completed' },
  { id: 'lv6-g2', level: 6, category: 'grammar', question: 'Not only ____ she speak French, but she also speaks German.', options: ['do', 'does', 'did', 'is'], answer: 'does' },

  // ===== Level 7 (B2 중상급) =====
  { id: 'lv7-v1', level: 7, category: 'vocabulary', question: '"Pragmatic"의 뜻은?', options: ['이상적인', '실용적인', '감성적인', '학술적인'], answer: '실용적인' },
  { id: 'lv7-v2', level: 7, category: 'vocabulary', question: '"Exacerbate"의 뜻은?', options: ['완화하다', '악화시키다', '분석하다', '축하하다'], answer: '악화시키다' },
  { id: 'lv7-r1', level: 7, category: 'reading', passage: 'The paradox of choice suggests that while having options is generally positive, an overabundance of choices can lead to decision paralysis and decreased satisfaction. Consumers in markets with fewer options often report higher contentment with their purchases.', question: '선택의 역설이 시사하는 것은?', options: ['선택이 많을수록 좋다', '선택이 너무 많으면 만족도가 떨어진다', '소비자는 항상 합리적이다', '시장 경쟁이 줄어야 한다'], answer: '선택이 너무 많으면 만족도가 떨어진다' },
  { id: 'lv7-r2', level: 7, category: 'reading', passage: 'Urban green spaces serve multiple functions: they mitigate the heat island effect, reduce air pollution, provide habitats for wildlife, and offer residents a place for recreation and relaxation, ultimately contributing to improved public health outcomes.', question: '도시 녹지 공간이 하지 않는 것은?', options: ['열섬 효과 완화', '대기 오염 감소', '교통 체증 해소', '주민 휴식 공간 제공'], answer: '교통 체증 해소' },
  { id: 'lv7-g1', level: 7, category: 'grammar', question: 'Had I known about the delay, I ____ an earlier flight.', options: ['would book', 'would have booked', 'will book', 'had booked'], answer: 'would have booked' },
  { id: 'lv7-g2', level: 7, category: 'grammar', question: '____ the circumstances, we decided to postpone the event.', options: ['Given', 'Giving', 'Gave', 'Give'], answer: 'Given' },

  // ===== Level 8 (B2+ 상급) =====
  { id: 'lv8-v1', level: 8, category: 'vocabulary', question: '"Ubiquitous"의 뜻은?', options: ['희귀한', '어디에나 있는', '모호한', '독특한'], answer: '어디에나 있는' },
  { id: 'lv8-v2', level: 8, category: 'vocabulary', question: '"Ameliorate"의 뜻은?', options: ['악화시키다', '개선하다', '무시하다', '파괴하다'], answer: '개선하다' },
  { id: 'lv8-r1', level: 8, category: 'reading', passage: 'The gig economy has fundamentally altered traditional employment paradigms. While proponents cite flexibility and autonomy as key advantages, critics point to the erosion of worker protections, benefits, and job security that conventional employment typically provides.', question: '기그 경제 비판자들의 주요 우려는?', options: ['유연성 부족', '자율성 감소', '노동자 보호와 복지 약화', '기술 발전 저해'], answer: '노동자 보호와 복지 약화' },
  { id: 'lv8-r2', level: 8, category: 'reading', passage: 'Cognitive biases, such as confirmation bias and the Dunning-Kruger effect, systematically distort our perception of reality. Recognizing these biases is the first step toward more rational decision-making, though complete elimination of bias remains an elusive goal.', question: '이 글에 따르면, 편향에 대해 올바른 설명은?', options: ['완전히 제거 가능하다', '인지하는 것이 합리적 판단의 첫걸음이다', '교육으로 해결된다', '한 가지만 존재한다'], answer: '인지하는 것이 합리적 판단의 첫걸음이다' },
  { id: 'lv8-g1', level: 8, category: 'grammar', question: 'The CEO emphasized that innovation ____ essential for growth.', options: ['is', 'was', 'be', 'were'], answer: 'was' },
  { id: 'lv8-g2', level: 8, category: 'grammar', question: 'The more you practice, the ____ you will become.', options: ['confident', 'more confident', 'most confident', 'confidently'], answer: 'more confident' },

  // ===== Level 9 (C1 고급) =====
  { id: 'lv9-v1', level: 9, category: 'vocabulary', question: '"Juxtapose"의 뜻은?', options: ['분리하다', '나란히 놓다/대비하다', '결합하다', '제거하다'], answer: '나란히 놓다/대비하다' },
  { id: 'lv9-v2', level: 9, category: 'vocabulary', question: '"Ephemeral"의 뜻은?', options: ['영원한', '덧없는', '거대한', '정확한'], answer: '덧없는' },
  { id: 'lv9-r1', level: 9, category: 'reading', passage: 'The notion that language merely reflects thought has been supplanted by the Sapir-Whorf hypothesis, which posits that linguistic structures actively shape cognitive processes. This linguistic relativity, while contested in its strong form, has gained empirical support in studies demonstrating that speakers of different languages perceive temporal and spatial relationships differently.', question: '사피어-워프 가설의 핵심 주장은?', options: ['언어는 사고를 반영할 뿐이다', '언어 구조가 인지 과정을 형성한다', '모든 언어는 동일한 구조를 가진다', '언어는 문화와 무관하다'], answer: '언어 구조가 인지 과정을 형성한다' },
  { id: 'lv9-r2', level: 9, category: 'reading', passage: 'The precautionary principle in environmental policy holds that when an action poses potential threats to the environment or public health, precautionary measures should be taken even in the absence of complete scientific certainty. Critics argue this can stifle innovation and impose disproportionate costs.', question: '사전예방 원칙에 대한 비판은?', options: ['과학적 근거가 없다', '환경을 보호하지 못한다', '혁신을 저해하고 과도한 비용을 초래할 수 있다', '너무 느슨하다'], answer: '혁신을 저해하고 과도한 비용을 초래할 수 있다' },
  { id: 'lv9-g1', level: 9, category: 'grammar', question: 'The report, ____ was submitted last week, contained several errors.', options: ['that', 'which', 'what', 'whose'], answer: 'which' },
  { id: 'lv9-g2', level: 9, category: 'grammar', question: 'Seldom ____ such a compelling argument in academic discourse.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], answer: 'have I seen' },

  // ===== Level 10 (C1+ 최고급) =====
  { id: 'lv10-v1', level: 10, category: 'vocabulary', question: '"Obfuscate"의 뜻은?', options: ['명확히 하다', '혼란스럽게 하다', '간소화하다', '강조하다'], answer: '혼란스럽게 하다' },
  { id: 'lv10-v2', level: 10, category: 'vocabulary', question: '"Recalcitrant"의 뜻은?', options: ['순종적인', '완고하게 저항하는', '신중한', '관대한'], answer: '완고하게 저항하는' },
  { id: 'lv10-r1', level: 10, category: 'reading', passage: 'The entrenchment of algorithmic governance in judicial systems raises profound epistemological questions. When predictive algorithms inform sentencing decisions, the opacity of their decision-making processes — often termed "black box" systems — fundamentally challenges the principle of transparent justice and the defendant\'s right to understand the basis of their sentence.', question: '이 글이 제기하는 핵심 문제는?', options: ['알고리즘의 정확성', '알고리즘의 불투명성이 투명한 사법 원칙에 도전한다', '판사의 역량 부족', 'AI 기술의 비용'], answer: '알고리즘의 불투명성이 투명한 사법 원칙에 도전한다' },
  { id: 'lv10-r2', level: 10, category: 'reading', passage: 'Postcolonial scholars have critiqued the universalist claims of Western epistemology, arguing that knowledge production is inherently situated within specific cultural, historical, and power contexts. This challenges the notion of objective, culture-free knowledge and calls for epistemic pluralism.', question: '탈식민주의 학자들이 주장하는 것은?', options: ['서양 인식론은 보편적이다', '지식 생산은 문화와 권력의 맥락에 위치한다', '객관적 지식은 존재한다', '인식론적 일원주의가 필요하다'], answer: '지식 생산은 문화와 권력의 맥락에 위치한다' },
  { id: 'lv10-g1', level: 10, category: 'grammar', question: 'Hardly ____ the meeting started when the fire alarm went off.', options: ['has', 'had', 'did', 'was'], answer: 'had' },
  { id: 'lv10-g2', level: 10, category: 'grammar', question: '____ it not been for her intervention, the negotiations would have collapsed entirely.', options: ['Had', 'Have', 'Has', 'If'], answer: 'Had' },
]

/** 특정 레벨의 문제들을 어휘→독해→문법 순서로 반환 */
export function getQuestionsForLevel(level: number): LevelTestQuestion[] {
  const lvQuestions = levelTestQuestions.filter(q => q.level === level)
  const vocab = lvQuestions.filter(q => q.category === 'vocabulary')
  const reading = lvQuestions.filter(q => q.category === 'reading')
  const grammar = lvQuestions.filter(q => q.category === 'grammar')
  return [...vocab, ...reading, ...grammar]
}
