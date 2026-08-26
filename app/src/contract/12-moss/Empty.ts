export interface EmptyContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const EmptyParts = [
  "EmptyIcon", // 빈 상태 아이콘, 선택 요소
  "EmptyTitle", // 빈 상태 사유 제목
  "EmptyBody", // 빈 상태 안내 본문
  "EmptyActions", // 다음 동작 버튼 영역
] as const;
