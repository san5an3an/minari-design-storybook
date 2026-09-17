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
    id: "wo-228", vehicle: "2023 카니발", plate: "90마 2345", customer: "정하은",
    issue: "배터리 방전 · 시동 불량", status: "대기", mechanic: "미배정", eta: "-",
    parts: [],
    history: [{ label: "입고 접수", timeLabel: "1시간 전" }],
  },
  {
    id: "wo-225", vehicle: "2018 K5", plate: "23바 6789", customer: "한지민",
    issue: "에어컨 냉매 부족 · 냉방 약함", status: "작업중", mechanic: "한지민", eta: "내일 11:00",
    parts: [{ name: "에어컨 냉매", qty: 1, price: 35000 }],
    history: [
      { label: "입고 · 냉매 압력 점검", timeLabel: "오늘 08:30" },
      { label: "냉매 충전 시작", timeLabel: "오늘 09:15" },
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
  { id: "m1", name: "박정우", specialty: "제동·현가", activeOrders: 2, status: "작업중" },
  { id: "m2", name: "최은성", specialty: "엔진·정기점검", activeOrders: 0, status: "가능" },
  { id: "m3", name: "한지민", specialty: "전장·진단", activeOrders: 1, status: "작업중" },
  { id: "m4", name: "오세훈", specialty: "타이어·얼라인먼트", activeOrders: 0, status: "휴무" },
];
