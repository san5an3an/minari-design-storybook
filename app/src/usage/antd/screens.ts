import type { ComponentType } from "react";
import { ApiKeyScreen } from "./screens/ApiKeyScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { KanbanScreen } from "./screens/KanbanScreen";

// 헤더 검색 항목 선택 시 해당 화면으로 이동하며 값 전달
export interface ScreenProps {
  focusId?: string;
}

export interface ScreenDefinition {
  key: string;
  // rail에 표시되는 이름
  label: string;
  // 화면 설명을 화면 머리에 그대로 표시
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "dashboard",
    label: "대시보드",
    lede: "오늘의 매출·주문·재고·배송을 한 화면에서 살펴봐요.",
    Screen: DashboardScreen,
  },
  {
    key: "kanban",
    label: "칸반",
    lede: "카드를 옮겨 작업 상태를 바꿔요. 옮기면 바로 반영돼요.",
    Screen: KanbanScreen,
  },
  {
    key: "chat",
    label: "대화",
    lede: "운영팀과 주고받은 메시지를 이어서 볼 수 있어요.",
    Screen: ChatScreen,
  },
  {
    key: "apikey",
    label: "API 키",
    lede: "키는 가려서 보관해요. 지울 때는 한 번 더 확인해요.",
    Screen: ApiKeyScreen,
  },
];
