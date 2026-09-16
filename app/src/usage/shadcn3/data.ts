export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  kind: "수입" | "지출";
  date: string;
  method: string;
  memo: string;
}

export const TRANSACTIONS: readonly Transaction[] = [
  { id: "t1", title: "월급", category: "급여", amount: 3200000, kind: "수입", date: "09-25", method: "계좌이체", memo: "9월분 급여." },
  { id: "t2", title: "장보기", category: "식비", amount: 68000, kind: "지출", date: "09-24", method: "체크카드", memo: "주간 장보기, 마트." },
  { id: "t3", title: "지하철", category: "교통", amount: 1400, kind: "지출", date: "09-24", method: "교통카드", memo: "출근." },
  { id: "t4", title: "넷플릭스", category: "구독", amount: 17000, kind: "지출", date: "09-23", method: "신용카드", memo: "월 구독료." },
  { id: "t5", title: "프리랜스 원고료", category: "부수입", amount: 250000, kind: "수입", date: "09-22", method: "계좌이체", memo: "외부 기고." },
  { id: "t6", title: "점심", category: "식비", amount: 12000, kind: "지출", date: "09-22", method: "체크카드", memo: "회사 근처 식당." },
  { id: "t7", title: "병원 진료", category: "의료", amount: 24000, kind: "지출", date: "09-21", method: "신용카드", memo: "정기 검진." },
] as const;
