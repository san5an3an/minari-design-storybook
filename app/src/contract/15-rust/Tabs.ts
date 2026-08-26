export type TabsVariant = "default" | "line";
export type TabsOrientation = "horizontal" | "vertical";

export interface TabsContract {
  // 활성 표시: 밑줄 또는 채운 배경, 기본값 line
  variant?: TabsVariant;
  // 탭이 놓이는 방향. 기본값 horizontal
  orientation?: TabsOrientation;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const TabsParts = [
  "TabsTrigger", // 탭 하나, aria-selected로 활성 상태, disabled로 잠금 상태 표시
  "TabsIcon", // 탭 앞 아이콘 표시. 텍스트만으로 의미 전달되면 제외
] as const;
