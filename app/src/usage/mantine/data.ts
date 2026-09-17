export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  // 1박 요금(원)
  nightlyPrice: number;
  rating: number;
  reviewCount: number;
  category: "해변" | "도시" | "산악" | "문화유산";
  nights: number;
  tag: string;
  // 지도 패널 내 상대 좌표(%)
  mapX: number;
  mapY: number;
  bookings: number;
}

export const DESTINATIONS: readonly Destination[] = [
  { id: "d1", name: "산토리니", country: "그리스", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60", nightlyPrice: 340000, rating: 4.9, reviewCount: 812, category: "해변", nights: 4, tag: "인기 급상승", mapX: 58, mapY: 38, bookings: 96 },
  { id: "d2", name: "교토", country: "일본", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60", nightlyPrice: 180000, rating: 4.8, reviewCount: 1204, category: "문화유산", nights: 3, tag: "가까운 여행", mapX: 82, mapY: 40, bookings: 143 },
  { id: "d3", name: "바르셀로나", country: "스페인", image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=60", nightlyPrice: 210000, rating: 4.7, reviewCount: 956, category: "도시", nights: 5, tag: "", mapX: 48, mapY: 34, bookings: 78 },
  { id: "d4", name: "퀸스타운", country: "뉴질랜드", image: "https://images.unsplash.com/photo-1589802757116-24c11c7f8891?auto=format&fit=crop&w=800&q=60", nightlyPrice: 290000, rating: 4.9, reviewCount: 431, category: "산악", nights: 6, tag: "액티비티 추천", mapX: 92, mapY: 82, bookings: 52 },
  { id: "d5", name: "방콕", country: "태국", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=60", nightlyPrice: 95000, rating: 4.6, reviewCount: 1520, category: "도시", nights: 4, tag: "특가", mapX: 76, mapY: 52, bookings: 201 },
  { id: "d6", name: "마추픽추", country: "페루", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=60", nightlyPrice: 260000, rating: 4.9, reviewCount: 298, category: "문화유산", nights: 5, tag: "", mapX: 24, mapY: 66, bookings: 41 },
  { id: "d7", name: "몰디브", country: "몰디브", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=60", nightlyPrice: 520000, rating: 4.9, reviewCount: 674, category: "해변", nights: 4, tag: "프리미엄", mapX: 68, mapY: 58, bookings: 89 },
  { id: "d8", name: "취리히", country: "스위스", image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=60", nightlyPrice: 380000, rating: 4.7, reviewCount: 355, category: "산악", nights: 5, tag: "", mapX: 50, mapY: 30, bookings: 33 },
  { id: "d9", name: "다낭", country: "베트남", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=60", nightlyPrice: 88000, rating: 4.5, reviewCount: 1102, category: "해변", nights: 4, tag: "특가", mapX: 80, mapY: 48, bookings: 176 },
  { id: "d10", name: "체코 프라하", country: "체코", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=60", nightlyPrice: 165000, rating: 4.8, reviewCount: 512, category: "문화유산", nights: 4, tag: "", mapX: 52, mapY: 28, bookings: 64 },
  { id: "d11", name: "케이프타운", country: "남아공", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=60", nightlyPrice: 230000, rating: 4.6, reviewCount: 287, category: "산악", nights: 6, tag: "인기 급상승", mapX: 54, mapY: 80, bookings: 47 },
  { id: "d12", name: "발리", country: "인도네시아", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60", nightlyPrice: 120000, rating: 4.7, reviewCount: 1389, category: "해변", nights: 5, tag: "특가", mapX: 84, mapY: 60, bookings: 224 },
];

// 홈 화면 지도 패널. 진행 중인 여정 하나 라이브 트래킹
export const CURRENT_TRIP = {
  destinationId: "d2",
  status: "이동 중" as const,
  progressPct: 62,
  flight: "OZ102",
  etaLabel: "현지 시각 14:40 도착 예정",
};

// 지난 6개월 여행 지출(만원). 홈 화면 라인차트
export const SPEND_TREND: readonly number[] = [128, 96, 210, 175, 260, 234];
export const SPEND_TREND_LABELS: readonly string[] = ["4월", "5월", "6월", "7월", "8월", "9월"];

export interface PassengerDraft {
  name: string;
  email: string;
  seatClass: string;
  meal: string;
  insurance: boolean;
  notifyChanges: boolean;
  companions: number;
}

export const DEFAULT_PASSENGER: PassengerDraft = {
  name: "김하늘",
  email: "haneul@example.com",
  seatClass: "economy",
  meal: "regular",
  insurance: true,
  notifyChanges: true,
  companions: 1,
};

export interface TripReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

export const TRIP_REVIEWS: readonly TripReview[] = [
  { id: "r1", author: "박서연", rating: 5, comment: "숙소 위치가 최고였어요. 다음에도 또 예약할게요." },
  { id: "r2", author: "이도윤", rating: 4, comment: "가격 대비 만족도가 높습니다. 조식이 조금 아쉬웠어요." },
  { id: "r3", author: "최민지", rating: 5, comment: "가이드 투어까지 포함돼서 편했어요." },
];
