export interface MeterContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const MeterParts = [
  "MeterHead", // 이름, 값 놓이는 행
  "MeterLabel", // 지표 이름
  "MeterValue", // 지표 값
  "MeterTrack", // 구간 놓이는 바탕
  "MeterBand",
  "MeterMarker", // 현재 값 위치
] as const;

export type MeterBandLevel = "low" | "mid" | "high";
export interface MeterBandContract {
  // 저, 중, 고 구간
  level?: MeterBandLevel;
}
