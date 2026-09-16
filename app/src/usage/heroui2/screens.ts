import type { ComponentType } from "react";
import { CartScreen } from "./screens/CartScreen";
import { OrdersScreen } from "./screens/OrdersScreen";
import { ProductsScreen } from "./screens/ProductsScreen";

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
    lede: "상품 카드. 누르면 상세와 담기 버튼으로 진입",
    Screen: ProductsScreen,
  },
  {
    key: "cart",
    label: "장바구니",
    lede: "담은 상품과 수량, 합계.",
    Screen: CartScreen,
  },
  {
    key: "orders",
    label: "주문내역",
    lede: "지난 주문과 배송 상태.",
    Screen: OrdersScreen,
  },
];
