export interface Brand {
  id: string;
  name: string;
  // 연매출 단위 억원
  revenue: number;
  // 매장 수
  stores: number;
  // 주력 업태
  kind: string;
  // 전년 대비 매출 증감(%)
  yoy: number;
}

export const BRANDS: Brand[] = [
  { id: "BR-01", name: "밀가루정원", revenue: 1840, stores: 412, kind: "베이커리 카페", yoy: 12.4 },
  { id: "BR-02", name: "오후세시", revenue: 1210, stores: 298, kind: "디저트 전문", yoy: 8.1 },
  { id: "BR-03", name: "크럼블상회", revenue: 940, stores: 351, kind: "테이크아웃", yoy: -3.2 },
  { id: "BR-04", name: "온도빵집", revenue: 620, stores: 144, kind: "베이커리 카페", yoy: 21.7 },
  { id: "BR-05", name: "설탕공장", revenue: 430, stores: 176, kind: "디저트 전문", yoy: 4.6 },
  { id: "BR-06", name: "하루제과", revenue: 260, stores: 89, kind: "테이크아웃", yoy: -9.8 },
];

// 점유율은 저장 대신 매번 계산. 두 벌 두면 한쪽이 반드시 낡음
export const TOTAL_REVENUE = BRANDS.reduce((sum, b) => sum + b.revenue, 0);
export const shareOf = (b: Brand) => (b.revenue / TOTAL_REVENUE) * 100;

export interface Channel {
  id: string;
  label: string;
  // 도입한 매장 비율(%)
  rate: number;
  // 전년 대비 증감(%p)
  delta: number;
  note: string;
}

// 넷을 도넛 하나로 합치기 금지. 매장 중복 사용으로 비율이 왜곡되는 문제 있음
export const CHANNELS: Channel[] = [
  { id: "CH-delivery", label: "배달앱", rate: 78.4, delta: 5.2, note: "수수료 부담으로 자체 주문 병행이 는다" },
  { id: "CH-kiosk", label: "키오스크", rate: 52.1, delta: 9.8, note: "인건비 상승 구간에서 가장 빨리 는 항목" },
  { id: "CH-mobile", label: "모바일 주문", rate: 41.7, delta: 11.3, note: "브랜드 앱과 간편결제가 같이 는다" },
  { id: "CH-subscribe", label: "구독", rate: 12.9, delta: 3.4, note: "베이커리 카페에만 의미 있는 수치다" },
];

export const SCORE_AXES = [
  { id: "hygiene", label: "위생" },
  { id: "taste", label: "맛" },
  { id: "price", label: "가격" },
  { id: "access", label: "접근성" },
] as const;

export type ScoreAxis = (typeof SCORE_AXES)[number]["id"];

// 항목별 25점 만점, 합산해 총점 100점 계산
export const AXIS_MAX = 25;

export const SCORES: Record<string, Record<ScoreAxis, number>> = {
  "BR-01": { hygiene: 22, taste: 21, price: 14, access: 23 },
  "BR-02": { hygiene: 19, taste: 24, price: 12, access: 17 },
  "BR-03": { hygiene: 16, taste: 15, price: 22, access: 20 },
  "BR-04": { hygiene: 24, taste: 22, price: 11, access: 13 },
  "BR-05": { hygiene: 18, taste: 19, price: 20, access: 9 },
  "BR-06": { hygiene: 7, taste: 16, price: 24, access: 4 },
};

export const totalScore = (brandId: string) =>
  SCORE_AXES.reduce((sum, a) => sum + (SCORES[brandId]?.[a.id] ?? 0), 0);

export type StoreStatus = "영업" | "리뉴얼" | "휴업";

export interface Store {
  id: string;
  name: string;
  brandId: string;
  region: string;
  // 월매출(만원)
  monthly: number;
  status: StoreStatus;
  owner: string;
  opened: string;
  // 고객 평점 0~5
  rating: number;
  seats: number;
  // 매장이 활성화한 채널
  channels: string[];
  memo: string;
  photo: string;
}

const PHOTO = (id: string, w = 640) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const STORES: Store[] = [
  { id: "ST-101", name: "밀가루정원 성수점", brandId: "BR-01", region: "서울 성동", monthly: 9840, status: "영업", owner: "정하윤", opened: "2023-04-11", rating: 4.6, seats: 48, channels: ["CH-delivery", "CH-kiosk", "CH-mobile"], memo: "주말 오후 대기열이 길다. 좌석 회전이 과제.", photo: PHOTO("photo-1429962714451-bb934ecdc4ec") },
  { id: "ST-102", name: "오후세시 한남점", brandId: "BR-02", region: "서울 용산", monthly: 7120, status: "영업", owner: "문지호", opened: "2022-09-30", rating: 4.4, seats: 32, channels: ["CH-delivery", "CH-mobile"], memo: "디저트 단가가 높아 객단가 1위.", photo: PHOTO("photo-1434389677669-e08b4cac3105") },
  { id: "ST-103", name: "크럼블상회 구로점", brandId: "BR-03", region: "서울 구로", monthly: 4380, status: "영업", owner: "배서진", opened: "2021-06-02", rating: 4.0, seats: 12, channels: ["CH-delivery", "CH-kiosk"], memo: "테이크아웃 비중 82%. 좌석을 줄이고 창구를 넓혔다.", photo: PHOTO("photo-1438761681033-6461ffad8d80") },
  { id: "ST-104", name: "온도빵집 판교점", brandId: "BR-04", region: "경기 성남", monthly: 8650, status: "영업", owner: "강태오", opened: "2024-02-19", rating: 4.7, seats: 56, channels: ["CH-kiosk", "CH-mobile", "CH-subscribe"], memo: "구독 회원 312명. 평일 아침 매출이 저녁을 넘는다.", photo: PHOTO("photo-1441986300917-64674bd600d8") },
  { id: "ST-105", name: "설탕공장 서면점", brandId: "BR-05", region: "부산 진구", monthly: 3960, status: "리뉴얼", owner: "오세림", opened: "2020-11-07", rating: 3.9, seats: 24, channels: ["CH-delivery"], memo: "10월 재개점 예정. 공사 중 배달만 돌린다.", photo: PHOTO("photo-1447933601403-0c6688de566e") },
  { id: "ST-106", name: "하루제과 전주점", brandId: "BR-06", region: "전북 전주", monthly: 2140, status: "휴업", owner: "신가온", opened: "2019-03-15", rating: 3.6, seats: 18, channels: [], memo: "임대 계약 종료. 이전 자리를 찾는 중.", photo: PHOTO("photo-1454165804606-c3d57bc86b40") },
  { id: "ST-107", name: "밀가루정원 광안점", brandId: "BR-01", region: "부산 수영", monthly: 8210, status: "영업", owner: "임도현", opened: "2023-08-24", rating: 4.5, seats: 40, channels: ["CH-delivery", "CH-mobile"], memo: "관광 수요라 성수기 편차가 크다.", photo: PHOTO("photo-1459749411175-04bf5292ceea") },
  { id: "ST-108", name: "오후세시 대전점", brandId: "BR-02", region: "대전 유성", monthly: 5270, status: "영업", owner: "한소윤", opened: "2022-05-18", rating: 4.2, seats: 28, channels: ["CH-delivery", "CH-kiosk", "CH-mobile"], memo: "대학가라 시험 기간 매출이 두 배로 뛴다.", photo: PHOTO("photo-1461749280684-dccba630e2f6") },
  { id: "ST-109", name: "크럼블상회 인천점", brandId: "BR-03", region: "인천 연수", monthly: 3540, status: "영업", owner: "권민재", opened: "2021-12-09", rating: 3.8, seats: 10, channels: ["CH-delivery"], memo: "키오스크 도입 검토 중. 대기 시간이 불만 1위.", photo: PHOTO("photo-1466781783364-36c955e42a7f") },
  { id: "ST-110", name: "온도빵집 연남점", brandId: "BR-04", region: "서울 마포", monthly: 7480, status: "영업", owner: "유하람", opened: "2024-06-01", rating: 4.8, seats: 36, channels: ["CH-mobile", "CH-subscribe"], memo: "배달을 아예 안 한다. 매장 경험에 몰았다.", photo: PHOTO("photo-1470225620780-dba8ba36b745") },
  { id: "ST-111", name: "설탕공장 창원점", brandId: "BR-05", region: "경남 창원", monthly: 2980, status: "영업", owner: "차은결", opened: "2020-07-22", rating: 4.1, seats: 20, channels: ["CH-delivery", "CH-kiosk"], memo: "가격 경쟁력으로 버틴다. 마진이 얇다.", photo: PHOTO("photo-1470229722913-7c0e2dbbafd3") },
  { id: "ST-112", name: "하루제과 청주점", brandId: "BR-06", region: "충북 청주", monthly: 1870, status: "리뉴얼", owner: "남지우", opened: "2018-10-03", rating: 3.5, seats: 14, channels: ["CH-delivery"], memo: "간판·집기 교체. 브랜드 개편안 시범 적용 매장.", photo: PHOTO("photo-1472099645785-5658abf4ff4e") },
];

export const brandOf = (brandId: string) => BRANDS.find((b) => b.id === brandId);
export const channelLabel = (id: string) => CHANNELS.find((c) => c.id === id)?.label ?? id;

export type PostKind = "공지" | "리포트" | "질문";

export interface Post {
  id: string;
  kind: PostKind;
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  // 본문은 문단 배열로 구성. 한 덩어리로 두면 화면이 임의로 줄바꿈하는 문제가 있음
  body: string[];
  // 첨부 사진 목록
  photo?: string;
  pinned?: boolean;
}

export const POSTS: Post[] = [
  {
    id: "PO-31", kind: "공지", pinned: true,
    title: "3분기 매장 평가 기준이 바뀝니다. 접근성 배점 상향",
    author: "운영팀 정하윤", date: "2026-09-18", views: 1284, comments: 12,
    body: [
      "3분기부터 평가 네 항목의 배점은 그대로 25점씩이되, 접근성 항목의 세부 배점이 바뀝니다. 주차 가능 여부에 몰려 있던 점수를 보행 접근·휠체어 동선·영업시간 세 종류로 나눕니다.",
      "기존 점수와 직접 비교하면 안 됩니다. 같은 매장이라도 세부 배점이 달라 값이 오르내립니다. 3분기 값은 3분기끼리만 견주세요.",
    ],
    photo: PHOTO("photo-1441986300917-64674bd600d8", 960),
  },
  {
    id: "PO-30", kind: "리포트",
    title: "키오스크 도입률이 9.8%p 올랐습니다. 어디서 올랐나",
    author: "분석팀 문지호", date: "2026-09-15", views: 942, comments: 7,
    body: [
      "도입률 상승분의 대부분은 좌석 20석 이하 매장에서 나왔습니다. 좌석이 넓은 매장은 이미 도입이 끝나 있어 더 오를 자리가 없습니다.",
      "이 수치는 도입 여부만 셉니다. 켜 두고 안 쓰는 매장은 가려내지 못합니다. 실사용은 다음 조사의 과제입니다.",
    ],
    photo: PHOTO("photo-1429962714451-bb934ecdc4ec", 960),
  },
  {
    id: "PO-29", kind: "질문",
    title: "리뉴얼 기간 중 배달만 돌릴 때 매출은 어디로 잡히나요?",
    author: "서면점 오세림", date: "2026-09-12", views: 318, comments: 5,
    body: ["공사 중이라 홀을 닫고 배달만 돌리고 있습니다. 이 기간 매출이 매장 실적에 그대로 잡히는지, 아니면 별도로 빠지는지 확인 부탁드립니다."],
  },
  {
    id: "PO-28", kind: "리포트",
    title: "구독은 아직 베이커리 카페만의 것입니다",
    author: "분석팀 배서진", date: "2026-09-08", views: 671, comments: 3,
    body: [
      "구독 도입률 12.9%를 업태별로 쪼개면 베이커리 카페 31.2%, 디저트 전문 6.4%, 테이크아웃 1.1%입니다. 전체 수치 하나로 보면 「아직 작다」로 읽히지만, 업태를 가르면 한쪽에서는 이미 흔한 수단입니다.",
      "평균 하나로 말하면 이런 차이가 통째로 사라집니다.",
    ],
    photo: PHOTO("photo-1470225620780-dba8ba36b745", 960),
  },
  {
    id: "PO-27", kind: "공지",
    title: "10월 정기 점검 일정",
    author: "운영팀 강태오", date: "2026-09-05", views: 806, comments: 2,
    body: ["10월 둘째 주에 전 매장 위생 점검이 있습니다. 매장별 일정은 개별 안내드립니다."],
  },
  {
    id: "PO-26", kind: "질문",
    title: "점유율 표의 분모가 여섯 곳뿐인 이유가 있나요?",
    author: "판교점 임도현", date: "2026-09-02", views: 455, comments: 9,
    body: [
      "표에 나오는 브랜드가 여섯 곳인데, 실제로는 더 많은 브랜드가 있는 걸로 압니다. 이 점유율이 전체 시장 기준인지 여섯 곳 안에서의 비중인지 궁금합니다.",
    ],
  },
  {
    id: "PO-25", kind: "리포트",
    title: "평점과 매출은 생각만큼 같이 가지 않습니다",
    author: "분석팀 한소윤", date: "2026-08-28", views: 1120, comments: 15,
    body: [
      "평점 상위 세 매장 중 둘은 월매출 중위권입니다. 평점이 높은 매장은 좌석이 적고 회전이 느린 경향이 있어, 만족도와 매출이 같은 방향으로만 움직이지 않습니다.",
      "두 축을 한 카드에 겹쳐 그리면 서로를 설명하는 것처럼 읽힙니다. 그래서 이 리포트는 두 축을 나눠 그립니다.",
    ],
    photo: PHOTO("photo-1459749411175-04bf5292ceea", 960),
  },
  {
    id: "PO-24", kind: "공지",
    title: "게시판 사용 규칙",
    author: "운영팀", date: "2026-08-20", views: 2043, comments: 0,
    body: ["매장 운영과 무관한 글은 옮기거나 지웁니다. 수치를 인용할 때는 어느 조사의 몇 분기 값인지 함께 적어 주세요."],
  },
];

export const FOOTNOTES: { title: string; body: string }[] = [
  {
    title: "분모가 무엇인가",
    body: "점유율은 표에 있는 여섯 브랜드의 매출 합을 분모로 계산한 값입니다. 시장 전체가 아닙니다. 매출을 공개하지 않는 브랜드는 애초에 분모에 없습니다.",
  },
  {
    title: "채널 도입률을 합치지 않는 이유",
    body: "한 매장이 배달앱·키오스크·모바일 주문·구독을 동시에 쓸 수 있어 서로 겹칩니다. 네 값을 더하면 100을 넘고, 하나의 원으로 합치면 「전체의 몇 퍼센트」라는 없는 축이 생깁니다.",
  },
  {
    title: "히트맵의 색이 말하는 것",
    body: "셀 색은 그 항목의 만점(25점)에 얼마나 가까운지를 나타냅니다. 색이 어느 쪽으로 진해지는지는 모드마다 다르므로 범례가 순서를 쥐고, 셀에는 값을 글자로 함께 찍습니다.",
  },
  {
    title: "이 화면의 자료는 가상입니다",
    body: "실재하는 회사·매출·조사 결과가 아닙니다. 이 화면은 「이 베이스로 분석 화면을 지으면 이렇게 된다」를 보이기 위한 표본입니다.",
  },
];
