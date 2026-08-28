import type { ComponentType } from "react";
import { ApiKeyScreen } from "./screens/ApiKeyScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { KanbanScreen } from "./screens/KanbanScreen";

export interface ScreenDefinition {
  key: string;
  // rail에 표시되는 이름
  label: string;
  // 화면 설명을 화면 머리에 그대로 표시
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "dashboard",
    label: "대시보드",
    lede: "커머스 운영 화면. 매출·주문·재고·배송을 한 화면에 표시.",
    Screen: DashboardScreen,
  },
  {
    key: "kanban",
    label: "칸반",
    lede: "상태를 값이 아니라 위치로 읽는 패널. 옮기면 실제로 이동.",
    Screen: KanbanScreen,
  },
  {
    key: "chat",
    label: "대화",
    lede: "두 셀이 각자 흐르는 유일한 화면. 높이를 못 박아야 하는 위치.",
    Screen: ChatScreen,
  },
  {
    key: "apikey",
    label: "API 키",
    lede: "비밀을 다루는 화면. 기본은 가려져 있고, 지우기는 한 번 더 확인.",
    Screen: ApiKeyScreen,
  },
];
