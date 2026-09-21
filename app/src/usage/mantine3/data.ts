export interface Product {
  id: string;
  name: string;
  sku: string;
  category: "전자제품" | "의류" | "식품" | "가구";
  warehouse: string;
  image: string;
  quantity: number;
  reorderThreshold: number;
  maxStock: number;
  unitPrice: number;
  status: "재고충분" | "재고부족" | "품절";
  lastUpdated: string;
  supplier: string;
  supplierContact: string;
}

export const PRODUCTS: readonly Product[] = [
  { id: "p1", name: "무선 이어폰 프로", sku: "ELC-1001", category: "전자제품", warehouse: "인천 A동", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=200&q=60", quantity: 482, reorderThreshold: 150, maxStock: 800, unitPrice: 89000, status: "재고충분", lastUpdated: "09-16 14:20", supplier: "대한전자", supplierContact: "02-1234-5678" },
  { id: "p2", name: "27인치 모니터", sku: "ELC-1002", category: "전자제품", warehouse: "인천 A동", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=200&q=60", quantity: 38, reorderThreshold: 40, maxStock: 300, unitPrice: 215000, status: "재고부족", lastUpdated: "09-17 09:05", supplier: "뷰텍코리아", supplierContact: "02-2345-6789" },
  { id: "p3", name: "기계식 키보드", sku: "ELC-1003", category: "전자제품", warehouse: "부산 B동", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=200&q=60", quantity: 0, reorderThreshold: 60, maxStock: 400, unitPrice: 132000, status: "품절", lastUpdated: "09-15 11:40", supplier: "키클릭", supplierContact: "051-345-6789" },
  { id: "p4", name: "보조배터리 20000mAh", sku: "ELC-1004", category: "전자제품", warehouse: "인천 A동", image: "https://images.unsplash.com/photo-1609592806955-6a698e5f7e4b?auto=format&fit=crop&w=200&q=60", quantity: 640, reorderThreshold: 200, maxStock: 1000, unitPrice: 32000, status: "재고충분", lastUpdated: "09-17 08:10", supplier: "파워랩", supplierContact: "02-3456-7890" },
  { id: "p5", name: "겨울 다운 자켓", sku: "APP-2001", category: "의류", warehouse: "김포 C동", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&q=60", quantity: 212, reorderThreshold: 80, maxStock: 500, unitPrice: 128000, status: "재고충분", lastUpdated: "09-16 17:30", supplier: "웜라인", supplierContact: "031-456-7890" },
  { id: "p6", name: "기본 반팔 티셔츠", sku: "APP-2002", category: "의류", warehouse: "김포 C동", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=60", quantity: 55, reorderThreshold: 100, maxStock: 900, unitPrice: 15000, status: "재고부족", lastUpdated: "09-17 10:15", supplier: "베이직코", supplierContact: "031-567-8901" },
  { id: "p7", name: "러닝화", sku: "APP-2003", category: "의류", warehouse: "부산 B동", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=60", quantity: 310, reorderThreshold: 120, maxStock: 600, unitPrice: 79000, status: "재고충분", lastUpdated: "09-14 13:00", supplier: "런핏", supplierContact: "051-678-9012" },
  { id: "p8", name: "유기농 원두 1kg", sku: "FOD-3001", category: "식품", warehouse: "김포 C동", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=200&q=60", quantity: 96, reorderThreshold: 50, maxStock: 300, unitPrice: 24000, status: "재고충분", lastUpdated: "09-17 07:50", supplier: "빈스로드", supplierContact: "031-789-0123" },
  { id: "p9", name: "냉동 만두 세트", sku: "FOD-3002", category: "식품", warehouse: "인천 A동", image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=200&q=60", quantity: 12, reorderThreshold: 40, maxStock: 250, unitPrice: 9800, status: "재고부족", lastUpdated: "09-17 06:30", supplier: "고향식품", supplierContact: "02-890-1234" },
  { id: "p10", name: "제로 탄산음료 24캔", sku: "FOD-3003", category: "식품", warehouse: "부산 B동", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=60", quantity: 420, reorderThreshold: 150, maxStock: 900, unitPrice: 18000, status: "재고충분", lastUpdated: "09-16 12:10", supplier: "청량음료", supplierContact: "051-901-2345" },
  { id: "p11", name: "원목 좌식 책상", sku: "FUR-4001", category: "가구", warehouse: "김포 C동", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=200&q=60", quantity: 24, reorderThreshold: 30, maxStock: 150, unitPrice: 168000, status: "재고부족", lastUpdated: "09-15 15:45", supplier: "우드마루", supplierContact: "031-012-3456" },
  { id: "p12", name: "인체공학 의자", sku: "FUR-4002", category: "가구", warehouse: "인천 A동", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=200&q=60", quantity: 0, reorderThreshold: 25, maxStock: 120, unitPrice: 245000, status: "품절", lastUpdated: "09-13 09:20", supplier: "시트콤", supplierContact: "02-123-4560" },
  { id: "p13", name: "접이식 책장", sku: "FUR-4003", category: "가구", warehouse: "부산 B동", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=200&q=60", quantity: 88, reorderThreshold: 30, maxStock: 200, unitPrice: 92000, status: "재고충분", lastUpdated: "09-17 11:00", supplier: "우드마루", supplierContact: "031-012-3456" },
  { id: "p14", name: "게이밍 마우스", sku: "ELC-1005", category: "전자제품", warehouse: "부산 B동", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=200&q=60", quantity: 205, reorderThreshold: 90, maxStock: 500, unitPrice: 56000, status: "재고충분", lastUpdated: "09-16 16:05", supplier: "키클릭", supplierContact: "051-345-6789" },
];

export interface Movement {
  id: string;
  productId: string;
  type: "입고" | "출고";
  quantity: number;
  staff: string;
  datetime: string;
  note: string;
}

export const MOVEMENTS: readonly Movement[] = [
  { id: "m1", productId: "p1", type: "입고", quantity: 200, staff: "김하늘", datetime: "09-17 09:10", note: "정기 발주분 입고" },
  { id: "m2", productId: "p2", type: "출고", quantity: 45, staff: "박서연", datetime: "09-17 08:40", note: "온라인몰 출고" },
  { id: "m3", productId: "p9", type: "출고", quantity: 30, staff: "이도윤", datetime: "09-17 06:35", note: "편의점 납품" },
  { id: "m4", productId: "p4", type: "입고", quantity: 300, staff: "김하늘", datetime: "09-17 08:05", note: "신규 공급분" },
  { id: "m5", productId: "p6", type: "출고", quantity: 80, staff: "최민지", datetime: "09-16 17:20", note: "매장 보충" },
  { id: "m6", productId: "p5", type: "입고", quantity: 150, staff: "정우진", datetime: "09-16 17:25", note: "시즌 입고" },
  { id: "m7", productId: "p3", type: "출고", quantity: 60, staff: "한소율", datetime: "09-15 11:35", note: "재고 소진" },
  { id: "m8", productId: "p11", type: "출고", quantity: 12, staff: "윤지호", datetime: "09-15 15:40", note: "매장 전시분" },
  { id: "m9", productId: "p12", type: "출고", quantity: 25, staff: "임채원", datetime: "09-13 09:15", note: "품절 처리" },
  { id: "m10", productId: "p8", type: "입고", quantity: 60, staff: "서지안", datetime: "09-17 07:45", note: "정기 발주분 입고" },
  { id: "m11", productId: "p10", type: "입고", quantity: 200, staff: "강은우", datetime: "09-16 12:05", note: "대량 발주" },
  { id: "m12", productId: "p13", type: "입고", quantity: 40, staff: "조유나", datetime: "09-17 10:55", note: "정기 발주분 입고" },
  { id: "m13", productId: "p14", type: "출고", quantity: 20, staff: "신태양", datetime: "09-16 16:00", note: "온라인몰 출고" },
  { id: "m14", productId: "p7", type: "입고", quantity: 100, staff: "김하늘", datetime: "09-14 12:55", note: "정기 발주분 입고" },
  // 기본 선택 제품 이력 데이터 충분히 채우기
  { id: "m15", productId: "p1", type: "입고", quantity: 120, staff: "박서연", datetime: "09-10 09:40", note: "정기 발주분 입고" },
  { id: "m16", productId: "p1", type: "출고", quantity: 65, staff: "이도윤", datetime: "09-12 15:20", note: "온라인몰 출고" },
  { id: "m17", productId: "p1", type: "출고", quantity: 40, staff: "최민지", datetime: "09-14 11:05", note: "면세점 납품" },
];

// 요일별 순 입출고 수량, 재고 현황 미니 지표용
export const NET_MOVEMENT_BY_DAY: readonly { label: string; value: number }[] = [
  { label: "월", value: 120 }, { label: "화", value: -40 }, { label: "수", value: 80 },
  { label: "목", value: -60 }, { label: "금", value: 150 }, { label: "토", value: 20 }, { label: "일", value: -10 },
];

export const WAREHOUSES = ["전체", "인천 A동", "부산 B동", "김포 C동"] as const;
