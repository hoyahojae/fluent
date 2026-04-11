export interface LevelTestQuestion {
  id: number
  level: number // 1~10 — which level this question targets
  type: 'choice' | 'fill' | 'translate'
  question: string
  options?: string[]
  answer: string
  korean?: string
}

export const levelTestQuestions: LevelTestQuestion[] = [
  // === Level 1~2 (A2 기초) ===
  {
    id: 1, level: 1, type: 'choice',
    question: 'I usually ____ to school by bus.',
    options: ['go', 'going', 'goes', 'went'],
    answer: 'go',
  },
  {
    id: 2, level: 1, type: 'choice',
    question: 'She ____ her homework before dinner yesterday.',
    options: ['finish', 'finishes', 'finished', 'finishing'],
    answer: 'finished',
  },
  {
    id: 3, level: 2, type: 'choice',
    question: 'This book is ____ than the one I read last week.',
    options: ['interesting', 'more interesting', 'most interesting', 'interestinger'],
    answer: 'more interesting',
  },
  {
    id: 4, level: 2, type: 'fill',
    question: 'I\'ve ____ (live) in Seoul since 2018.',
    answer: 'lived',
  },

  // === Level 3~4 (B1 초중급~중급) ===
  {
    id: 5, level: 3, type: 'choice',
    question: 'If it ____ tomorrow, we\'ll cancel the picnic.',
    options: ['rains', 'will rain', 'rained', 'rain'],
    answer: 'rains',
  },
  {
    id: 6, level: 3, type: 'translate',
    question: '그는 지금 회의 중이라서 전화를 받을 수 없어요.',
    answer: 'He can\'t answer the phone because he is in a meeting right now.',
    korean: '그는 지금 회의 중이라서 전화를 받을 수 없어요.',
  },
  {
    id: 7, level: 4, type: 'choice',
    question: 'She asked me ____ I had ever been to Japan.',
    options: ['that', 'what', 'if', 'which'],
    answer: 'if',
  },
  {
    id: 8, level: 4, type: 'fill',
    question: 'By the time we arrived, the movie had already ____ (start).',
    answer: 'started',
  },

  // === Level 5~6 (B1+~B2 중급+~중상급) ===
  {
    id: 9, level: 5, type: 'choice',
    question: 'I wish I ____ more time to practice the piano.',
    options: ['have', 'had', 'having', 'will have'],
    answer: 'had',
  },
  {
    id: 10, level: 5, type: 'translate',
    question: '그 영화가 기대만큼 좋지 않아서 실망했어요.',
    answer: 'I was disappointed because the movie wasn\'t as good as I expected.',
    korean: '그 영화가 기대만큼 좋지 않아서 실망했어요.',
  },
  {
    id: 11, level: 6, type: 'choice',
    question: 'The project ____ by the end of next month.',
    options: ['will complete', 'will be completed', 'is completing', 'completes'],
    answer: 'will be completed',
  },
  {
    id: 12, level: 6, type: 'fill',
    question: 'Not only ____ she speak French, but she also speaks German.',
    answer: 'does',
  },

  // === Level 7~8 (B2~B2+ 상급) ===
  {
    id: 13, level: 7, type: 'choice',
    question: 'Had I known about the delay, I ____ an earlier flight.',
    options: ['would book', 'would have booked', 'will book', 'had booked'],
    answer: 'would have booked',
  },
  {
    id: 14, level: 7, type: 'translate',
    question: '그 제안을 수락할지 말지 아직 결정을 못 했어요.',
    answer: 'I haven\'t decided yet whether to accept the offer or not.',
    korean: '그 제안을 수락할지 말지 아직 결정을 못 했어요.',
  },
  {
    id: 15, level: 8, type: 'choice',
    question: 'The CEO emphasized that innovation ____ essential for the company\'s growth.',
    options: ['is', 'was', 'be', 'were'],
    answer: 'was',
  },
  {
    id: 16, level: 8, type: 'fill',
    question: 'The more you practice, the ____ (confident) you will become.',
    answer: 'more confident',
  },

  // === Level 9~10 (C1~C1+ 고급) ===
  {
    id: 17, level: 9, type: 'choice',
    question: 'The report, ____ was submitted last week, contained several errors.',
    options: ['that', 'which', 'what', 'whose'],
    answer: 'which',
  },
  {
    id: 18, level: 9, type: 'translate',
    question: '그가 그 일을 맡지 않았더라면, 프로젝트는 제시간에 끝나지 못했을 거예요.',
    answer: 'If he hadn\'t taken on that task, the project wouldn\'t have been finished on time.',
    korean: '그가 그 일을 맡지 않았더라면, 프로젝트는 제시간에 끝나지 못했을 거예요.',
  },
  {
    id: 19, level: 10, type: 'choice',
    question: 'Hardly ____ the meeting started when the fire alarm went off.',
    options: ['has', 'had', 'did', 'was'],
    answer: 'had',
  },
  {
    id: 20, level: 10, type: 'fill',
    question: 'She speaks with such eloquence that her audience can\'t help but be ____ (captivate).',
    answer: 'captivated',
  },
]
