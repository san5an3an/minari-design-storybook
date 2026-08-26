export interface DividerContract {
  // 구역이 바뀔 만큼 큰 경계. 기본값 false
  strong?: boolean;
  // 왼쪽 들여쓰기 여부, 기본값 false
  inset?: boolean;
  // 행 내에서 구분 표시. 기본값 false
  vertical?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const DividerParts = [
  "DividerLabeled", // 라벨이 붙은 구분선. hr은 자식을 가질 수 없음
] as const;
