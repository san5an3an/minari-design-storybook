export interface ChartContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ChartParts = [
  "ChartTooltipContent", // 값 호버 시 표시되는 툴팁
  "ChartLegendContent", // 계열 라벨
] as const;
