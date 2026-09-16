export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  colorToken: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { id: "pr1", name: "무선 이어폰", category: "전자기기", price: 89000, colorToken: "var(--semantic-bg-info-subtle, #e0f2fe)", description: "노이즈 캔슬링 · 배터리 24시간 · 방수 IPX4." },
  { id: "pr2", name: "보온 텀블러 500ml", category: "생활", price: 22000, colorToken: "var(--semantic-bg-success-subtle, #dcfce7)", description: "12시간 보온 · 스테인리스 이중벽 · 식기세척기 가능." },
  { id: "pr3", name: "요가매트", category: "스포츠", price: 35000, colorToken: "var(--semantic-bg-brand-subtle, #ede9fe)", description: "6mm 두께 · 미끄럼 방지 · 휴대용 스트랩 포함." },
  { id: "pr4", name: "데스크 스탠드 조명", category: "생활", price: 48000, colorToken: "var(--semantic-bg-warning-subtle, #fef3c7)", description: "3단계 밝기 · USB-C 충전 · 접이식." },
  { id: "pr5", name: "캔버스 백팩", category: "패션", price: 62000, colorToken: "var(--semantic-bg-danger-subtle, #fee2e2)", description: "15인치 노트북 수납 · 발수 원단 · 용량 20L." },
  { id: "pr6", name: "핸드드립 세트", category: "생활", price: 41000, colorToken: "var(--semantic-bg-info-subtle, #e0f2fe)", description: "드리퍼·서버·계량스푼 구성 · 도자기 재질." },
];

export interface CartItem {
  productId: string;
  quantity: number;
}

export const CART_ITEMS: CartItem[] = [
  { productId: "pr1", quantity: 1 },
  { productId: "pr3", quantity: 2 },
];

export interface Order {
  id: string;
  itemsLabel: string;
  totalLabel: string;
  status: "배송중" | "배송완료" | "결제완료";
  dateLabel: string;
}

export const ORDERS: Order[] = [
  { id: "o1", itemsLabel: "보온 텀블러 500ml 외 1건", totalLabel: "57,000원", status: "배송중", dateLabel: "9월 14일" },
  { id: "o2", itemsLabel: "캔버스 백팩", totalLabel: "62,000원", status: "배송완료", dateLabel: "9월 2일" },
  { id: "o3", itemsLabel: "무선 이어폰", totalLabel: "89,000원", status: "결제완료", dateLabel: "9월 16일" },
];
