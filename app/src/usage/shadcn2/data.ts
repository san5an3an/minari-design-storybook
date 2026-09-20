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
  {
    id: "a6",
    title: "카페인 대신 쓸 수 있는 각성 습관",
    source: "사이언스오늘",
    tag: "건강",
    minutes: 5,
    savedAt: "6일 전",
    excerpt: "졸음은 카페인이 아니라 빛과 움직임으로도 쫓을 수 있다.",
    body: [
      "오후 각성도 저하는 대부분 혈당 변동과 자세 고정 때문이다.",
      "10분 걷기나 자연광 노출만으로도 카페인 한 잔과 비슷한 각성 효과가 관찰된다.",
    ],
  },
  {
    id: "a7",
    title: "AI 코드리뷰가 놓치는 것들",
    source: "데브위클리",
    tag: "개발",
    minutes: 8,
    savedAt: "1주 전",
    excerpt: "문법은 잡아내도, '왜 이렇게 짰는지'는 아직 못 읽는다.",
    body: [
      "AI 리뷰어는 스타일·버그 패턴에는 강하지만 팀의 암묵적 합의나 과거 장애 이력까지는 모른다.",
      "결국 사람 리뷰어가 남아야 할 자리는 '맥락'이다.",
    ],
  },
  {
    id: "a8",
    title: "혼자 사는 사람들의 냉장고",
    source: "로컬매거진",
    tag: "라이프",
    minutes: 5,
    savedAt: "1주 전",
    excerpt: "1인 가구 냉장고엔 의외로 '반찬'이 없다.",
    body: [
      "혼자 살면 요리보다 보관이 문제다, 다 먹기 전에 상하는 양을 사지 않는 게 기술이 된다.",
      "그래서 1인 가구 소비는 '적게, 자주'로 수렴한다.",
    ],
  },
  {
    id: "a9",
    title: "회의를 반으로 줄이는 법",
    source: "워크노트",
    tag: "일",
    minutes: 6,
    savedAt: "2주 전",
    excerpt: "회의를 없애는 게 아니라, 회의의 자격을 따지는 것부터.",
    body: [
      "결정이 필요 없는 회의는 문서로 바꾸고, 결정이 필요한 회의만 캘린더에 남긴다.",
      "그것만으로 한 팀의 주간 회의 시간이 절반으로 줄었다.",
    ],
  },
  {
    id: "a10",
    title: "구독경제, 정말 저렴한가",
    source: "이코노미브리프",
    tag: "경제",
    minutes: 9,
    savedAt: "2주 전",
    excerpt: "한 달 9,900원짜리가 다섯 개면 5만 원이 된다.",
    body: [
      "구독은 개별 결제보다 싸 보이지만, 해지하지 않는 습관 자체가 비용이다.",
      "실제 사용량 대비 지출을 따져보면 절반 가까이가 '쓰지 않는 구독'인 경우가 많다.",
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

// 태그별 표지 사진 지정
export const TAG_IMAGE: Record<string, string> = {
  건강: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=60",
  개발: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=60",
  라이프: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=60",
  일: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=60",
  경제: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=60",
};

// 태그별 색상. semantic 팔레트 brand, success, warning, danger 4종을 태그 5개에 순환 적용
export const TAG_TONE: Record<string, "brand" | "success" | "warning" | "danger" | "neutral"> = {
  건강: "success",
  개발: "brand",
  라이프: "warning",
  일: "neutral",
  경제: "danger",
};
