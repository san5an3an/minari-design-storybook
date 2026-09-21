export interface PartLine {
  name: string;
  qty: number;
  price: number;
}

export interface HistoryEntry {
  label: string;
  timeLabel: string;
}

export interface WorkOrder {
  id: string;
  vehicle: string;
  plate: string;
  customer: string;
  issue: string;
  status: "대기" | "작업중" | "완료";
  mechanic: string;
  eta: string;
  parts: PartLine[];
  history: HistoryEntry[];
}

// 완료 건 비중 높게 지정
export const WORK_ORDERS: WorkOrder[] = [
  {
    id: "wo-241", vehicle: "2021 아반떼", plate: "12가 3456", customer: "김도윤",
    issue: "브레이크 패드 마모 · 제동 시 소음", status: "작업중", mechanic: "박정우", eta: "오늘 17:00",
    parts: [
      { name: "브레이크 패드(전륜)", qty: 1, price: 68000 },
      { name: "브레이크 오일", qty: 1, price: 22000 },
    ],
    history: [
      { label: "입고 · 초기 점검 완료", timeLabel: "09:10" },
      { label: "브레이크 패드 교체 시작", timeLabel: "10:40" },
    ],
  },
  {
    id: "wo-239", vehicle: "2019 쏘렌토", plate: "34나 7890", customer: "이서연",
    issue: "엔진 경고등 점등", status: "대기", mechanic: "미배정", eta: "-",
    parts: [],
    history: [{ label: "입고 접수", timeLabel: "어제 16:20" }],
  },
  {
    id: "wo-235", vehicle: "2022 스포티지", plate: "56다 1234", customer: "박지훈",
    issue: "정기 점검 · 엔진오일 교환", status: "완료", mechanic: "최은성", eta: "완료됨",
    parts: [
      { name: "엔진오일(합성)", qty: 5, price: 12000 },
      { name: "오일 필터", qty: 1, price: 9000 },
    ],
    history: [
      { label: "입고 · 점검 시작", timeLabel: "그제 14:00" },
      { label: "오일·필터 교환", timeLabel: "그제 14:40" },
      { label: "출고 · 정산 완료", timeLabel: "그제 15:20" },
    ],
  },
  {
    id: "wo-233", vehicle: "2020 그랜저", plate: "78라 5678", customer: "최민서",
    issue: "타이어 편마모 · 얼라인먼트 점검", status: "완료", mechanic: "박정우", eta: "완료됨",
    parts: [{ name: "휠 얼라인먼트", qty: 1, price: 45000 }],
    history: [
      { label: "입고 · 얼라인먼트 측정", timeLabel: "3일 전" },
      { label: "조정 완료 · 재측정 통과", timeLabel: "3일 전" },
    ],
  },
  {
    id: "wo-242", vehicle: "2023 아이오닉5", plate: "90마 2345", customer: "정하은",
    issue: "완속 충전 시 오류코드 표시", status: "작업중", mechanic: "한지민", eta: "내일 11:00",
    parts: [{ name: "OBC 진단", qty: 1, price: 30000 }],
    history: [{ label: "입고 · 진단기 연결", timeLabel: "오늘 08:30" }],
  },
  {
    id: "wo-230", vehicle: "2018 카니발", plate: "23바 6789", customer: "오지호",
    issue: "슬라이딩 도어 작동 불량", status: "완료", mechanic: "한지민", eta: "완료됨",
    parts: [{ name: "도어 모터", qty: 1, price: 96000 }],
    history: [
      { label: "입고 · 도어 모터 점검", timeLabel: "5일 전" },
      { label: "모터 교체 · 출고", timeLabel: "5일 전" },
    ],
  },
  {
    id: "wo-228", vehicle: "2017 티볼리", plate: "45사 7890", customer: "윤아름",
    issue: "정기 점검 · 엔진오일 교환", status: "완료", mechanic: "최은성", eta: "완료됨",
    parts: [
      { name: "엔진오일(합성)", qty: 4, price: 12000 },
      { name: "오일 필터", qty: 1, price: 9000 },
    ],
    history: [
      { label: "입고 · 점검 시작", timeLabel: "6일 전" },
      { label: "오일·필터 교환 · 출고", timeLabel: "6일 전" },
    ],
  },
  {
    id: "wo-226", vehicle: "2021 K5", plate: "67아 8901", customer: "한소율",
    issue: "와이퍼 작동 시 소음", status: "대기", mechanic: "미배정", eta: "-",
    parts: [],
    history: [{ label: "입고 접수", timeLabel: "1주 전" }],
  },
  {
    id: "wo-224", vehicle: "2019 모하비", plate: "89자 9012", customer: "박지훈",
    issue: "배터리 방전 · 시동 불가", status: "완료", mechanic: "박정우", eta: "완료됨",
    parts: [{ name: "배터리(AGM)", qty: 1, price: 185000 }],
    history: [
      { label: "입고 · 배터리 진단", timeLabel: "9일 전" },
      { label: "배터리 교체 · 출고", timeLabel: "9일 전" },
    ],
  },
];

export interface Mechanic {
  id: string;
  name: string;
  specialty: string;
  activeOrders: number;
  status: "가능" | "작업중" | "휴무";
}

export const MECHANICS: Mechanic[] = [
  { id: "m1", name: "박정우", specialty: "제동·현가", activeOrders: 1, status: "작업중" },
  { id: "m2", name: "최은성", specialty: "엔진·정기점검", activeOrders: 0, status: "가능" },
  { id: "m3", name: "한지민", specialty: "전장·진단", activeOrders: 1, status: "작업중" },
  { id: "m4", name: "오세훈", specialty: "타이어·얼라인먼트", activeOrders: 0, status: "가능" },
  { id: "m5", name: "장서윤", specialty: "차체·도장", activeOrders: 0, status: "휴무" },
  { id: "m6", name: "임도현", specialty: "냉난방·전기", activeOrders: 0, status: "가능" },
  { id: "m7", name: "신우진", specialty: "엔진·정기점검", activeOrders: 0, status: "휴무" },
];
