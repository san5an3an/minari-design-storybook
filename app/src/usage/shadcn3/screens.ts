import type { ComponentType } from "react";
import { SummaryScreen } from "./screens/SummaryScreen";
import { TransactionDetailScreen } from "./screens/TransactionDetailScreen";
import { TransactionsScreen } from "./screens/TransactionsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export interface ScreenProps {
  itemId?: string;
  onOpen?: (screenKey: string, itemId: string) => void;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "transactions",
    label: "내역",
    lede: "이번 달 들어오고 나간 돈. 줄을 누르면 그 건의 상세로 이동.",
    Screen: TransactionsScreen,
  },
  {
    key: "detail",
    label: "상세",
    lede: "고른 거래 하나. 내역에서 넘어온 화면이라 뒤로 가기 항상 제공.",
    Screen: TransactionDetailScreen,
  },
  {
    key: "summary",
    label: "요약",
    lede: "이번 달 수입·지출·잔액을 카드 셋으로.",
    Screen: SummaryScreen,
  },
];
