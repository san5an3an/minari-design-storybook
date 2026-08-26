export interface InputotpContract {
  // 오류 상태
  invalid?: "true" | "false";
  // 입력 불가
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const InputotpParts = [
  "InputOTPGroup", // 자릿수 구분용 셀 그룹
  "InputOTPSlot", // 글자 한 슬롯. 입력이 아닌 표시 전용임
  "InputOTPSeparator", // 그룹 사이 구분 표시. 보조기술에서 읽히지 않음
] as const;

export interface InputOTPSlotContract {
  // 현재 입력 필드 표시
  active?: boolean;
}
