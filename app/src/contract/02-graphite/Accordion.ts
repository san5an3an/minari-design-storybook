export interface AccordionContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const AccordionParts = [
  "AccordionItem", // 아코디언 항목 그룹
  "AccordionHead", // 제목 행 클릭 영역. 행 전체가 클릭 대상
  "AccordionMarker", // 펼침 상태 표시
  "AccordionBody", // 펼침 내용 영역
] as const;
