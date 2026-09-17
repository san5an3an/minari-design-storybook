import type { ComponentType } from "react";
import { DesignsScreen } from "./screens/DesignsScreen";
import { OrderDetailScreen } from "./screens/OrderDetailScreen";
import { OrdersScreen } from "./screens/OrdersScreen";

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
    label: "주문",
    lede: "들어온 인쇄 주문을 상태별로 확인.",
    Screen: OrdersScreen,
  },
  {
    key: "detail",
    label: "주문 상세",
    lede: "도안·수량·배송정보 전부.",
    Screen: OrderDetailScreen,
  },
  {
    key: "designs",
    label: "도안",
    lede: "판매 중인 도안과 사용 횟수.",
    Screen: DesignsScreen,
  },
];
