export interface NativeselectContract {
  // 비활성화 여부
  disabled?: boolean;
  // 값 오류 상태
  invalid?: "true" | "false";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const NativeselectParts = [
  "NativeSelectOption",
  "NativeSelectOptGroup", // 이름 붙은 항목 그룹
] as const;
