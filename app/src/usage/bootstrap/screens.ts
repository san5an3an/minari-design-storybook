import type { ComponentType } from "react";
import { CustomersScreen } from "./screens/CustomersScreen";
import { TicketDetailScreen } from "./screens/TicketDetailScreen";
import { TicketsScreen } from "./screens/TicketsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "tickets",
    label: "티켓",
    lede: "들어온 문의를 상태별로 확인.",
    Screen: TicketsScreen,
  },
  {
    key: "detail",
    label: "티켓 상세",
    lede: "한 티켓의 대화 전부.",
    Screen: TicketDetailScreen,
  },
  {
    key: "customers",
    label: "고객",
    lede: "문의를 남긴 사람들.",
    Screen: CustomersScreen,
  },
];
