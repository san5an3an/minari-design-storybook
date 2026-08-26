export type SidebarState = "expanded" | "collapsed";

export interface SidebarContract {
  // 펼침 여부, 기본값 expanded
  state?: SidebarState;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SidebarParts = [
  "SidebarHeader", // 사이드바 상단, 제품 이름 위치
  "SidebarGroupLabel", // 그룹 라벨
  "SidebarMenuButton",
  "SidebarFooter", // 사이드바 하단, 계정 위치
] as const;

export interface SidebarMenuButtonContract {
  // 현재 위치 여부. 기본값 false
  active?: boolean;
}
