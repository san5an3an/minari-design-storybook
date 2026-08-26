export interface DialogContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const DialogParts = [
  "DialogScrim", // 배경을 덮는 스크림
  "DialogTitle", // 다이얼로그 제목
  "DialogBody", // 다이얼로그 본문
  "DialogActions", // 버튼 그룹, 항상 하단에 고정
] as const;

export interface DialogActionsContract {
  // 버튼 3개 이상이면 세로 배치로 전환
  stacked?: boolean;
}
