export interface LabelContract {
  // 반드시 채워야 하는 필드. 기본값 false
  required?: boolean;
  // 셀 잠금 시 이름 흐림 처리, 기본값 false
  disabled?: boolean;
  // 오류 상태
  invalid?: "true" | "false";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const LabelParts = [
  "LabelHint", // 선택 입력 여부 안내 문구
] as const;
