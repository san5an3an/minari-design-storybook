import type { ComponentType } from "react";
import { MovementsScreen } from "./screens/MovementsScreen";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { StockScreen } from "./screens/StockScreen";

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
    key: "stock",
    label: "재고 현황",
    lede: "카테고리·창고별 재고 수준을 표로 훑어보는 화면.",
    Screen: StockScreen,
  },
  {
    key: "movements",
    label: "입출고 내역",
    lede: "제품이 언제 얼마나 들어오고 나갔는지 보는 화면.",
    Screen: MovementsScreen,
  },
  {
    key: "detail",
    label: "제품 상세",
    lede: "제품 하나의 재고 수준과 공급업체 정보를 보는 화면.",
    Screen: ProductDetailScreen,
  },
];
