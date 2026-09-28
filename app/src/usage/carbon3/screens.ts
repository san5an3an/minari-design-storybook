import type { ComponentType } from "react";
import { ApprovalsScreen } from "./screens/ApprovalsScreen";
import { OrdersScreen } from "./screens/OrdersScreen";
import { SuppliersScreen } from "./screens/SuppliersScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "orders",
    label: "발주 목록",
    lede: "발주 건. 누르면 상세와 메모로 이동.",
    Screen: OrdersScreen,
  },
  {
    key: "suppliers",
    label: "공급업체",
    lede: "거래 중인 공급업체와 평점.",
    Screen: SuppliersScreen,
  },
  {
    key: "approvals",
    label: "승인 대기",
    lede: "한도 초과·신규 거래 등 승인이 필요한 발주.",
    Screen: ApprovalsScreen,
  },
];
