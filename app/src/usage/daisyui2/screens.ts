import type { ComponentType } from "react";
import { OrdersScreen } from "./screens/OrdersScreen";
import { ProductsScreen } from "./screens/ProductsScreen";
import { ReviewsScreen } from "./screens/ReviewsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "orders",
    label: "주문",
    lede: "실시간 배송 현황과 오늘 매출.",
    Screen: OrdersScreen,
  },
  {
    key: "products",
    label: "상품",
    lede: "등록된 상품 목록. 항목을 누르면 상세로 들어가요.",
    Screen: ProductsScreen,
  },
  {
    key: "reviews",
    label: "리뷰",
    lede: "최근 등록된 상품 리뷰.",
    Screen: ReviewsScreen,
  },
];
