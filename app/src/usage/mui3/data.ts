export interface Restaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryMin: number;
  minOrder: number;
  menu: { name: string; price: number }[];
}

export const RESTAURANTS: Restaurant[] = [
  {
    id: "r1", name: "합정 소국밥", category: "한식", rating: 4.7, deliveryMin: 28, minOrder: 12000,
    menu: [
      { name: "소고기 국밥", price: 9500 },
      { name: "순대국밥", price: 8500 },
      { name: "얼큰 내장탕", price: 10500 },
    ],
  },
  {
    id: "r2", name: "연남 나폴리 피자", category: "양식", rating: 4.5, deliveryMin: 35, minOrder: 18000,
    menu: [
      { name: "마르게리타", price: 16000 },
      { name: "고르곤졸라", price: 19000 },
      { name: "감바스 파스타", price: 15000 },
    ],
  },
  {
    id: "r3", name: "망원 라멘야", category: "일식", rating: 4.8, deliveryMin: 22, minOrder: 10000,
    menu: [
      { name: "돈코츠 라멘", price: 11000 },
      { name: "츠케멘", price: 12000 },
      { name: "교자 세트", price: 7000 },
    ],
  },
  {
    id: "r4", name: "서교 마라공방", category: "중식", rating: 4.4, deliveryMin: 30, minOrder: 15000,
    menu: [
      { name: "마라탕(중)", price: 13000 },
      { name: "마라샹궈", price: 22000 },
      { name: "꿔바로우", price: 16000 },
    ],
  },
];

export interface Order {
  id: string;
  restaurantName: string;
  itemsLabel: string;
  total: number;
  status: "배달 중" | "배달 완료" | "준비 중";
  timeLabel: string;
}

export const ORDERS: Order[] = [
  { id: "o1", restaurantName: "망원 라멘야", itemsLabel: "돈코츠 라멘 × 1, 교자 세트 × 1", total: 18000, status: "배달 중", timeLabel: "12분 전" },
  { id: "o2", restaurantName: "합정 소국밥", itemsLabel: "소고기 국밥 × 2", total: 19000, status: "배달 완료", timeLabel: "어제" },
  { id: "o3", restaurantName: "연남 나폴리 피자", itemsLabel: "마르게리타 × 1", total: 16000, status: "배달 완료", timeLabel: "3일 전" },
];
