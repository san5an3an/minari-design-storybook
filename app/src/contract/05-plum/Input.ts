export interface InputContract {
  // 오류 상태
  invalid?: "true" | "false";
  // 입력 불가
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const InputParts = [
  "InputHelp", // 도움말, 오류 문구 위치
] as const;
