export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  colorToken: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  { id: "pr1", name: "무선 이어폰", category: "전자기기", price: 89000, colorToken: "var(--semantic-bg-brand-subtle)", description: "노이즈 캔슬링 · 배터리 24시간 · 방수 IPX4.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=320&q=70" },
  { id: "pr2", name: "보온 텀블러 500ml", category: "생활", price: 22000, colorToken: "var(--semantic-bg-success-subtle)", description: "12시간 보온 · 스테인리스 이중벽 · 식기세척기 가능.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=320&q=70" },
  { id: "pr3", name: "요가매트", category: "스포츠", price: 35000, colorToken: "var(--semantic-bg-brand-subtlest)", description: "6mm 두께 · 미끄럼 방지 · 휴대용 스트랩 포함.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=320&q=70" },
  { id: "pr4", name: "데스크 스탠드 조명", category: "생활", price: 48000, colorToken: "var(--semantic-bg-warning-subtle)", description: "3단계 밝기 · USB-C 충전 · 접이식.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=320&q=70" },
  { id: "pr5", name: "캔버스 백팩", category: "패션", price: 62000, colorToken: "var(--semantic-bg-danger-subtle)", description: "15인치 노트북 수납 · 발수 원단 · 용량 20L.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=320&q=70" },
  { id: "pr6", name: "핸드드립 세트", category: "생활", price: 41000, colorToken: "var(--semantic-bg-neutral-subtle)", description: "드리퍼·서버·계량스푼 구성 · 도자기 재질.", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=320&q=70" },
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
  // 취소됨 상태 추가. 주문 취소 액션 클릭 시 상태 변경
  status: "배송중" | "배송완료" | "결제완료" | "취소됨";
  dateLabel: string;
}

export const ORDERS: Order[] = [
  { id: "o1", itemsLabel: "보온 텀블러 500ml 외 1건", totalLabel: "57,000원", status: "배송중", dateLabel: "9월 14일" },
  { id: "o2", itemsLabel: "캔버스 백팩", totalLabel: "62,000원", status: "배송완료", dateLabel: "9월 2일" },
  { id: "o3", itemsLabel: "무선 이어폰", totalLabel: "89,000원", status: "결제완료", dateLabel: "9월 16일" },
  { id: "o4", itemsLabel: "데스크 스탠드 조명", totalLabel: "48,000원", status: "배송완료", dateLabel: "8월 22일" },
  { id: "o5", itemsLabel: "핸드드립 세트", totalLabel: "41,000원", status: "배송완료", dateLabel: "8월 10일" },
  { id: "o6", itemsLabel: "요가매트 외 1건", totalLabel: "70,000원", status: "배송완료", dateLabel: "7월 28일" },
  { id: "o7", itemsLabel: "핸드드립 세트 외 1건", totalLabel: "76,000원", status: "배송완료", dateLabel: "7월 15일" },
  { id: "o8", itemsLabel: "보온 텀블러 500ml", totalLabel: "22,000원", status: "배송완료", dateLabel: "6월 30일" },
  { id: "o9", itemsLabel: "캔버스 백팩 외 1건", totalLabel: "97,000원", status: "결제완료", dateLabel: "9월 17일" },
  { id: "o10", itemsLabel: "데스크 스탠드 조명", totalLabel: "48,000원", status: "배송중", dateLabel: "9월 12일" },
];
