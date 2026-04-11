import type { Level, Theme, Unit, Expression, Vocabulary } from './types'
import { themes_lv4_5, units_lv4_5, expressions_lv4_5, vocabulary_lv4_5 } from './curriculum-lv4-5'
import { themes_lv6_7, units_lv6_7, expressions_lv6_7, vocabulary_lv6_7 } from './curriculum-lv6-7'
import { themes_lv8_10, units_lv8_10, expressions_lv8_10, vocabulary_lv8_10 } from './curriculum-lv8-10'

// ===== 레벨 정의 (최소 초6 수준 = A2 시작) =====
export const levels: Level[] = [
  { id: 1, level: 1, name: 'Lv.1 기초', description: '일상 대화의 기본기. 문장 구조와 시제 활용', cefr: 'A2' },
  { id: 2, level: 2, name: 'Lv.2 초급', description: '다양한 상황에서 자신의 의견 표현', cefr: 'A2+' },
  { id: 3, level: 3, name: 'Lv.3 초중급', description: '실생활 대화와 문맥 이해', cefr: 'B1' },
  { id: 4, level: 4, name: 'Lv.4 중급', description: '자연스러운 일상 영어와 뉘앙스', cefr: 'B1' },
  { id: 5, level: 5, name: 'Lv.5 중급+', description: '의견 표현, 설득, 토론의 기초', cefr: 'B1+' },
  { id: 6, level: 6, name: 'Lv.6 중상급', description: '복잡한 주제와 추상적 대화', cefr: 'B2' },
  { id: 7, level: 7, name: 'Lv.7 상급', description: '비즈니스 영어와 전문 분야 대화', cefr: 'B2' },
  { id: 8, level: 8, name: 'Lv.8 상급+', description: '뉴스, 시사, 학술 토론', cefr: 'B2+' },
  { id: 9, level: 9, name: 'Lv.9 고급', description: '미묘한 뉘앙스와 관용 표현', cefr: 'C1' },
  { id: 10, level: 10, name: 'Lv.10 최고급', description: '네이티브 수준의 표현력', cefr: 'C1+' },
]

// ===== 테마 =====
const themes_lv1_3: Theme[] = [
  // Lv.1: 일상 대화 기본기 (초6~중1 수준, A2)
  { id: 'lv1-t1', levelId: 1, name: '자기소개와 일상', description: '자신에 대해 문장으로 말하기, 습관과 루틴 표현', order: 1 },
  { id: 'lv1-t2', levelId: 1, name: '학교생활과 취미', description: '학교, 과목, 좋아하는 활동에 대한 대화', order: 2 },
  { id: 'lv1-t3', levelId: 1, name: '장소와 이동', description: '위치 설명, 길 안내, 교통수단 이용', order: 3 },

  // Lv.2: 의견 표현 (중1~중2 수준, A2+)
  { id: 'lv2-t1', levelId: 2, name: '음식과 외식', description: '주문, 취향, 음식 추천하기', order: 1 },
  { id: 'lv2-t2', levelId: 2, name: '쇼핑과 소비', description: '물건 사기, 비교하기, 교환/환불', order: 2 },
  { id: 'lv2-t3', levelId: 2, name: '감정과 의견', description: '감정 표현, 동의/반대, 이유 설명', order: 3 },

  // Lv.3: 실생활 대화 (중2~중3 수준, B1)
  { id: 'lv3-t1', levelId: 3, name: '여행과 문화', description: '여행 계획, 예약, 문화 차이 이야기', order: 1 },
  { id: 'lv3-t2', levelId: 3, name: '건강과 일상 문제', description: '증상 설명, 병원 방문, 일상 문제 해결', order: 2 },
  { id: 'lv3-t3', levelId: 3, name: '미래와 계획', description: '계획, 목표, 추측과 가정 표현', order: 3 },
]

export const themes: Theme[] = [...themes_lv1_3, ...themes_lv4_5, ...themes_lv6_7, ...themes_lv8_10]

// ===== 유닛 =====
const units_lv1_3: Unit[] = [
  // === Lv.1 Theme 1: 자기소개와 일상 ===
  { id: 'lv1-t1-u1', themeId: 'lv1-t1', name: '나에 대해 말하기', description: '성격, 외모, 가족을 문장으로 소개', order: 1 },
  { id: 'lv1-t1-u2', themeId: 'lv1-t1', name: '하루 일과 이야기', description: '일상 루틴을 현재시제로 말하기', order: 2 },
  { id: 'lv1-t1-u3', themeId: 'lv1-t1', name: '지난 주말 이야기', description: '과거시제로 경험 이야기하기', order: 3 },

  // === Lv.1 Theme 2: 학교생활과 취미 ===
  { id: 'lv1-t2-u1', themeId: 'lv1-t2', name: '학교와 수업', description: '과목, 시간표, 학교 생활 표현', order: 1 },
  { id: 'lv1-t2-u2', themeId: 'lv1-t2', name: '취미와 관심사', description: '취미 소개, 빈도 부사 활용', order: 2 },
  { id: 'lv1-t2-u3', themeId: 'lv1-t2', name: '친구에게 제안하기', description: 'Let\'s / How about / Why don\'t we 활용', order: 3 },

  // === Lv.1 Theme 3: 장소와 이동 ===
  { id: 'lv1-t3-u1', themeId: 'lv1-t3', name: '장소 묘사하기', description: 'There is/are, 전치사로 위치 설명', order: 1 },
  { id: 'lv1-t3-u2', themeId: 'lv1-t3', name: '길 안내와 교통', description: '방향, 거리, 교통수단 표현', order: 2 },

  // === Lv.2 Theme 1: 음식과 외식 ===
  { id: 'lv2-t1-u1', themeId: 'lv2-t1', name: '카페와 레스토랑 주문', description: '주문, 요청, 변경하기', order: 1 },
  { id: 'lv2-t1-u2', themeId: 'lv2-t1', name: '음식 취향과 추천', description: '비교급으로 음식 비교, 추천하기', order: 2 },
  { id: 'lv2-t1-u3', themeId: 'lv2-t1', name: '요리법 설명하기', description: '순서대로 지시하기, 명령문 활용', order: 3 },

  // === Lv.2 Theme 2: 쇼핑과 소비 ===
  { id: 'lv2-t2-u1', themeId: 'lv2-t2', name: '옷과 물건 사기', description: '사이즈, 색상, 비교하며 쇼핑', order: 1 },
  { id: 'lv2-t2-u2', themeId: 'lv2-t2', name: '가격과 흥정', description: '할인, 교환, 환불 요청', order: 2 },

  // === Lv.2 Theme 3: 감정과 의견 ===
  { id: 'lv2-t3-u1', themeId: 'lv2-t3', name: '감정 표현하기', description: '기쁨, 슬픔, 놀라움 등 다양한 감정', order: 1 },
  { id: 'lv2-t3-u2', themeId: 'lv2-t3', name: '의견 말하기와 동의/반대', description: 'I think, I agree, I disagree 활용', order: 2 },

  // === Lv.3 Theme 1: 여행과 문화 ===
  { id: 'lv3-t1-u1', themeId: 'lv3-t1', name: '여행 계획 세우기', description: '미래 시제, 조건문으로 계획 세우기', order: 1 },
  { id: 'lv3-t1-u2', themeId: 'lv3-t1', name: '호텔과 예약', description: '예약, 체크인/아웃, 요청사항', order: 2 },
  { id: 'lv3-t1-u3', themeId: 'lv3-t1', name: '문화 차이 이야기', description: '비교하며 문화 차이 설명', order: 3 },

  // === Lv.3 Theme 2: 건강과 문제 해결 ===
  { id: 'lv3-t2-u1', themeId: 'lv3-t2', name: '증상과 병원 방문', description: '아픈 곳 설명, 의사와 대화', order: 1 },
  { id: 'lv3-t2-u2', themeId: 'lv3-t2', name: '일상 문제 해결', description: '불만 제기, 해결 방법 협의', order: 2 },

  // === Lv.3 Theme 3: 미래와 계획 ===
  { id: 'lv3-t3-u1', themeId: 'lv3-t3', name: '목표와 꿈', description: 'want to, going to, hope to 활용', order: 1 },
  { id: 'lv3-t3-u2', themeId: 'lv3-t3', name: '가정과 추측', description: 'If 조건문, might, probably 활용', order: 2 },
]

export const units: Unit[] = [...units_lv1_3, ...units_lv4_5, ...units_lv6_7, ...units_lv8_10]

// ===== 핵심 표현 (초6 이상 수준) =====
const expressions_lv1_3: Expression[] = [
  // --- Lv.1 Theme1 Unit1: 나에 대해 말하기 ---
  { id: 'e-lv1-t1-u1-1', unitId: 'lv1-t1-u1', english: 'I\'m the kind of person who enjoys spending time alone.', korean: '저는 혼자 시간 보내는 걸 즐기는 사람이에요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t1-u1-2', unitId: 'lv1-t1-u1', english: 'My older brother is taller than me, but I\'m better at sports.', korean: '형은 저보다 키가 크지만, 저는 운동을 더 잘해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u1-3', unitId: 'lv1-t1-u1', english: 'I\'ve lived in this neighborhood since I was five years old.', korean: '저는 다섯 살 때부터 이 동네에 살았어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u1-4', unitId: 'lv1-t1-u1', english: 'People often say that I look like my mother.', korean: '사람들이 제가 엄마를 많이 닮았다고 해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u1-5', unitId: 'lv1-t1-u1', english: 'I have a younger sister who is really good at drawing.', korean: '그림을 정말 잘 그리는 여동생이 있어요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme1 Unit2: 하루 일과 이야기 ---
  { id: 'e-lv1-t1-u2-1', unitId: 'lv1-t1-u2', english: 'I usually wake up at seven and get ready for school.', korean: '저는 보통 7시에 일어나서 등교 준비를 해요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t1-u2-2', unitId: 'lv1-t1-u2', english: 'After school, I go to the library to study for about two hours.', korean: '방과 후에 도서관에 가서 약 두 시간 공부해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u2-3', unitId: 'lv1-t1-u2', english: 'I don\'t eat breakfast because I\'m never hungry in the morning.', korean: '아침에 배가 전혀 안 고파서 아침을 안 먹어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u2-4', unitId: 'lv1-t1-u2', english: 'Before I go to bed, I like to read a book or watch videos.', korean: '자기 전에 책을 읽거나 영상을 보는 걸 좋아해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u2-5', unitId: 'lv1-t1-u2', english: 'On weekdays, I always take the bus, but on weekends I walk.', korean: '평일에는 항상 버스를 타지만, 주말에는 걸어요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme1 Unit3: 지난 주말 이야기 ---
  { id: 'e-lv1-t1-u3-1', unitId: 'lv1-t1-u3', english: 'Last weekend, I went to the movies with my friends.', korean: '지난 주말에 친구들이랑 영화를 보러 갔어요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t1-u3-2', unitId: 'lv1-t1-u3', english: 'We had pizza for lunch and then walked around the mall.', korean: '점심으로 피자를 먹고 쇼핑몰을 돌아다녔어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u3-3', unitId: 'lv1-t1-u3', english: 'I didn\'t finish my homework, so I had to do it on Sunday night.', korean: '숙제를 다 못 해서 일요일 밤에 해야 했어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t1-u3-4', unitId: 'lv1-t1-u3', english: 'It rained all day, so we stayed home and played board games.', korean: '하루 종일 비가 와서 집에서 보드게임을 했어요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme2 Unit1: 학교와 수업 ---
  { id: 'e-lv1-t2-u1-1', unitId: 'lv1-t2-u1', english: 'My favorite subject is science because we do experiments.', korean: '제가 가장 좋아하는 과목은 과학이에요, 실험을 하거든요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t2-u1-2', unitId: 'lv1-t2-u1', english: 'I\'m not very good at math, but I\'m trying to improve.', korean: '수학은 잘 못하지만, 나아지려고 노력하고 있어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t2-u1-3', unitId: 'lv1-t2-u1', english: 'We have six classes a day, and each class is forty-five minutes long.', korean: '하루에 6교시가 있고, 각 수업은 45분이에요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t2-u1-4', unitId: 'lv1-t2-u1', english: 'Our English teacher gives us a lot of homework, but it\'s useful.', korean: '영어 선생님이 숙제를 많이 내주시지만, 도움이 돼요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme2 Unit2: 취미와 관심사 ---
  { id: 'e-lv1-t2-u2-1', unitId: 'lv1-t2-u2', english: 'I play the guitar every day after I finish my homework.', korean: '숙제를 끝낸 후에 매일 기타를 쳐요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t2-u2-2', unitId: 'lv1-t2-u2', english: 'I\'ve been interested in photography since last year.', korean: '작년부터 사진에 관심이 생겼어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t2-u2-3', unitId: 'lv1-t2-u2', english: 'I sometimes watch cooking videos and try to make the food myself.', korean: '가끔 요리 영상을 보고 직접 만들어봐요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t2-u2-4', unitId: 'lv1-t2-u2', english: 'I used to play soccer a lot, but now I prefer basketball.', korean: '예전에 축구를 많이 했는데, 지금은 농구를 더 좋아해요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme2 Unit3: 친구에게 제안하기 ---
  { id: 'e-lv1-t2-u3-1', unitId: 'lv1-t2-u3', english: 'How about going to the new café near the station?', korean: '역 근처 새로 생긴 카페에 가는 거 어때?', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t2-u3-2', unitId: 'lv1-t2-u3', english: 'Why don\'t we study together at the library this Saturday?', korean: '이번 토요일에 도서관에서 같이 공부하는 거 어때?', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t2-u3-3', unitId: 'lv1-t2-u3', english: 'Let\'s meet at three o\'clock in front of the school.', korean: '학교 앞에서 3시에 만나자.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t2-u3-4', unitId: 'lv1-t2-u3', english: 'That sounds like fun! I\'ll ask my mom if I can go.', korean: '재밌겠다! 엄마한테 가도 되는지 물어볼게.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t2-u3-5', unitId: 'lv1-t2-u3', english: 'I\'m sorry, I can\'t make it. I have piano lessons on Saturdays.', korean: '미안, 못 갈 것 같아. 토요일에 피아노 학원이 있어.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme3 Unit1: 장소 묘사하기 ---
  { id: 'e-lv1-t3-u1-1', unitId: 'lv1-t3-u1', english: 'There is a big park near my house with a lake in the middle.', korean: '우리 집 근처에 한가운데 호수가 있는 큰 공원이 있어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t3-u1-2', unitId: 'lv1-t3-u1', english: 'The bookstore is between the bank and the post office.', korean: '서점은 은행과 우체국 사이에 있어요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t3-u1-3', unitId: 'lv1-t3-u1', english: 'My neighborhood is quiet during the week but noisy on weekends.', korean: '우리 동네는 평일에는 조용한데 주말에는 시끄러워요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t3-u1-4', unitId: 'lv1-t3-u1', english: 'There are several restaurants across the street from my school.', korean: '학교 맞은편에 식당이 여러 개 있어요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.1 Theme3 Unit2: 길 안내와 교통 ---
  { id: 'e-lv1-t3-u2-1', unitId: 'lv1-t3-u2', english: 'Go straight for two blocks and turn left at the traffic light.', korean: '두 블록 직진한 다음 신호등에서 좌회전하세요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t3-u2-2', unitId: 'lv1-t3-u2', english: 'It takes about twenty minutes by bus from here.', korean: '여기서 버스로 약 20분 걸려요.', difficulty: 2, isAiGenerated: false },
  { id: 'e-lv1-t3-u2-3', unitId: 'lv1-t3-u2', english: 'You should transfer to Line 3 at the next station.', korean: '다음 역에서 3호선으로 환승해야 해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv1-t3-u2-4', unitId: 'lv1-t3-u2', english: 'Excuse me, could you tell me how to get to City Hall?', korean: '실례합니다, 시청까지 어떻게 가는지 알려주시겠어요?', difficulty: 3, isAiGenerated: false },

  // --- Lv.2 Theme1 Unit1: 카페와 레스토랑 주문 ---
  { id: 'e-lv2-t1-u1-1', unitId: 'lv2-t1-u1', english: 'Could I get a large iced americano with an extra shot, please?', korean: '아이스 아메리카노 큰 사이즈에 샷 추가해서 주세요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u1-2', unitId: 'lv2-t1-u1', english: 'I\'d like to change my order — can I have the pasta instead of the salad?', korean: '주문을 바꾸고 싶은데요 — 샐러드 대신 파스타로 할 수 있나요?', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u1-3', unitId: 'lv2-t1-u1', english: 'Do you have any vegetarian options on the menu?', korean: '메뉴에 채식 옵션이 있나요?', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u1-4', unitId: 'lv2-t1-u1', english: 'I\'m allergic to nuts, so could you check the ingredients for me?', korean: '견과류 알레르기가 있어서, 재료 좀 확인해주실 수 있나요?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t1-u1-5', unitId: 'lv2-t1-u1', english: 'We\'d like to split the bill, please. We\'re paying separately.', korean: '각자 계산할게요. 따로 결제합니다.', difficulty: 3, isAiGenerated: false },

  // --- Lv.2 Theme1 Unit2: 음식 취향과 추천 ---
  { id: 'e-lv2-t1-u2-1', unitId: 'lv2-t1-u2', english: 'I think Korean food is spicier than Japanese food, but both are delicious.', korean: '한국 음식이 일본 음식보다 더 매운 것 같은데, 둘 다 맛있어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u2-2', unitId: 'lv2-t1-u2', english: 'You should try the steak here — it\'s the best dish on the menu.', korean: '여기 스테이크 꼭 먹어봐 — 메뉴에서 제일 맛있어.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u2-3', unitId: 'lv2-t1-u2', english: 'I\'ve become more interested in cooking since I started living alone.', korean: '자취를 시작한 이후로 요리에 더 관심이 생겼어요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t1-u2-4', unitId: 'lv2-t1-u2', english: 'This restaurant doesn\'t look fancy, but the food is surprisingly good.', korean: '이 식당은 고급스러워 보이진 않는데, 음식이 의외로 맛있어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.2 Theme1 Unit3: 요리법 설명하기 ---
  { id: 'e-lv2-t1-u3-1', unitId: 'lv2-t1-u3', english: 'First, boil the water and add a pinch of salt before putting in the noodles.', korean: '먼저 물을 끓이고 면을 넣기 전에 소금을 한 꼬집 넣으세요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u3-2', unitId: 'lv2-t1-u3', english: 'Stir-fry the vegetables on high heat for about three minutes.', korean: '야채를 센 불에서 약 3분간 볶으세요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t1-u3-3', unitId: 'lv2-t1-u3', english: 'Make sure you don\'t overcook the eggs — they should still be a little soft.', korean: '달걀을 너무 익히지 마세요 — 아직 약간 촉촉해야 해요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t1-u3-4', unitId: 'lv2-t1-u3', english: 'After you chop the onions, let them sit in cold water for five minutes.', korean: '양파를 썬 후에 찬물에 5분간 담가두세요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.2 Theme2 Unit1: 옷과 물건 사기 ---
  { id: 'e-lv2-t2-u1-1', unitId: 'lv2-t2-u1', english: 'I\'m looking for a jacket in a medium size. Do you have anything in dark blue?', korean: '미디엄 사이즈 재킷을 찾고 있어요. 진한 파란색 있나요?', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t2-u1-2', unitId: 'lv2-t2-u1', english: 'This one fits well, but I think the other one looked better on me.', korean: '이건 잘 맞는데, 아까 다른 게 저한테 더 잘 어울렸던 것 같아요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t2-u1-3', unitId: 'lv2-t2-u1', english: 'Can I try this on in a smaller size? This one is a bit loose.', korean: '이거 작은 사이즈로 입어봐도 될까요? 이건 좀 헐렁해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t2-u1-4', unitId: 'lv2-t2-u1', english: 'These shoes are more comfortable than the ones I tried earlier.', korean: '이 신발이 아까 신어본 것보다 더 편해요.', difficulty: 3, isAiGenerated: false },

  // --- Lv.2 Theme2 Unit2: 가격과 흥정 ---
  { id: 'e-lv2-t2-u2-1', unitId: 'lv2-t2-u2', english: 'That\'s a little out of my budget. Is there anything cheaper?', korean: '그건 예산을 좀 넘어요. 더 저렴한 거 있나요?', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t2-u2-2', unitId: 'lv2-t2-u2', english: 'If I buy two, can I get a discount on the second one?', korean: '두 개 사면 두 번째 거 할인 받을 수 있나요?', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t2-u2-3', unitId: 'lv2-t2-u2', english: 'I\'d like to return this because it doesn\'t fit. Do I need the receipt?', korean: '안 맞아서 반품하고 싶은데요. 영수증이 필요한가요?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t2-u2-4', unitId: 'lv2-t2-u2', english: 'It was on sale online for thirty percent off, but it\'s sold out now.', korean: '온라인에서 30% 할인 중이었는데, 지금은 품절이에요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.2 Theme3 Unit1: 감정 표현하기 ---
  { id: 'e-lv2-t3-u1-1', unitId: 'lv2-t3-u1', english: 'I was so relieved when I found out I passed the exam.', korean: '시험에 합격했다는 걸 알았을 때 정말 안심했어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t3-u1-2', unitId: 'lv2-t3-u1', english: 'It really bothers me when people talk loudly on the phone in public.', korean: '사람들이 공공장소에서 전화를 크게 하면 정말 신경 쓰여요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t3-u1-3', unitId: 'lv2-t3-u1', english: 'I\'m a little nervous about the presentation tomorrow.', korean: '내일 발표가 좀 긴장돼요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t3-u1-4', unitId: 'lv2-t3-u1', english: 'I was disappointed that the concert was canceled at the last minute.', korean: '콘서트가 직전에 취소되어서 실망했어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.2 Theme3 Unit2: 의견 말하기와 동의/반대 ---
  { id: 'e-lv2-t3-u2-1', unitId: 'lv2-t3-u2', english: 'I think students should be allowed to use phones during breaks.', korean: '학생들이 쉬는 시간에 핸드폰을 써도 되어야 한다고 생각해요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t3-u2-2', unitId: 'lv2-t3-u2', english: 'I agree with you, but I also think there should be some rules.', korean: '동의하지만, 규칙이 좀 있어야 한다고도 생각해요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv2-t3-u2-3', unitId: 'lv2-t3-u2', english: 'I\'m not sure I agree. What if it distracts other students?', korean: '동의할 수 있을지 모르겠어요. 다른 학생들이 방해받으면 어쩌죠?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv2-t3-u2-4', unitId: 'lv2-t3-u2', english: 'In my opinion, online classes are less effective than in-person ones.', korean: '제 생각에 온라인 수업은 대면 수업보다 효과가 떨어져요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.3 Theme1 Unit1: 여행 계획 세우기 ---
  { id: 'e-lv3-t1-u1-1', unitId: 'lv3-t1-u1', english: 'If the weather is nice, we\'re going to spend the whole day at the beach.', korean: '날씨가 좋으면, 하루 종일 해변에서 보낼 거예요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u1-2', unitId: 'lv3-t1-u1', english: 'We\'re planning to visit at least three cities during our two-week trip.', korean: '2주 여행 동안 최소 세 도시를 방문할 계획이에요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u1-3', unitId: 'lv3-t1-u1', english: 'I\'d rather take the train than fly because you can see the scenery.', korean: '풍경을 볼 수 있으니까 비행기보다 기차를 타는 게 나아요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u1-4', unitId: 'lv3-t1-u1', english: 'We should book the hotel early, or it might be fully booked.', korean: '호텔을 일찍 예약해야 해요, 안 그러면 만실일 수 있어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.3 Theme1 Unit2: 호텔과 예약 ---
  { id: 'e-lv3-t1-u2-1', unitId: 'lv3-t1-u2', english: 'I\'d like to check in. I have a reservation under the name Kim.', korean: '체크인하고 싶습니다. 김이라는 이름으로 예약했어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv3-t1-u2-2', unitId: 'lv3-t1-u2', english: 'Would it be possible to get a room with a better view?', korean: '전망이 더 좋은 방으로 바꿀 수 있을까요?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u2-3', unitId: 'lv3-t1-u2', english: 'The air conditioning in my room doesn\'t seem to be working properly.', korean: '방의 에어컨이 제대로 작동하지 않는 것 같아요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u2-4', unitId: 'lv3-t1-u2', english: 'Could we get a late checkout? Our flight isn\'t until the evening.', korean: '늦은 체크아웃 가능할까요? 비행기가 저녁이거든요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.3 Theme1 Unit3: 문화 차이 이야기 ---
  { id: 'e-lv3-t1-u3-1', unitId: 'lv3-t1-u3', english: 'In Korea, it\'s common to share food at the table, but in some countries, each person orders their own dish.', korean: '한국에서는 음식을 나눠 먹는 게 흔하지만, 어떤 나라에서는 각자 음식을 시켜요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u3-2', unitId: 'lv3-t1-u3', english: 'I was surprised to learn that tipping is expected in the US.', korean: '미국에서 팁을 줘야 한다는 걸 알고 놀랐어요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t1-u3-3', unitId: 'lv3-t1-u3', english: 'Compared to Korea, the public transportation in that country wasn\'t as convenient.', korean: '한국에 비해서 그 나라의 대중교통은 편리하지 않았어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.3 Theme2 Unit1: 증상과 병원 방문 ---
  { id: 'e-lv3-t2-u1-1', unitId: 'lv3-t2-u1', english: 'I\'ve had a headache and a sore throat since yesterday morning.', korean: '어제 아침부터 두통이 있고 목이 아파요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv3-t2-u1-2', unitId: 'lv3-t2-u1', english: 'I think I might have caught a cold. I\'ve been sneezing all day.', korean: '감기에 걸린 것 같아요. 하루 종일 재채기를 하고 있어요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t2-u1-3', unitId: 'lv3-t2-u1', english: 'The doctor told me to rest for a few days and drink plenty of water.', korean: '의사가 며칠 쉬면서 물을 많이 마시라고 했어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv3-t2-u1-4', unitId: 'lv3-t2-u1', english: 'Should I take this medicine before or after meals?', korean: '이 약은 식전에 먹어야 하나요, 식후에 먹어야 하나요?', difficulty: 3, isAiGenerated: false },

  // --- Lv.3 Theme2 Unit2: 일상 문제 해결 ---
  { id: 'e-lv3-t2-u2-1', unitId: 'lv3-t2-u2', english: 'I ordered this online, but the wrong item was delivered.', korean: '이거 온라인으로 주문했는데, 다른 물건이 배송됐어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv3-t2-u2-2', unitId: 'lv3-t2-u2', english: 'The wifi in my room keeps disconnecting. Could someone take a look?', korean: '방 와이파이가 계속 끊겨요. 누가 좀 봐주실 수 있나요?', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t2-u2-3', unitId: 'lv3-t2-u2', english: 'I\'d like to file a complaint about the noise from the construction site.', korean: '공사장 소음에 대해 민원을 넣고 싶어요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t2-u2-4', unitId: 'lv3-t2-u2', english: 'Is there any way to get a refund? The product arrived damaged.', korean: '환불받을 수 있는 방법이 있나요? 제품이 파손된 채 도착했어요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.3 Theme3 Unit1: 목표와 꿈 ---
  { id: 'e-lv3-t3-u1-1', unitId: 'lv3-t3-u1', english: 'I want to become a software engineer and work at a global company.', korean: '소프트웨어 엔지니어가 되어서 글로벌 기업에서 일하고 싶어요.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv3-t3-u1-2', unitId: 'lv3-t3-u1', english: 'I\'m planning to study abroad next year if I can get a scholarship.', korean: '장학금을 받을 수 있으면 내년에 유학 갈 계획이에요.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t3-u1-3', unitId: 'lv3-t3-u1', english: 'One of my goals is to be able to speak English fluently within two years.', korean: '제 목표 중 하나는 2년 안에 영어를 유창하게 하는 거예요.', difficulty: 4, isAiGenerated: false },

  // --- Lv.3 Theme3 Unit2: 가정과 추측 ---
  { id: 'e-lv3-t3-u2-1', unitId: 'lv3-t3-u2', english: 'If I had more time, I would learn to play the piano.', korean: '시간이 더 있다면, 피아노를 배울 텐데.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t3-u2-2', unitId: 'lv3-t3-u2', english: 'It might rain this afternoon, so you should probably bring an umbrella.', korean: '오후에 비가 올 수도 있으니까, 우산 가져가는 게 좋겠어.', difficulty: 3, isAiGenerated: false },
  { id: 'e-lv3-t3-u2-3', unitId: 'lv3-t3-u2', english: 'If we don\'t leave now, we\'ll probably miss the last train.', korean: '지금 출발 안 하면, 아마 막차를 놓칠 거야.', difficulty: 4, isAiGenerated: false },
  { id: 'e-lv3-t3-u2-4', unitId: 'lv3-t3-u2', english: 'I\'m not sure, but I think the meeting has been moved to Friday.', korean: '확실하진 않은데, 회의가 금요일로 옮겨진 것 같아.', difficulty: 3, isAiGenerated: false },
]

export const expressions: Expression[] = [...expressions_lv1_3, ...expressions_lv4_5, ...expressions_lv6_7, ...expressions_lv8_10]

// ===== 핵심 어휘 (초6 이상 수준) =====
const vocabulary_lv1_3: Vocabulary[] = [
  // --- Lv.1 Theme1 Unit1: 나에 대해 말하기 ---
  { id: 'v-lv1-t1-u1-1', unitId: 'lv1-t1-u1', word: 'personality', meaning: '성격', partOfSpeech: '명사', exampleSentence: 'She has a cheerful personality.', exampleTranslation: '그녀는 밝은 성격을 가지고 있어요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u1-2', unitId: 'lv1-t1-u1', word: 'neighborhood', meaning: '동네, 이웃', partOfSpeech: '명사', exampleSentence: 'My neighborhood is very safe and quiet.', exampleTranslation: '우리 동네는 매우 안전하고 조용해요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u1-3', unitId: 'lv1-t1-u1', word: 'resemble', meaning: '닮다', partOfSpeech: '동사', exampleSentence: 'He resembles his father a lot.', exampleTranslation: '그는 아버지를 많이 닮았어요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u1-4', unitId: 'lv1-t1-u1', word: 'outgoing', meaning: '외향적인', partOfSpeech: '형용사', exampleSentence: 'She\'s really outgoing and loves meeting new people.', exampleTranslation: '그녀는 정말 외향적이고 새로운 사람 만나는 걸 좋아해요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u1-5', unitId: 'lv1-t1-u1', word: 'appearance', meaning: '외모, 겉모습', partOfSpeech: '명사', exampleSentence: 'Don\'t judge people by their appearance.', exampleTranslation: '외모로 사람을 판단하지 마세요.', isAiGenerated: false },

  // --- Lv.1 Theme1 Unit2: 하루 일과 이야기 ---
  { id: 'v-lv1-t1-u2-1', unitId: 'lv1-t1-u2', word: 'routine', meaning: '일과, 루틴', partOfSpeech: '명사', exampleSentence: 'My morning routine includes exercise and breakfast.', exampleTranslation: '제 아침 루틴에는 운동과 아침식사가 포함돼요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u2-2', unitId: 'lv1-t1-u2', word: 'commute', meaning: '통근하다, 통학하다', partOfSpeech: '동사', exampleSentence: 'I commute to school by subway every day.', exampleTranslation: '저는 매일 지하철로 통학해요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u2-3', unitId: 'lv1-t1-u2', word: 'concentrate', meaning: '집중하다', partOfSpeech: '동사', exampleSentence: 'I can\'t concentrate when it\'s noisy.', exampleTranslation: '시끄러우면 집중할 수 없어요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u2-4', unitId: 'lv1-t1-u2', word: 'exhausted', meaning: '지친, 기진맥진한', partOfSpeech: '형용사', exampleSentence: 'I\'m exhausted after a long day at school.', exampleTranslation: '학교에서 긴 하루를 보내고 나면 지쳐요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u2-5', unitId: 'lv1-t1-u2', word: 'productive', meaning: '생산적인', partOfSpeech: '형용사', exampleSentence: 'Today was really productive — I finished all my homework.', exampleTranslation: '오늘 정말 생산적이었어요 — 숙제를 다 끝냈어요.', isAiGenerated: false },

  // --- Lv.1 Theme1 Unit3: 지난 주말 이야기 ---
  { id: 'v-lv1-t1-u3-1', unitId: 'lv1-t1-u3', word: 'eventually', meaning: '결국, 마침내', partOfSpeech: '부사', exampleSentence: 'We eventually decided to stay home.', exampleTranslation: '우리는 결국 집에 있기로 했어요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u3-2', unitId: 'lv1-t1-u3', word: 'bored', meaning: '지루한', partOfSpeech: '형용사', exampleSentence: 'I was so bored that I fell asleep.', exampleTranslation: '너무 지루해서 잠이 들었어요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u3-3', unitId: 'lv1-t1-u3', word: 'unexpected', meaning: '예상 밖의', partOfSpeech: '형용사', exampleSentence: 'The ending of the movie was totally unexpected.', exampleTranslation: '그 영화의 결말은 완전 예상 밖이었어요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u3-4', unitId: 'lv1-t1-u3', word: 'hang out', meaning: '놀다, 시간을 보내다', partOfSpeech: '구동사', exampleSentence: 'I love hanging out with my friends after school.', exampleTranslation: '방과 후에 친구들과 노는 걸 좋아해요.', isAiGenerated: false },
  { id: 'v-lv1-t1-u3-5', unitId: 'lv1-t1-u3', word: 'procrastinate', meaning: '미루다, 꾸물거리다', partOfSpeech: '동사', exampleSentence: 'I always procrastinate on my homework.', exampleTranslation: '항상 숙제를 미뤄요.', isAiGenerated: false },

  // --- Lv.1 Theme2 Unit1: 학교와 수업 ---
  { id: 'v-lv1-t2-u1-1', unitId: 'lv1-t2-u1', word: 'experiment', meaning: '실험', partOfSpeech: '명사', exampleSentence: 'We did an interesting experiment in chemistry class.', exampleTranslation: '화학 수업에서 재미있는 실험을 했어요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u1-2', unitId: 'lv1-t2-u1', word: 'assignment', meaning: '과제, 숙제', partOfSpeech: '명사', exampleSentence: 'The assignment is due next Monday.', exampleTranslation: '과제 마감은 다음 월요일이에요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u1-3', unitId: 'lv1-t2-u1', word: 'improve', meaning: '향상시키다, 개선하다', partOfSpeech: '동사', exampleSentence: 'I want to improve my English speaking skills.', exampleTranslation: '영어 말하기 실력을 향상시키고 싶어요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u1-4', unitId: 'lv1-t2-u1', word: 'struggle', meaning: '힘들어하다, 고군분투하다', partOfSpeech: '동사', exampleSentence: 'Many students struggle with math.', exampleTranslation: '많은 학생들이 수학을 힘들어해요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u1-5', unitId: 'lv1-t2-u1', word: 'participate', meaning: '참여하다', partOfSpeech: '동사', exampleSentence: 'You should participate more in class discussions.', exampleTranslation: '수업 토론에 더 참여해야 해요.', isAiGenerated: false },

  // --- Lv.1 Theme2 Unit2: 취미와 관심사 ---
  { id: 'v-lv1-t2-u2-1', unitId: 'lv1-t2-u2', word: 'photography', meaning: '사진, 사진술', partOfSpeech: '명사', exampleSentence: 'Photography is my favorite hobby.', exampleTranslation: '사진 찍기는 제가 가장 좋아하는 취미예요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u2-2', unitId: 'lv1-t2-u2', word: 'frequently', meaning: '자주', partOfSpeech: '부사', exampleSentence: 'I frequently visit the library.', exampleTranslation: '저는 도서관을 자주 방문해요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u2-3', unitId: 'lv1-t2-u2', word: 'prefer', meaning: '선호하다', partOfSpeech: '동사', exampleSentence: 'I prefer reading books to watching TV.', exampleTranslation: 'TV 보는 것보다 책 읽는 걸 선호해요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u2-4', unitId: 'lv1-t2-u2', word: 'passionate', meaning: '열정적인', partOfSpeech: '형용사', exampleSentence: 'She\'s passionate about music.', exampleTranslation: '그녀는 음악에 열정적이에요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u2-5', unitId: 'lv1-t2-u2', word: 'challenge', meaning: '도전, 과제', partOfSpeech: '명사', exampleSentence: 'Learning a new language is a big challenge.', exampleTranslation: '새로운 언어를 배우는 건 큰 도전이에요.', isAiGenerated: false },

  // --- Lv.1 Theme2 Unit3: 친구에게 제안하기 ---
  { id: 'v-lv1-t2-u3-1', unitId: 'lv1-t2-u3', word: 'suggest', meaning: '제안하다', partOfSpeech: '동사', exampleSentence: 'I suggest we leave early to avoid traffic.', exampleTranslation: '교통 체증을 피하려면 일찍 출발하자고 제안해요.', isAiGenerated: false },
  { id: 'v-lv1-t2-u3-2', unitId: 'lv1-t2-u3', word: 'available', meaning: '가능한, 이용할 수 있는', partOfSpeech: '형용사', exampleSentence: 'Are you available this Saturday?', exampleTranslation: '이번 토요일에 시간 돼?', isAiGenerated: false },
  { id: 'v-lv1-t2-u3-3', unitId: 'lv1-t2-u3', word: 'convenient', meaning: '편리한', partOfSpeech: '형용사', exampleSentence: 'What time is convenient for you?', exampleTranslation: '몇 시가 편해?', isAiGenerated: false },
  { id: 'v-lv1-t2-u3-4', unitId: 'lv1-t2-u3', word: 'definitely', meaning: '확실히, 꼭', partOfSpeech: '부사', exampleSentence: 'I\'ll definitely come to your party.', exampleTranslation: '네 파티에 꼭 갈게.', isAiGenerated: false },
  { id: 'v-lv1-t2-u3-5', unitId: 'lv1-t2-u3', word: 'unfortunately', meaning: '불행히도, 아쉽게도', partOfSpeech: '부사', exampleSentence: 'Unfortunately, I already have plans that day.', exampleTranslation: '아쉽게도 그날 이미 약속이 있어.', isAiGenerated: false },

  // --- Lv.1 Theme3 Unit1: 장소 묘사하기 ---
  { id: 'v-lv1-t3-u1-1', unitId: 'lv1-t3-u1', word: 'located', meaning: '위치한', partOfSpeech: '형용사', exampleSentence: 'The cafe is located next to the bookstore.', exampleTranslation: '그 카페는 서점 옆에 위치해 있어요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u1-2', unitId: 'lv1-t3-u1', word: 'crowded', meaning: '붐비는, 혼잡한', partOfSpeech: '형용사', exampleSentence: 'The subway is always crowded during rush hour.', exampleTranslation: '출퇴근 시간에는 지하철이 항상 붐벼요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u1-3', unitId: 'lv1-t3-u1', word: 'surroundings', meaning: '주변 환경', partOfSpeech: '명사', exampleSentence: 'The surroundings are very peaceful.', exampleTranslation: '주변 환경이 매우 평화로워요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u1-4', unitId: 'lv1-t3-u1', word: 'opposite', meaning: '맞은편의, 반대의', partOfSpeech: '형용사/전치사', exampleSentence: 'The bank is opposite the hospital.', exampleTranslation: '은행은 병원 맞은편에 있어요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u1-5', unitId: 'lv1-t3-u1', word: 'intersection', meaning: '교차로', partOfSpeech: '명사', exampleSentence: 'Turn left at the next intersection.', exampleTranslation: '다음 교차로에서 좌회전하세요.', isAiGenerated: false },

  // --- Lv.1 Theme3 Unit2: 길 안내와 교통 ---
  { id: 'v-lv1-t3-u2-1', unitId: 'lv1-t3-u2', word: 'transfer', meaning: '환승하다', partOfSpeech: '동사', exampleSentence: 'You need to transfer at Seoul Station.', exampleTranslation: '서울역에서 환승해야 해요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u2-2', unitId: 'lv1-t3-u2', word: 'destination', meaning: '목적지', partOfSpeech: '명사', exampleSentence: 'We arrived at our destination on time.', exampleTranslation: '목적지에 제시간에 도착했어요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u2-3', unitId: 'lv1-t3-u2', word: 'direction', meaning: '방향', partOfSpeech: '명사', exampleSentence: 'Could you point me in the right direction?', exampleTranslation: '올바른 방향을 알려주실 수 있나요?', isAiGenerated: false },
  { id: 'v-lv1-t3-u2-4', unitId: 'lv1-t3-u2', word: 'shortcut', meaning: '지름길', partOfSpeech: '명사', exampleSentence: 'I know a shortcut through the park.', exampleTranslation: '공원을 통과하는 지름길을 알아요.', isAiGenerated: false },
  { id: 'v-lv1-t3-u2-5', unitId: 'lv1-t3-u2', word: 'delay', meaning: '지연, 지체', partOfSpeech: '명사', exampleSentence: 'There was a thirty-minute delay due to the weather.', exampleTranslation: '날씨 때문에 30분 지연됐어요.', isAiGenerated: false },

  // --- Lv.2 Theme1 Unit1: 카페와 레스토랑 주문 ---
  { id: 'v-lv2-t1-u1-1', unitId: 'lv2-t1-u1', word: 'ingredient', meaning: '재료, 성분', partOfSpeech: '명사', exampleSentence: 'Can I check the ingredients in this dish?', exampleTranslation: '이 요리의 재료를 확인할 수 있나요?', isAiGenerated: false },
  { id: 'v-lv2-t1-u1-2', unitId: 'lv2-t1-u1', word: 'portion', meaning: '1인분, 양', partOfSpeech: '명사', exampleSentence: 'The portions here are really generous.', exampleTranslation: '여기는 양이 정말 많아요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u1-3', unitId: 'lv2-t1-u1', word: 'separately', meaning: '따로, 별도로', partOfSpeech: '부사', exampleSentence: 'We\'d like to pay separately, please.', exampleTranslation: '따로 계산할게요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u1-4', unitId: 'lv2-t1-u1', word: 'recommend', meaning: '추천하다', partOfSpeech: '동사', exampleSentence: 'What would you recommend for a first-time visitor?', exampleTranslation: '처음 오신 분께 뭘 추천하시나요?', isAiGenerated: false },
  { id: 'v-lv2-t1-u1-5', unitId: 'lv2-t1-u1', word: 'vegetarian', meaning: '채식주의자', partOfSpeech: '명사/형용사', exampleSentence: 'Do you have a vegetarian menu?', exampleTranslation: '채식 메뉴 있나요?', isAiGenerated: false },

  // --- Lv.2 Theme1 Unit2: 음식 취향과 추천 ---
  { id: 'v-lv2-t1-u2-1', unitId: 'lv2-t1-u2', word: 'flavour', meaning: '맛, 풍미', partOfSpeech: '명사', exampleSentence: 'This dish has a rich and complex flavour.', exampleTranslation: '이 요리는 풍부하고 복합적인 맛이 있어요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u2-2', unitId: 'lv2-t1-u2', word: 'cuisine', meaning: '요리, 음식 문화', partOfSpeech: '명사', exampleSentence: 'Italian cuisine is popular all over the world.', exampleTranslation: '이탈리아 요리는 전 세계적으로 인기가 있어요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u2-3', unitId: 'lv2-t1-u2', word: 'bland', meaning: '싱거운, 맛없는', partOfSpeech: '형용사', exampleSentence: 'The soup was a bit bland — it needed more salt.', exampleTranslation: '국이 좀 싱거웠어요 — 소금이 더 필요했어요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u2-4', unitId: 'lv2-t1-u2', word: 'appetite', meaning: '식욕', partOfSpeech: '명사', exampleSentence: 'I don\'t have much appetite today.', exampleTranslation: '오늘 입맛이 별로 없어요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u2-5', unitId: 'lv2-t1-u2', word: 'homemade', meaning: '집에서 만든', partOfSpeech: '형용사', exampleSentence: 'Nothing beats homemade food.', exampleTranslation: '집밥을 이길 수 있는 건 없어요.', isAiGenerated: false },

  // --- Lv.2 Theme1 Unit3: 요리법 설명하기 ---
  { id: 'v-lv2-t1-u3-1', unitId: 'lv2-t1-u3', word: 'stir-fry', meaning: '볶다', partOfSpeech: '동사', exampleSentence: 'Stir-fry the garlic until golden brown.', exampleTranslation: '마늘이 노릇해질 때까지 볶으세요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u3-2', unitId: 'lv2-t1-u3', word: 'simmer', meaning: '약한 불에 끓이다', partOfSpeech: '동사', exampleSentence: 'Let the sauce simmer for twenty minutes.', exampleTranslation: '소스를 약한 불에서 20분간 끓이세요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u3-3', unitId: 'lv2-t1-u3', word: 'sprinkle', meaning: '뿌리다', partOfSpeech: '동사', exampleSentence: 'Sprinkle some cheese on top.', exampleTranslation: '위에 치즈를 좀 뿌리세요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u3-4', unitId: 'lv2-t1-u3', word: 'ingredient', meaning: '재료', partOfSpeech: '명사', exampleSentence: 'You only need three ingredients for this recipe.', exampleTranslation: '이 레시피에는 재료가 세 가지만 필요해요.', isAiGenerated: false },
  { id: 'v-lv2-t1-u3-5', unitId: 'lv2-t1-u3', word: 'overcook', meaning: '너무 익히다', partOfSpeech: '동사', exampleSentence: 'Be careful not to overcook the pasta.', exampleTranslation: '파스타를 너무 익히지 않도록 조심하세요.', isAiGenerated: false },

  // --- Lv.2 Theme2 Unit1: 옷과 물건 사기 ---
  { id: 'v-lv2-t2-u1-1', unitId: 'lv2-t2-u1', word: 'fit', meaning: '맞다, 어울리다', partOfSpeech: '동사', exampleSentence: 'Does this shirt fit you well?', exampleTranslation: '이 셔츠 잘 맞아요?', isAiGenerated: false },
  { id: 'v-lv2-t2-u1-2', unitId: 'lv2-t2-u1', word: 'comfortable', meaning: '편안한', partOfSpeech: '형용사', exampleSentence: 'These shoes are incredibly comfortable.', exampleTranslation: '이 신발은 정말 편해요.', isAiGenerated: false },
  { id: 'v-lv2-t2-u1-3', unitId: 'lv2-t2-u1', word: 'affordable', meaning: '저렴한, 감당할 수 있는', partOfSpeech: '형용사', exampleSentence: 'I\'m looking for something more affordable.', exampleTranslation: '좀 더 저렴한 걸 찾고 있어요.', isAiGenerated: false },
  { id: 'v-lv2-t2-u1-4', unitId: 'lv2-t2-u1', word: 'material', meaning: '소재, 재질', partOfSpeech: '명사', exampleSentence: 'What material is this jacket made of?', exampleTranslation: '이 재킷은 어떤 소재로 만들어졌나요?', isAiGenerated: false },
  { id: 'v-lv2-t2-u1-5', unitId: 'lv2-t2-u1', word: 'comparison', meaning: '비교', partOfSpeech: '명사', exampleSentence: 'In comparison, this brand is much cheaper.', exampleTranslation: '비교하자면 이 브랜드가 훨씬 저렴해요.', isAiGenerated: false },

  // --- Lv.2 Theme2 Unit2: 가격과 흥정 ---
  { id: 'v-lv2-t2-u2-1', unitId: 'lv2-t2-u2', word: 'budget', meaning: '예산', partOfSpeech: '명사', exampleSentence: 'It\'s over my budget.', exampleTranslation: '예산을 넘어요.', isAiGenerated: false },
  { id: 'v-lv2-t2-u2-2', unitId: 'lv2-t2-u2', word: 'refund', meaning: '환불, 환불하다', partOfSpeech: '명사/동사', exampleSentence: 'Can I get a refund for this?', exampleTranslation: '이거 환불 받을 수 있나요?', isAiGenerated: false },
  { id: 'v-lv2-t2-u2-3', unitId: 'lv2-t2-u2', word: 'exchange', meaning: '교환하다', partOfSpeech: '동사', exampleSentence: 'I\'d like to exchange this for a different size.', exampleTranslation: '이걸 다른 사이즈로 교환하고 싶어요.', isAiGenerated: false },
  { id: 'v-lv2-t2-u2-4', unitId: 'lv2-t2-u2', word: 'receipt', meaning: '영수증', partOfSpeech: '명사', exampleSentence: 'Do you have the receipt?', exampleTranslation: '영수증 있으세요?', isAiGenerated: false },
  { id: 'v-lv2-t2-u2-5', unitId: 'lv2-t2-u2', word: 'worth', meaning: '~의 가치가 있는', partOfSpeech: '형용사', exampleSentence: 'This bag is definitely worth the price.', exampleTranslation: '이 가방은 확실히 가격 값을 해요.', isAiGenerated: false },

  // --- Lv.2 Theme3 Unit1: 감정 표현하기 ---
  { id: 'v-lv2-t3-u1-1', unitId: 'lv2-t3-u1', word: 'relieved', meaning: '안도하는', partOfSpeech: '형용사', exampleSentence: 'I was so relieved to hear the good news.', exampleTranslation: '좋은 소식을 듣고 정말 안심했어요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u1-2', unitId: 'lv2-t3-u1', word: 'frustrated', meaning: '좌절한, 짜증나는', partOfSpeech: '형용사', exampleSentence: 'I felt frustrated when nothing worked.', exampleTranslation: '아무것도 안 될 때 짜증이 났어요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u1-3', unitId: 'lv2-t3-u1', word: 'anxious', meaning: '불안한, 걱정되는', partOfSpeech: '형용사', exampleSentence: 'I\'m anxious about the interview.', exampleTranslation: '면접이 불안해요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u1-4', unitId: 'lv2-t3-u1', word: 'disappointed', meaning: '실망한', partOfSpeech: '형용사', exampleSentence: 'I was disappointed with the test results.', exampleTranslation: '시험 결과에 실망했어요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u1-5', unitId: 'lv2-t3-u1', word: 'embarrassed', meaning: '당황한, 창피한', partOfSpeech: '형용사', exampleSentence: 'I was embarrassed when I tripped in front of everyone.', exampleTranslation: '모두 앞에서 넘어져서 창피했어요.', isAiGenerated: false },

  // --- Lv.2 Theme3 Unit2: 의견 말하기와 동의/반대 ---
  { id: 'v-lv2-t3-u2-1', unitId: 'lv2-t3-u2', word: 'opinion', meaning: '의견', partOfSpeech: '명사', exampleSentence: 'In my opinion, the movie was overrated.', exampleTranslation: '제 생각에 그 영화는 과대평가됐어요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u2-2', unitId: 'lv2-t3-u2', word: 'perspective', meaning: '관점, 시각', partOfSpeech: '명사', exampleSentence: 'Let\'s look at it from a different perspective.', exampleTranslation: '다른 관점에서 봅시다.', isAiGenerated: false },
  { id: 'v-lv2-t3-u2-3', unitId: 'lv2-t3-u2', word: 'effective', meaning: '효과적인', partOfSpeech: '형용사', exampleSentence: 'Online learning can be effective if done right.', exampleTranslation: '제대로만 하면 온라인 학습도 효과적일 수 있어요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u2-4', unitId: 'lv2-t3-u2', word: 'distract', meaning: '방해하다, 주의를 흐트리다', partOfSpeech: '동사', exampleSentence: 'Phones can distract students during class.', exampleTranslation: '수업 중에 핸드폰이 학생들의 주의를 흐트릴 수 있어요.', isAiGenerated: false },
  { id: 'v-lv2-t3-u2-5', unitId: 'lv2-t3-u2', word: 'reasonable', meaning: '합리적인, 타당한', partOfSpeech: '형용사', exampleSentence: 'That\'s a very reasonable argument.', exampleTranslation: '그건 매우 합리적인 주장이에요.', isAiGenerated: false },

  // --- Lv.3 Theme1 Unit1: 여행 계획 ---
  { id: 'v-lv3-t1-u1-1', unitId: 'lv3-t1-u1', word: 'itinerary', meaning: '여행 일정', partOfSpeech: '명사', exampleSentence: 'Let me check the itinerary for tomorrow.', exampleTranslation: '내일 일정을 확인해볼게요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u1-2', unitId: 'lv3-t1-u1', word: 'scenery', meaning: '풍경', partOfSpeech: '명사', exampleSentence: 'The scenery along the coast was breathtaking.', exampleTranslation: '해안가의 풍경이 숨이 막힐 정도였어요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u1-3', unitId: 'lv3-t1-u1', word: 'accommodation', meaning: '숙소', partOfSpeech: '명사', exampleSentence: 'We need to book accommodation for three nights.', exampleTranslation: '3박 숙소를 예약해야 해요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u1-4', unitId: 'lv3-t1-u1', word: 'sightseeing', meaning: '관광', partOfSpeech: '명사', exampleSentence: 'We spent the whole day sightseeing.', exampleTranslation: '하루 종일 관광을 했어요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u1-5', unitId: 'lv3-t1-u1', word: 'departure', meaning: '출발', partOfSpeech: '명사', exampleSentence: 'The departure time has been changed to 3 PM.', exampleTranslation: '출발 시간이 오후 3시로 변경됐어요.', isAiGenerated: false },

  // --- Lv.3 Theme1 Unit2: 호텔과 예약 ---
  { id: 'v-lv3-t1-u2-1', unitId: 'lv3-t1-u2', word: 'reservation', meaning: '예약', partOfSpeech: '명사', exampleSentence: 'I have a reservation for tonight.', exampleTranslation: '오늘 밤 예약이 있어요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u2-2', unitId: 'lv3-t1-u2', word: 'checkout', meaning: '체크아웃', partOfSpeech: '명사', exampleSentence: 'Checkout time is at 11 AM.', exampleTranslation: '체크아웃 시간은 오전 11시예요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u2-3', unitId: 'lv3-t1-u2', word: 'complimentary', meaning: '무료의', partOfSpeech: '형용사', exampleSentence: 'Breakfast is complimentary for all guests.', exampleTranslation: '조식은 모든 투숙객에게 무료예요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u2-4', unitId: 'lv3-t1-u2', word: 'amenity', meaning: '편의시설', partOfSpeech: '명사', exampleSentence: 'The hotel has excellent amenities.', exampleTranslation: '호텔의 편의시설이 훌륭해요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u2-5', unitId: 'lv3-t1-u2', word: 'inconvenience', meaning: '불편', partOfSpeech: '명사', exampleSentence: 'We apologize for any inconvenience.', exampleTranslation: '불편을 드려 죄송합니다.', isAiGenerated: false },

  // --- Lv.3 Theme1 Unit3: 문화 차이 ---
  { id: 'v-lv3-t1-u3-1', unitId: 'lv3-t1-u3', word: 'custom', meaning: '관습, 풍습', partOfSpeech: '명사', exampleSentence: 'Every country has its own customs.', exampleTranslation: '모든 나라에는 고유한 관습이 있어요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u3-2', unitId: 'lv3-t1-u3', word: 'etiquette', meaning: '예절, 에티켓', partOfSpeech: '명사', exampleSentence: 'Table etiquette is different in every culture.', exampleTranslation: '식사 예절은 문화마다 달라요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u3-3', unitId: 'lv3-t1-u3', word: 'diverse', meaning: '다양한', partOfSpeech: '형용사', exampleSentence: 'The city is known for its diverse food scene.', exampleTranslation: '그 도시는 다양한 음식 문화로 유명해요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u3-4', unitId: 'lv3-t1-u3', word: 'fascinating', meaning: '매력적인, 흥미진진한', partOfSpeech: '형용사', exampleSentence: 'Learning about other cultures is fascinating.', exampleTranslation: '다른 문화에 대해 배우는 건 흥미로워요.', isAiGenerated: false },
  { id: 'v-lv3-t1-u3-5', unitId: 'lv3-t1-u3', word: 'adapt', meaning: '적응하다', partOfSpeech: '동사', exampleSentence: 'It takes time to adapt to a new environment.', exampleTranslation: '새로운 환경에 적응하는 데 시간이 걸려요.', isAiGenerated: false },

  // --- Lv.3 Theme2 Unit1: 증상과 병원 방문 ---
  { id: 'v-lv3-t2-u1-1', unitId: 'lv3-t2-u1', word: 'symptom', meaning: '증상', partOfSpeech: '명사', exampleSentence: 'What symptoms are you experiencing?', exampleTranslation: '어떤 증상이 있으세요?', isAiGenerated: false },
  { id: 'v-lv3-t2-u1-2', unitId: 'lv3-t2-u1', word: 'prescription', meaning: '처방전', partOfSpeech: '명사', exampleSentence: 'The doctor gave me a prescription for antibiotics.', exampleTranslation: '의사가 항생제 처방전을 줬어요.', isAiGenerated: false },
  { id: 'v-lv3-t2-u1-3', unitId: 'lv3-t2-u1', word: 'recover', meaning: '회복하다', partOfSpeech: '동사', exampleSentence: 'It usually takes a week to recover from a cold.', exampleTranslation: '감기에서 회복하는 데 보통 일주일 걸려요.', isAiGenerated: false },
  { id: 'v-lv3-t2-u1-4', unitId: 'lv3-t2-u1', word: 'appointment', meaning: '예약, 진료 예약', partOfSpeech: '명사', exampleSentence: 'I have a doctor\'s appointment at 2 PM.', exampleTranslation: '오후 2시에 진료 예약이 있어요.', isAiGenerated: false },
  { id: 'v-lv3-t2-u1-5', unitId: 'lv3-t2-u1', word: 'contagious', meaning: '전염성의', partOfSpeech: '형용사', exampleSentence: 'The flu is highly contagious.', exampleTranslation: '독감은 전염성이 매우 높아요.', isAiGenerated: false },

  // --- Lv.3 Theme2 Unit2: 일상 문제 해결 ---
  { id: 'v-lv3-t2-u2-1', unitId: 'lv3-t2-u2', word: 'complaint', meaning: '불만, 민원', partOfSpeech: '명사', exampleSentence: 'I\'d like to file a complaint.', exampleTranslation: '민원을 제기하고 싶어요.', isAiGenerated: false },
  { id: 'v-lv3-t2-u2-2', unitId: 'lv3-t2-u2', word: 'malfunction', meaning: '고장, 오작동', partOfSpeech: '명사', exampleSentence: 'There seems to be a malfunction with the heater.', exampleTranslation: '히터에 고장이 있는 것 같아요.', isAiGenerated: false },
  { id: 'v-lv3-t2-u2-3', unitId: 'lv3-t2-u2', word: 'apologize', meaning: '사과하다', partOfSpeech: '동사', exampleSentence: 'We sincerely apologize for the mistake.', exampleTranslation: '실수에 대해 진심으로 사과드립니다.', isAiGenerated: false },
  { id: 'v-lv3-t2-u2-4', unitId: 'lv3-t2-u2', word: 'resolve', meaning: '해결하다', partOfSpeech: '동사', exampleSentence: 'We\'ll resolve this issue as soon as possible.', exampleTranslation: '이 문제를 최대한 빨리 해결하겠습니다.', isAiGenerated: false },
  { id: 'v-lv3-t2-u2-5', unitId: 'lv3-t2-u2', word: 'compensation', meaning: '보상', partOfSpeech: '명사', exampleSentence: 'Can I receive any compensation for the delay?', exampleTranslation: '지연에 대한 보상을 받을 수 있나요?', isAiGenerated: false },

  // --- Lv.3 Theme3 Unit1: 목표와 꿈 ---
  { id: 'v-lv3-t3-u1-1', unitId: 'lv3-t3-u1', word: 'ambition', meaning: '야망, 포부', partOfSpeech: '명사', exampleSentence: 'Her ambition is to become a scientist.', exampleTranslation: '그녀의 포부는 과학자가 되는 거예요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u1-2', unitId: 'lv3-t3-u1', word: 'fluently', meaning: '유창하게', partOfSpeech: '부사', exampleSentence: 'I want to speak English fluently.', exampleTranslation: '영어를 유창하게 말하고 싶어요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u1-3', unitId: 'lv3-t3-u1', word: 'scholarship', meaning: '장학금', partOfSpeech: '명사', exampleSentence: 'She won a full scholarship to study abroad.', exampleTranslation: '그녀는 유학 전액 장학금을 받았어요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u1-4', unitId: 'lv3-t3-u1', word: 'opportunity', meaning: '기회', partOfSpeech: '명사', exampleSentence: 'This is a great opportunity to gain experience.', exampleTranslation: '경험을 쌓을 좋은 기회예요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u1-5', unitId: 'lv3-t3-u1', word: 'determine', meaning: '결심하다, 결정하다', partOfSpeech: '동사', exampleSentence: 'I\'m determined to pass the exam.', exampleTranslation: '시험에 합격하기로 결심했어요.', isAiGenerated: false },

  // --- Lv.3 Theme3 Unit2: 가정과 추측 ---
  { id: 'v-lv3-t3-u2-1', unitId: 'lv3-t3-u2', word: 'assume', meaning: '추정하다, 가정하다', partOfSpeech: '동사', exampleSentence: 'I assumed you already knew.', exampleTranslation: '이미 알고 있는 줄 알았어요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u2-2', unitId: 'lv3-t3-u2', word: 'probably', meaning: '아마', partOfSpeech: '부사', exampleSentence: 'She\'s probably stuck in traffic.', exampleTranslation: '그녀는 아마 교통 체증에 걸렸을 거야.', isAiGenerated: false },
  { id: 'v-lv3-t3-u2-3', unitId: 'lv3-t3-u2', word: 'likely', meaning: '~할 것 같은', partOfSpeech: '형용사', exampleSentence: 'It\'s likely to rain tomorrow.', exampleTranslation: '내일 비가 올 가능성이 높아요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u2-4', unitId: 'lv3-t3-u2', word: 'consequence', meaning: '결과, 영향', partOfSpeech: '명사', exampleSentence: 'Every decision has its consequences.', exampleTranslation: '모든 결정에는 결과가 따라요.', isAiGenerated: false },
  { id: 'v-lv3-t3-u2-5', unitId: 'lv3-t3-u2', word: 'alternative', meaning: '대안', partOfSpeech: '명사', exampleSentence: 'We need to find an alternative solution.', exampleTranslation: '대안을 찾아야 해요.', isAiGenerated: false },
]

export const vocabulary: Vocabulary[] = [...vocabulary_lv1_3, ...vocabulary_lv4_5, ...vocabulary_lv6_7, ...vocabulary_lv8_10]

// 유틸리티
export function getExpressionsForUnit(unitId: string): Expression[] {
  return expressions.filter(e => e.unitId === unitId)
}

export function getVocabularyForUnit(unitId: string): Vocabulary[] {
  return vocabulary.filter(v => v.unitId === unitId)
}

export function getUnitsForTheme(themeId: string): Unit[] {
  return units.filter(u => u.themeId === themeId)
}

export function getThemesForLevel(levelId: number): Theme[] {
  return themes.filter(t => t.levelId === levelId)
}

export function getUnitById(unitId: string): Unit | undefined {
  return units.find(u => u.id === unitId)
}

export function getThemeById(themeId: string): Theme | undefined {
  return themes.find(t => t.id === themeId)
}
