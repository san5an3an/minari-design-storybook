export interface Article {
  id: string;
  title: string;
  source: string;
  tag: string;
  minutes: number;
  savedAt: string;
  excerpt: string;
  body: string[];
}

export const ARTICLES: readonly Article[] = [
  {
    id: "a1",
    title: "왜 우리는 8시간을 자야 할까",
    source: "사이언스오늘",
    tag: "건강",
    minutes: 6,
    savedAt: "2일 전",
    excerpt: "수면 부채는 카페인으로 갚아지지 않는다. 최근 연구가 말하는 것.",
    body: [
      "수면은 단순한 휴식이 아니라 뇌가 그날 들어온 정보를 정리하는 시간이다.",
      "최근 연구에 따르면 수면 부족이 누적되면 카페인으로 각성도를 임시로 끌어올릴 수는 있어도, 판단력과 기억 정리 기능은 회복되지 않는다.",
      "결국 답은 하나뿐이다. 빚은 갚아야 사라진다.",
    ],
  },
  {
    id: "a2",
    title: "타입스크립트 5.9의 조용한 변화들",
    source: "데브위클리",
    tag: "개발",
    minutes: 9,
    savedAt: "어제",
    excerpt: "눈에 띄는 기능은 없지만, 매일 쓰는 사람에게는 제일 반가운 릴리스.",
    body: [
      "이번 릴리스는 헤드라인 기능 없이 조용히 지나갔지만, 실무자 입장에서는 가장 체감이 큰 업데이트였다.",
      "제네릭 추론이 더 똑똑해졌고, 에러 메시지가 실제 원인 줄을 가리키기 시작했다.",
      "작은 개선이 쌓이면 큰 변화가 된다는 걸 다시 확인시켜 준다.",
    ],
  },
  {
    id: "a3",
    title: "동네 빵집이 줄서는 이유",
    source: "로컬매거진",
    tag: "라이프",
    minutes: 4,
    savedAt: "3일 전",
    excerpt: "레시피가 아니라 '언제 파는지'가 만든 줄.",
    body: [
      "이 빵집은 하루 딱 세 번, 정해진 시간에만 빵을 내놓는다.",
      "역설적으로 그 제약이 줄을 만들었다. 언제든 살 수 있는 것보다 지금 아니면 못 사는 것에 사람들은 더 오래 기다린다.",
    ],
  },
  {
    id: "a4",
    title: "재택근무 3년 차의 솔직한 회고",
    source: "워크노트",
    tag: "일",
    minutes: 12,
    savedAt: "1주 전",
    excerpt: "자유로워진 만큼 늘어난 것도 있었다.",
    body: [
      "출퇴근이 사라지자 하루의 경계도 함께 흐려졌다.",
      "회의는 줄었지만 메시지는 늘었고, 집중 시간은 늘었지만 동료와의 우연한 대화는 사라졌다.",
      "3년을 겪고 나서야 보이는 균형점이 있다.",
    ],
  },
  {
    id: "a5",
    title: "커피 가격이 오르는 진짜 이유",
    source: "이코노미브리프",
    tag: "경제",
    minutes: 7,
    savedAt: "5일 전",
    excerpt: "기후만의 문제가 아니다. 유통 구조까지 함께 봐야 한다.",
    body: [
      "커피 원두 가격 상승의 절반은 기후 변화로 설명되지만, 나머지 절반은 유통 단계의 구조적 문제다.",
      "생산지에서 소비자까지 거치는 중간 단계가 많을수록 가격 변동에 더 취약해진다.",
    ],
  },
] as const;

export interface Collection {
  id: string;
  label: string;
  tag: string;
}

// 컬렉션은 tag 하나로 글 분류. 별도 소속 목록 없이 태그로만 관리
export const COLLECTIONS: readonly Collection[] = [
  { id: "c1", label: "건강", tag: "건강" },
  { id: "c2", label: "개발", tag: "개발" },
  { id: "c3", label: "라이프", tag: "라이프" },
  { id: "c4", label: "일", tag: "일" },
  { id: "c5", label: "경제", tag: "경제" },
];
