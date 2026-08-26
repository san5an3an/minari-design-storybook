export interface ComboboxContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ComboboxParts = [
  "ComboboxInput", // 검색어 입력 필드
  "ComboboxList", // 검색 결과 목록
  "ComboboxItem",
  "ComboboxEmpty", // 검색 결과 없음 상태
  "ComboboxChip", // 선택된 항목을 칩으로 필드 내부에 표시
] as const;
