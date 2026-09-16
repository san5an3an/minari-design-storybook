import type { ComponentType } from "react";
import { EventsScreen } from "./screens/EventsScreen";
import { TicketsScreen } from "./screens/TicketsScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "events",
    label: "이벤트",
    lede: "열려 있는 공연·행사 목록. 항목을 누르면 상세로 들어가요.",
    Screen: EventsScreen,
  },
  {
    key: "tickets",
    label: "내 티켓",
    lede: "구매한 티켓 목록.",
    Screen: TicketsScreen,
  },
  {
    key: "favorites",
    label: "즐겨찾기",
    lede: "관심 등록한 이벤트.",
    Screen: FavoritesScreen,
  },
];
