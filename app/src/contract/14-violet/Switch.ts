export type SwitchSize = "sm" | "md";

export interface SwitchContract {
  // 트랙과 핸들 크기, 기본값 md
  size?: SwitchSize;
  // 오류 상태 여부, 필수인데 비활성인 경우 등
  invalid?: "true" | "false";
  // 켜기 비활성화 여부
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SwitchParts = [
  "SwitchDescription", // 켜짐 시 결과 설명
  "SwitchCard", // 테두리 전체 클릭 카드 위치. 설명이 길 때 사용
] as const;
