import type { ComponentType } from "react";
import { InventoryScreen } from "./screens/InventoryScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { OrdersScreen } from "./screens/OrdersScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "inventory",
    label: "재고",
    lede: "전체 재고 목록. 항목을 누르면 상세로 들어가요.",
    Screen: InventoryScreen,
  },
  {
    key: "categories",
    label: "분류",
    lede: "분류별 재고 현황.",
    Screen: CategoriesScreen,
  },
  {
    key: "orders",
    label: "입고",
    lede: "최근 입고 내역.",
    Screen: OrdersScreen,
  },
];
