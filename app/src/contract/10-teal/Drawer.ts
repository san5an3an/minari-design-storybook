export interface DrawerContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const DrawerParts = [
  "DrawerSwipeHandle", // 드래그 가능 여부를 표시하는 핸들
  "DrawerTitle", // 드로어 제목
  "DrawerDescription", // 제목 아래 설명 행
  "DrawerFooter", // 드로어 하단 동작 영역
] as const;
