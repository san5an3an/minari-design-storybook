import type { ComponentType } from "react";
import { AssetDetailScreen } from "./screens/AssetDetailScreen";
import { AssetsScreen } from "./screens/AssetsScreen";
import { RequestsScreen } from "./screens/RequestsScreen";

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
    key: "assets",
    label: "자산",
    lede: "회사가 보유한 장비와 현재 상태.",
    Screen: AssetsScreen,
  },
  {
    key: "detail",
    label: "자산 상세",
    lede: "누가 언제부터 이 장비를 썼는지의 이력.",
    Screen: AssetDetailScreen,
  },
  {
    key: "requests",
    label: "요청 현황",
    lede: "장비 신청과 그 처리 상태.",
    Screen: RequestsScreen,
  },
];
