import type { Theme, Unit, Expression, Vocabulary } from './types'

// ===== Lv.8 상급+ (B2+): 학술적 표현과 분석적 사고 =====
// ===== Lv.9 고급 (C1): 정교한 논증과 격식체 구사 =====
// ===== Lv.10 최고급 (C1+): 수사적 표현과 원어민 수준 뉘앙스 =====

export const themes_lv8_10: Theme[] = [
  // Lv.8 테마
  { id: 'lv8-t1', levelId: 8, name: '학술과 연구', description: '학술 논문, 연구 방법론, 학문적 글쓰기', order: 1 },
  { id: 'lv8-t2', levelId: 8, name: '글로벌 이슈', description: '국제 문제, 세계 경제, 지속가능 발전', order: 2 },
  { id: 'lv8-t3', levelId: 8, name: '심리와 행동', description: '인간 심리, 행동 패턴, 동기 부여', order: 3 },

  // Lv.9 테마
  { id: 'lv9-t1', levelId: 9, name: '문학과 비평', description: '문학 작품 분석, 비평적 글쓰기, 서사 구조', order: 1 },
  { id: 'lv9-t2', levelId: 9, name: '정치와 외교', description: '국제 정치, 외교 전략, 정책 토론', order: 2 },
  { id: 'lv9-t3', levelId: 9, name: '과학과 혁신', description: '첨단 기술, 과학적 발견, 윤리적 쟁점', order: 3 },

  // Lv.10 테마
  { id: 'lv10-t1', levelId: 10, name: '언어와 커뮤니케이션', description: '언어학, 담화 분석, 의사소통의 본질', order: 1 },
  { id: 'lv10-t2', levelId: 10, name: '철학적 사고', description: '윤리, 존재론, 인식론적 논의', order: 2 },
  { id: 'lv10-t3', levelId: 10, name: '리더십과 변화', description: '조직 변혁, 사회 운동, 비전 제시', order: 3 },
]

export const units_lv8_10: Unit[] = [
  // Lv.8 Theme 1: 학술과 연구
  { id: 'lv8-t1-u1', themeId: 'lv8-t1', name: '연구 방법론', description: '연구 설계, 가설 수립, 데이터 분석 표현', order: 1 },
  { id: 'lv8-t1-u2', themeId: 'lv8-t1', name: '학술적 글쓰기', description: '논문 구조, 인용, 학문적 어조', order: 2 },

  // Lv.8 Theme 2: 글로벌 이슈
  { id: 'lv8-t2-u1', themeId: 'lv8-t2', name: '경제와 불평등', description: '세계 경제, 빈부 격차, 무역 문제', order: 1 },
  { id: 'lv8-t2-u2', themeId: 'lv8-t2', name: '기후 위기와 대응', description: '기후변화 정책, 국제 협약, 환경 정의', order: 2 },

  // Lv.8 Theme 3: 심리와 행동
  { id: 'lv8-t3-u1', themeId: 'lv8-t3', name: '인지 편향', description: '인지적 오류, 의사결정의 심리', order: 1 },
  { id: 'lv8-t3-u2', themeId: 'lv8-t3', name: '동기와 습관', description: '내재적·외재적 동기, 습관 형성', order: 2 },

  // Lv.9 Theme 1: 문학과 비평
  { id: 'lv9-t1-u1', themeId: 'lv9-t1', name: '서사와 관점', description: '서술 기법, 시점, 신뢰할 수 없는 화자', order: 1 },
  { id: 'lv9-t1-u2', themeId: 'lv9-t1', name: '비평적 분석', description: '문학 이론, 작품 해석, 맥락적 읽기', order: 2 },

  // Lv.9 Theme 2: 정치와 외교
  { id: 'lv9-t2-u1', themeId: 'lv9-t2', name: '외교와 협상', description: '다자 외교, 협상 전략, 조약과 합의', order: 1 },
  { id: 'lv9-t2-u2', themeId: 'lv9-t2', name: '정책 토론', description: '정책 분석, 찬반 논쟁, 제도적 관점', order: 2 },

  // Lv.9 Theme 3: 과학과 혁신
  { id: 'lv9-t3-u1', themeId: 'lv9-t3', name: '과학적 발견', description: '돌파구적 연구, 패러다임 전환', order: 1 },
  { id: 'lv9-t3-u2', themeId: 'lv9-t3', name: '기술 윤리', description: 'AI 윤리, 생명공학, 기술의 사회적 영향', order: 2 },

  // Lv.10 Theme 1: 언어와 커뮤니케이션
  { id: 'lv10-t1-u1', themeId: 'lv10-t1', name: '언어의 힘', description: '프레이밍, 수사학, 언어와 권력', order: 1 },
  { id: 'lv10-t1-u2', themeId: 'lv10-t1', name: '담화와 맥락', description: '화용론, 함축, 비언어적 소통', order: 2 },

  // Lv.10 Theme 2: 철학적 사고
  { id: 'lv10-t2-u1', themeId: 'lv10-t2', name: '윤리적 딜레마', description: '도덕 철학, 의무론 vs 결과론', order: 1 },
  { id: 'lv10-t2-u2', themeId: 'lv10-t2', name: '지식과 진리', description: '인식론, 회의주의, 진리의 본질', order: 2 },

  // Lv.10 Theme 3: 리더십과 변화
  { id: 'lv10-t3-u1', themeId: 'lv10-t3', name: '변혁적 리더십', description: '비전 제시, 조직 문화, 변화 관리', order: 1 },
  { id: 'lv10-t3-u2', themeId: 'lv10-t3', name: '사회 운동과 영향력', description: '풀뿌리 운동, 공론화, 제도적 변화', order: 2 },
]

export const expressions_lv8_10: Expression[] = [
  // ===== Lv.8 학술과 연구 =====

  // --- Lv.8 연구 방법론 ---
  { id: 'e-lv8-t1-u1-1', unitId: 'lv8-t1-u1', english: 'The findings suggest a strong correlation between sleep deprivation and impaired cognitive function.', korean: '연구 결과는 수면 부족과 인지 기능 저하 사이에 강한 상관관계가 있음을 시사합니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t1-u1-2', unitId: 'lv8-t1-u1', english: 'While the sample size was relatively small, the results are nonetheless statistically significant.', korean: '표본 크기가 비교적 작았지만, 그럼에도 불구하고 결과는 통계적으로 유의미합니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t1-u1-3', unitId: 'lv8-t1-u1', english: 'Further research is warranted to determine whether these preliminary findings can be replicated across diverse populations.', korean: '이러한 예비 결과가 다양한 인구 집단에서 재현될 수 있는지 판단하기 위해 추가 연구가 필요합니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.8 학술적 글쓰기 ---
  { id: 'e-lv8-t1-u2-1', unitId: 'lv8-t1-u2', english: 'It could be argued that the existing literature overlooks a crucial dimension of this phenomenon.', korean: '기존 문헌이 이 현상의 핵심적인 차원을 간과하고 있다고 주장할 수 있습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t1-u2-2', unitId: 'lv8-t1-u2', english: 'This paper seeks to bridge the gap between theoretical frameworks and empirical evidence.', korean: '본 논문은 이론적 틀과 실증적 증거 사이의 간극을 메우고자 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv8-t1-u2-3', unitId: 'lv8-t1-u2', english: 'The author\'s argument, while compelling on the surface, fails to account for several confounding variables.', korean: '저자의 주장은 표면적으로는 설득력이 있으나, 여러 교란 변수를 고려하지 못하고 있습니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.8 글로벌 이슈 =====

  // --- Lv.8 경제와 불평등 ---
  { id: 'e-lv8-t2-u1-1', unitId: 'lv8-t2-u1', english: 'The widening wealth gap poses a fundamental threat to social cohesion and democratic governance.', korean: '심화되는 부의 격차는 사회적 결속력과 민주적 거버넌스에 근본적인 위협이 됩니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t2-u1-2', unitId: 'lv8-t2-u1', english: 'Proponents of free trade argue that globalization, on balance, has lifted millions out of poverty.', korean: '자유무역 지지자들은 세계화가 전반적으로 수백만 명을 빈곤에서 벗어나게 했다고 주장합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv8-t2-u1-3', unitId: 'lv8-t2-u1', english: 'Unless structural inequalities are addressed at their root, economic growth alone will not ensure equitable development.', korean: '구조적 불평등이 근본적으로 해결되지 않는 한, 경제 성장만으로는 공평한 발전을 보장할 수 없습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.8 기후 위기와 대응 ---
  { id: 'e-lv8-t2-u2-1', unitId: 'lv8-t2-u2', english: 'The scientific consensus is unequivocal: human activity is the primary driver of climate change.', korean: '과학적 합의는 명확합니다. 인간 활동이 기후변화의 주된 원인이라는 것입니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t2-u2-2', unitId: 'lv8-t2-u2', english: 'Developing nations bear a disproportionate burden of climate impacts despite contributing the least to emissions.', korean: '개발도상국은 탄소 배출 기여도가 가장 낮음에도 불구하고 기후 영향의 불균형적인 부담을 지고 있습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv8-t2-u2-3', unitId: 'lv8-t2-u2', english: 'Carbon neutrality by 2050 is an ambitious but achievable target, provided there is sufficient political will.', korean: '2050년까지의 탄소중립은 야심 찬 목표이지만, 충분한 정치적 의지가 뒷받침된다면 달성 가능합니다.', difficulty: 4, isAiGenerated: false },

  // ===== Lv.8 심리와 행동 =====

  // --- Lv.8 인지 편향 ---
  { id: 'e-lv8-t3-u1-1', unitId: 'lv8-t3-u1', english: 'Confirmation bias leads us to selectively seek out information that reinforces our preexisting beliefs.', korean: '확증 편향은 우리가 기존 신념을 강화하는 정보만 선택적으로 찾게 만듭니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t3-u1-2', unitId: 'lv8-t3-u1', english: 'We tend to overestimate the likelihood of events that are vivid or emotionally charged — a phenomenon known as the availability heuristic.', korean: '우리는 생생하거나 감정적으로 강렬한 사건의 가능성을 과대평가하는 경향이 있는데, 이를 가용성 휴리스틱이라 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv8-t3-u1-3', unitId: 'lv8-t3-u1', english: 'Being aware of one\'s cognitive biases does not automatically make one immune to them.', korean: '자신의 인지 편향을 인식한다고 해서 자동으로 그것에 면역이 되는 것은 아닙니다.', difficulty: 4, isAiGenerated: false },

  // --- Lv.8 동기와 습관 ---
  { id: 'e-lv8-t3-u2-1', unitId: 'lv8-t3-u2', english: 'Intrinsic motivation — the drive that comes from within — tends to be more sustainable than external rewards.', korean: '내재적 동기, 즉 내면에서 우러나오는 추진력은 외적 보상보다 지속 가능한 경향이 있습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv8-t3-u2-2', unitId: 'lv8-t3-u2', english: 'Habits are not merely behaviors; they are deeply ingrained neurological patterns that resist conscious intervention.', korean: '습관은 단순한 행동이 아니라, 의식적 개입에 저항하는 깊이 각인된 신경학적 패턴입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv8-t3-u2-3', unitId: 'lv8-t3-u2', english: 'The key to lasting behavioral change lies not in willpower but in reshaping the environment that triggers the behavior.', korean: '지속적인 행동 변화의 핵심은 의지력이 아니라 행동을 촉발하는 환경을 재설계하는 데 있습니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.9 문학과 비평 =====

  // --- Lv.9 서사와 관점 ---
  { id: 'e-lv9-t1-u1-1', unitId: 'lv9-t1-u1', english: 'The unreliable narrator compels the reader to question not only the story but the very act of storytelling itself.', korean: '신뢰할 수 없는 화자는 독자로 하여금 이야기뿐만 아니라 이야기하기라는 행위 자체를 의심하게 만듭니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t1-u1-2', unitId: 'lv9-t1-u1', english: 'By shifting between first and third person, the author creates a deliberate sense of emotional distance and intimacy in alternation.', korean: '1인칭과 3인칭을 오가며, 저자는 감정적 거리감과 친밀감을 교대로 의도적으로 조성합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t1-u1-3', unitId: 'lv9-t1-u1', english: 'What makes the novel so unsettling is not what is said, but what is conspicuously left unsaid.', korean: '이 소설을 불안하게 만드는 것은 말해진 것이 아니라, 의도적으로 말해지지 않은 것입니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.9 비평적 분석 ---
  { id: 'e-lv9-t1-u2-1', unitId: 'lv9-t1-u2', english: 'A postcolonial reading of this text reveals the subtle ways in which power dynamics are encoded in the language itself.', korean: '이 텍스트를 탈식민주의적으로 읽으면, 권력 관계가 언어 자체에 미묘하게 내재되어 있는 방식이 드러납니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t1-u2-2', unitId: 'lv9-t1-u2', english: 'The recurring motif of water functions as both a symbol of renewal and an omen of destruction throughout the narrative.', korean: '물이라는 반복 모티프는 서사 전반에 걸쳐 재생의 상징이자 파멸의 전조로 기능합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t1-u2-3', unitId: 'lv9-t1-u2', english: 'To reduce this work to a mere allegory would be to strip it of its rich ambiguity and layered meaning.', korean: '이 작품을 단순한 알레고리로 축소하는 것은 풍부한 모호성과 다층적 의미를 벗겨내는 것이 될 것입니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.9 정치와 외교 =====

  // --- Lv.9 외교와 협상 ---
  { id: 'e-lv9-t2-u1-1', unitId: 'lv9-t2-u1', english: 'The resolution was passed unanimously, though several member states expressed reservations in their explanatory statements.', korean: '결의안은 만장일치로 통과되었으나, 여러 회원국이 해명 성명에서 유보적 입장을 표명했습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t2-u1-2', unitId: 'lv9-t2-u1', english: 'Diplomatic language is often deliberately ambiguous, allowing each party to interpret the agreement in a manner favorable to their interests.', korean: '외교적 언어는 종종 의도적으로 모호하여, 각 당사국이 자국의 이익에 유리한 방식으로 합의를 해석할 수 있게 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t2-u1-3', unitId: 'lv9-t2-u1', english: 'Multilateral negotiations require a delicate balancing act between national sovereignty and collective responsibility.', korean: '다자 협상은 국가 주권과 집단적 책임 사이에서 미묘한 균형을 잡아야 합니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.9 정책 토론 ---
  { id: 'e-lv9-t2-u2-1', unitId: 'lv9-t2-u2', english: 'The policy, however well-intentioned, has had a number of unintended consequences that undermine its stated objectives.', korean: '이 정책은 아무리 선의에서 비롯되었다 해도, 명시된 목표를 훼손하는 여러 의도치 않은 결과를 낳았습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t2-u2-2', unitId: 'lv9-t2-u2', english: 'One must be cautious about conflating correlation with causation when evaluating the efficacy of public health interventions.', korean: '공중보건 개입의 효과를 평가할 때 상관관계를 인과관계와 혼동하지 않도록 주의해야 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t2-u2-3', unitId: 'lv9-t2-u2', english: 'The debate ultimately hinges on whether we prioritize short-term economic gains or long-term institutional resilience.', korean: '이 논쟁은 결국 단기적 경제적 이득과 장기적 제도적 회복력 중 무엇을 우선시하느냐에 달려 있습니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.9 과학과 혁신 =====

  // --- Lv.9 과학적 발견 ---
  { id: 'e-lv9-t3-u1-1', unitId: 'lv9-t3-u1', english: 'The discovery fundamentally upended decades of received wisdom about the structure of the universe.', korean: '이 발견은 우주의 구조에 대한 수십 년간의 정설을 근본적으로 뒤집어 놓았습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t3-u1-2', unitId: 'lv9-t3-u1', english: 'What began as an anomalous data point eventually led to a paradigm shift in our understanding of genetic inheritance.', korean: '이상 데이터 하나에서 출발한 것이 결국 유전적 유전에 대한 우리의 이해에 패러다임 전환을 가져왔습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t3-u1-3', unitId: 'lv9-t3-u1', english: 'Peer review, for all its imperfections, remains the most reliable safeguard against the publication of flawed research.', korean: '동료 심사는 불완전함에도 불구하고, 결함 있는 연구의 출판을 방지하는 가장 신뢰할 만한 안전장치입니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.9 기술 윤리 ---
  { id: 'e-lv9-t3-u2-1', unitId: 'lv9-t3-u2', english: 'The ethical implications of artificial intelligence extend far beyond privacy concerns to encompass questions of autonomy, accountability, and human dignity.', korean: 'AI의 윤리적 함의는 프라이버시 문제를 훨씬 넘어 자율성, 책임 소재, 인간 존엄성의 문제까지 아우릅니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t3-u2-2', unitId: 'lv9-t3-u2', english: 'The question is not whether technology can do something, but whether it ought to — and who gets to decide.', korean: '문제는 기술이 무엇을 할 수 있느냐가 아니라, 해야 하느냐 — 그리고 누가 그것을 결정하느냐입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv9-t3-u2-3', unitId: 'lv9-t3-u2', english: 'Algorithmic bias is not a glitch to be patched; it is a reflection of the societal inequities embedded in the data we feed these systems.', korean: '알고리즘 편향은 수정하면 되는 오류가 아니라, 시스템에 입력하는 데이터에 내재된 사회적 불평등의 반영입니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.10 언어와 커뮤니케이션 =====

  // --- Lv.10 언어의 힘 ---
  { id: 'e-lv10-t1-u1-1', unitId: 'lv10-t1-u1', english: 'The way we frame a question invariably shapes the range of answers we are willing to entertain.', korean: '질문을 어떻게 틀 짓느냐에 따라, 우리가 기꺼이 수용하는 답변의 범위가 필연적으로 달라집니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t1-u1-2', unitId: 'lv10-t1-u1', english: 'Language does not merely describe reality — it constructs, constrains, and occasionally distorts it in ways we scarcely notice.', korean: '언어는 단순히 현실을 묘사하는 것이 아니라, 우리가 거의 인지하지 못하는 방식으로 현실을 구성하고, 제한하며, 때로는 왜곡합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t1-u1-3', unitId: 'lv10-t1-u1', english: 'A well-turned phrase can do what no amount of data ever could: move people to act against their own inertia.', korean: '잘 다듬어진 한 문장은 아무리 많은 데이터도 하지 못하는 일을 할 수 있습니다. 바로 사람들이 자신의 관성을 극복하고 행동하게 만드는 것입니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.10 담화와 맥락 ---
  { id: 'e-lv10-t1-u2-1', unitId: 'lv10-t1-u2', english: 'What renders sarcasm so treacherous in cross-cultural communication is that it relies entirely on shared assumptions that may not, in fact, be shared.', korean: '풍자가 이문화 간 소통에서 그토록 위험한 이유는, 실제로는 공유되지 않을 수 있는 공통 전제에 전적으로 의존하기 때문입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t1-u2-2', unitId: 'lv10-t1-u2', english: 'The most consequential things in a conversation are often communicated not through words but through their conspicuous absence.', korean: '대화에서 가장 중대한 것들은 흔히 말을 통해서가 아니라, 말의 의미심장한 부재를 통해 전달됩니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t1-u2-3', unitId: 'lv10-t1-u2', english: 'Pragmatic competence — knowing what to say, when, to whom, and crucially, what not to say — is the hallmark of true fluency.', korean: '화용적 능력, 즉 무엇을 언제, 누구에게 말해야 하는지, 그리고 결정적으로 무엇을 말하지 말아야 하는지를 아는 것이야말로 진정한 유창성의 표지입니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.10 철학적 사고 =====

  // --- Lv.10 윤리적 딜레마 ---
  { id: 'e-lv10-t2-u1-1', unitId: 'lv10-t2-u1', english: 'The utilitarian calculus breaks down precisely at the point where individual rights collide with the aggregate good.', korean: '공리주의적 계산은 정확히 개인의 권리가 전체의 이익과 충돌하는 지점에서 무너집니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t2-u1-2', unitId: 'lv10-t2-u1', english: 'To act morally is not simply to follow rules; it is to wrestle, often inconclusively, with the tension between competing obligations.', korean: '도덕적으로 행동한다는 것은 단순히 규칙을 따르는 것이 아니라, 서로 상충하는 의무 사이의 긴장과 — 종종 결론 없이 — 씨름하는 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t2-u1-3', unitId: 'lv10-t2-u1', english: 'The uncomfortable truth is that moral clarity is often a luxury afforded only in retrospect, never in the moment of decision.', korean: '불편한 진실은, 도덕적 명확성이란 대개 결정의 순간이 아니라 사후에야 비로소 가능한 사치라는 것입니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.10 지식과 진리 ---
  { id: 'e-lv10-t2-u2-1', unitId: 'lv10-t2-u2', english: 'Certainty, far from being the pinnacle of knowledge, may in fact be its most insidious impediment.', korean: '확신은 지식의 정점이기는커녕, 실은 지식에 대한 가장 교활한 장애물일 수 있습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t2-u2-2', unitId: 'lv10-t2-u2', english: 'The moment we claim to know something beyond doubt, we have, paradoxically, ceased to think critically about it.', korean: '어떤 것을 의심의 여지 없이 안다고 주장하는 순간, 역설적으로 우리는 그것에 대한 비판적 사고를 멈춘 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t2-u2-3', unitId: 'lv10-t2-u2', english: 'What we call "truth" is less a fixed destination than an asymptote — something we approach but never quite reach.', korean: '우리가 "진리"라 부르는 것은 고정된 도달점이라기보다 점근선에 가깝습니다. 다가갈 수는 있지만 결코 완전히 닿지는 못하는 것입니다.', difficulty: 5, isAiGenerated: false },

  // ===== Lv.10 리더십과 변화 =====

  // --- Lv.10 변혁적 리더십 ---
  { id: 'e-lv10-t3-u1-1', unitId: 'lv10-t3-u1', english: 'The most effective leaders do not impose a vision from above; they cultivate the conditions under which a shared vision can emerge organically.', korean: '가장 효과적인 리더는 위에서 비전을 강요하는 것이 아니라, 공유된 비전이 자연스럽게 형성될 수 있는 조건을 조성합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t3-u1-2', unitId: 'lv10-t3-u1', english: 'Institutional change is glacial by nature — those who mistake the absence of visible progress for the absence of progress altogether are destined to give up prematurely.', korean: '제도적 변화는 본질적으로 더디기 마련입니다. 눈에 보이는 진전이 없다고 진전 자체가 없다고 착각하는 이들은 필연적으로 조기에 포기하게 됩니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t3-u1-3', unitId: 'lv10-t3-u1', english: 'Authority conferred by title commands compliance; authority earned through integrity inspires commitment.', korean: '직함으로 부여된 권위는 복종을 이끌어내지만, 진정성으로 획득한 권위는 헌신을 불러일으킵니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.10 사회 운동과 영향력 ---
  { id: 'e-lv10-t3-u2-1', unitId: 'lv10-t3-u2', english: 'Every social movement begins with the radical act of refusing to accept what everyone else has come to regard as inevitable.', korean: '모든 사회 운동은 다른 모든 사람이 불가피하다고 받아들이게 된 것을 거부하는 급진적 행위에서 시작됩니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t3-u2-2', unitId: 'lv10-t3-u2', english: 'The arc of progress is neither linear nor guaranteed; it bends only when enough people summon the will to bend it.', korean: '진보의 궤적은 직선적이지도, 보장된 것도 아닙니다. 그것은 충분한 수의 사람들이 구부리겠다는 의지를 불러일으킬 때에만 휘어집니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv10-t3-u2-3', unitId: 'lv10-t3-u2', english: 'Lasting change seldom arrives with fanfare; more often, it seeps in quietly until the world it has reshaped can no longer remember what came before.', korean: '지속적인 변화는 좀처럼 화려하게 오지 않습니다. 대개는 조용히 스며들어, 변화가 재편한 세상이 이전의 모습을 더 이상 기억하지 못할 때까지 이어집니다.', difficulty: 5, isAiGenerated: false },
]

export const vocabulary_lv8_10: Vocabulary[] = [
  // ===== Lv.8 학술과 연구 =====

  // --- Lv.8 연구 방법론 ---
  { id: 'v-lv8-t1-u1-1', unitId: 'lv8-t1-u1', word: 'correlation', meaning: '상관관계', partOfSpeech: '명사', exampleSentence: 'Correlation does not imply causation.', exampleTranslation: '상관관계가 인과관계를 의미하지는 않는다.', isAiGenerated: false },
  { id: 'v-lv8-t1-u1-2', unitId: 'lv8-t1-u1', word: 'replicate', meaning: '재현하다, 복제하다', partOfSpeech: '동사', exampleSentence: 'Subsequent studies failed to replicate the original findings.', exampleTranslation: '후속 연구들은 원래의 결과를 재현하는 데 실패했다.', isAiGenerated: false },
  { id: 'v-lv8-t1-u1-3', unitId: 'lv8-t1-u1', word: 'preliminary', meaning: '예비적인, 사전의', partOfSpeech: '형용사', exampleSentence: 'The preliminary data are promising but inconclusive.', exampleTranslation: '예비 데이터는 유망하지만 결론적이지는 않다.', isAiGenerated: false },
  { id: 'v-lv8-t1-u1-4', unitId: 'lv8-t1-u1', word: 'warrant', meaning: '정당화하다, 보증하다', partOfSpeech: '동사', exampleSentence: 'The severity of the issue warrants immediate attention.', exampleTranslation: '이 문제의 심각성은 즉각적인 관심을 정당화한다.', isAiGenerated: false },

  // --- Lv.8 학술적 글쓰기 ---
  { id: 'v-lv8-t1-u2-1', unitId: 'lv8-t1-u2', word: 'compelling', meaning: '설득력 있는, 강렬한', partOfSpeech: '형용사', exampleSentence: 'She presented a compelling case for reform.', exampleTranslation: '그녀는 개혁에 대한 설득력 있는 주장을 제시했다.', isAiGenerated: false },
  { id: 'v-lv8-t1-u2-2', unitId: 'lv8-t1-u2', word: 'empirical', meaning: '실증적인, 경험에 기반한', partOfSpeech: '형용사', exampleSentence: 'The theory lacks empirical support.', exampleTranslation: '그 이론은 실증적 뒷받침이 부족하다.', isAiGenerated: false },
  { id: 'v-lv8-t1-u2-3', unitId: 'lv8-t1-u2', word: 'confounding', meaning: '교란하는, 혼란을 주는', partOfSpeech: '형용사', exampleSentence: 'Researchers must control for confounding variables.', exampleTranslation: '연구자들은 교란 변수를 통제해야 한다.', isAiGenerated: false },
  { id: 'v-lv8-t1-u2-4', unitId: 'lv8-t1-u2', word: 'bridge the gap', meaning: '간극을 메우다', partOfSpeech: '숙어', exampleSentence: 'The program aims to bridge the gap between theory and practice.', exampleTranslation: '이 프로그램은 이론과 실천의 간극을 메우는 것을 목표로 한다.', isAiGenerated: false },

  // ===== Lv.8 글로벌 이슈 =====

  // --- Lv.8 경제와 불평등 ---
  { id: 'v-lv8-t2-u1-1', unitId: 'lv8-t2-u1', word: 'cohesion', meaning: '결속력, 응집력', partOfSpeech: '명사', exampleSentence: 'Social cohesion is essential for a stable democracy.', exampleTranslation: '사회적 결속력은 안정적인 민주주의에 필수적이다.', isAiGenerated: false },
  { id: 'v-lv8-t2-u1-2', unitId: 'lv8-t2-u1', word: 'equitable', meaning: '공평한, 공정한', partOfSpeech: '형용사', exampleSentence: 'We need a more equitable distribution of resources.', exampleTranslation: '우리는 자원의 더 공평한 분배가 필요하다.', isAiGenerated: false },
  { id: 'v-lv8-t2-u1-3', unitId: 'lv8-t2-u1', word: 'proponent', meaning: '지지자, 옹호자', partOfSpeech: '명사', exampleSentence: 'Proponents of the bill argue it will reduce inequality.', exampleTranslation: '법안 지지자들은 그것이 불평등을 줄일 것이라고 주장한다.', isAiGenerated: false },
  { id: 'v-lv8-t2-u1-4', unitId: 'lv8-t2-u1', word: 'structural', meaning: '구조적인', partOfSpeech: '형용사', exampleSentence: 'Structural reforms are needed to address systemic poverty.', exampleTranslation: '체계적 빈곤을 해결하려면 구조적 개혁이 필요하다.', isAiGenerated: false },

  // --- Lv.8 기후 위기와 대응 ---
  { id: 'v-lv8-t2-u2-1', unitId: 'lv8-t2-u2', word: 'unequivocal', meaning: '명백한, 분명한', partOfSpeech: '형용사', exampleSentence: 'The evidence for climate change is unequivocal.', exampleTranslation: '기후변화에 대한 증거는 명백하다.', isAiGenerated: false },
  { id: 'v-lv8-t2-u2-2', unitId: 'lv8-t2-u2', word: 'disproportionate', meaning: '불균형적인, 과도한', partOfSpeech: '형용사', exampleSentence: 'Low-income communities face a disproportionate share of environmental risks.', exampleTranslation: '저소득 지역사회는 환경 위험의 불균형적인 몫을 감당한다.', isAiGenerated: false },
  { id: 'v-lv8-t2-u2-3', unitId: 'lv8-t2-u2', word: 'carbon neutrality', meaning: '탄소중립', partOfSpeech: '명사', exampleSentence: 'Many countries have pledged to achieve carbon neutrality by mid-century.', exampleTranslation: '많은 국가가 금세기 중반까지 탄소중립을 달성하겠다고 약속했다.', isAiGenerated: false },
  { id: 'v-lv8-t2-u2-4', unitId: 'lv8-t2-u2', word: 'consensus', meaning: '합의, 총의', partOfSpeech: '명사', exampleSentence: 'There is a growing scientific consensus on the issue.', exampleTranslation: '이 문제에 대한 과학적 합의가 점점 커지고 있다.', isAiGenerated: false },

  // ===== Lv.8 심리와 행동 =====

  // --- Lv.8 인지 편향 ---
  { id: 'v-lv8-t3-u1-1', unitId: 'lv8-t3-u1', word: 'confirmation bias', meaning: '확증 편향', partOfSpeech: '명사', exampleSentence: 'Confirmation bias makes it difficult to evaluate evidence objectively.', exampleTranslation: '확증 편향은 증거를 객관적으로 평가하기 어렵게 만든다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u1-2', unitId: 'lv8-t3-u1', word: 'heuristic', meaning: '휴리스틱, 어림법', partOfSpeech: '명사', exampleSentence: 'Mental heuristics help us make quick decisions but can lead to errors.', exampleTranslation: '정신적 휴리스틱은 빠른 결정을 도와주지만 오류로 이어질 수 있다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u1-3', unitId: 'lv8-t3-u1', word: 'overestimate', meaning: '과대평가하다', partOfSpeech: '동사', exampleSentence: 'People tend to overestimate their own abilities.', exampleTranslation: '사람들은 자신의 능력을 과대평가하는 경향이 있다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u1-4', unitId: 'lv8-t3-u1', word: 'immune', meaning: '면역이 된, 영향을 받지 않는', partOfSpeech: '형용사', exampleSentence: 'No one is immune to the effects of cognitive bias.', exampleTranslation: '인지 편향의 영향에 면역인 사람은 없다.', isAiGenerated: false },

  // --- Lv.8 동기와 습관 ---
  { id: 'v-lv8-t3-u2-1', unitId: 'lv8-t3-u2', word: 'intrinsic', meaning: '내재적인, 본질적인', partOfSpeech: '형용사', exampleSentence: 'Intrinsic motivation is driven by personal satisfaction.', exampleTranslation: '내재적 동기는 개인적 만족감에 의해 작동한다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u2-2', unitId: 'lv8-t3-u2', word: 'ingrained', meaning: '깊이 각인된, 뿌리 깊은', partOfSpeech: '형용사', exampleSentence: 'These attitudes are so deeply ingrained that they are hard to change.', exampleTranslation: '이런 태도는 너무 깊이 각인되어 바꾸기가 어렵다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u2-3', unitId: 'lv8-t3-u2', word: 'intervention', meaning: '개입, 중재', partOfSpeech: '명사', exampleSentence: 'Early intervention can prevent the development of chronic habits.', exampleTranslation: '조기 개입은 만성적 습관의 형성을 방지할 수 있다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u2-4', unitId: 'lv8-t3-u2', word: 'sustainable', meaning: '지속 가능한', partOfSpeech: '형용사', exampleSentence: 'Building sustainable habits requires patience and consistency.', exampleTranslation: '지속 가능한 습관을 만들려면 인내와 일관성이 필요하다.', isAiGenerated: false },
  { id: 'v-lv8-t3-u2-5', unitId: 'lv8-t3-u2', word: 'trigger', meaning: '촉발 요인, 유발하다', partOfSpeech: '명사/동사', exampleSentence: 'Stress can trigger unhealthy eating patterns.', exampleTranslation: '스트레스는 건강하지 못한 식습관을 촉발할 수 있다.', isAiGenerated: false },

  // ===== Lv.9 문학과 비평 =====

  // --- Lv.9 서사와 관점 ---
  { id: 'v-lv9-t1-u1-1', unitId: 'lv9-t1-u1', word: 'unreliable narrator', meaning: '신뢰할 수 없는 화자', partOfSpeech: '명사', exampleSentence: 'The unreliable narrator is a hallmark of modernist fiction.', exampleTranslation: '신뢰할 수 없는 화자는 모더니즘 소설의 특징이다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u1-2', unitId: 'lv9-t1-u1', word: 'deliberate', meaning: '의도적인, 신중한', partOfSpeech: '형용사', exampleSentence: 'The pacing of the novel feels deliberate and controlled.', exampleTranslation: '소설의 전개 속도는 의도적이고 절제된 느낌이다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u1-3', unitId: 'lv9-t1-u1', word: 'unsettling', meaning: '불안하게 하는, 동요시키는', partOfSpeech: '형용사', exampleSentence: 'The story\'s ending is deeply unsettling.', exampleTranslation: '그 이야기의 결말은 매우 불안하게 한다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u1-4', unitId: 'lv9-t1-u1', word: 'conspicuously', meaning: '눈에 띄게, 두드러지게', partOfSpeech: '부사', exampleSentence: 'The protagonist is conspicuously absent from the final chapter.', exampleTranslation: '주인공은 마지막 장에서 눈에 띄게 부재한다.', isAiGenerated: false },

  // --- Lv.9 비평적 분석 ---
  { id: 'v-lv9-t1-u2-1', unitId: 'lv9-t1-u2', word: 'motif', meaning: '모티프, 주제적 요소', partOfSpeech: '명사', exampleSentence: 'The motif of exile recurs throughout the poet\'s body of work.', exampleTranslation: '유배의 모티프는 그 시인의 전 작품에 걸쳐 반복된다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u2-2', unitId: 'lv9-t1-u2', word: 'allegory', meaning: '알레고리, 풍유', partOfSpeech: '명사', exampleSentence: 'The novel can be read as an allegory of political corruption.', exampleTranslation: '그 소설은 정치적 부패의 알레고리로 읽힐 수 있다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u2-3', unitId: 'lv9-t1-u2', word: 'ambiguity', meaning: '모호성, 다의성', partOfSpeech: '명사', exampleSentence: 'The poem\'s strength lies in its deliberate ambiguity.', exampleTranslation: '그 시의 강점은 의도적 모호성에 있다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u2-4', unitId: 'lv9-t1-u2', word: 'postcolonial', meaning: '탈식민주의적', partOfSpeech: '형용사', exampleSentence: 'Postcolonial criticism interrogates the legacy of empire in literary texts.', exampleTranslation: '탈식민주의 비평은 문학 텍스트 속 제국의 유산을 심문한다.', isAiGenerated: false },
  { id: 'v-lv9-t1-u2-5', unitId: 'lv9-t1-u2', word: 'encode', meaning: '내포하다, 부호화하다', partOfSpeech: '동사', exampleSentence: 'Cultural values are encoded in the language of everyday discourse.', exampleTranslation: '문화적 가치는 일상 담화의 언어 속에 내포되어 있다.', isAiGenerated: false },

  // ===== Lv.9 정치와 외교 =====

  // --- Lv.9 외교와 협상 ---
  { id: 'v-lv9-t2-u1-1', unitId: 'lv9-t2-u1', word: 'unanimously', meaning: '만장일치로', partOfSpeech: '부사', exampleSentence: 'The council voted unanimously to impose sanctions.', exampleTranslation: '위원회는 제재를 부과하기로 만장일치로 투표했다.', isAiGenerated: false },
  { id: 'v-lv9-t2-u1-2', unitId: 'lv9-t2-u1', word: 'reservation', meaning: '유보, 단서', partOfSpeech: '명사', exampleSentence: 'Several delegates voiced their reservations about the treaty.', exampleTranslation: '여러 대표단이 조약에 대한 유보적 입장을 표명했다.', isAiGenerated: false },
  { id: 'v-lv9-t2-u1-3', unitId: 'lv9-t2-u1', word: 'sovereignty', meaning: '주권', partOfSpeech: '명사', exampleSentence: 'National sovereignty remains a contentious issue in international law.', exampleTranslation: '국가 주권은 국제법에서 여전히 논쟁적인 문제다.', isAiGenerated: false },
  { id: 'v-lv9-t2-u1-4', unitId: 'lv9-t2-u1', word: 'multilateral', meaning: '다자간의', partOfSpeech: '형용사', exampleSentence: 'Multilateral cooperation is essential for addressing global challenges.', exampleTranslation: '다자 협력은 글로벌 과제를 해결하는 데 필수적이다.', isAiGenerated: false },

  // --- Lv.9 정책 토론 ---
  { id: 'v-lv9-t2-u2-1', unitId: 'lv9-t2-u2', word: 'unintended consequences', meaning: '의도치 않은 결과', partOfSpeech: '명사', exampleSentence: 'Every policy carries the risk of unintended consequences.', exampleTranslation: '모든 정책에는 의도치 않은 결과의 위험이 따른다.', isAiGenerated: false },
  { id: 'v-lv9-t2-u2-2', unitId: 'lv9-t2-u2', word: 'efficacy', meaning: '효능, 유효성', partOfSpeech: '명사', exampleSentence: 'The efficacy of the vaccine has been demonstrated in clinical trials.', exampleTranslation: '백신의 유효성은 임상 시험에서 입증되었다.', isAiGenerated: false },
  { id: 'v-lv9-t2-u2-3', unitId: 'lv9-t2-u2', word: 'conflate', meaning: '혼동하다, 합치다', partOfSpeech: '동사', exampleSentence: 'Critics often conflate economic growth with social progress.', exampleTranslation: '비평가들은 종종 경제 성장을 사회적 진보와 혼동한다.', isAiGenerated: false },
  { id: 'v-lv9-t2-u2-4', unitId: 'lv9-t2-u2', word: 'resilience', meaning: '회복력, 탄력성', partOfSpeech: '명사', exampleSentence: 'Building institutional resilience is a long-term investment.', exampleTranslation: '제도적 회복력을 구축하는 것은 장기적 투자이다.', isAiGenerated: false },

  // ===== Lv.9 과학과 혁신 =====

  // --- Lv.9 과학적 발견 ---
  { id: 'v-lv9-t3-u1-1', unitId: 'lv9-t3-u1', word: 'paradigm shift', meaning: '패러다임 전환', partOfSpeech: '명사', exampleSentence: 'The theory of relativity represented a paradigm shift in physics.', exampleTranslation: '상대성 이론은 물리학에서의 패러다임 전환을 나타냈다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u1-2', unitId: 'lv9-t3-u1', word: 'anomalous', meaning: '이례적인, 변칙적인', partOfSpeech: '형용사', exampleSentence: 'The anomalous results prompted a complete reassessment of the hypothesis.', exampleTranslation: '이례적인 결과가 가설의 전면 재검토를 촉발했다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u1-3', unitId: 'lv9-t3-u1', word: 'upend', meaning: '뒤집다, 전복하다', partOfSpeech: '동사', exampleSentence: 'New evidence has upended long-held assumptions about human migration.', exampleTranslation: '새로운 증거가 인류 이주에 대한 오래된 가정을 뒤집었다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u1-4', unitId: 'lv9-t3-u1', word: 'peer review', meaning: '동료 심사', partOfSpeech: '명사', exampleSentence: 'The paper has undergone rigorous peer review before publication.', exampleTranslation: '그 논문은 출판 전에 엄격한 동료 심사를 거쳤다.', isAiGenerated: false },

  // --- Lv.9 기술 윤리 ---
  { id: 'v-lv9-t3-u2-1', unitId: 'lv9-t3-u2', word: 'accountability', meaning: '책임 소재, 책무성', partOfSpeech: '명사', exampleSentence: 'There must be clear lines of accountability when AI systems make critical decisions.', exampleTranslation: 'AI 시스템이 중대한 결정을 내릴 때 명확한 책임 소재가 있어야 한다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u2-2', unitId: 'lv9-t3-u2', word: 'autonomy', meaning: '자율성, 자주성', partOfSpeech: '명사', exampleSentence: 'The right to personal autonomy is at the heart of the bioethics debate.', exampleTranslation: '개인 자율성에 대한 권리는 생명윤리 논쟁의 핵심에 있다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u2-3', unitId: 'lv9-t3-u2', word: 'algorithmic bias', meaning: '알고리즘 편향', partOfSpeech: '명사', exampleSentence: 'Algorithmic bias can perpetuate discrimination at an unprecedented scale.', exampleTranslation: '알고리즘 편향은 전례 없는 규모로 차별을 영속화할 수 있다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u2-4', unitId: 'lv9-t3-u2', word: 'encompass', meaning: '아우르다, 포함하다', partOfSpeech: '동사', exampleSentence: 'The new framework encompasses environmental, social, and governance criteria.', exampleTranslation: '새 프레임워크는 환경, 사회, 거버넌스 기준을 아우른다.', isAiGenerated: false },
  { id: 'v-lv9-t3-u2-5', unitId: 'lv9-t3-u2', word: 'inequity', meaning: '불공정, 불평등', partOfSpeech: '명사', exampleSentence: 'Systemic inequities are perpetuated through institutional structures.', exampleTranslation: '제도적 구조를 통해 체계적 불공정이 영속화된다.', isAiGenerated: false },

  // ===== Lv.10 언어와 커뮤니케이션 =====

  // --- Lv.10 언어의 힘 ---
  { id: 'v-lv10-t1-u1-1', unitId: 'lv10-t1-u1', word: 'invariably', meaning: '변함없이, 항상', partOfSpeech: '부사', exampleSentence: 'Power dynamics invariably shape the way discourse unfolds.', exampleTranslation: '권력 관계는 변함없이 담화가 전개되는 방식을 형성한다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u1-2', unitId: 'lv10-t1-u1', word: 'framing', meaning: '틀 짓기, 프레이밍', partOfSpeech: '명사', exampleSentence: 'Media framing can fundamentally alter public perception of an event.', exampleTranslation: '미디어의 프레이밍은 사건에 대한 대중의 인식을 근본적으로 바꿀 수 있다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u1-3', unitId: 'lv10-t1-u1', word: 'inertia', meaning: '관성, 타성', partOfSpeech: '명사', exampleSentence: 'Organizational inertia is the greatest obstacle to innovation.', exampleTranslation: '조직적 관성은 혁신의 가장 큰 장애물이다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u1-4', unitId: 'lv10-t1-u1', word: 'well-turned', meaning: '잘 다듬어진, 세련된', partOfSpeech: '형용사', exampleSentence: 'A well-turned phrase can resonate far longer than a lengthy argument.', exampleTranslation: '잘 다듬어진 한마디가 긴 논증보다 훨씬 오래 울림을 줄 수 있다.', isAiGenerated: false },

  // --- Lv.10 담화와 맥락 ---
  { id: 'v-lv10-t1-u2-1', unitId: 'lv10-t1-u2', word: 'treacherous', meaning: '위험한, 기만적인', partOfSpeech: '형용사', exampleSentence: 'Idiomatic expressions can be treacherous for non-native speakers.', exampleTranslation: '관용 표현은 비원어민에게 위험할 수 있다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u2-2', unitId: 'lv10-t1-u2', word: 'pragmatic competence', meaning: '화용적 능력', partOfSpeech: '명사', exampleSentence: 'Pragmatic competence develops only through sustained exposure to authentic discourse.', exampleTranslation: '화용적 능력은 진정한 담화에 지속적으로 노출될 때에만 발달한다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u2-3', unitId: 'lv10-t1-u2', word: 'implicature', meaning: '함축, 추론적 의미', partOfSpeech: '명사', exampleSentence: 'Conversational implicature is what we mean beyond what we literally say.', exampleTranslation: '대화적 함축은 우리가 문자적으로 말하는 것 너머의 의미이다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u2-4', unitId: 'lv10-t1-u2', word: 'consequential', meaning: '중대한, 결과적으로 중요한', partOfSpeech: '형용사', exampleSentence: 'The most consequential decisions are often made in the margins of formal meetings.', exampleTranslation: '가장 중대한 결정은 종종 공식 회의의 여백에서 이루어진다.', isAiGenerated: false },
  { id: 'v-lv10-t1-u2-5', unitId: 'lv10-t1-u2', word: 'hallmark', meaning: '특징, 전형적 표지', partOfSpeech: '명사', exampleSentence: 'Nuance and restraint are the hallmarks of mature prose.', exampleTranslation: '뉘앙스와 절제는 성숙한 산문의 특징이다.', isAiGenerated: false },

  // ===== Lv.10 철학적 사고 =====

  // --- Lv.10 윤리적 딜레마 ---
  { id: 'v-lv10-t2-u1-1', unitId: 'lv10-t2-u1', word: 'utilitarian', meaning: '공리주의적인', partOfSpeech: '형용사', exampleSentence: 'A purely utilitarian approach ignores the intrinsic value of individual rights.', exampleTranslation: '순수하게 공리주의적인 접근은 개인 권리의 본질적 가치를 무시한다.', isAiGenerated: false },
  { id: 'v-lv10-t2-u1-2', unitId: 'lv10-t2-u1', word: 'inconclusively', meaning: '결론 없이, 불확정적으로', partOfSpeech: '부사', exampleSentence: 'The debate ended inconclusively, with neither side willing to concede.', exampleTranslation: '어느 쪽도 양보하지 않아 논쟁은 결론 없이 끝났다.', isAiGenerated: false },
  { id: 'v-lv10-t2-u1-3', unitId: 'lv10-t2-u1', word: 'in retrospect', meaning: '돌이켜 보면, 사후적으로', partOfSpeech: '부사구', exampleSentence: 'In retrospect, the warning signs were obvious all along.', exampleTranslation: '돌이켜 보면 경고 신호는 처음부터 분명했다.', isAiGenerated: false },
  { id: 'v-lv10-t2-u1-4', unitId: 'lv10-t2-u1', word: 'wrestle with', meaning: '~와 씨름하다, 고심하다', partOfSpeech: '동사구', exampleSentence: 'Policymakers continue to wrestle with the ethical implications of gene editing.', exampleTranslation: '정책 입안자들은 유전자 편집의 윤리적 함의와 계속 씨름하고 있다.', isAiGenerated: false },

  // --- Lv.10 지식과 진리 ---
  { id: 'v-lv10-t2-u2-1', unitId: 'lv10-t2-u2', word: 'insidious', meaning: '교활한, 서서히 퍼지는', partOfSpeech: '형용사', exampleSentence: 'Misinformation is insidious precisely because it often contains a kernel of truth.', exampleTranslation: '잘못된 정보가 교활한 이유는 정확히 그것이 종종 진실의 핵심을 담고 있기 때문이다.', isAiGenerated: false },
  { id: 'v-lv10-t2-u2-2', unitId: 'lv10-t2-u2', word: 'asymptote', meaning: '점근선', partOfSpeech: '명사', exampleSentence: 'Perfection, like an asymptote, can be approached but never attained.', exampleTranslation: '완벽함은 점근선처럼 다가갈 수는 있지만 결코 도달할 수 없다.', isAiGenerated: false },
  { id: 'v-lv10-t2-u2-3', unitId: 'lv10-t2-u2', word: 'paradoxically', meaning: '역설적으로', partOfSpeech: '부사', exampleSentence: 'Paradoxically, the more information we have, the harder it becomes to discern the truth.', exampleTranslation: '역설적으로, 우리가 가진 정보가 많을수록 진실을 분별하기 더 어려워진다.', isAiGenerated: false },
  { id: 'v-lv10-t2-u2-4', unitId: 'lv10-t2-u2', word: 'impediment', meaning: '장애물, 방해', partOfSpeech: '명사', exampleSentence: 'Dogma is the greatest impediment to intellectual progress.', exampleTranslation: '도그마는 지적 발전의 가장 큰 장애물이다.', isAiGenerated: false },

  // ===== Lv.10 리더십과 변화 =====

  // --- Lv.10 변혁적 리더십 ---
  { id: 'v-lv10-t3-u1-1', unitId: 'lv10-t3-u1', word: 'cultivate', meaning: '조성하다, 기르다', partOfSpeech: '동사', exampleSentence: 'Great leaders cultivate trust through consistency and transparency.', exampleTranslation: '훌륭한 리더는 일관성과 투명성을 통해 신뢰를 조성한다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u1-2', unitId: 'lv10-t3-u1', word: 'glacial', meaning: '더딘, 빙하의', partOfSpeech: '형용사', exampleSentence: 'Bureaucratic reform proceeds at a glacial pace.', exampleTranslation: '관료적 개혁은 더딘 속도로 진행된다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u1-3', unitId: 'lv10-t3-u1', word: 'confer', meaning: '부여하다, 수여하다', partOfSpeech: '동사', exampleSentence: 'A title alone does not confer the ability to lead.', exampleTranslation: '직함만으로는 리더십을 발휘할 능력이 부여되지 않는다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u1-4', unitId: 'lv10-t3-u1', word: 'compliance', meaning: '순응, 준수', partOfSpeech: '명사', exampleSentence: 'There is a world of difference between compliance and genuine commitment.', exampleTranslation: '순응과 진정한 헌신 사이에는 엄청난 차이가 있다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u1-5', unitId: 'lv10-t3-u1', word: 'organically', meaning: '유기적으로, 자연스럽게', partOfSpeech: '부사', exampleSentence: 'The best ideas emerge organically when people feel safe to speak freely.', exampleTranslation: '사람들이 자유롭게 말할 수 있을 때 최고의 아이디어가 자연스럽게 나온다.', isAiGenerated: false },

  // --- Lv.10 사회 운동과 영향력 ---
  { id: 'v-lv10-t3-u2-1', unitId: 'lv10-t3-u2', word: 'radical', meaning: '급진적인, 근본적인', partOfSpeech: '형용사', exampleSentence: 'What was once considered radical often becomes the new common sense.', exampleTranslation: '한때 급진적이라 여겨진 것이 종종 새로운 상식이 된다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u2-2', unitId: 'lv10-t3-u2', word: 'summon', meaning: '불러일으키다, 소환하다', partOfSpeech: '동사', exampleSentence: 'It takes courage to summon the will to challenge entrenched norms.', exampleTranslation: '확고한 규범에 도전하려는 의지를 불러일으키려면 용기가 필요하다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u2-3', unitId: 'lv10-t3-u2', word: 'fanfare', meaning: '화려한 환영, 팡파르', partOfSpeech: '명사', exampleSentence: 'The policy was introduced with little fanfare but had enormous impact.', exampleTranslation: '그 정책은 별다른 팡파르 없이 도입되었지만 엄청난 영향을 미쳤다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u2-4', unitId: 'lv10-t3-u2', word: 'seep', meaning: '스며들다, 배어들다', partOfSpeech: '동사', exampleSentence: 'Cultural change seeps in gradually, often beneath the threshold of conscious awareness.', exampleTranslation: '문화적 변화는 종종 의식적 인지의 문턱 아래에서 서서히 스며든다.', isAiGenerated: false },
  { id: 'v-lv10-t3-u2-5', unitId: 'lv10-t3-u2', word: 'inevitable', meaning: '불가피한, 필연적인', partOfSpeech: '형용사', exampleSentence: 'Change is not inevitable — it is the product of sustained collective effort.', exampleTranslation: '변화는 불가피한 것이 아니라, 지속적인 집단적 노력의 산물이다.', isAiGenerated: false },
]
