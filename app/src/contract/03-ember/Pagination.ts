export interface PaginationContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const PaginationParts = [
  "PaginationItem", // 페이지 번호 하나. 현재 페이지에 aria-current="page" 추가
  "PaginationGap", // 건너뛴 구간 표시
] as const;
