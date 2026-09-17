export interface Inspection {
  id: string;
  lot: string;
  product: string;
  result: "합격" | "불합격" | "재검사";
  inspector: string;
  dateLabel: string;
  note: string;
}

// 검사자 필터, 통계카드, 결과분포 차트 모두 이 배열에서 동적 계산
export const INSPECTIONS: Inspection[] = [
  { id: "q1", lot: "LOT-2409-14", product: "베어링 A형", result: "합격", inspector: "정민아", dateLabel: "9월 16일", note: "샘플 20개 전수 검사, 치수 공차 내." },
  { id: "q2", lot: "LOT-2409-13", product: "커넥터 C형", result: "불합격", inspector: "오태윤", dateLabel: "9월 15일", note: "접점 저항 3개 초과. 도금 두께 불균일 추정." },
  { id: "q3", lot: "LOT-2409-12", product: "베어링 A형", result: "합격", inspector: "정민아", dateLabel: "9월 15일", note: "이상 없음." },
  { id: "q4", lot: "LOT-2409-11", product: "기어 박스 D형", result: "재검사", inspector: "한소율", dateLabel: "9월 14일", note: "소음 측정값이 경계선. 24시간 뒤 재측정 예정." },
  { id: "q5", lot: "LOT-2409-10", product: "커넥터 C형", result: "합격", inspector: "오태윤", dateLabel: "9월 13일", note: "이상 없음." },
  { id: "q6", lot: "LOT-2409-09", product: "기어 박스 D형", result: "합격", inspector: "한소율", dateLabel: "9월 12일", note: "재검사 통과. 소음 기준 내." },
  { id: "q7", lot: "LOT-2409-08", product: "베어링 B형", result: "합격", inspector: "정민아", dateLabel: "9월 11일", note: "이상 없음." },
  { id: "q8", lot: "LOT-2409-07", product: "커넥터 C형", result: "불합격", inspector: "오태윤", dateLabel: "9월 10일", note: "표면 결함 5개 발견. 로트 전체 재도금 요청." },
  { id: "q9", lot: "LOT-2409-06", product: "베어링 A형", result: "합격", inspector: "한소율", dateLabel: "9월 9일", note: "이상 없음." },
];

export interface DefectType {
  name: string;
  count: number;
  lastSeen: string;
}

export const DEFECT_TYPES: DefectType[] = [
  { name: "치수 불량", count: 3, lastSeen: "9월 15일" },
  { name: "표면 결함", count: 5, lastSeen: "9월 14일" },
  { name: "접점 저항 초과", count: 3, lastSeen: "9월 15일" },
  { name: "소음 기준 초과", count: 2, lastSeen: "9월 14일" },
];

export interface PassRateWeek {
  weekLabel: string;
  passRate: number;
  inspected: number;
}

export const PASS_RATE: PassRateWeek[] = [
  { weekLabel: "8월 4주", passRate: 98.2, inspected: 412 },
  { weekLabel: "9월 1주", passRate: 96.5, inspected: 388 },
  { weekLabel: "9월 2주", passRate: 94.1, inspected: 401 },
  { weekLabel: "9월 3주", passRate: 95.8, inspected: 356 },
];
