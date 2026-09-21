import type { ComponentType } from "react";
import { OrdersScreen } from "./screens/OrdersScreen";
import { RestaurantDetailScreen } from "./screens/RestaurantDetailScreen";
import { RestaurantsScreen } from "./screens/RestaurantsScreen";

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
    key: "restaurants",
    label: "가게",
    lede: "동네 맛집을 카테고리로 둘러보는 화면.",
    Screen: RestaurantsScreen,
  },
  {
    key: "detail",
    label: "가게 상세",
    lede: "메뉴와 최소 주문 금액을 보여주는 화면.",
    Screen: RestaurantDetailScreen,
  },
  {
    key: "orders",
    label: "주문 현황",
    lede: "지금 오고 있는 주문과 지난 주문.",
    Screen: OrdersScreen,
  },
];
