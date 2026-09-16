import type { ComponentType } from "react";
import { AgentsScreen } from "./screens/AgentsScreen";
import { ReportsScreen } from "./screens/ReportsScreen";
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
    lede: "접수된 문의를 표로 관리.",
    Screen: TicketsScreen,
  },
  {
    key: "agents",
    label: "상담원",
    lede: "상담원별 처리 현황을 카드로 확인.",
    Screen: AgentsScreen,
  },
  {
    key: "reports",
    label: "리포트",
    lede: "오늘 지표와 SLA 준수율.",
    Screen: ReportsScreen,
  },
];
