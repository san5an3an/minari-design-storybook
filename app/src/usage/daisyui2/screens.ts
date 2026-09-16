import type { ComponentType } from "react";
import { ProductsScreen } from "./screens/ProductsScreen";
import { OrdersScreen } from "./screens/OrdersScreen";
import { ReviewsScreen } from "./screens/ReviewsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "products",
    label: "상품",
    lede: "등록된 상품 목록. 항목을 누르면 상세로 들어가요.",
    Screen: ProductsScreen,
  },
  {
    key: "orders",
    label: "주문",
    lede: "최근 주문 현황.",
    Screen: OrdersScreen,
  },
  {
    key: "reviews",
    label: "리뷰",
    lede: "최근 등록된 상품 리뷰.",
    Screen: ReviewsScreen,
  },
];
