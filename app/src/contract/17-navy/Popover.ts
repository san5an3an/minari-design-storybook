export interface PopoverContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const PopoverParts = [
  "PopoverHeader", // 제목 영역
  "PopoverTitle", // 팝오버 주제
  "PopoverDescription", // 제목 아래 설명 문장
] as const;
