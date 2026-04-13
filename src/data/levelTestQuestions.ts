import { shuffleArray } from '@/lib/utils'

export type QuestionCategory = 'vocabulary' | 'reading' | 'grammar'

export interface LevelTestQuestion {
  id: string
  level: number // 1~10
  category: QuestionCategory
  question: string
  options: string[]
  answer: string
  passage?: string
}

// 레벨당 12문제 (어휘4 + 독해4 + 문법4) = 총 120문제
export const levelTestQuestions: LevelTestQuestion[] = [
  // ===== Level 1 (A1 입문) =====
  { id: 'lv1-v1', level: 1, category: 'vocabulary', question: '"Happy"의 뜻으로 알맞은 것은?', options: ['슬픈', '행복한', '화난', '피곤한'], answer: '행복한' },
  { id: 'lv1-v2', level: 1, category: 'vocabulary', question: '"Apple"은 무엇인가요?', options: ['바나나', '포도', '사과', '딸기'], answer: '사과' },
  { id: 'lv1-v3', level: 1, category: 'vocabulary', question: '"Big"의 뜻은?', options: ['작은', '큰', '빠른', '느린'], answer: '큰' },
  { id: 'lv1-v4', level: 1, category: 'vocabulary', question: '"Water"의 뜻은?', options: ['불', '물', '바람', '흙'], answer: '물' },
  { id: 'lv1-r1', level: 1, category: 'reading', passage: 'My name is Tom. I am 10 years old. I like dogs.', question: 'Tom은 무엇을 좋아하나요?', options: ['고양이', '개', '새', '물고기'], answer: '개' },
  { id: 'lv1-r2', level: 1, category: 'reading', passage: 'Today is sunny. I go to the park with my mom.', question: '오늘 날씨는 어떤가요?', options: ['비가 온다', '눈이 온다', '맑다', '흐리다'], answer: '맑다' },
  { id: 'lv1-r3', level: 1, category: 'reading', passage: 'I have a cat. Her name is Kitty. She is white.', question: 'Kitty는 무슨 색인가요?', options: ['검정', '갈색', '흰색', '회색'], answer: '흰색' },
  { id: 'lv1-r4', level: 1, category: 'reading', passage: 'My father is a teacher. He works at a school.', question: '아버지의 직업은?', options: ['의사', '선생님', '요리사', '경찰'], answer: '선생님' },
  { id: 'lv1-g1', level: 1, category: 'grammar', question: 'She ____ a student.', options: ['am', 'is', 'are', 'be'], answer: 'is' },
  { id: 'lv1-g2', level: 1, category: 'grammar', question: 'I have two ____.', options: ['book', 'books', 'bookes', 'booking'], answer: 'books' },
  { id: 'lv1-g3', level: 1, category: 'grammar', question: 'They ____ playing soccer.', options: ['is', 'am', 'are', 'be'], answer: 'are' },
  { id: 'lv1-g4', level: 1, category: 'grammar', question: 'This is ____ orange.', options: ['a', 'an', 'the', '-'], answer: 'an' },

  // ===== Level 2 (A1+ 기초) =====
  { id: 'lv2-v1', level: 2, category: 'vocabulary', question: '"Delicious"의 뜻은?', options: ['아름다운', '맛있는', '위험한', '작은'], answer: '맛있는' },
  { id: 'lv2-v2', level: 2, category: 'vocabulary', question: '"Weather"의 뜻은?', options: ['물', '날씨', '옷', '음식'], answer: '날씨' },
  { id: 'lv2-v3', level: 2, category: 'vocabulary', question: '"Remember"의 뜻은?', options: ['잊다', '기억하다', '달리다', '요리하다'], answer: '기억하다' },
  { id: 'lv2-v4', level: 2, category: 'vocabulary', question: '"Tired"의 뜻은?', options: ['배고픈', '목마른', '피곤한', '행복한'], answer: '피곤한' },
  { id: 'lv2-r1', level: 2, category: 'reading', passage: 'I wake up at 7 o\'clock. I eat breakfast and go to school. After school, I play with my friends.', question: '이 사람은 아침에 일어나서 무엇을 하나요?', options: ['운동한다', '아침을 먹고 학교에 간다', '친구와 논다', 'TV를 본다'], answer: '아침을 먹고 학교에 간다' },
  { id: 'lv2-r2', level: 2, category: 'reading', passage: 'My sister is 15 years old. She likes music and plays the piano every day.', question: '누나/언니는 매일 무엇을 하나요?', options: ['노래를 부른다', '기타를 친다', '피아노를 친다', '춤을 춘다'], answer: '피아노를 친다' },
  { id: 'lv2-r3', level: 2, category: 'reading', passage: 'We went to the zoo last Sunday. We saw lions, elephants, and monkeys. The monkeys were very funny.', question: '어떤 동물이 재미있었나요?', options: ['사자', '코끼리', '원숭이', '기린'], answer: '원숭이' },
  { id: 'lv2-r4', level: 2, category: 'reading', passage: 'I want to be a doctor when I grow up. I want to help sick people.', question: '이 사람은 커서 무엇이 되고 싶나요?', options: ['선생님', '의사', '가수', '운동선수'], answer: '의사' },
  { id: 'lv2-g1', level: 2, category: 'grammar', question: 'I usually ____ to school by bus.', options: ['go', 'going', 'goes', 'went'], answer: 'go' },
  { id: 'lv2-g2', level: 2, category: 'grammar', question: 'She ____ her homework yesterday.', options: ['finish', 'finishes', 'finished', 'finishing'], answer: 'finished' },
  { id: 'lv2-g3', level: 2, category: 'grammar', question: 'My brother is ____ than me.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 'taller' },
  { id: 'lv2-g4', level: 2, category: 'grammar', question: 'Can you ____ me your pen?', options: ['give', 'gives', 'gave', 'giving'], answer: 'give' },

  // ===== Level 3 (A2 초급) =====
  { id: 'lv3-v1', level: 3, category: 'vocabulary', question: '"Convenient"의 뜻은?', options: ['불편한', '편리한', '위험한', '비싼'], answer: '편리한' },
  { id: 'lv3-v2', level: 3, category: 'vocabulary', question: '"Environment"의 뜻은?', options: ['환경', '장비', '오락', '운동'], answer: '환경' },
  { id: 'lv3-v3', level: 3, category: 'vocabulary', question: '"Polite"의 뜻은?', options: ['무례한', '예의 바른', '조용한', '시끄러운'], answer: '예의 바른' },
  { id: 'lv3-v4', level: 3, category: 'vocabulary', question: '"Decision"의 뜻은?', options: ['상황', '결정', '문제', '설명'], answer: '결정' },
  { id: 'lv3-r1', level: 3, category: 'reading', passage: 'Last weekend, I visited a museum with my family. We saw many paintings and sculptures. My favorite was a painting of the ocean.', question: '가장 좋아한 작품은?', options: ['조각상', '산 그림', '바다 그림', '사진'], answer: '바다 그림' },
  { id: 'lv3-r2', level: 3, category: 'reading', passage: 'Tom wants to buy a new phone, but he doesn\'t have enough money. He decided to save money for three months.', question: 'Tom은 왜 바로 폰을 사지 못하나요?', options: ['폰이 없어서', '돈이 부족해서', '마음에 드는 게 없어서', '부모님이 반대해서'], answer: '돈이 부족해서' },
  { id: 'lv3-r3', level: 3, category: 'reading', passage: 'Lisa moved to a new city last month. She hasn\'t made many friends yet, but her neighbors are very kind.', question: 'Lisa에 대해 맞는 것은?', options: ['친구가 많다', '이웃이 불친절하다', '이웃이 친절하다', '오래 살았다'], answer: '이웃이 친절하다' },
  { id: 'lv3-r4', level: 3, category: 'reading', passage: 'The store opens at 9 AM and closes at 8 PM on weekdays. On weekends, it closes earlier at 6 PM.', question: '주말 폐점 시간은?', options: ['8 PM', '9 PM', '6 PM', '7 PM'], answer: '6 PM' },
  { id: 'lv3-g1', level: 3, category: 'grammar', question: 'This book is ____ than that one.', options: ['interesting', 'more interesting', 'most interesting', 'interestinger'], answer: 'more interesting' },
  { id: 'lv3-g2', level: 3, category: 'grammar', question: 'If it ____ tomorrow, we\'ll stay home.', options: ['rains', 'will rain', 'rained', 'rain'], answer: 'rains' },
  { id: 'lv3-g3', level: 3, category: 'grammar', question: 'I ____ never been to Japan.', options: ['has', 'have', 'had', 'am'], answer: 'have' },
  { id: 'lv3-g4', level: 3, category: 'grammar', question: 'She enjoys ____ books in her free time.', options: ['read', 'reads', 'reading', 'to read'], answer: 'reading' },

  // ===== Level 4 (A2+ 초중급) =====
  { id: 'lv4-v1', level: 4, category: 'vocabulary', question: '"Opportunity"의 뜻은?', options: ['반대', '기회', '의견', '문제'], answer: '기회' },
  { id: 'lv4-v2', level: 4, category: 'vocabulary', question: '"Hesitate"의 뜻은?', options: ['서두르다', '망설이다', '포기하다', '시작하다'], answer: '망설이다' },
  { id: 'lv4-v3', level: 4, category: 'vocabulary', question: '"Gradually"의 뜻은?', options: ['갑자기', '점차적으로', '완전히', '자주'], answer: '점차적으로' },
  { id: 'lv4-v4', level: 4, category: 'vocabulary', question: '"Accomplish"의 뜻은?', options: ['실패하다', '동반하다', '달성하다', '비교하다'], answer: '달성하다' },
  { id: 'lv4-r1', level: 4, category: 'reading', passage: 'Working from home has become more common. Many people enjoy the flexibility, but some miss the social interaction of an office.', question: '재택근무의 단점으로 언급된 것은?', options: ['유연성 부족', '비용 증가', '사회적 교류 부족', '업무량 증가'], answer: '사회적 교류 부족' },
  { id: 'lv4-r2', level: 4, category: 'reading', passage: 'She asked me if I had ever been to Japan. I told her that I visited Tokyo last year and really enjoyed the food there.', question: '화자는 일본에서 무엇을 즐겼나요?', options: ['쇼핑', '관광', '음식', '온천'], answer: '음식' },
  { id: 'lv4-r3', level: 4, category: 'reading', passage: 'The company decided to reduce working hours from 40 to 35 per week. Employees were very happy with the change, and productivity actually increased.', question: '근무 시간 단축의 결과는?', options: ['생산성 감소', '직원 불만', '생산성 증가', '변화 없음'], answer: '생산성 증가' },
  { id: 'lv4-r4', level: 4, category: 'reading', passage: 'I used to hate vegetables as a child, but now I eat them every day. My eating habits changed a lot after I started cooking for myself.', question: '식습관이 바뀐 계기는?', options: ['병원 방문', '부모님 권유', '직접 요리하기 시작', '다이어트'], answer: '직접 요리하기 시작' },
  { id: 'lv4-g1', level: 4, category: 'grammar', question: 'I\'ve ____ in Seoul since 2018.', options: ['live', 'living', 'lived', 'lives'], answer: 'lived' },
  { id: 'lv4-g2', level: 4, category: 'grammar', question: 'By the time we arrived, the movie had already ____.', options: ['start', 'starts', 'starting', 'started'], answer: 'started' },
  { id: 'lv4-g3', level: 4, category: 'grammar', question: 'He suggested ____ a break before continuing.', options: ['take', 'taking', 'took', 'to take'], answer: 'taking' },
  { id: 'lv4-g4', level: 4, category: 'grammar', question: 'The book ____ I borrowed from the library was very interesting.', options: ['who', 'which', 'what', 'whose'], answer: 'which' },

  // ===== Level 5 (B1 중급) =====
  { id: 'lv5-v1', level: 5, category: 'vocabulary', question: '"Reluctant"의 뜻은?', options: ['열정적인', '꺼리는', '친절한', '정확한'], answer: '꺼리는' },
  { id: 'lv5-v2', level: 5, category: 'vocabulary', question: '"Substantial"의 뜻은?', options: ['사소한', '상당한', '일시적인', '표면적인'], answer: '상당한' },
  { id: 'lv5-v3', level: 5, category: 'vocabulary', question: '"Inevitable"의 뜻은?', options: ['피할 수 있는', '불가피한', '가능한', '모호한'], answer: '불가피한' },
  { id: 'lv5-v4', level: 5, category: 'vocabulary', question: '"Perspective"의 뜻은?', options: ['결론', '관점', '예외', '결과'], answer: '관점' },
  { id: 'lv5-r1', level: 5, category: 'reading', passage: 'Studies show that regular exercise not only improves physical health but also has significant benefits for mental well-being. People who exercise regularly report lower levels of stress and anxiety.', question: '이 글의 주요 내용은?', options: ['운동의 위험성', '운동이 신체와 정신 건강 모두에 좋다', '스트레스의 원인', '불안 장애 치료법'], answer: '운동이 신체와 정신 건강 모두에 좋다' },
  { id: 'lv5-r2', level: 5, category: 'reading', passage: 'Although renewable energy sources like solar and wind power are becoming cheaper, many countries still rely heavily on fossil fuels for electricity generation.', question: '많은 나라가 여전히 의존하는 것은?', options: ['태양광', '풍력', '화석 연료', '수력'], answer: '화석 연료' },
  { id: 'lv5-r3', level: 5, category: 'reading', passage: 'The restaurant was crowded and noisy, but the food was excellent. The waiter apologized for the long wait and offered us a free dessert.', question: '웨이터가 무료로 제공한 것은?', options: ['음료', '메인 요리', '디저트', '할인'], answer: '디저트' },
  { id: 'lv5-r4', level: 5, category: 'reading', passage: 'Many experts believe that learning a second language can delay the onset of dementia by several years. Bilingual people tend to have better cognitive flexibility than monolingual speakers.', question: '이중 언어 사용자의 장점은?', options: ['더 빠른 노화', '더 나은 인지 유연성', '더 높은 수입', '더 좋은 기억력만'], answer: '더 나은 인지 유연성' },
  { id: 'lv5-g1', level: 5, category: 'grammar', question: 'I wish I ____ more time to study.', options: ['have', 'had', 'having', 'will have'], answer: 'had' },
  { id: 'lv5-g2', level: 5, category: 'grammar', question: 'She asked me ____ I could help her with the project.', options: ['that', 'what', 'if', 'which'], answer: 'if' },
  { id: 'lv5-g3', level: 5, category: 'grammar', question: 'The report needs ____ by Friday.', options: ['finish', 'finishing', 'to be finished', 'finished'], answer: 'to be finished' },
  { id: 'lv5-g4', level: 5, category: 'grammar', question: 'Despite ____ hard, he failed the exam.', options: ['study', 'studying', 'studied', 'studies'], answer: 'studying' },

  // ===== Level 6 (B1+ 중급+) =====
  { id: 'lv6-v1', level: 6, category: 'vocabulary', question: '"Undermine"의 뜻은?', options: ['강화하다', '약화시키다', '무시하다', '설명하다'], answer: '약화시키다' },
  { id: 'lv6-v2', level: 6, category: 'vocabulary', question: '"Comprehensive"의 뜻은?', options: ['부분적인', '종합적인', '반복적인', '임시적인'], answer: '종합적인' },
  { id: 'lv6-v3', level: 6, category: 'vocabulary', question: '"Ambiguous"의 뜻은?', options: ['명확한', '모호한', '거대한', '야심 찬'], answer: '모호한' },
  { id: 'lv6-v4', level: 6, category: 'vocabulary', question: '"Elaborate"의 뜻은?', options: ['간단한', '정교한/상세한', '빠른', '기본적인'], answer: '정교한/상세한' },
  { id: 'lv6-r1', level: 6, category: 'reading', passage: 'The company decided to implement a four-day work week on a trial basis. Initial results showed a 20% increase in productivity and improved employee satisfaction, though some clients complained about reduced availability.', question: '4일 근무제의 부작용은?', options: ['생산성 저하', '직원 불만', '고객의 가용성 불만', '비용 증가'], answer: '고객의 가용성 불만' },
  { id: 'lv6-r2', level: 6, category: 'reading', passage: 'Despite advances in artificial intelligence, experts argue that human creativity and emotional intelligence remain irreplaceable in fields such as art, therapy, and education.', question: '전문가들이 AI로 대체 불가능하다고 보는 것은?', options: ['데이터 분석', '반복 업무', '창의성과 감성 지능', '제조 공정'], answer: '창의성과 감성 지능' },
  { id: 'lv6-r3', level: 6, category: 'reading', passage: 'Research indicates that people who spend more than two hours per day on social media are twice as likely to report feelings of loneliness compared to those who use it for less than 30 minutes.', question: '소셜 미디어 과다 사용의 결과는?', options: ['더 많은 친구', '외로움 증가', '생산성 향상', '수면 개선'], answer: '외로움 증가' },
  { id: 'lv6-r4', level: 6, category: 'reading', passage: 'The city council approved a plan to convert abandoned factories into affordable housing units. The project is expected to provide homes for over 500 families while preserving the industrial architecture.', question: '이 프로젝트의 특징은?', options: ['공장 철거', '고급 주택 건설', '산업 건축물 보존하며 주거지 전환', '새 공장 건설'], answer: '산업 건축물 보존하며 주거지 전환' },
  { id: 'lv6-g1', level: 6, category: 'grammar', question: 'The project ____ by the end of next month.', options: ['will complete', 'will be completed', 'is completing', 'completes'], answer: 'will be completed' },
  { id: 'lv6-g2', level: 6, category: 'grammar', question: 'Not only ____ she speak French, but she also speaks German.', options: ['do', 'does', 'did', 'is'], answer: 'does' },
  { id: 'lv6-g3', level: 6, category: 'grammar', question: 'He acted as if he ____ the answer all along.', options: ['knows', 'knew', 'knowing', 'has known'], answer: 'knew' },
  { id: 'lv6-g4', level: 6, category: 'grammar', question: 'The meeting, ____ was scheduled for Monday, has been postponed.', options: ['that', 'which', 'what', 'where'], answer: 'which' },

  // ===== Level 7 (B2 중상급) =====
  { id: 'lv7-v1', level: 7, category: 'vocabulary', question: '"Pragmatic"의 뜻은?', options: ['이상적인', '실용적인', '감성적인', '학술적인'], answer: '실용적인' },
  { id: 'lv7-v2', level: 7, category: 'vocabulary', question: '"Exacerbate"의 뜻은?', options: ['완화하다', '악화시키다', '분석하다', '축하하다'], answer: '악화시키다' },
  { id: 'lv7-v3', level: 7, category: 'vocabulary', question: '"Scrutinize"의 뜻은?', options: ['무시하다', '면밀히 조사하다', '요약하다', '확대하다'], answer: '면밀히 조사하다' },
  { id: 'lv7-v4', level: 7, category: 'vocabulary', question: '"Mitigate"의 뜻은?', options: ['증가시키다', '완화하다', '모방하다', '이전하다'], answer: '완화하다' },
  { id: 'lv7-r1', level: 7, category: 'reading', passage: 'The paradox of choice suggests that while having options is generally positive, an overabundance of choices can lead to decision paralysis and decreased satisfaction. Consumers in markets with fewer options often report higher contentment with their purchases.', question: '선택의 역설이 시사하는 것은?', options: ['선택이 많을수록 좋다', '선택이 너무 많으면 만족도가 떨어진다', '소비자는 항상 합리적이다', '시장 경쟁이 줄어야 한다'], answer: '선택이 너무 많으면 만족도가 떨어진다' },
  { id: 'lv7-r2', level: 7, category: 'reading', passage: 'Urban green spaces serve multiple functions: they mitigate the heat island effect, reduce air pollution, provide habitats for wildlife, and offer residents a place for recreation and relaxation, ultimately contributing to improved public health outcomes.', question: '도시 녹지 공간이 하지 않는 것은?', options: ['열섬 효과 완화', '대기 오염 감소', '교통 체증 해소', '주민 휴식 공간 제공'], answer: '교통 체증 해소' },
  { id: 'lv7-r3', level: 7, category: 'reading', passage: 'A growing body of evidence suggests that microplastics have infiltrated virtually every ecosystem on Earth, from deep ocean trenches to Arctic ice. The long-term health implications for both wildlife and humans remain poorly understood.', question: '미세플라스틱에 대해 아직 잘 모르는 것은?', options: ['분포 범위', '장기적 건강 영향', '화학적 구성', '생산량'], answer: '장기적 건강 영향' },
  { id: 'lv7-r4', level: 7, category: 'reading', passage: 'The shift toward remote work has prompted many companies to reconsider their real estate needs. Some have downsized their offices entirely, opting for flexible co-working spaces that employees can reserve as needed.', question: '기업들이 선택하는 대안은?', options: ['더 큰 사무실', '유연한 공유 오피스', '완전 출근제 복귀', '해외 사무실'], answer: '유연한 공유 오피스' },
  { id: 'lv7-g1', level: 7, category: 'grammar', question: 'Had I known about the delay, I ____ an earlier flight.', options: ['would book', 'would have booked', 'will book', 'had booked'], answer: 'would have booked' },
  { id: 'lv7-g2', level: 7, category: 'grammar', question: '____ the circumstances, we decided to postpone the event.', options: ['Given', 'Giving', 'Gave', 'Give'], answer: 'Given' },
  { id: 'lv7-g3', level: 7, category: 'grammar', question: 'It is essential that every student ____ the assignment on time.', options: ['submits', 'submit', 'submitted', 'submitting'], answer: 'submit' },
  { id: 'lv7-g4', level: 7, category: 'grammar', question: 'The more effort you put in, ____ results you get.', options: ['better', 'the better', 'best', 'the best'], answer: 'the better' },

  // ===== Level 8 (B2+ 상급) =====
  { id: 'lv8-v1', level: 8, category: 'vocabulary', question: '"Ubiquitous"의 뜻은?', options: ['희귀한', '어디에나 있는', '모호한', '독특한'], answer: '어디에나 있는' },
  { id: 'lv8-v2', level: 8, category: 'vocabulary', question: '"Ameliorate"의 뜻은?', options: ['악화시키다', '개선하다', '무시하다', '파괴하다'], answer: '개선하다' },
  { id: 'lv8-v3', level: 8, category: 'vocabulary', question: '"Convoluted"의 뜻은?', options: ['간결한', '복잡한/난해한', '명백한', '반복적인'], answer: '복잡한/난해한' },
  { id: 'lv8-v4', level: 8, category: 'vocabulary', question: '"Disparate"의 뜻은?', options: ['유사한', '이질적인/다른', '절망적인', '불균형한'], answer: '이질적인/다른' },
  { id: 'lv8-r1', level: 8, category: 'reading', passage: 'The gig economy has fundamentally altered traditional employment paradigms. While proponents cite flexibility and autonomy as key advantages, critics point to the erosion of worker protections, benefits, and job security that conventional employment typically provides.', question: '기그 경제 비판자들의 주요 우려는?', options: ['유연성 부족', '자율성 감소', '노동자 보호와 복지 약화', '기술 발전 저해'], answer: '노동자 보호와 복지 약화' },
  { id: 'lv8-r2', level: 8, category: 'reading', passage: 'Cognitive biases, such as confirmation bias and the Dunning-Kruger effect, systematically distort our perception of reality. Recognizing these biases is the first step toward more rational decision-making, though complete elimination remains elusive.', question: '이 글에 따르면, 편향에 대해 올바른 설명은?', options: ['완전히 제거 가능하다', '인지하는 것이 합리적 판단의 첫걸음이다', '교육으로 해결된다', '한 가지만 존재한다'], answer: '인지하는 것이 합리적 판단의 첫걸음이다' },
  { id: 'lv8-r3', level: 8, category: 'reading', passage: 'The concept of "nudging" in behavioral economics involves subtly altering the environment in which decisions are made to encourage better choices without restricting freedom. For instance, placing healthier foods at eye level in cafeterias increases their consumption.', question: '"넛지"의 핵심 특징은?', options: ['선택을 제한한다', '자유를 유지하면서 더 나은 선택을 유도한다', '벌칙을 부과한다', '정보를 숨긴다'], answer: '자유를 유지하면서 더 나은 선택을 유도한다' },
  { id: 'lv8-r4', level: 8, category: 'reading', passage: 'Interdisciplinary research has revealed that the boundaries between traditionally separate academic fields are increasingly artificial. The most groundbreaking discoveries often emerge at the intersection of disciplines, where novel connections spark innovative solutions.', question: '혁신적 발견이 주로 일어나는 곳은?', options: ['단일 분야 내', '학문 간 교차점', '이론적 연구', '기초 과학'], answer: '학문 간 교차점' },
  { id: 'lv8-g1', level: 8, category: 'grammar', question: 'The CEO emphasized that innovation ____ essential for the company\'s growth.', options: ['is', 'was', 'be', 'were'], answer: 'was' },
  { id: 'lv8-g2', level: 8, category: 'grammar', question: 'The more you practice, the ____ you will become.', options: ['confident', 'more confident', 'most confident', 'confidently'], answer: 'more confident' },
  { id: 'lv8-g3', level: 8, category: 'grammar', question: '____ having studied for weeks, she still felt unprepared for the exam.', options: ['Despite', 'Although', 'Because', 'Since'], answer: 'Despite' },
  { id: 'lv8-g4', level: 8, category: 'grammar', question: 'Under no circumstances ____ this information be shared with third parties.', options: ['should', 'shall', 'can', 'would'], answer: 'should' },

  // ===== Level 9 (C1 고급) =====
  { id: 'lv9-v1', level: 9, category: 'vocabulary', question: '"Juxtapose"의 뜻은?', options: ['분리하다', '나란히 놓다/대비하다', '결합하다', '제거하다'], answer: '나란히 놓다/대비하다' },
  { id: 'lv9-v2', level: 9, category: 'vocabulary', question: '"Ephemeral"의 뜻은?', options: ['영원한', '덧없는', '거대한', '정확한'], answer: '덧없는' },
  { id: 'lv9-v3', level: 9, category: 'vocabulary', question: '"Surreptitious"의 뜻은?', options: ['공개적인', '은밀한', '우연한', '과감한'], answer: '은밀한' },
  { id: 'lv9-v4', level: 9, category: 'vocabulary', question: '"Perfunctory"의 뜻은?', options: ['완벽한', '형식적인/건성의', '기능적인', '영구적인'], answer: '형식적인/건성의' },
  { id: 'lv9-r1', level: 9, category: 'reading', passage: 'The notion that language merely reflects thought has been supplanted by the Sapir-Whorf hypothesis, which posits that linguistic structures actively shape cognitive processes. This linguistic relativity, while contested in its strong form, has gained empirical support in studies demonstrating that speakers of different languages perceive temporal and spatial relationships differently.', question: '사피어-워프 가설의 핵심 주장은?', options: ['언어는 사고를 반영할 뿐이다', '언어 구조가 인지 과정을 형성한다', '모든 언어는 동일한 구조를 가진다', '언어는 문화와 무관하다'], answer: '언어 구조가 인지 과정을 형성한다' },
  { id: 'lv9-r2', level: 9, category: 'reading', passage: 'The precautionary principle in environmental policy holds that when an action poses potential threats to the environment or public health, precautionary measures should be taken even in the absence of complete scientific certainty. Critics argue this can stifle innovation and impose disproportionate costs.', question: '사전예방 원칙에 대한 비판은?', options: ['과학적 근거가 없다', '환경을 보호하지 못한다', '혁신을 저해하고 과도한 비용을 초래할 수 있다', '너무 느슨하다'], answer: '혁신을 저해하고 과도한 비용을 초래할 수 있다' },
  { id: 'lv9-r3', level: 9, category: 'reading', passage: 'Epistemic humility — the recognition that one\'s knowledge is fundamentally limited and potentially flawed — is paradoxically most difficult to cultivate precisely when it is most needed: in domains where we feel most confident. Overconfidence in our understanding often correlates inversely with actual expertise.', question: '인식적 겸손이 가장 어려운 때는?', options: ['무지할 때', '자신감이 가장 클 때', '학습 초기', '실패 후'], answer: '자신감이 가장 클 때' },
  { id: 'lv9-r4', level: 9, category: 'reading', passage: 'The commodification of personal data has created what scholars term "surveillance capitalism," wherein human experience is unilaterally claimed as free raw material for translation into behavioral data. These data are then processed into prediction products that anticipate what individuals will do.', question: '"감시 자본주의"에서 원재료로 사용되는 것은?', options: ['금융 데이터', '인간 경험/행동 데이터', '기업 비밀', '정부 기록'], answer: '인간 경험/행동 데이터' },
  { id: 'lv9-g1', level: 9, category: 'grammar', question: 'The report, ____ was submitted last week, contained several errors.', options: ['that', 'which', 'what', 'whose'], answer: 'which' },
  { id: 'lv9-g2', level: 9, category: 'grammar', question: 'Seldom ____ such a compelling argument in academic discourse.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], answer: 'have I seen' },
  { id: 'lv9-g3', level: 9, category: 'grammar', question: 'The proposal was rejected on the grounds ____ it lacked sufficient evidence.', options: ['that', 'which', 'what', 'where'], answer: 'that' },
  { id: 'lv9-g4', level: 9, category: 'grammar', question: 'Were the situation ____ different, we might reconsider our position.', options: ['any', 'some', 'much', 'very'], answer: 'any' },

  // ===== Level 10 (C1+ 최고급) =====
  { id: 'lv10-v1', level: 10, category: 'vocabulary', question: '"Obfuscate"의 뜻은?', options: ['명확히 하다', '혼란스럽게 하다', '간소화하다', '강조하다'], answer: '혼란스럽게 하다' },
  { id: 'lv10-v2', level: 10, category: 'vocabulary', question: '"Recalcitrant"의 뜻은?', options: ['순종적인', '완고하게 저항하는', '신중한', '관대한'], answer: '완고하게 저항하는' },
  { id: 'lv10-v3', level: 10, category: 'vocabulary', question: '"Perspicacious"의 뜻은?', options: ['땀이 나는', '통찰력 있는', '집요한', '비관적인'], answer: '통찰력 있는' },
  { id: 'lv10-v4', level: 10, category: 'vocabulary', question: '"Antithetical"의 뜻은?', options: ['보완적인', '정반대의', '역사적인', '이론적인'], answer: '정반대의' },
  { id: 'lv10-r1', level: 10, category: 'reading', passage: 'The entrenchment of algorithmic governance in judicial systems raises profound epistemological questions. When predictive algorithms inform sentencing decisions, the opacity of their decision-making processes — often termed "black box" systems — fundamentally challenges the principle of transparent justice and the defendant\'s right to understand the basis of their sentence.', question: '이 글이 제기하는 핵심 문제는?', options: ['알고리즘의 정확성', '알고리즘의 불투명성이 투명한 사법 원칙에 도전한다', '판사의 역량 부족', 'AI 기술의 비용'], answer: '알고리즘의 불투명성이 투명한 사법 원칙에 도전한다' },
  { id: 'lv10-r2', level: 10, category: 'reading', passage: 'Postcolonial scholars have critiqued the universalist claims of Western epistemology, arguing that knowledge production is inherently situated within specific cultural, historical, and power contexts. This challenges the notion of objective, culture-free knowledge and calls for epistemic pluralism.', question: '탈식민주의 학자들이 주장하는 것은?', options: ['서양 인식론은 보편적이다', '지식 생산은 문화와 권력의 맥락에 위치한다', '객관적 지식은 존재한다', '인식론적 일원주의가 필요하다'], answer: '지식 생산은 문화와 권력의 맥락에 위치한다' },
  { id: 'lv10-r3', level: 10, category: 'reading', passage: 'The ontological status of mathematical objects remains one of philosophy\'s most intractable problems. Platonists argue that numbers exist independently of human minds, while nominalists contend they are merely useful fictions — linguistic conventions that facilitate communication about patterns in the physical world.', question: '유명론자(nominalists)의 입장은?', options: ['수는 독립적으로 존재한다', '수는 유용한 허구이다', '수학은 불필요하다', '수는 신이 만들었다'], answer: '수는 유용한 허구이다' },
  { id: 'lv10-r4', level: 10, category: 'reading', passage: 'Quantum entanglement defies classical intuitions about locality and causation. When two entangled particles are measured, the correlation between their states instantaneously transcends spatial separation, a phenomenon Einstein famously dismissed as "spooky action at a distance."', question: '아인슈타인이 양자 얽힘에 대해 가진 태도는?', options: ['열렬히 지지했다', '회의적이었다', '무관심했다', '자신이 발견했다'], answer: '회의적이었다' },
  { id: 'lv10-g1', level: 10, category: 'grammar', question: 'Hardly ____ the meeting started when the fire alarm went off.', options: ['has', 'had', 'did', 'was'], answer: 'had' },
  { id: 'lv10-g2', level: 10, category: 'grammar', question: '____ it not been for her intervention, the negotiations would have collapsed entirely.', options: ['Had', 'Have', 'Has', 'If'], answer: 'Had' },
  { id: 'lv10-g3', level: 10, category: 'grammar', question: 'The thesis, ____ implications extend far beyond the academic sphere, warrants further investigation.', options: ['that', 'which', 'whose', 'whom'], answer: 'whose' },
  { id: 'lv10-g4', level: 10, category: 'grammar', question: 'So pervasive ____ the influence of social media that it has reshaped political discourse globally.', options: ['is', 'was', 'has', 'does'], answer: 'is' },
]

/** 특정 레벨의 문제 중 count개를 랜덤으로 반환 (카테고리 균형 유지) */
export function getRandomQuestionsForLevel(level: number, count: number, excludeIds: Set<string> = new Set()): LevelTestQuestion[] {
  let lvQuestions = levelTestQuestions.filter(q => q.level === level && !excludeIds.has(q.id))

  // 제외 후 문제가 부족하면 제외 조건 해제 (같은 레벨 반복 테스트 시)
  if (lvQuestions.length < count) {
    lvQuestions = levelTestQuestions.filter(q => q.level === level)
  }

  const vocab = shuffleArray(lvQuestions.filter(q => q.category === 'vocabulary'))
  const reading = shuffleArray(lvQuestions.filter(q => q.category === 'reading'))
  const grammar = shuffleArray(lvQuestions.filter(q => q.category === 'grammar'))

  // 카테고리별 균등 배분
  const perCategory = Math.floor(count / 3)
  const remainder = count % 3

  const selected: LevelTestQuestion[] = [
    ...vocab.slice(0, perCategory + (remainder > 0 ? 1 : 0)),
    ...reading.slice(0, perCategory + (remainder > 1 ? 1 : 0)),
    ...grammar.slice(0, perCategory),
  ]

  // 부족하면 남은 문제에서 채움
  if (selected.length < count) {
    const usedIds = new Set(selected.map(q => q.id))
    const remaining = lvQuestions.filter(q => !usedIds.has(q.id))
    selected.push(...shuffleArray(remaining).slice(0, count - selected.length))
  }

  return shuffleArray(selected).slice(0, count)
}

/** 이전 호환용 */
export function getQuestionsForLevel(level: number): LevelTestQuestion[] {
  return getRandomQuestionsForLevel(level, 6)
}
