export interface CheckboxContract {
  // 자식 일부 선택 여부
  indeterminate?: "true" | "false";
  // 오류 상태
  invalid?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const CheckboxParts = [
  "CheckboxDescription", // 라벨 아래 보조 설명, 선택 시 결과 안내
  "CheckboxGroup", // 체크박스 여러 개를 담는 그룹
] as const;
