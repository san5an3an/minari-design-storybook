export interface KbdContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const KbdParts = [
  "KbdGroup", // 조합키 그룹. 키마다 <kbd> 하나씩 배치
] as const;
