export interface RadioContract {
  // 오류 상태
  invalid?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const RadioParts = [
  "RadioDescription", // 선택 시 결과 설명 문장
  "RadioGroup", // 라디오 그룹. 같은 name 속성을 공유하는 범위임
] as const;
