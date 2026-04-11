import type { Theme, Unit, Expression, Vocabulary } from './types'

// ===== Lv.4 중급 (B1): 자연스러운 일상 영어와 뉘앙스 =====
// ===== Lv.5 중급+ (B1+): 의견 표현, 설득, 토론 기초 =====

export const themes_lv4_5: Theme[] = [
  // Lv.4 테마
  { id: 'lv4-t1', levelId: 4, name: '직장과 커리어', description: '직장 생활, 면접, 이메일 등 업무 영어', order: 1 },
  { id: 'lv4-t2', levelId: 4, name: '미디어와 엔터테인먼트', description: '영화, 음악, SNS에 대한 대화', order: 2 },
  { id: 'lv4-t3', levelId: 4, name: '기술과 일상', description: '스마트폰, 앱, 온라인 서비스 관련 표현', order: 3 },

  // Lv.5 테마
  { id: 'lv5-t1', levelId: 5, name: '사회 이슈', description: '환경, 교육, 사회 문제에 대한 의견', order: 1 },
  { id: 'lv5-t2', levelId: 5, name: '인간관계와 소통', description: '갈등 해결, 조언, 위로 표현', order: 2 },
  { id: 'lv5-t3', levelId: 5, name: '설득과 협상', description: '논리적으로 설득하고 타협하기', order: 3 },
]

export const units_lv4_5: Unit[] = [
  // Lv.4 Theme 1: 직장과 커리어
  { id: 'lv4-t1-u1', themeId: 'lv4-t1', name: '면접 준비', description: '면접 질문과 답변, 자기 PR', order: 1 },
  { id: 'lv4-t1-u2', themeId: 'lv4-t1', name: '직장 내 소통', description: '회의, 보고, 동료와의 대화', order: 2 },
  { id: 'lv4-t1-u3', themeId: 'lv4-t1', name: '이메일과 메시지', description: '비즈니스 이메일, 정중한 요청', order: 3 },

  // Lv.4 Theme 2: 미디어와 엔터테인먼트
  { id: 'lv4-t2-u1', themeId: 'lv4-t2', name: '영화와 드라마 이야기', description: '줄거리 설명, 감상평', order: 1 },
  { id: 'lv4-t2-u2', themeId: 'lv4-t2', name: 'SNS와 온라인 문화', description: '소셜 미디어, 트렌드 이야기', order: 2 },

  // Lv.4 Theme 3: 기술과 일상
  { id: 'lv4-t3-u1', themeId: 'lv4-t3', name: '기술 문제 해결', description: '기기 고장, 소프트웨어 문제 설명', order: 1 },
  { id: 'lv4-t3-u2', themeId: 'lv4-t3', name: '온라인 서비스 이용', description: '구독, 결제, 계정 관리', order: 2 },

  // Lv.5 Theme 1: 사회 이슈
  { id: 'lv5-t1-u1', themeId: 'lv5-t1', name: '환경과 지속가능성', description: '기후변화, 재활용, 에너지', order: 1 },
  { id: 'lv5-t1-u2', themeId: 'lv5-t1', name: '교육 시스템', description: '교육 방식, 시험 제도에 대한 의견', order: 2 },

  // Lv.5 Theme 2: 인간관계와 소통
  { id: 'lv5-t2-u1', themeId: 'lv5-t2', name: '조언과 위로', description: '고민 상담, 조언 주고받기', order: 1 },
  { id: 'lv5-t2-u2', themeId: 'lv5-t2', name: '갈등과 오해 해결', description: '사과, 해명, 화해', order: 2 },

  // Lv.5 Theme 3: 설득과 협상
  { id: 'lv5-t3-u1', themeId: 'lv5-t3', name: '의견 제시와 설득', description: '근거를 들어 논리적으로 주장하기', order: 1 },
  { id: 'lv5-t3-u2', themeId: 'lv5-t3', name: '타협과 양보', description: '상대의 입장 이해, 절충안 제시', order: 2 },
]

export const expressions_lv4_5: Expression[] = [
  // --- Lv.4 면접 준비 ---
  { id: 'e-lv4-t1-u1-1', unitId: 'lv4-t1-u1', english: 'I believe my greatest strength is my ability to adapt quickly to new environments.', korean: '제 가장 큰 강점은 새로운 환경에 빠르게 적응하는 능력이라고 생각합니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u1-2', unitId: 'lv4-t1-u1', english: 'I\'m looking for a position where I can grow professionally while contributing to the team.', korean: '팀에 기여하면서 전문적으로 성장할 수 있는 직무를 찾고 있습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u1-3', unitId: 'lv4-t1-u1', english: 'In my previous role, I was responsible for managing a team of five people.', korean: '이전 직책에서 5명으로 구성된 팀을 관리하는 역할을 맡았습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u1-4', unitId: 'lv4-t1-u1', english: 'Could you tell me more about the company culture and work-life balance here?', korean: '회사 문화와 워라밸에 대해 더 알려주실 수 있나요?', difficulty: 4, isAiGenerated: false },

  // --- Lv.4 직장 내 소통 ---
  { id: 'e-lv4-t1-u2-1', unitId: 'lv4-t1-u2', english: 'I think we should postpone the meeting until we have more data to work with.', korean: '데이터가 더 모일 때까지 회의를 미루는 게 좋을 것 같습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u2-2', unitId: 'lv4-t1-u2', english: 'Let me follow up on that and get back to you by the end of the day.', korean: '그 건에 대해 확인해보고 오늘 중으로 답드리겠습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u2-3', unitId: 'lv4-t1-u2', english: 'I appreciate your feedback, but I\'d like to suggest a different approach.', korean: '피드백 감사하지만, 다른 접근 방식을 제안하고 싶습니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u2-4', unitId: 'lv4-t1-u2', english: 'Would it be possible to move the deadline to next Friday instead?', korean: '마감일을 다음 주 금요일로 옮길 수 있을까요?', difficulty: 3, isAiGenerated: false },

  // --- Lv.4 이메일과 메시지 ---
  { id: 'e-lv4-t1-u3-1', unitId: 'lv4-t1-u3', english: 'I\'m writing to follow up on our conversation from last week regarding the project timeline.', korean: '지난주 프로젝트 일정에 관한 대화와 관련하여 후속 연락드립니다.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u3-2', unitId: 'lv4-t1-u3', english: 'Please find the attached document for your review and let me know if you have any questions.', korean: '검토를 위해 첨부 문서를 보내드리니, 질문이 있으시면 알려주세요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t1-u3-3', unitId: 'lv4-t1-u3', english: 'I apologize for the late reply — I\'ve been traveling for work this week.', korean: '늦은 답변 죄송합니다 — 이번 주 출장 중이었습니다.', difficulty: 4, isAiGenerated: false },

  // --- Lv.4 영화와 드라마 이야기 ---
  { id: 'e-lv4-t2-u1-1', unitId: 'lv4-t2-u1', english: 'The plot was a bit predictable, but the acting was absolutely incredible.', korean: '줄거리는 좀 뻔했지만, 연기는 정말 대단했어요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t2-u1-2', unitId: 'lv4-t2-u1', english: 'I won\'t spoil it for you, but the ending completely caught me off guard.', korean: '스포는 안 할게, 근데 결말이 완전히 의외였어.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t2-u1-3', unitId: 'lv4-t2-u1', english: 'It\'s based on a true story, which makes it even more powerful.', korean: '실화를 바탕으로 한 거라서 더 강렬해요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t2-u1-4', unitId: 'lv4-t2-u1', english: 'The soundtrack was so good that I added it to my playlist right away.', korean: 'OST가 너무 좋아서 바로 플레이리스트에 추가했어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.4 SNS와 온라인 문화 ---
  { id: 'e-lv4-t2-u2-1', unitId: 'lv4-t2-u2', english: 'That meme went viral overnight — everyone was sharing it.', korean: '그 밈이 하룻밤 사이에 퍼졌어 — 다들 공유하고 있었어.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t2-u2-2', unitId: 'lv4-t2-u2', english: 'I try to limit my screen time to two hours a day, but it\'s harder than it sounds.', korean: '하루 스크린 타임을 2시간으로 제한하려고 하는데, 생각보다 어려워.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t2-u2-3', unitId: 'lv4-t2-u2', english: 'You can\'t believe everything you see online — there\'s so much misinformation out there.', korean: '온라인에서 보는 걸 다 믿으면 안 돼 — 잘못된 정보가 너무 많아.', difficulty: 4, isAiGenerated: false },

  // --- Lv.4 기술 문제 해결 ---
  { id: 'e-lv4-t3-u1-1', unitId: 'lv4-t3-u1', english: 'My laptop keeps freezing whenever I try to open more than five tabs.', korean: '탭을 5개 이상 열면 노트북이 계속 멈춰요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv4-t3-u1-2', unitId: 'lv4-t3-u1', english: 'Have you tried restarting the router? That usually fixes the connection issue.', korean: '공유기 재시작해봤어? 보통 그러면 연결 문제가 해결돼.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv4-t3-u1-3', unitId: 'lv4-t3-u1', english: 'The app crashed right after the update, so I had to reinstall it.', korean: '업데이트 직후에 앱이 죽어서 재설치해야 했어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.4 온라인 서비스 이용 ---
  { id: 'e-lv4-t3-u2-1', unitId: 'lv4-t3-u2', english: 'I want to cancel my subscription before the free trial ends.', korean: '무료 체험 기간이 끝나기 전에 구독을 취소하고 싶어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv4-t3-u2-2', unitId: 'lv4-t3-u2', english: 'The payment didn\'t go through. Can you check if my card information is correct?', korean: '결제가 안 됐어요. 카드 정보가 맞는지 확인해주실 수 있나요?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv4-t3-u2-3', unitId: 'lv4-t3-u2', english: 'I forgot my password and the reset email isn\'t arriving in my inbox.', korean: '비밀번호를 잊어버렸는데 재설정 이메일이 도착하지 않아요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.5 환경과 지속가능성 ---
  { id: 'e-lv5-t1-u1-1', unitId: 'lv5-t1-u1', english: 'We need to take climate change seriously before it\'s too late to reverse the damage.', korean: '피해를 되돌리기에 너무 늦기 전에 기후변화를 심각하게 받아들여야 해요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t1-u1-2', unitId: 'lv5-t1-u1', english: 'Switching to renewable energy sources would significantly reduce carbon emissions.', korean: '재생 에너지원으로 전환하면 탄소 배출을 크게 줄일 수 있어요.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv5-t1-u1-3', unitId: 'lv5-t1-u1', english: 'Even small changes like using reusable bags can make a difference over time.', korean: '장바구니 사용 같은 작은 변화도 시간이 지나면 차이를 만들 수 있어요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t1-u1-4', unitId: 'lv5-t1-u1', english: 'I think the government should invest more in public transportation to reduce air pollution.', korean: '대기오염을 줄이기 위해 정부가 대중교통에 더 투자해야 한다고 생각해요.', difficulty: 5, isAiGenerated: false },

  // --- Lv.5 교육 시스템 ---
  { id: 'e-lv5-t1-u2-1', unitId: 'lv5-t1-u2', english: 'The current education system focuses too much on memorization rather than critical thinking.', korean: '현 교육 시스템은 비판적 사고보다 암기에 너무 치중해 있어요.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv5-t1-u2-2', unitId: 'lv5-t1-u2', english: 'Students should be encouraged to explore their own interests instead of just following a fixed curriculum.', korean: '학생들이 정해진 커리큘럼만 따르지 않고 자신의 관심사를 탐색하도록 격려받아야 해요.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv5-t1-u2-3', unitId: 'lv5-t1-u2', english: 'I believe that grades don\'t always reflect a student\'s true ability.', korean: '성적이 항상 학생의 진짜 능력을 반영하는 건 아니라고 생각해요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.5 조언과 위로 ---
  { id: 'e-lv5-t2-u1-1', unitId: 'lv5-t2-u1', english: 'I know it\'s tough right now, but things will get better eventually.', korean: '지금은 힘든 거 알아, 하지만 결국에는 나아질 거야.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t2-u1-2', unitId: 'lv5-t2-u1', english: 'If I were you, I\'d take some time off and think about what really matters to you.', korean: '나라면 좀 쉬면서 너한테 정말 중요한 게 뭔지 생각해볼 것 같아.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t2-u1-3', unitId: 'lv5-t2-u1', english: 'You don\'t have to go through this alone — I\'m here if you need someone to talk to.', korean: '혼자 겪을 필요 없어 — 얘기할 사람이 필요하면 내가 있잖아.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t2-u1-4', unitId: 'lv5-t2-u1', english: 'It\'s okay to make mistakes as long as you learn from them.', korean: '실수에서 배우기만 한다면 실수해도 괜찮아.', difficulty: 3, isAiGenerated: false },

  // --- Lv.5 갈등과 오해 해결 ---
  { id: 'e-lv5-t2-u2-1', unitId: 'lv5-t2-u2', english: 'I didn\'t mean to hurt your feelings — I should have chosen my words more carefully.', korean: '네 감정을 상하게 하려던 건 아니었어 — 말을 더 조심했어야 했는데.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t2-u2-2', unitId: 'lv5-t2-u2', english: 'I think there was a misunderstanding. Can we sit down and talk it through?', korean: '오해가 있었던 것 같아. 앉아서 차분히 이야기할 수 있을까?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t2-u2-3', unitId: 'lv5-t2-u2', english: 'I understand why you\'re upset, and I take full responsibility for what happened.', korean: '왜 화가 났는지 이해해, 그리고 일어난 일에 대해 전적으로 책임질게.', difficulty: 5, isAiGenerated: false },

  // --- Lv.5 의견 제시와 설득 ---
  { id: 'e-lv5-t3-u1-1', unitId: 'lv5-t3-u1', english: 'From a practical standpoint, I think option B makes more sense because it saves both time and money.', korean: '실용적인 관점에서 B안이 시간과 비용을 모두 아끼니까 더 합리적이라고 생각해요.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv5-t3-u1-2', unitId: 'lv5-t3-u1', english: 'While I see your point, I\'d argue that the long-term benefits outweigh the short-term costs.', korean: '당신 말도 일리가 있지만, 장기적 이점이 단기 비용보다 크다고 주장하고 싶어요.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv5-t3-u1-3', unitId: 'lv5-t3-u1', english: 'Let me give you an example to illustrate what I mean.', korean: '제 말이 무슨 뜻인지 예를 들어 설명해볼게요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.5 타협과 양보 ---
  { id: 'e-lv5-t3-u2-1', unitId: 'lv5-t3-u2', english: 'How about we meet halfway? I\'ll handle the design part if you take care of the research.', korean: '서로 반반 나누는 건 어때? 내가 디자인을 맡을 테니 너는 리서치를 맡아줘.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv5-t3-u2-2', unitId: 'lv5-t3-u2', english: 'I\'m willing to compromise on the deadline, but I can\'t lower the quality of the work.', korean: '마감일은 양보할 수 있지만, 작업 품질은 낮출 수 없어요.', difficulty: 5, isAiGenerated: false },
  { id: 'e-lv5-t3-u2-3', unitId: 'lv5-t3-u2', english: 'I understand your concerns. Let\'s find a solution that works for both of us.', korean: '걱정되는 부분 이해해요. 서로에게 맞는 해결책을 찾아봅시다.', difficulty: 4, isAiGenerated: false },
]

export const vocabulary_lv4_5: Vocabulary[] = [
  // --- Lv.4 면접 준비 ---
  { id: 'v-lv4-t1-u1-1', unitId: 'lv4-t1-u1', word: 'strength', meaning: '강점', partOfSpeech: '명사', exampleSentence: 'What do you consider your greatest strength?', exampleTranslation: '가장 큰 강점이 뭐라고 생각하세요?', isAiGenerated: false },
  { id: 'v-lv4-t1-u1-2', unitId: 'lv4-t1-u1', word: 'contribute', meaning: '기여하다', partOfSpeech: '동사', exampleSentence: 'I want to contribute to the company\'s success.', exampleTranslation: '회사의 성공에 기여하고 싶습니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u1-3', unitId: 'lv4-t1-u1', word: 'qualified', meaning: '자격을 갖춘', partOfSpeech: '형용사', exampleSentence: 'She is highly qualified for the position.', exampleTranslation: '그녀는 그 직무에 매우 적합합니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u1-4', unitId: 'lv4-t1-u1', word: 'achieve', meaning: '달성하다', partOfSpeech: '동사', exampleSentence: 'We achieved our sales target ahead of schedule.', exampleTranslation: '예정보다 앞서 매출 목표를 달성했습니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u1-5', unitId: 'lv4-t1-u1', word: 'adapt', meaning: '적응하다', partOfSpeech: '동사', exampleSentence: 'You need to adapt to the new system quickly.', exampleTranslation: '새로운 시스템에 빨리 적응해야 합니다.', isAiGenerated: false },

  // --- Lv.4 직장 내 소통 ---
  { id: 'v-lv4-t1-u2-1', unitId: 'lv4-t1-u2', word: 'deadline', meaning: '마감일', partOfSpeech: '명사', exampleSentence: 'We need to meet the deadline no matter what.', exampleTranslation: '무슨 일이 있어도 마감일을 맞춰야 합니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u2-2', unitId: 'lv4-t1-u2', word: 'postpone', meaning: '연기하다', partOfSpeech: '동사', exampleSentence: 'Can we postpone the meeting to Thursday?', exampleTranslation: '회의를 목요일로 미룰 수 있을까요?', isAiGenerated: false },
  { id: 'v-lv4-t1-u2-3', unitId: 'lv4-t1-u2', word: 'colleague', meaning: '동료', partOfSpeech: '명사', exampleSentence: 'My colleague helped me finish the report.', exampleTranslation: '동료가 보고서 끝내는 걸 도와줬어요.', isAiGenerated: false },
  { id: 'v-lv4-t1-u2-4', unitId: 'lv4-t1-u2', word: 'feedback', meaning: '피드백, 의견', partOfSpeech: '명사', exampleSentence: 'I\'d appreciate your feedback on this proposal.', exampleTranslation: '이 제안에 대한 피드백을 주시면 감사하겠습니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u2-5', unitId: 'lv4-t1-u2', word: 'priority', meaning: '우선순위', partOfSpeech: '명사', exampleSentence: 'This project is our top priority right now.', exampleTranslation: '이 프로젝트가 지금 최우선 과제입니다.', isAiGenerated: false },

  // --- Lv.4 이메일과 메시지 ---
  { id: 'v-lv4-t1-u3-1', unitId: 'lv4-t1-u3', word: 'regarding', meaning: '~에 관하여', partOfSpeech: '전치사', exampleSentence: 'I\'m writing regarding the invoice issue.', exampleTranslation: '청구서 문제에 관해 연락드립니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u3-2', unitId: 'lv4-t1-u3', word: 'attachment', meaning: '첨부 파일', partOfSpeech: '명사', exampleSentence: 'Please see the attachment for details.', exampleTranslation: '자세한 내용은 첨부 파일을 참조하세요.', isAiGenerated: false },
  { id: 'v-lv4-t1-u3-3', unitId: 'lv4-t1-u3', word: 'confirm', meaning: '확인하다', partOfSpeech: '동사', exampleSentence: 'Could you confirm the meeting time?', exampleTranslation: '회의 시간을 확인해주시겠어요?', isAiGenerated: false },
  { id: 'v-lv4-t1-u3-4', unitId: 'lv4-t1-u3', word: 'appreciate', meaning: '감사하다, 고맙게 여기다', partOfSpeech: '동사', exampleSentence: 'I really appreciate your quick response.', exampleTranslation: '빠른 답변에 정말 감사드립니다.', isAiGenerated: false },
  { id: 'v-lv4-t1-u3-5', unitId: 'lv4-t1-u3', word: 'sincerely', meaning: '진심으로', partOfSpeech: '부사', exampleSentence: 'Sincerely, Kim Jaeho.', exampleTranslation: '진심을 담아, 김재호 드림.', isAiGenerated: false },

  // --- Lv.4 영화와 드라마 ---
  { id: 'v-lv4-t2-u1-1', unitId: 'lv4-t2-u1', word: 'plot', meaning: '줄거리', partOfSpeech: '명사', exampleSentence: 'The plot had many unexpected twists.', exampleTranslation: '줄거리에 예상 못한 반전이 많았어요.', isAiGenerated: false },
  { id: 'v-lv4-t2-u1-2', unitId: 'lv4-t2-u1', word: 'spoiler', meaning: '스포일러', partOfSpeech: '명사', exampleSentence: 'Don\'t give me any spoilers!', exampleTranslation: '스포 하지 마!', isAiGenerated: false },
  { id: 'v-lv4-t2-u1-3', unitId: 'lv4-t2-u1', word: 'predictable', meaning: '예측 가능한, 뻔한', partOfSpeech: '형용사', exampleSentence: 'The ending was too predictable.', exampleTranslation: '결말이 너무 뻔했어요.', isAiGenerated: false },
  { id: 'v-lv4-t2-u1-4', unitId: 'lv4-t2-u1', word: 'genre', meaning: '장르', partOfSpeech: '명사', exampleSentence: 'What genre of movies do you prefer?', exampleTranslation: '어떤 장르의 영화를 선호해요?', isAiGenerated: false },
  { id: 'v-lv4-t2-u1-5', unitId: 'lv4-t2-u1', word: 'soundtrack', meaning: '사운드트랙, OST', partOfSpeech: '명사', exampleSentence: 'The soundtrack really sets the mood.', exampleTranslation: 'OST가 분위기를 정말 잘 살려줘요.', isAiGenerated: false },

  // --- Lv.4 SNS ---
  { id: 'v-lv4-t2-u2-1', unitId: 'lv4-t2-u2', word: 'viral', meaning: '바이럴의, 급속히 퍼지는', partOfSpeech: '형용사', exampleSentence: 'The video went viral in just a few hours.', exampleTranslation: '그 영상이 불과 몇 시간 만에 퍼졌어요.', isAiGenerated: false },
  { id: 'v-lv4-t2-u2-2', unitId: 'lv4-t2-u2', word: 'misinformation', meaning: '잘못된 정보', partOfSpeech: '명사', exampleSentence: 'Social media is full of misinformation.', exampleTranslation: 'SNS에는 잘못된 정보가 가득해요.', isAiGenerated: false },
  { id: 'v-lv4-t2-u2-3', unitId: 'lv4-t2-u2', word: 'algorithm', meaning: '알고리즘', partOfSpeech: '명사', exampleSentence: 'The algorithm decides what you see on your feed.', exampleTranslation: '알고리즘이 피드에 뭐가 보이는지를 결정해요.', isAiGenerated: false },
  { id: 'v-lv4-t2-u2-4', unitId: 'lv4-t2-u2', word: 'influence', meaning: '영향, 영향을 미치다', partOfSpeech: '명사/동사', exampleSentence: 'Social media has a huge influence on young people.', exampleTranslation: 'SNS는 젊은이들에게 큰 영향을 미쳐요.', isAiGenerated: false },
  { id: 'v-lv4-t2-u2-5', unitId: 'lv4-t2-u2', word: 'addiction', meaning: '중독', partOfSpeech: '명사', exampleSentence: 'Phone addiction is a growing concern.', exampleTranslation: '스마트폰 중독은 점점 커지는 우려예요.', isAiGenerated: false },

  // --- Lv.4 기술 문제 ---
  { id: 'v-lv4-t3-u1-1', unitId: 'lv4-t3-u1', word: 'crash', meaning: '충돌하다, 먹통되다', partOfSpeech: '동사', exampleSentence: 'The app keeps crashing on my phone.', exampleTranslation: '앱이 계속 죽어요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u1-2', unitId: 'lv4-t3-u1', word: 'troubleshoot', meaning: '문제를 해결하다', partOfSpeech: '동사', exampleSentence: 'Let me troubleshoot the issue for you.', exampleTranslation: '제가 문제를 해결해드릴게요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u1-3', unitId: 'lv4-t3-u1', word: 'compatible', meaning: '호환되는', partOfSpeech: '형용사', exampleSentence: 'This software isn\'t compatible with older devices.', exampleTranslation: '이 소프트웨어는 구형 기기와 호환되지 않아요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u1-4', unitId: 'lv4-t3-u1', word: 'update', meaning: '업데이트, 갱신하다', partOfSpeech: '명사/동사', exampleSentence: 'Make sure you install the latest update.', exampleTranslation: '최신 업데이트를 꼭 설치하세요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u1-5', unitId: 'lv4-t3-u1', word: 'lag', meaning: '지연, 렉', partOfSpeech: '명사/동사', exampleSentence: 'The game lags when too many players are online.', exampleTranslation: '접속자가 너무 많으면 게임에 렉이 걸려요.', isAiGenerated: false },

  // --- Lv.4 온라인 서비스 ---
  { id: 'v-lv4-t3-u2-1', unitId: 'lv4-t3-u2', word: 'subscription', meaning: '구독', partOfSpeech: '명사', exampleSentence: 'I canceled my subscription last month.', exampleTranslation: '지난달에 구독을 취소했어요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u2-2', unitId: 'lv4-t3-u2', word: 'verify', meaning: '인증하다, 확인하다', partOfSpeech: '동사', exampleSentence: 'Please verify your email address.', exampleTranslation: '이메일 주소를 인증해주세요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u2-3', unitId: 'lv4-t3-u2', word: 'transaction', meaning: '거래', partOfSpeech: '명사', exampleSentence: 'The transaction was declined.', exampleTranslation: '거래가 거절됐어요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u2-4', unitId: 'lv4-t3-u2', word: 'account', meaning: '계정', partOfSpeech: '명사', exampleSentence: 'My account has been locked.', exampleTranslation: '계정이 잠겼어요.', isAiGenerated: false },
  { id: 'v-lv4-t3-u2-5', unitId: 'lv4-t3-u2', word: 'expire', meaning: '만료되다', partOfSpeech: '동사', exampleSentence: 'Your free trial will expire in three days.', exampleTranslation: '무료 체험이 3일 후에 만료됩니다.', isAiGenerated: false },

  // --- Lv.5 환경 ---
  { id: 'v-lv5-t1-u1-1', unitId: 'lv5-t1-u1', word: 'sustainable', meaning: '지속 가능한', partOfSpeech: '형용사', exampleSentence: 'We need more sustainable energy solutions.', exampleTranslation: '더 지속 가능한 에너지 해결책이 필요해요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u1-2', unitId: 'lv5-t1-u1', word: 'emission', meaning: '배출', partOfSpeech: '명사', exampleSentence: 'Carbon emissions must be reduced drastically.', exampleTranslation: '탄소 배출을 대폭 줄여야 합니다.', isAiGenerated: false },
  { id: 'v-lv5-t1-u1-3', unitId: 'lv5-t1-u1', word: 'renewable', meaning: '재생 가능한', partOfSpeech: '형용사', exampleSentence: 'Solar power is a renewable energy source.', exampleTranslation: '태양광은 재생 가능한 에너지원이에요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u1-4', unitId: 'lv5-t1-u1', word: 'ecosystem', meaning: '생태계', partOfSpeech: '명사', exampleSentence: 'Pollution is destroying marine ecosystems.', exampleTranslation: '오염이 해양 생태계를 파괴하고 있어요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u1-5', unitId: 'lv5-t1-u1', word: 'conservation', meaning: '보존, 보호', partOfSpeech: '명사', exampleSentence: 'Wildlife conservation is a global priority.', exampleTranslation: '야생동물 보호는 세계적 과제예요.', isAiGenerated: false },

  // --- Lv.5 교육 시스템 ---
  { id: 'v-lv5-t1-u2-1', unitId: 'lv5-t1-u2', word: 'curriculum', meaning: '교육과정', partOfSpeech: '명사', exampleSentence: 'The curriculum should be updated regularly.', exampleTranslation: '교육과정은 정기적으로 개편되어야 해요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u2-2', unitId: 'lv5-t1-u2', word: 'memorization', meaning: '암기', partOfSpeech: '명사', exampleSentence: 'Memorization alone doesn\'t lead to deep understanding.', exampleTranslation: '암기만으로는 깊은 이해에 도달할 수 없어요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u2-3', unitId: 'lv5-t1-u2', word: 'critical thinking', meaning: '비판적 사고', partOfSpeech: '명사', exampleSentence: 'Schools should teach critical thinking skills.', exampleTranslation: '학교에서 비판적 사고 능력을 가르쳐야 해요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u2-4', unitId: 'lv5-t1-u2', word: 'creativity', meaning: '창의력', partOfSpeech: '명사', exampleSentence: 'Creativity is just as important as knowledge.', exampleTranslation: '창의력은 지식만큼이나 중요해요.', isAiGenerated: false },
  { id: 'v-lv5-t1-u2-5', unitId: 'lv5-t1-u2', word: 'assessment', meaning: '평가', partOfSpeech: '명사', exampleSentence: 'There are many ways to assess student progress.', exampleTranslation: '학생의 성취를 평가하는 방법은 다양해요.', isAiGenerated: false },

  // --- Lv.5 조언과 위로 ---
  { id: 'v-lv5-t2-u1-1', unitId: 'lv5-t2-u1', word: 'empathy', meaning: '공감', partOfSpeech: '명사', exampleSentence: 'Showing empathy is more helpful than giving advice.', exampleTranslation: '조언보다 공감을 보여주는 게 더 도움이 돼요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u1-2', unitId: 'lv5-t2-u1', word: 'overwhelmed', meaning: '압도된, 벅찬', partOfSpeech: '형용사', exampleSentence: 'I felt overwhelmed by all the work.', exampleTranslation: '일이 너무 많아서 벅찼어요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u1-3', unitId: 'lv5-t2-u1', word: 'cope', meaning: '대처하다', partOfSpeech: '동사', exampleSentence: 'How do you cope with stress?', exampleTranslation: '스트레스에 어떻게 대처해요?', isAiGenerated: false },
  { id: 'v-lv5-t2-u1-4', unitId: 'lv5-t2-u1', word: 'supportive', meaning: '지지해주는', partOfSpeech: '형용사', exampleSentence: 'She\'s always been very supportive of my decisions.', exampleTranslation: '그녀는 항상 제 결정을 지지해줬어요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u1-5', unitId: 'lv5-t2-u1', word: 'resilient', meaning: '회복력 있는', partOfSpeech: '형용사', exampleSentence: 'Kids are surprisingly resilient.', exampleTranslation: '아이들은 의외로 회복력이 좋아요.', isAiGenerated: false },

  // --- Lv.5 갈등 해결 ---
  { id: 'v-lv5-t2-u2-1', unitId: 'lv5-t2-u2', word: 'misunderstanding', meaning: '오해', partOfSpeech: '명사', exampleSentence: 'It was just a misunderstanding.', exampleTranslation: '그냥 오해였어요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u2-2', unitId: 'lv5-t2-u2', word: 'reconcile', meaning: '화해하다', partOfSpeech: '동사', exampleSentence: 'They finally reconciled after months of not speaking.', exampleTranslation: '몇 달간 말을 안 하다가 결국 화해했어요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u2-3', unitId: 'lv5-t2-u2', word: 'accountability', meaning: '책임감', partOfSpeech: '명사', exampleSentence: 'Taking accountability is the first step.', exampleTranslation: '책임을 지는 게 첫 번째 단계예요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u2-4', unitId: 'lv5-t2-u2', word: 'tension', meaning: '긴장, 갈등', partOfSpeech: '명사', exampleSentence: 'There\'s been a lot of tension between them lately.', exampleTranslation: '최근 그들 사이에 갈등이 많아요.', isAiGenerated: false },
  { id: 'v-lv5-t2-u2-5', unitId: 'lv5-t2-u2', word: 'boundary', meaning: '경계, 한계', partOfSpeech: '명사', exampleSentence: 'It\'s important to set healthy boundaries.', exampleTranslation: '건강한 경계를 설정하는 게 중요해요.', isAiGenerated: false },

  // --- Lv.5 설득 ---
  { id: 'v-lv5-t3-u1-1', unitId: 'lv5-t3-u1', word: 'persuade', meaning: '설득하다', partOfSpeech: '동사', exampleSentence: 'She persuaded me to apply for the job.', exampleTranslation: '그녀가 그 직업에 지원하도록 나를 설득했어요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u1-2', unitId: 'lv5-t3-u1', word: 'evidence', meaning: '증거', partOfSpeech: '명사', exampleSentence: 'There\'s strong evidence to support this claim.', exampleTranslation: '이 주장을 뒷받침하는 강력한 증거가 있어요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u1-3', unitId: 'lv5-t3-u1', word: 'standpoint', meaning: '관점, 입장', partOfSpeech: '명사', exampleSentence: 'From a financial standpoint, this is the better option.', exampleTranslation: '재정적 관점에서 이게 더 나은 선택이에요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u1-4', unitId: 'lv5-t3-u1', word: 'drawback', meaning: '단점, 결점', partOfSpeech: '명사', exampleSentence: 'One major drawback is the high cost.', exampleTranslation: '가장 큰 단점은 높은 비용이에요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u1-5', unitId: 'lv5-t3-u1', word: 'outweigh', meaning: '~보다 크다/중요하다', partOfSpeech: '동사', exampleSentence: 'The benefits outweigh the risks.', exampleTranslation: '이점이 위험보다 큽니다.', isAiGenerated: false },

  // --- Lv.5 타협 ---
  { id: 'v-lv5-t3-u2-1', unitId: 'lv5-t3-u2', word: 'compromise', meaning: '타협하다, 타협', partOfSpeech: '동사/명사', exampleSentence: 'We need to find a compromise.', exampleTranslation: '타협점을 찾아야 해요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u2-2', unitId: 'lv5-t3-u2', word: 'negotiate', meaning: '협상하다', partOfSpeech: '동사', exampleSentence: 'They\'re still negotiating the terms.', exampleTranslation: '아직 조건을 협상 중이에요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u2-3', unitId: 'lv5-t3-u2', word: 'mutual', meaning: '상호의, 서로의', partOfSpeech: '형용사', exampleSentence: 'It was a mutual decision.', exampleTranslation: '서로 합의한 결정이었어요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u2-4', unitId: 'lv5-t3-u2', word: 'concession', meaning: '양보, 양보점', partOfSpeech: '명사', exampleSentence: 'Both sides had to make concessions.', exampleTranslation: '양측 모두 양보해야 했어요.', isAiGenerated: false },
  { id: 'v-lv5-t3-u2-5', unitId: 'lv5-t3-u2', word: 'flexible', meaning: '유연한', partOfSpeech: '형용사', exampleSentence: 'We need to be flexible about the schedule.', exampleTranslation: '일정에 유연하게 대처해야 해요.', isAiGenerated: false },
]
