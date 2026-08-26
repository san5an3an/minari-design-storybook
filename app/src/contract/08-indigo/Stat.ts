export interface StatContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const StatParts = [
  "StatLabel", // 수치 항목 라벨
  "StatValue", // 수치
  "StatDelta", // 변화량
] as const;

export type StatDeltaDirection = "up" | "down";
export interface StatDeltaContract {
  // 오름차순, 내림차순
  direction?: StatDeltaDirection;
}
