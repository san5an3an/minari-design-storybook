export interface DatepickerContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const DatepickerParts = [
  "DatePickerTrigger", // 선택된 날짜를 표시하는 트리거
] as const;

export interface DatePickerTriggerContract {
  // 미선택 상태, 기본값 false
  empty?: boolean;
}
