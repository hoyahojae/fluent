import type { Theme, Unit, Expression, Vocabulary } from './types'

// ===== Lv.6 중상급 (B2): 뉴스, 문화, 과학 주제의 심화 영어 =====
// ===== Lv.7 상급 (B2+): 비즈니스, 법/사회, 철학/윤리 영어 =====

export const themes_lv6_7: Theme[] = [
  // Lv.6 테마
  { id: 'lv6-t1', levelId: 6, name: '뉴스와 시사', description: '뉴스 보도, 시사 이슈 분석과 토론', order: 1 },
  { id: 'lv6-t2', levelId: 6, name: '문화와 예술', description: '문학, 미술, 공연 등 예술 전반에 대한 논의', order: 2 },
  { id: 'lv6-t3', levelId: 6, name: '환경과 과학', description: '과학 기술, 환경 정책, 연구 결과 논의', order: 3 },

  // Lv.7 테마
  { id: 'lv7-t1', levelId: 7, name: '비즈니스와 경제', description: '경제 동향, 기업 전략, 투자와 시장 분석', order: 1 },
  { id: 'lv7-t2', levelId: 7, name: '법과 사회 제도', description: '법률 체계, 인권, 사회 제도 논의', order: 2 },
  { id: 'lv7-t3', levelId: 7, name: '철학과 윤리', description: '윤리적 딜레마, 철학적 사유, 가치관 토론', order: 3 },
]

export const units_lv6_7: Unit[] = [
  // Lv.6 Theme 1: 뉴스와 시사
  { id: 'lv6-t1-u1', themeId: 'lv6-t1', name: '뉴스 보도와 미디어 리터러시', description: '뉴스 분석, 편향 파악, 미디어 비평', order: 1 },
  { id: 'lv6-t1-u2', themeId: 'lv6-t1', name: '국제 정세와 외교', description: '국제 관계, 분쟁, 외교적 표현', order: 2 },
  { id: 'lv6-t1-u3', themeId: 'lv6-t1', name: '사회 변화와 여론', description: '사회 운동, 세대 갈등, 여론 형성', order: 3 },

  // Lv.6 Theme 2: 문화와 예술
  { id: 'lv6-t2-u1', themeId: 'lv6-t2', name: '문학과 서평', description: '문학 작품 분석, 서평 작성', order: 1 },
  { id: 'lv6-t2-u2', themeId: 'lv6-t2', name: '현대 미술과 전시', description: '미술 감상, 전시 리뷰, 예술적 해석', order: 2 },
  { id: 'lv6-t2-u3', themeId: 'lv6-t2', name: '공연 예술과 비평', description: '연극, 음악 공연에 대한 비평적 표현', order: 3 },

  // Lv.6 Theme 3: 환경과 과학
  { id: 'lv6-t3-u1', themeId: 'lv6-t3', name: '기후 위기와 정책', description: '기후 변화 대응, 환경 정책 토론', order: 1 },
  { id: 'lv6-t3-u2', themeId: 'lv6-t3', name: '과학 연구와 혁신', description: '연구 결과 해석, 과학적 논증', order: 2 },

  // Lv.7 Theme 1: 비즈니스와 경제
  { id: 'lv7-t1-u1', themeId: 'lv7-t1', name: '경제 동향과 시장 분석', description: '거시경제, 시장 트렌드 분석과 전망', order: 1 },
  { id: 'lv7-t1-u2', themeId: 'lv7-t1', name: '기업 전략과 경영', description: '사업 전략, 인수합병, 기업 거버넌스', order: 2 },
  { id: 'lv7-t1-u3', themeId: 'lv7-t1', name: '투자와 금융', description: '투자 전략, 리스크 관리, 금융 상품', order: 3 },

  // Lv.7 Theme 2: 법과 사회 제도
  { id: 'lv7-t2-u1', themeId: 'lv7-t2', name: '법률 체계와 권리', description: '헌법, 기본권, 법적 절차', order: 1 },
  { id: 'lv7-t2-u2', themeId: 'lv7-t2', name: '사회 정의와 제도 개혁', description: '불평등, 복지, 제도적 개선', order: 2 },

  // Lv.7 Theme 3: 철학과 윤리
  { id: 'lv7-t3-u1', themeId: 'lv7-t3', name: '윤리적 딜레마', description: '도덕적 판단, 윤리적 갈등 상황', order: 1 },
  { id: 'lv7-t3-u2', themeId: 'lv7-t3', name: '철학적 사유와 가치관', description: '존재, 자유, 정의에 대한 철학적 논의', order: 2 },
  { id: 'lv7-t3-u3', themeId: 'lv7-t3', name: '기술 윤리와 미래', description: 'AI 윤리, 생명윤리, 기술의 사회적 책임', order: 3 },
]

export const expressions_lv6_7: Expression[] = [
  // --- Lv.6 뉴스 보도와 미디어 리터러시 ---
  { id: 'e-lv6-t1-u1-1', unitId: 'lv6-t1-u1', english: 'The article was criticized for being heavily biased toward the government\'s position.', korean: '그 기사는 정부 입장에 크게 편향되어 있다는 비판을 받았습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u1-2', unitId: 'lv6-t1-u1', english: 'It is reported that the negotiations have been suspended indefinitely.', korean: '협상이 무기한 중단된 것으로 보도되었습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u1-3', unitId: 'lv6-t1-u1', english: 'Reliable sources should always be cross-referenced before drawing any conclusions.', korean: '어떤 결론을 내리기 전에 신뢰할 수 있는 출처를 항상 교차 확인해야 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u1-4', unitId: 'lv6-t1-u1', english: 'The headline was deliberately misleading, which is a common tactic in sensationalist journalism.', korean: '그 헤드라인은 의도적으로 오해를 유발했는데, 이는 선정주의 저널리즘에서 흔한 수법입니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 국제 정세와 외교 ---
  { id: 'e-lv6-t1-u2-1', unitId: 'lv6-t1-u2', english: 'The ambassador stated that diplomatic relations between the two countries had reached a critical juncture.', korean: '대사는 양국 간 외교 관계가 중대한 국면에 도달했다고 밝혔습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u2-2', unitId: 'lv6-t1-u2', english: 'Economic sanctions were imposed in response to the alleged human rights violations.', korean: '인권 침해 혐의에 대한 대응으로 경제 제재가 부과되었습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u2-3', unitId: 'lv6-t1-u2', english: 'A ceasefire agreement was brokered by the United Nations after months of conflict.', korean: '수개월간의 분쟁 끝에 유엔의 중재로 휴전 협정이 체결되었습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 사회 변화와 여론 ---
  { id: 'e-lv6-t1-u3-1', unitId: 'lv6-t1-u3', english: 'Public opinion has shifted dramatically in favor of stricter regulations on data privacy.', korean: '데이터 프라이버시에 대한 더 엄격한 규제를 지지하는 방향으로 여론이 극적으로 변했습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u3-2', unitId: 'lv6-t1-u3', english: 'The generational divide on this issue is more pronounced than many analysts had anticipated.', korean: '이 문제에 대한 세대 간 격차는 많은 분석가들이 예상했던 것보다 더 뚜렷합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t1-u3-3', unitId: 'lv6-t1-u3', english: 'Grassroots movements have proven to be remarkably effective in shaping policy reform.', korean: '풀뿌리 운동은 정책 개혁을 이끄는 데 놀라울 정도로 효과적인 것으로 입증되었습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 문학과 서평 ---
  { id: 'e-lv6-t2-u1-1', unitId: 'lv6-t2-u1', english: 'The novel explores themes of identity and belonging through the lens of a displaced family.', korean: '이 소설은 이주 가족의 시선을 통해 정체성과 소속감이라는 주제를 탐구합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t2-u1-2', unitId: 'lv6-t2-u1', english: 'The author\'s use of unreliable narration keeps the reader constantly questioning what is real.', korean: '작가의 불신뢰 화자 기법은 독자로 하여금 무엇이 진실인지 끊임없이 의문을 품게 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t2-u1-3', unitId: 'lv6-t2-u1', english: 'Despite receiving mixed reviews from critics, the book resonated deeply with a wide audience.', korean: '평론가들의 엇갈린 평가에도 불구하고, 이 책은 폭넓은 독자층에게 깊은 공감을 불러일으켰습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 현대 미술과 전시 ---
  { id: 'e-lv6-t2-u2-1', unitId: 'lv6-t2-u2', english: 'The installation challenges conventional notions of what constitutes art in the modern era.', korean: '이 설치 미술은 현대에 무엇이 예술을 구성하는지에 대한 기존 관념에 도전합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t2-u2-2', unitId: 'lv6-t2-u2', english: 'The artist is said to have been heavily influenced by the surrealist movement of the 1920s.', korean: '그 예술가는 1920년대 초현실주의 운동에 큰 영향을 받은 것으로 알려져 있습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t2-u2-3', unitId: 'lv6-t2-u2', english: 'The exhibition was curated to provoke dialogue about cultural appropriation in contemporary art.', korean: '이 전시는 현대 미술에서 문화 전유에 대한 대화를 촉발하기 위해 기획되었습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 공연 예술과 비평 ---
  { id: 'e-lv6-t2-u3-1', unitId: 'lv6-t2-u3', english: 'The lead actor delivered a performance that was both emotionally raw and technically flawless.', korean: '주연 배우는 감정적으로 날것이면서도 기술적으로 완벽한 연기를 선보였습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t2-u3-2', unitId: 'lv6-t2-u3', english: 'The choreography was praised for seamlessly blending traditional and contemporary dance styles.', korean: '안무는 전통 무용과 현대 무용 스타일을 매끄럽게 융합한 점에서 호평을 받았습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t2-u3-3', unitId: 'lv6-t2-u3', english: 'It is widely acknowledged that the conductor\'s interpretation brought new depth to the symphony.', korean: '지휘자의 해석이 교향곡에 새로운 깊이를 부여했다는 것은 널리 인정받고 있습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 기후 위기와 정책 ---
  { id: 'e-lv6-t3-u1-1', unitId: 'lv6-t3-u1', english: 'If drastic measures are not taken within the next decade, the consequences of climate change will be irreversible.', korean: '향후 10년 내에 과감한 조치를 취하지 않으면, 기후 변화의 결과는 되돌릴 수 없게 될 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t3-u1-2', unitId: 'lv6-t3-u1', english: 'The policy was designed to incentivize corporations to reduce their carbon footprint significantly.', korean: '이 정책은 기업들이 탄소 발자국을 대폭 줄이도록 동기를 부여하기 위해 설계되었습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t3-u1-3', unitId: 'lv6-t3-u1', english: 'Developing nations argue that they should not bear the same burden as industrialized countries.', korean: '개발도상국들은 산업화된 국가들과 같은 부담을 져서는 안 된다고 주장합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t3-u1-4', unitId: 'lv6-t3-u1', english: 'The transition to renewable energy is being hindered by a lack of political will.', korean: '재생 에너지로의 전환은 정치적 의지의 부족으로 인해 저해되고 있습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.6 과학 연구와 혁신 ---
  { id: 'e-lv6-t3-u2-1', unitId: 'lv6-t3-u2', english: 'The findings suggest that the vaccine is effective against multiple variants of the virus.', korean: '연구 결과는 이 백신이 바이러스의 여러 변이에 효과적임을 시사합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t3-u2-2', unitId: 'lv6-t3-u2', english: 'It remains to be seen whether this breakthrough can be replicated under different conditions.', korean: '이 획기적 발견이 다른 조건에서도 재현 가능한지는 아직 두고 봐야 합니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv6-t3-u2-3', unitId: 'lv6-t3-u2', english: 'Peer-reviewed research indicates a strong correlation between air pollution and respiratory disease.', korean: '동료 심사를 거친 연구는 대기 오염과 호흡기 질환 사이에 강한 상관관계가 있음을 보여줍니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 경제 동향과 시장 분석 ---
  { id: 'e-lv7-t1-u1-1', unitId: 'lv7-t1-u1', english: 'Had the central bank intervened sooner, the currency crisis could have been averted entirely.', korean: '중앙은행이 더 일찍 개입했더라면, 통화 위기는 완전히 피할 수 있었을 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u1-2', unitId: 'lv7-t1-u1', english: 'Not only has inflation eroded purchasing power, but it has also widened the wealth gap considerably.', korean: '인플레이션은 구매력을 약화시켰을 뿐만 아니라, 부의 격차도 상당히 확대시켰습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u1-3', unitId: 'lv7-t1-u1', english: 'It is the emerging markets that are expected to drive global economic growth over the next decade.', korean: '향후 10년간 글로벌 경제 성장을 이끌 것으로 기대되는 것은 바로 신흥 시장입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u1-4', unitId: 'lv7-t1-u1', english: 'Under no circumstances should monetary policy be dictated by short-term political interests.', korean: '어떤 경우에도 통화 정책이 단기적인 정치적 이해관계에 좌우되어서는 안 됩니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 기업 전략과 경영 ---
  { id: 'e-lv7-t1-u2-1', unitId: 'lv7-t1-u2', english: 'The merger would not have gone through had the board not unanimously approved the terms.', korean: '이사회가 조건을 만장일치로 승인하지 않았다면 합병은 성사되지 않았을 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u2-2', unitId: 'lv7-t1-u2', english: 'What distinguishes successful companies from their competitors is their ability to pivot quickly.', korean: '성공한 기업을 경쟁사와 구별 짓는 것은 신속하게 방향을 전환하는 능력입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u2-3', unitId: 'lv7-t1-u2', english: 'Rarely does a company achieve sustained profitability without investing heavily in research and development.', korean: '연구 개발에 대한 대대적인 투자 없이 지속적인 수익성을 달성하는 기업은 드뭅니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 투자와 금융 ---
  { id: 'e-lv7-t1-u3-1', unitId: 'lv7-t1-u3', english: 'Were interest rates to rise sharply, the housing market would likely undergo a significant correction.', korean: '금리가 급격히 오르면, 주택 시장은 상당한 조정을 겪을 가능성이 높습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u3-2', unitId: 'lv7-t1-u3', english: 'Diversification is essential, for no single asset class can guarantee consistent returns.', korean: '분산 투자는 필수적인데, 어떤 단일 자산군도 일관된 수익을 보장할 수 없기 때문입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t1-u3-3', unitId: 'lv7-t1-u3', english: 'Only after the bubble burst did investors realize the extent of the risk they had undertaken.', korean: '거품이 꺼지고 나서야 투자자들은 자신들이 감수한 리스크의 규모를 깨달았습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 법률 체계와 권리 ---
  { id: 'e-lv7-t2-u1-1', unitId: 'lv7-t2-u1', english: 'It is the constitution that serves as the supreme legal framework upon which all other laws are built.', korean: '다른 모든 법률이 기반으로 하는 최고 법적 틀로 기능하는 것은 바로 헌법입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t2-u1-2', unitId: 'lv7-t2-u1', english: 'The defendant argued that the evidence should have been deemed inadmissible on procedural grounds.', korean: '피고측은 그 증거가 절차적 사유로 부적격 판정을 받았어야 한다고 주장했습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t2-u1-3', unitId: 'lv7-t2-u1', english: 'Never before has the right to privacy been so fiercely debated in the context of digital surveillance.', korean: '디지털 감시 맥락에서 프라이버시 권리가 이토록 치열하게 논의된 적은 일찍이 없었습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 사회 정의와 제도 개혁 ---
  { id: 'e-lv7-t2-u2-1', unitId: 'lv7-t2-u2', english: 'Had systemic reforms been implemented earlier, the level of inequality we see today might have been prevented.', korean: '제도적 개혁이 더 일찍 시행되었더라면, 오늘날 우리가 목도하는 수준의 불평등은 방지할 수 있었을지도 모릅니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t2-u2-2', unitId: 'lv7-t2-u2', english: 'What makes universal healthcare so contentious is the question of how it should be funded.', korean: '보편적 의료보장을 그토록 논쟁적으로 만드는 것은 재원 조달 방법에 대한 문제입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t2-u2-3', unitId: 'lv7-t2-u2', english: 'Not until marginalized communities are given a seat at the table can true equity be achieved.', korean: '소외된 공동체가 의사결정 과정에 참여할 수 있을 때에야 비로소 진정한 형평성이 실현될 수 있습니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 윤리적 딜레마 ---
  { id: 'e-lv7-t3-u1-1', unitId: 'lv7-t3-u1', english: 'Were you faced with this moral dilemma, would you prioritize individual freedom over collective well-being?', korean: '이 도덕적 딜레마에 직면한다면, 집단의 안녕보다 개인의 자유를 우선시하시겠습니까?', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t3-u1-2', unitId: 'lv7-t3-u1', english: 'It is precisely because the situation is morally ambiguous that a simple answer does not exist.', korean: '상황이 도덕적으로 모호하기 때문에 바로 그래서 단순한 답이 존재하지 않는 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t3-u1-3', unitId: 'lv7-t3-u1', english: 'One could argue that the ends justify the means, but such reasoning opens the door to dangerous precedents.', korean: '목적이 수단을 정당화한다고 주장할 수 있지만, 그러한 논리는 위험한 선례를 열게 됩니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 철학적 사유와 가치관 ---
  { id: 'e-lv7-t3-u2-1', unitId: 'lv7-t3-u2', english: 'Seldom do we stop to question the assumptions that underlie our most deeply held beliefs.', korean: '우리가 가장 깊이 간직한 신념의 기저에 깔린 전제를 멈추어 의문을 제기하는 일은 드뭅니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t3-u2-2', unitId: 'lv7-t3-u2', english: 'What it means to live a meaningful life is a question that has occupied philosophers for millennia.', korean: '의미 있는 삶을 산다는 것이 무엇을 뜻하는지는 수천 년간 철학자들의 화두였습니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t3-u2-3', unitId: 'lv7-t3-u2', english: 'True freedom, some philosophers contend, lies not in the absence of constraints but in the ability to choose them.', korean: '일부 철학자들은 진정한 자유란 제약의 부재가 아니라 그것을 선택할 수 있는 능력에 있다고 주장합니다.', difficulty: 5, isAiGenerated: false },

  // --- Lv.7 기술 윤리와 미래 ---
  { id: 'e-lv7-t3-u3-1', unitId: 'lv7-t3-u3', english: 'Should artificial intelligence be granted legal personhood, the implications for accountability would be profound.', korean: '인공지능에 법적 인격이 부여된다면, 책임 소재에 대한 함의는 심대할 것입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t3-u3-2', unitId: 'lv7-t3-u3', english: 'It is not the technology itself that poses a threat, but rather the way in which it is deployed and governed.', korean: '위협이 되는 것은 기술 자체가 아니라, 그것이 배치되고 관리되는 방식입니다.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv7-t3-u3-3', unitId: 'lv7-t3-u3', english: 'Only by establishing transparent ethical guidelines can we ensure that scientific progress serves humanity as a whole.', korean: '투명한 윤리 지침을 수립해야만 과학적 진보가 인류 전체에 기여하도록 보장할 수 있습니다.', difficulty: 5, isAiGenerated: false },
]

export const vocabulary_lv6_7: Vocabulary[] = [
  // --- Lv.6 뉴스 보도와 미디어 리터러시 ---
  { id: 'v-lv6-t1-u1-1', unitId: 'lv6-t1-u1', word: 'bias', meaning: '편향, 편견', partOfSpeech: '명사', exampleSentence: 'Media bias can significantly distort public perception of events.', exampleTranslation: '미디어 편향은 사건에 대한 대중의 인식을 크게 왜곡할 수 있습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u1-2', unitId: 'lv6-t1-u1', word: 'credibility', meaning: '신뢰성', partOfSpeech: '명사', exampleSentence: 'The journalist\'s credibility was undermined by the fabricated quotes.', exampleTranslation: '그 기자의 신뢰성은 조작된 인용문으로 인해 훼손되었습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u1-3', unitId: 'lv6-t1-u1', word: 'sensationalism', meaning: '선정주의', partOfSpeech: '명사', exampleSentence: 'Sensationalism in the media prioritizes shock value over accuracy.', exampleTranslation: '미디어의 선정주의는 정확성보다 충격적 가치를 우선시합니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u1-4', unitId: 'lv6-t1-u1', word: 'corroborate', meaning: '확증하다, 뒷받침하다', partOfSpeech: '동사', exampleSentence: 'Multiple witnesses corroborated the journalist\'s account of the incident.', exampleTranslation: '여러 목격자들이 해당 사건에 대한 기자의 진술을 확증했습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u1-5', unitId: 'lv6-t1-u1', word: 'propaganda', meaning: '선전, 프로파간다', partOfSpeech: '명사', exampleSentence: 'The regime used propaganda to manipulate public opinion.', exampleTranslation: '정권은 여론을 조작하기 위해 선전을 이용했습니다.', isAiGenerated: false },

  // --- Lv.6 국제 정세와 외교 ---
  { id: 'v-lv6-t1-u2-1', unitId: 'lv6-t1-u2', word: 'sanction', meaning: '제재', partOfSpeech: '명사', exampleSentence: 'The United Nations imposed sanctions on the country over its nuclear program.', exampleTranslation: '유엔은 핵 프로그램을 이유로 그 나라에 제재를 가했습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u2-2', unitId: 'lv6-t1-u2', word: 'sovereignty', meaning: '주권', partOfSpeech: '명사', exampleSentence: 'The dispute centers on the issue of national sovereignty.', exampleTranslation: '이 분쟁은 국가 주권 문제를 중심으로 전개됩니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u2-3', unitId: 'lv6-t1-u2', word: 'diplomacy', meaning: '외교', partOfSpeech: '명사', exampleSentence: 'Diplomacy is often more effective than military intervention.', exampleTranslation: '외교는 종종 군사적 개입보다 더 효과적입니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u2-4', unitId: 'lv6-t1-u2', word: 'alliance', meaning: '동맹', partOfSpeech: '명사', exampleSentence: 'The two nations formed a strategic alliance to counter shared threats.', exampleTranslation: '두 나라는 공동의 위협에 대응하기 위해 전략적 동맹을 맺었습니다.', isAiGenerated: false },

  // --- Lv.6 사회 변화와 여론 ---
  { id: 'v-lv6-t1-u3-1', unitId: 'lv6-t1-u3', word: 'demographic', meaning: '인구통계학적인', partOfSpeech: '형용사', exampleSentence: 'Demographic shifts are reshaping the political landscape.', exampleTranslation: '인구통계학적 변화가 정치 지형을 재편하고 있습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u3-2', unitId: 'lv6-t1-u3', word: 'polarization', meaning: '양극화', partOfSpeech: '명사', exampleSentence: 'Political polarization has made bipartisan cooperation increasingly difficult.', exampleTranslation: '정치적 양극화로 인해 초당적 협력이 점점 어려워지고 있습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u3-3', unitId: 'lv6-t1-u3', word: 'advocacy', meaning: '옹호, 지지 활동', partOfSpeech: '명사', exampleSentence: 'Her advocacy for mental health awareness has inspired thousands.', exampleTranslation: '정신 건강 인식에 대한 그녀의 옹호 활동은 수천 명에게 영감을 주었습니다.', isAiGenerated: false },
  { id: 'v-lv6-t1-u3-4', unitId: 'lv6-t1-u3', word: 'consensus', meaning: '합의, 공감대', partOfSpeech: '명사', exampleSentence: 'Reaching a consensus on climate policy has proved extremely challenging.', exampleTranslation: '기후 정책에 대한 합의에 도달하는 것은 극히 어려운 일로 입증되었습니다.', isAiGenerated: false },

  // --- Lv.6 문학과 서평 ---
  { id: 'v-lv6-t2-u1-1', unitId: 'lv6-t2-u1', word: 'allegory', meaning: '우화, 풍유', partOfSpeech: '명사', exampleSentence: 'The story is widely interpreted as an allegory for political oppression.', exampleTranslation: '이 이야기는 정치적 억압에 대한 우화로 널리 해석됩니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u1-2', unitId: 'lv6-t2-u1', word: 'protagonist', meaning: '주인공', partOfSpeech: '명사', exampleSentence: 'The protagonist undergoes a profound transformation by the end of the novel.', exampleTranslation: '주인공은 소설의 끝 무렵에 심오한 변화를 겪습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u1-3', unitId: 'lv6-t2-u1', word: 'prose', meaning: '산문', partOfSpeech: '명사', exampleSentence: 'Her prose is elegant yet accessible to a broad readership.', exampleTranslation: '그녀의 산문은 우아하면서도 폭넓은 독자층이 접근하기 쉽습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u1-4', unitId: 'lv6-t2-u1', word: 'narrative', meaning: '서사, 이야기 구조', partOfSpeech: '명사', exampleSentence: 'The fragmented narrative reflects the character\'s disoriented state of mind.', exampleTranslation: '파편화된 서사는 인물의 혼란스러운 심리 상태를 반영합니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u1-5', unitId: 'lv6-t2-u1', word: 'metaphor', meaning: '은유', partOfSpeech: '명사', exampleSentence: 'The river serves as a metaphor for the passage of time.', exampleTranslation: '강은 시간의 흐름에 대한 은유로 기능합니다.', isAiGenerated: false },

  // --- Lv.6 현대 미술과 전시 ---
  { id: 'v-lv6-t2-u2-1', unitId: 'lv6-t2-u2', word: 'aesthetic', meaning: '미학적인, 심미적인', partOfSpeech: '형용사', exampleSentence: 'The aesthetic appeal of the piece lies in its stark simplicity.', exampleTranslation: '그 작품의 미학적 매력은 극도의 단순함에 있습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u2-2', unitId: 'lv6-t2-u2', word: 'curate', meaning: '기획하다, 큐레이팅하다', partOfSpeech: '동사', exampleSentence: 'She was invited to curate the museum\'s annual contemporary art exhibition.', exampleTranslation: '그녀는 박물관의 연례 현대 미술 전시를 기획해 달라는 초청을 받았습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u2-3', unitId: 'lv6-t2-u2', word: 'avant-garde', meaning: '전위적인, 아방가르드', partOfSpeech: '형용사', exampleSentence: 'The gallery specializes in avant-garde works that push creative boundaries.', exampleTranslation: '이 갤러리는 창의적 경계를 넓히는 전위적 작품을 전문으로 합니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u2-4', unitId: 'lv6-t2-u2', word: 'interpretation', meaning: '해석', partOfSpeech: '명사', exampleSentence: 'Art is open to multiple interpretations, none of which is definitively correct.', exampleTranslation: '예술은 다양한 해석에 열려 있으며, 어느 것도 확정적으로 올바른 것은 없습니다.', isAiGenerated: false },

  // --- Lv.6 공연 예술과 비평 ---
  { id: 'v-lv6-t2-u3-1', unitId: 'lv6-t2-u3', word: 'choreography', meaning: '안무', partOfSpeech: '명사', exampleSentence: 'The choreography captured the tension between chaos and order.', exampleTranslation: '안무는 혼돈과 질서 사이의 긴장감을 포착했습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u3-2', unitId: 'lv6-t2-u3', word: 'repertoire', meaning: '레퍼토리, 연주 목록', partOfSpeech: '명사', exampleSentence: 'The orchestra expanded its repertoire to include works by underrepresented composers.', exampleTranslation: '오케스트라는 잘 알려지지 않은 작곡가들의 작품을 포함하도록 레퍼토리를 확장했습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u3-3', unitId: 'lv6-t2-u3', word: 'ovation', meaning: '기립박수, 열렬한 환호', partOfSpeech: '명사', exampleSentence: 'The cast received a standing ovation that lasted several minutes.', exampleTranslation: '출연진은 몇 분간 이어진 기립박수를 받았습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u3-4', unitId: 'lv6-t2-u3', word: 'nuance', meaning: '뉘앙스, 미묘한 차이', partOfSpeech: '명사', exampleSentence: 'The actor brought remarkable nuance to an otherwise straightforward role.', exampleTranslation: '그 배우는 단순할 수 있는 역할에 놀라운 뉘앙스를 불어넣었습니다.', isAiGenerated: false },
  { id: 'v-lv6-t2-u3-5', unitId: 'lv6-t2-u3', word: 'virtuoso', meaning: '거장, 명인', partOfSpeech: '명사', exampleSentence: 'She is widely regarded as a virtuoso of the classical guitar.', exampleTranslation: '그녀는 클래식 기타의 거장으로 널리 인정받고 있습니다.', isAiGenerated: false },

  // --- Lv.6 기후 위기와 정책 ---
  { id: 'v-lv6-t3-u1-1', unitId: 'lv6-t3-u1', word: 'irreversible', meaning: '되돌릴 수 없는', partOfSpeech: '형용사', exampleSentence: 'Scientists warn that some effects of climate change are already irreversible.', exampleTranslation: '과학자들은 기후 변화의 일부 영향은 이미 되돌릴 수 없다고 경고합니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u1-2', unitId: 'lv6-t3-u1', word: 'incentivize', meaning: '동기를 부여하다, 장려하다', partOfSpeech: '동사', exampleSentence: 'Tax breaks can incentivize companies to adopt greener practices.', exampleTranslation: '세금 감면은 기업이 친환경 관행을 도입하도록 장려할 수 있습니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u1-3', unitId: 'lv6-t3-u1', word: 'mitigation', meaning: '완화, 경감', partOfSpeech: '명사', exampleSentence: 'Climate mitigation strategies must be implemented at both local and global levels.', exampleTranslation: '기후 완화 전략은 지역 및 글로벌 수준 모두에서 시행되어야 합니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u1-4', unitId: 'lv6-t3-u1', word: 'biodiversity', meaning: '생물 다양성', partOfSpeech: '명사', exampleSentence: 'The loss of biodiversity threatens the stability of entire ecosystems.', exampleTranslation: '생물 다양성의 손실은 전체 생태계의 안정을 위협합니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u1-5', unitId: 'lv6-t3-u1', word: 'deforestation', meaning: '산림 벌채', partOfSpeech: '명사', exampleSentence: 'Deforestation in the Amazon has accelerated at an alarming rate.', exampleTranslation: '아마존의 산림 벌채가 놀라운 속도로 가속화되었습니다.', isAiGenerated: false },

  // --- Lv.6 과학 연구와 혁신 ---
  { id: 'v-lv6-t3-u2-1', unitId: 'lv6-t3-u2', word: 'hypothesis', meaning: '가설', partOfSpeech: '명사', exampleSentence: 'The hypothesis was tested through a series of controlled experiments.', exampleTranslation: '그 가설은 일련의 통제된 실험을 통해 검증되었습니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u2-2', unitId: 'lv6-t3-u2', word: 'peer-reviewed', meaning: '동료 심사를 거친', partOfSpeech: '형용사', exampleSentence: 'Only peer-reviewed studies should be used as the basis for policy decisions.', exampleTranslation: '동료 심사를 거친 연구만이 정책 결정의 근거로 사용되어야 합니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u2-3', unitId: 'lv6-t3-u2', word: 'breakthrough', meaning: '획기적 발견, 돌파구', partOfSpeech: '명사', exampleSentence: 'The breakthrough in gene therapy offers hope for previously untreatable diseases.', exampleTranslation: '유전자 치료의 획기적 발견은 이전에 치료 불가능했던 질병에 희망을 제시합니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u2-4', unitId: 'lv6-t3-u2', word: 'replicate', meaning: '복제하다, 재현하다', partOfSpeech: '동사', exampleSentence: 'Other labs were unable to replicate the original findings.', exampleTranslation: '다른 연구소들은 원래의 연구 결과를 재현하지 못했습니다.', isAiGenerated: false },
  { id: 'v-lv6-t3-u2-5', unitId: 'lv6-t3-u2', word: 'correlation', meaning: '상관관계', partOfSpeech: '명사', exampleSentence: 'Correlation does not necessarily imply causation.', exampleTranslation: '상관관계가 반드시 인과관계를 의미하는 것은 아닙니다.', isAiGenerated: false },

  // --- Lv.7 경제 동향과 시장 분석 ---
  { id: 'v-lv7-t1-u1-1', unitId: 'lv7-t1-u1', word: 'recession', meaning: '경기 침체', partOfSpeech: '명사', exampleSentence: 'The economy officially entered a recession after two consecutive quarters of negative growth.', exampleTranslation: '2분기 연속 마이너스 성장을 기록한 후 경제는 공식적으로 침체에 접어들었습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u1-2', unitId: 'lv7-t1-u1', word: 'fiscal', meaning: '재정의, 국가 재정의', partOfSpeech: '형용사', exampleSentence: 'The government announced a new fiscal stimulus package to boost the economy.', exampleTranslation: '정부는 경기 부양을 위한 새로운 재정 부양책을 발표했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u1-3', unitId: 'lv7-t1-u1', word: 'austerity', meaning: '긴축', partOfSpeech: '명사', exampleSentence: 'Austerity measures led to widespread public discontent.', exampleTranslation: '긴축 정책은 광범위한 대중의 불만을 초래했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u1-4', unitId: 'lv7-t1-u1', word: 'stagnation', meaning: '정체, 침체', partOfSpeech: '명사', exampleSentence: 'Prolonged economic stagnation has eroded consumer confidence.', exampleTranslation: '장기적인 경제 정체는 소비자 신뢰를 약화시켰습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u1-5', unitId: 'lv7-t1-u1', word: 'volatility', meaning: '변동성', partOfSpeech: '명사', exampleSentence: 'Market volatility tends to increase during periods of geopolitical uncertainty.', exampleTranslation: '시장 변동성은 지정학적 불확실성 시기에 높아지는 경향이 있습니다.', isAiGenerated: false },

  // --- Lv.7 기업 전략과 경영 ---
  { id: 'v-lv7-t1-u2-1', unitId: 'lv7-t1-u2', word: 'acquisition', meaning: '인수', partOfSpeech: '명사', exampleSentence: 'The acquisition of the startup was valued at over two billion dollars.', exampleTranslation: '그 스타트업의 인수 가치는 20억 달러 이상으로 평가되었습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u2-2', unitId: 'lv7-t1-u2', word: 'stakeholder', meaning: '이해관계자', partOfSpeech: '명사', exampleSentence: 'All stakeholders must be consulted before any major restructuring takes place.', exampleTranslation: '대규모 구조조정이 이루어지기 전에 모든 이해관계자의 의견을 구해야 합니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u2-3', unitId: 'lv7-t1-u2', word: 'scalable', meaning: '확장 가능한', partOfSpeech: '형용사', exampleSentence: 'Investors are looking for business models that are both innovative and scalable.', exampleTranslation: '투자자들은 혁신적이면서도 확장 가능한 비즈니스 모델을 찾고 있습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u2-4', unitId: 'lv7-t1-u2', word: 'leverage', meaning: '지렛대 효과, 활용하다', partOfSpeech: '명사/동사', exampleSentence: 'The company leveraged its brand reputation to enter new markets.', exampleTranslation: '그 회사는 브랜드 명성을 활용하여 새로운 시장에 진출했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u2-5', unitId: 'lv7-t1-u2', word: 'governance', meaning: '거버넌스, 지배 구조', partOfSpeech: '명사', exampleSentence: 'Effective corporate governance is essential for maintaining investor trust.', exampleTranslation: '효과적인 기업 지배 구조는 투자자 신뢰를 유지하는 데 필수적입니다.', isAiGenerated: false },

  // --- Lv.7 투자와 금융 ---
  { id: 'v-lv7-t1-u3-1', unitId: 'lv7-t1-u3', word: 'diversification', meaning: '분산 투자', partOfSpeech: '명사', exampleSentence: 'Portfolio diversification is one of the most effective ways to manage risk.', exampleTranslation: '포트폴리오 분산 투자는 리스크를 관리하는 가장 효과적인 방법 중 하나입니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u3-2', unitId: 'lv7-t1-u3', word: 'liquidity', meaning: '유동성', partOfSpeech: '명사', exampleSentence: 'A sudden loss of liquidity can trigger a financial crisis.', exampleTranslation: '갑작스러운 유동성 상실은 금융 위기를 촉발할 수 있습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u3-3', unitId: 'lv7-t1-u3', word: 'yield', meaning: '수익률', partOfSpeech: '명사', exampleSentence: 'Bond yields have fallen to historic lows amid economic uncertainty.', exampleTranslation: '경제적 불확실성 속에서 채권 수익률이 사상 최저치로 떨어졌습니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u3-4', unitId: 'lv7-t1-u3', word: 'hedge', meaning: '위험을 회피하다, 헤지', partOfSpeech: '동사/명사', exampleSentence: 'Many investors hedge against inflation by investing in commodities.', exampleTranslation: '많은 투자자들이 원자재에 투자함으로써 인플레이션에 대비합니다.', isAiGenerated: false },
  { id: 'v-lv7-t1-u3-5', unitId: 'lv7-t1-u3', word: 'speculative', meaning: '투기적인', partOfSpeech: '형용사', exampleSentence: 'Speculative trading in cryptocurrencies has drawn both praise and criticism.', exampleTranslation: '암호화폐의 투기적 거래는 찬사와 비판을 동시에 불러일으켰습니다.', isAiGenerated: false },

  // --- Lv.7 법률 체계와 권리 ---
  { id: 'v-lv7-t2-u1-1', unitId: 'lv7-t2-u1', word: 'jurisdiction', meaning: '관할권', partOfSpeech: '명사', exampleSentence: 'The court ruled that the case fell outside its jurisdiction.', exampleTranslation: '법원은 해당 사건이 관할권 밖이라고 판결했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u1-2', unitId: 'lv7-t2-u1', word: 'precedent', meaning: '판례, 선례', partOfSpeech: '명사', exampleSentence: 'The ruling set a legal precedent that will influence future cases.', exampleTranslation: '이 판결은 향후 사건에 영향을 미칠 법적 선례를 만들었습니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u1-3', unitId: 'lv7-t2-u1', word: 'amendment', meaning: '수정안, 개정', partOfSpeech: '명사', exampleSentence: 'The proposed amendment to the constitution sparked heated debate.', exampleTranslation: '헌법 수정안은 격렬한 논쟁을 촉발했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u1-4', unitId: 'lv7-t2-u1', word: 'litigation', meaning: '소송', partOfSpeech: '명사', exampleSentence: 'The company faced prolonged litigation over patent infringement.', exampleTranslation: '그 회사는 특허 침해를 둘러싼 장기 소송에 직면했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u1-5', unitId: 'lv7-t2-u1', word: 'due process', meaning: '적법 절차', partOfSpeech: '명사', exampleSentence: 'Every citizen is entitled to due process under the law.', exampleTranslation: '모든 시민은 법에 따른 적법 절차를 보장받을 권리가 있습니다.', isAiGenerated: false },

  // --- Lv.7 사회 정의와 제도 개혁 ---
  { id: 'v-lv7-t2-u2-1', unitId: 'lv7-t2-u2', word: 'systemic', meaning: '체계적인, 구조적인', partOfSpeech: '형용사', exampleSentence: 'Systemic inequality cannot be addressed through individual efforts alone.', exampleTranslation: '구조적 불평등은 개인의 노력만으로는 해결할 수 없습니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u2-2', unitId: 'lv7-t2-u2', word: 'marginalized', meaning: '소외된, 주변화된', partOfSpeech: '형용사', exampleSentence: 'Policies must be designed to uplift marginalized communities.', exampleTranslation: '정책은 소외된 공동체를 지원하도록 설계되어야 합니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u2-3', unitId: 'lv7-t2-u2', word: 'redistribution', meaning: '재분배', partOfSpeech: '명사', exampleSentence: 'Wealth redistribution remains one of the most divisive topics in politics.', exampleTranslation: '부의 재분배는 정치에서 가장 논란이 많은 주제 중 하나입니다.', isAiGenerated: false },
  { id: 'v-lv7-t2-u2-4', unitId: 'lv7-t2-u2', word: 'accountability', meaning: '책임, 책무성', partOfSpeech: '명사', exampleSentence: 'Greater accountability in public institutions is essential for restoring trust.', exampleTranslation: '공공 기관의 더 큰 책무성은 신뢰를 회복하는 데 필수적입니다.', isAiGenerated: false },

  // --- Lv.7 윤리적 딜레마 ---
  { id: 'v-lv7-t3-u1-1', unitId: 'lv7-t3-u1', word: 'utilitarianism', meaning: '공리주의', partOfSpeech: '명사', exampleSentence: 'Utilitarianism holds that the best action is the one that maximizes overall happiness.', exampleTranslation: '공리주의는 전체 행복을 극대화하는 행동이 최선이라고 주장합니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u1-2', unitId: 'lv7-t3-u1', word: 'autonomy', meaning: '자율성, 자치', partOfSpeech: '명사', exampleSentence: 'Respect for individual autonomy is a cornerstone of medical ethics.', exampleTranslation: '개인의 자율성에 대한 존중은 의료 윤리의 초석입니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u1-3', unitId: 'lv7-t3-u1', word: 'dilemma', meaning: '딜레마, 진퇴양난', partOfSpeech: '명사', exampleSentence: 'The ethical dilemma forced the committee to weigh competing values.', exampleTranslation: '그 윤리적 딜레마는 위원회로 하여금 상충하는 가치를 저울질하게 했습니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u1-4', unitId: 'lv7-t3-u1', word: 'impartial', meaning: '공정한, 편견 없는', partOfSpeech: '형용사', exampleSentence: 'A judge must remain impartial regardless of personal beliefs.', exampleTranslation: '판사는 개인적 신념에 관계없이 공정해야 합니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u1-5', unitId: 'lv7-t3-u1', word: 'complicity', meaning: '공모, 연루', partOfSpeech: '명사', exampleSentence: 'Silence in the face of injustice can be seen as a form of complicity.', exampleTranslation: '불의 앞에서의 침묵은 일종의 공모로 볼 수 있습니다.', isAiGenerated: false },

  // --- Lv.7 철학적 사유와 가치관 ---
  { id: 'v-lv7-t3-u2-1', unitId: 'lv7-t3-u2', word: 'existentialism', meaning: '실존주의', partOfSpeech: '명사', exampleSentence: 'Existentialism emphasizes the importance of individual choice and responsibility.', exampleTranslation: '실존주의는 개인의 선택과 책임의 중요성을 강조합니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u2-2', unitId: 'lv7-t3-u2', word: 'intrinsic', meaning: '본질적인, 내재적인', partOfSpeech: '형용사', exampleSentence: 'Does human life have intrinsic value, or is value something we assign?', exampleTranslation: '인간의 삶은 본질적 가치를 지니고 있는가, 아니면 가치란 우리가 부여하는 것인가?', isAiGenerated: false },
  { id: 'v-lv7-t3-u2-3', unitId: 'lv7-t3-u2', word: 'determinism', meaning: '결정론', partOfSpeech: '명사', exampleSentence: 'The debate between determinism and free will remains unresolved.', exampleTranslation: '결정론과 자유 의지 사이의 논쟁은 여전히 해결되지 않고 있습니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u2-4', unitId: 'lv7-t3-u2', word: 'paradox', meaning: '역설, 패러독스', partOfSpeech: '명사', exampleSentence: 'The paradox of choice suggests that too many options can lead to less satisfaction.', exampleTranslation: '선택의 역설은 너무 많은 선택지가 오히려 만족도를 낮출 수 있음을 시사합니다.', isAiGenerated: false },

  // --- Lv.7 기술 윤리와 미래 ---
  { id: 'v-lv7-t3-u3-1', unitId: 'lv7-t3-u3', word: 'surveillance', meaning: '감시', partOfSpeech: '명사', exampleSentence: 'Mass surveillance raises serious concerns about civil liberties.', exampleTranslation: '대규모 감시는 시민의 자유에 대한 심각한 우려를 제기합니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u3-2', unitId: 'lv7-t3-u3', word: 'algorithmic', meaning: '알고리즘의, 알고리즘에 기반한', partOfSpeech: '형용사', exampleSentence: 'Algorithmic bias in hiring tools can perpetuate existing inequalities.', exampleTranslation: '채용 도구의 알고리즘 편향은 기존의 불평등을 영속시킬 수 있습니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u3-3', unitId: 'lv7-t3-u3', word: 'bioethics', meaning: '생명윤리', partOfSpeech: '명사', exampleSentence: 'Bioethics provides a framework for evaluating the moral implications of genetic engineering.', exampleTranslation: '생명윤리는 유전 공학의 도덕적 함의를 평가하는 틀을 제공합니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u3-4', unitId: 'lv7-t3-u3', word: 'transparency', meaning: '투명성', partOfSpeech: '명사', exampleSentence: 'Transparency in AI decision-making is crucial for building public trust.', exampleTranslation: 'AI 의사결정의 투명성은 대중의 신뢰를 구축하는 데 매우 중요합니다.', isAiGenerated: false },
  { id: 'v-lv7-t3-u3-5', unitId: 'lv7-t3-u3', word: 'obsolescence', meaning: '노후화, 구식이 됨', partOfSpeech: '명사', exampleSentence: 'Planned obsolescence forces consumers to replace products more frequently than necessary.', exampleTranslation: '계획적 노후화는 소비자들이 필요 이상으로 자주 제품을 교체하도록 강제합니다.', isAiGenerated: false },
]
