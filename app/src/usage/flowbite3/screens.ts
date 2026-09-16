import type { ComponentType } from "react";
import { InvoiceDetailScreen } from "./screens/InvoiceDetailScreen";
import { InvoicesScreen } from "./screens/InvoicesScreen";
import { PlansScreen } from "./screens/PlansScreen";

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
    key: "invoices",
    label: "인보이스",
    lede: "발행된 청구서와 결제 상태.",
    Screen: InvoicesScreen,
  },
  {
    key: "detail",
    label: "인보이스 상세",
    lede: "청구 항목별 내역.",
    Screen: InvoiceDetailScreen,
  },
  {
    key: "plans",
    label: "요금제",
    lede: "지금 쓰는 요금제와 바꿀 수 있는 다른 요금제.",
    Screen: PlansScreen,
  },
];
