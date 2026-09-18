import type { ComponentType } from "react";
import type { Transaction } from "./data";
import { BudgetScreen } from "./screens/BudgetScreen";
import { OverviewScreen } from "./screens/OverviewScreen";
import { TransactionDetailScreen } from "./screens/TransactionDetailScreen";
import { TransactionsListScreen } from "./screens/TransactionsListScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export interface ScreenProps {
  itemId?: string;
  onOpen?: (screenKey: string, itemId: string) => void;
  transactions: Transaction[];
  onAdd: (t: Transaction) => void;
  // 히어로 검색창 값, 대시보드와 거래 내역 필터링에 사용
  query?: string;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "대시보드",
    lede: "이번 달 수입·지출·예산과 실시간 지출 피드를 한 화면에서.",
    Screen: OverviewScreen,
  },
  {
    key: "list",
    label: "거래 내역",
    lede: "전체 거래를 표로. 카테고리로 거르고 행을 누르면 상세로 이동.",
    Screen: TransactionsListScreen,
  },
  {
    key: "budget",
    label: "예산",
    lede: "카테고리별 예산 대비 지출 현황.",
    Screen: BudgetScreen,
  },
  {
    key: "detail",
    label: "상세",
    lede: "고른 거래 하나. 대시보드에서 넘어온 화면이라 뒤로 가기가 늘 있음.",
    Screen: TransactionDetailScreen,
  },
];
