import type { ComponentType } from "react";
import { AlertsScreen } from "./screens/AlertsScreen";
import { DeviceDetailScreen } from "./screens/DeviceDetailScreen";
import { DevicesScreen } from "./screens/DevicesScreen";
import { RolloutScreen } from "./screens/RolloutScreen";

// 디바이스 타일을 누르면 디바이스 상세 화면으로 넘길 때 쓰는 화면 props 정의
export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "devices",
    label: "디바이스",
    lede: "등록된 장비와 지금 상태.",
    Screen: DevicesScreen,
  },
  {
    key: "detail",
    label: "디바이스 상세",
    lede: "장비 하나의 상태·배터리 추이·조작.",
    Screen: DeviceDetailScreen,
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
