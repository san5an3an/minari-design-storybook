import type { ComponentType } from "react";
import { MechanicsScreen } from "./screens/MechanicsScreen";
import { WorkOrderDetailScreen } from "./screens/WorkOrderDetailScreen";
import { WorkOrdersScreen } from "./screens/WorkOrdersScreen";

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
    key: "orders",
    label: "정비 요청",
    lede: "입고된 차량과 진행 상태.",
    Screen: WorkOrdersScreen,
  },
  {
    key: "detail",
    label: "정비 상세",
    lede: "부품·작업 이력 전부.",
    Screen: WorkOrderDetailScreen,
  },
  {
    key: "mechanics",
    label: "정비사 배정",
    lede: "누가 무엇을 맡고 있는지.",
    Screen: MechanicsScreen,
  },
];
