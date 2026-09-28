import type { ComponentType } from "react";
import { LogsScreen } from "./screens/LogsScreen";
import { OverviewScreen } from "./screens/OverviewScreen";
import { RulesScreen } from "./screens/RulesScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "개요",
    lede: "지난 1시간 지표와 심각한 알림 둘을 한눈에.",
    Screen: OverviewScreen,
  },
  {
    key: "logs",
    label: "로그",
    lede: "최근 요청 로그. 레벨별로 색상 구분.",
    Screen: LogsScreen,
  },
  {
    key: "rules",
    label: "알림 규칙",
    lede: "규칙 켜기, 끄기. 꺼진 규칙은 알림을 만들지 않음.",
    Screen: RulesScreen,
  },
];
