export interface CalendarContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const CalendarParts = [
  "CalendarHead", // 월 이름과 이전/다음 버튼
  "CalendarGrid", // 날짜 격자
  "CalendarWeekday", // 요일 이름
  "CalendarDay", // 날짜 셀
] as const;

export interface CalendarDayContract {
  // 선택 여부, 기본값 false
  selected?: boolean;
  // 오늘 여부, 기본값 false
  today?: boolean;
  // 앞뒤 달 날짜, 흐리게 표시하고 유지
  outside?: boolean;
}
