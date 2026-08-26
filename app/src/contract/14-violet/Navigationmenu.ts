export interface NavigationmenuContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const NavigationmenuParts = [
  "NavigationMenuList",
  "NavigationMenuLink", // 이동 위치. 실제 링크 요소 사용이 필수임
  "NavigationMenuContent", // 펼쳐지는 콘텐츠 영역
] as const;

export interface NavigationMenuLinkContract {
  // 현재 위치 여부. 기본값 false
  current?: boolean;
}
