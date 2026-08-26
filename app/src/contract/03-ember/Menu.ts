export interface MenuContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const MenuParts = [
  "MenuItem",
  "MenuHint", // 단축키 등 보조 정보
  "MenuLabel", // 그룹 라벨
  "MenuSeparator", // 그룹 경계
] as const;

export interface MenuItemContract {
  // 되돌릴 수 없는 동작. 기본값 false
  danger?: boolean;
}
