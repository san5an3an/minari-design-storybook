export type MarkerVariant = "default" | "border" | "separator";

export interface MarkerContract {
  // 구분 기준: 없음, 행, 구간. 기본값 default
  variant?: MarkerVariant;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const MarkerParts = [
  "MarkerIcon", // 표시 아이콘. 보조기술에서 읽지 않음
  "MarkerContent", // 이벤트 요약 문장
] as const;
