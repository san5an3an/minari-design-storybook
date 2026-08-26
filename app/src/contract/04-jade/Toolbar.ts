export interface ToolbarContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ToolbarParts = [
  "ToolbarLabel", // 그룹 라벨
  "ToolbarSep", // 그룹 경계
  "ToolbarSpacer", // 여백 확보로 주 동작 끝단 정렬
] as const;
