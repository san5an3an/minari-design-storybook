export interface Restaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryMin: number;
  minOrder: number;
  // 영업 상태 표시용 pill 위치
  status: "영업중" | "브레이크타임" | "마감";
  menu: { name: string; price: number }[];
}

export const RESTAURANTS: Restaurant[] = [
  {
    id: "r1", name: "합정 소국밥", category: "한식", rating: 4.7, deliveryMin: 28, minOrder: 12000,
    status: "영업중",
    menu: [
      { name: "소고기 국밥", price: 9500 },
      { name: "순대국밥", price: 8500 },
      { name: "얼큰 내장탕", price: 10500 },
    ],
  },
  {
    id: "r2", name: "연남 나폴리 피자", category: "양식", rating: 4.5, deliveryMin: 35, minOrder: 18000,
    status: "브레이크타임",
    menu: [
      { name: "마르게리타", price: 16000 },
      { name: "고르곤졸라", price: 19000 },
      { name: "감바스 파스타", price: 15000 },
    ],
  },
  {
    id: "r3", name: "망원 라멘야", category: "일식", rating: 4.8, deliveryMin: 22, minOrder: 10000,
    status: "영업중",
    menu: [
      { name: "돈코츠 라멘", price: 11000 },
      { name: "츠케멘", price: 12000 },
      { name: "교자 세트", price: 7000 },
    ],
  },
  {
    id: "r4", name: "서교 마라공방", category: "중식", rating: 4.4, deliveryMin: 30, minOrder: 15000,
    status: "마감",
    menu: [
      { name: "마라탕(중)", price: 13000 },
      { name: "마라샹궈", price: 22000 },
      { name: "꿔바로우", price: 16000 },
    ],
  },
  {
    id: "r5", name: "상수 티오카페", category: "카페", rating: 4.6, deliveryMin: 18, minOrder: 8000,
    status: "영업중",
    menu: [
      { name: "아인슈페너", price: 6500 },
      { name: "크로플", price: 5500 },
      { name: "콜드브루", price: 5000 },
    ],
  },
  {
    id: "r6", name: "홍대 떡볶이단", category: "분식", rating: 4.3, deliveryMin: 20, minOrder: 9000,
    status: "영업중",
    menu: [
      { name: "즉석떡볶이", price: 8000 },
      { name: "튀김모둠", price: 7000 },
      { name: "순대", price: 6000 },
    ],
  },
  {
    id: "r7", name: "합정 버거리퍼블릭", category: "버거", rating: 4.5, deliveryMin: 26, minOrder: 11000,
    status: "영업중",
    menu: [
      { name: "시그니처 치즈버거", price: 9500 },
      { name: "더블패티 버거", price: 12500 },
      { name: "어니언링", price: 5500 },
    ],
  },
  {
    id: "r8", name: "연남 커리하우스", category: "인도", rating: 4.6, deliveryMin: 32, minOrder: 14000,
    status: "브레이크타임",
    menu: [
      { name: "버터치킨커리", price: 13000 },
      { name: "치즈난", price: 4500 },
      { name: "사모사 3피스", price: 6000 },
    ],
  },
  {
    id: "r9", name: "망원 포베트남", category: "베트남", rating: 4.4, deliveryMin: 24, minOrder: 10000,
    status: "영업중",
    menu: [
      { name: "소고기 쌀국수", price: 10500 },
      { name: "월남쌈 세트", price: 13000 },
      { name: "분짜", price: 11000 },
    ],
  },
  {
    id: "r10", name: "서교 타코피에스타", category: "멕시칸", rating: 4.2, deliveryMin: 27, minOrder: 12000,
    status: "마감",
    menu: [
      { name: "타코 3피스", price: 9000 },
      { name: "부리토", price: 10000 },
      { name: "나초 플래터", price: 8500 },
    ],
  },
];

export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  itemsLabel: string;
  total: number;
  status: "배달 중" | "배달 완료" | "준비 중";
  timeLabel: string;
}

export const ORDERS: Order[] = [
  { id: "o1", restaurantId: "r3", restaurantName: "망원 라멘야", itemsLabel: "돈코츠 라멘 × 1, 교자 세트 × 1", total: 18000, status: "배달 중", timeLabel: "12분 전" },
  { id: "o2", restaurantId: "r1", restaurantName: "합정 소국밥", itemsLabel: "소고기 국밥 × 2", total: 19000, status: "배달 완료", timeLabel: "어제" },
  { id: "o3", restaurantId: "r2", restaurantName: "연남 나폴리 피자", itemsLabel: "마르게리타 × 1", total: 16000, status: "배달 완료", timeLabel: "3일 전" },
  { id: "o4", restaurantId: "r4", restaurantName: "서교 마라공방", itemsLabel: "마라탕(중) × 1, 꿔바로우 × 1", total: 29000, status: "준비 중", timeLabel: "방금" },
  { id: "o5", restaurantId: "r3", restaurantName: "망원 라멘야", itemsLabel: "츠케멘 × 2", total: 24000, status: "배달 완료", timeLabel: "5일 전" },
  // 가게 5곳 중 절반에 주문 이력 추가. OrdersScreen 통계, 페이지네이션 정합성 유지
  { id: "o6", restaurantId: "r7", restaurantName: "합정 버거리퍼블릭", itemsLabel: "더블패티 버거 × 1, 어니언링 × 1", total: 18000, status: "배달 완료", timeLabel: "6일 전" },
  { id: "o7", restaurantId: "r5", restaurantName: "상수 티오카페", itemsLabel: "아인슈페너 × 2, 크로플 × 1", total: 18500, status: "배달 완료", timeLabel: "1주 전" },
  { id: "o8", restaurantId: "r9", restaurantName: "망원 포베트남", itemsLabel: "소고기 쌀국수 × 1, 분짜 × 1", total: 21500, status: "준비 중", timeLabel: "2분 전" },
];

export interface Review {
  id: string;
  restaurantId: string;
  author: string;
  rating: number;
  comment: string;
  dateLabel: string;
}

// 가게 상세용 리뷰. 상세 화면 여백 채우기용 재작업
export const REVIEWS: Review[] = [
  { id: "rv1", restaurantId: "r3", author: "민지", rating: 5, comment: "국물이 진해서 완전 취향저격이에요. 재주문각!", dateLabel: "3일 전" },
  { id: "rv2", restaurantId: "r3", author: "현우", rating: 4, comment: "배달은 조금 늦었지만 맛은 확실히 좋아요.", dateLabel: "1주 전" },
  { id: "rv3", restaurantId: "r1", author: "소연", rating: 5, comment: "새벽에 시켜도 뜨끈하게 잘 와요.", dateLabel: "2일 전" },
  { id: "rv4", restaurantId: "r1", author: "태호", rating: 4, comment: "양이 많아서 좋아요, 국물도 진해요.", dateLabel: "1주 전" },
  { id: "rv5", restaurantId: "r2", author: "은서", rating: 5, comment: "화덕피자 도우가 정말 바삭해요.", dateLabel: "4일 전" },
  { id: "rv6", restaurantId: "r4", author: "준영", rating: 4, comment: "마라 향이 진짜 제대로예요.", dateLabel: "2주 전" },
  { id: "rv7", restaurantId: "r5", author: "하윤", rating: 5, comment: "크로플이 겉은 바삭 속은 촉촉해요.", dateLabel: "5일 전" },
  { id: "rv8", restaurantId: "r7", author: "도현", rating: 4, comment: "패티가 두꺼워서 든든해요.", dateLabel: "1주 전" },
];
