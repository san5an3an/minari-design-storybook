export interface ChipContract {
  // 선택 상태
  pressed?: "true" | "false";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ChipParts = [
  "ChipRemove", // 칩 지우기 버튼
] as const;
