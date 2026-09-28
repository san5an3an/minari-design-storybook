export interface Transaction {
  id: string;
  dateLabel: string;
  merchant: string;
  category: string;
  amount: number;
  status: "완료" | "대기" | "취소";
  memo: string;
}

export const TRANSACTIONS: Transaction[] = [
  { id: "t1", dateLabel: "9월 16일", merchant: "AWS", category: "인프라", amount: -1284000, status: "완료", memo: "9월 클라우드 사용료 자동 결제." },
  { id: "t2", dateLabel: "9월 15일", merchant: "고객사 A", category: "매출", amount: 8500000, status: "완료", memo: "9월분 라이선스 대금 입금." },
  { id: "t3", dateLabel: "9월 14일", merchant: "Figma", category: "소프트웨어", amount: -156000, status: "완료", memo: "팀 플랜 12석 갱신." },
  { id: "t4", dateLabel: "9월 13일", merchant: "고객사 B", category: "매출", amount: 3200000, status: "대기", memo: "세금계산서 발행 대기 중." },
  { id: "t5", dateLabel: "9월 10일", merchant: "패스트파이브", category: "임대료", amount: -4200000, status: "완료", memo: "9월 사무실 임대료." },
  { id: "t6", dateLabel: "9월 8일", merchant: "고객사 C", category: "매출", amount: 1800000, status: "취소", memo: "계약 해지로 환불 처리." },
  { id: "t7", dateLabel: "9월 7일", merchant: "고객사 D", category: "매출", amount: 5400000, status: "완료", memo: "9월분 라이선스 대금 입금." },
  { id: "t8", dateLabel: "9월 5일", merchant: "노션", category: "소프트웨어", amount: -89000, status: "완료", memo: "팀 플랜 갱신." },
  { id: "t9", dateLabel: "9월 3일", merchant: "인력사무소", category: "인건비", amount: -1850000, status: "완료", memo: "9월 프리랜서 계약직 급여." },
  { id: "t10", dateLabel: "9월 1일", merchant: "고객사 E", category: "매출", amount: 2100000, status: "대기", memo: "세금계산서 발행 대기 중." },
  // 거래내역 화면의 월별 기간 필터 동작 확인을 위해 지난달 거래 2건 추가
  { id: "t11", dateLabel: "8월 29일", merchant: "고객사 A", category: "매출", amount: 7900000, status: "완료", memo: "8월분 라이선스 대금 입금." },
  { id: "t12", dateLabel: "8월 20일", merchant: "AWS", category: "인프라", amount: -1190000, status: "완료", memo: "8월 클라우드 사용료 자동 결제." },
];

export interface CategoryBreakdown {
  category: string;
  amount: number;
}

export const EXPENSE_BY_CATEGORY: CategoryBreakdown[] = [
  { category: "인프라", amount: 1284000 },
  { category: "임대료", amount: 4200000 },
  { category: "소프트웨어", amount: 612000 },
  { category: "인건비", amount: 18500000 },
];

export interface Budget {
  category: string;
  spent: number;
  limit: number;
}

export const BUDGETS: Budget[] = [
  { category: "인프라", spent: 1284000, limit: 1500000 },
  { category: "소프트웨어", spent: 612000, limit: 500000 },
  { category: "마케팅", spent: 2100000, limit: 5000000 },
  { category: "출장·경비", spent: 340000, limit: 1000000 },
];
