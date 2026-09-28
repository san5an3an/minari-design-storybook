import type { ComponentType } from "react";
import { AlarmsScreen } from "./screens/AlarmsScreen";
import { InstancesScreen } from "./screens/InstancesScreen";
import { OverviewScreen } from "./screens/OverviewScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "요약",
    lede: "계정 수준 지표와 예산 사용률.",
    Screen: OverviewScreen,
  },
  {
    key: "instances",
    label: "인스턴스",
    lede: "떠 있는 리소스를 표로 확인.",
    Screen: InstancesScreen,
  },
  {
    key: "alarms",
    label: "알람",
    lede: "지금 걸려 있는 경보를 카드로 확인.",
    Screen: AlarmsScreen,
  },
];
