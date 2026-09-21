import type { ComponentType } from "react";
import { AlertsScreen } from "./screens/AlertsScreen";
import { DevicesScreen } from "./screens/DevicesScreen";
import { RolloutScreen } from "./screens/RolloutScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "devices",
    label: "디바이스",
    lede: "등록된 장비와 지금 상태.",
    Screen: DevicesScreen,
  },
  {
    key: "alerts",
    label: "경보",
    lede: "장비가 보낸 이상 신호.",
    Screen: AlertsScreen,
  },
  {
    key: "rollout",
    label: "펌웨어 배포",
    lede: "새 펌웨어가 퍼지는 단계.",
    Screen: RolloutScreen,
  },
];
