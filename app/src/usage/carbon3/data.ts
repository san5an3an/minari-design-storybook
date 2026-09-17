export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplier: string;
  item: string;
  amount: number;
  status: "발주완료" | "입고대기" | "입고완료";
  dateLabel: string;
  memo: string;
}

export const PURCHASE_ORDERS: PurchaseOrder[] = [
  { id: "po1", poNumber: "PO-3301", supplier: "대한베어링", item: "베어링 A형 500개", amount: 12500000, status: "입고대기", dateLabel: "9월 14일", memo: "9월 20일 입고 예정, 검수 인원 배정 필요." },
  { id: "po2", poNumber: "PO-3300", supplier: "코스모커넥터", item: "커넥터 C형 2000개", amount: 8400000, status: "입고완료", dateLabel: "9월 10일", memo: "전량 입고 확인, 품질검사 통과." },
  { id: "po3", poNumber: "PO-3299", supplier: "한빛기어", item: "기어 박스 D형 100개", amount: 34000000, status: "발주완료", dateLabel: "9월 16일", memo: "견적 대비 5% 할인 적용." },
  { id: "po4", poNumber: "PO-3298", supplier: "대한베어링", item: "베어링 B형 300개", amount: 7200000, status: "입고완료", dateLabel: "9월 5일", memo: "전량 입고, 재고로 이동." },
];

export interface Supplier {
  name: string;
  category: string;
  rating: number;
  leadTimeDays: number;
  activeOrders: number;
}

export const SUPPLIERS: Supplier[] = [
  { name: "대한베어링", category: "베어링·축", rating: 4.6, leadTimeDays: 7, activeOrders: 2 },
  { name: "코스모커넥터", category: "전기·커넥터", rating: 4.2, leadTimeDays: 5, activeOrders: 0 },
  { name: "한빛기어", category: "기어·구동", rating: 4.8, leadTimeDays: 14, activeOrders: 1 },
];

export interface PendingApproval {
  id: string;
  poNumber: string;
  requester: string;
  amount: number;
  reason: string;
}

export const PENDING_APPROVALS: PendingApproval[] = [
  { id: "ap1", poNumber: "PO-3302", requester: "김생산", amount: 45000000, reason: "예산 한도(3천만원) 초과. 팀장 승인 필요." },
  { id: "ap2", poNumber: "PO-3303", requester: "박구매", amount: 6800000, reason: "신규 공급업체. 첫 거래 검토 필요." },
];
