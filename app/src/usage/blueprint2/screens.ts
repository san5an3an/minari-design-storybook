import type { ComponentType } from "react";
import { BudgetScreen } from "./screens/BudgetScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { TransactionsScreen } from "./screens/TransactionsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "transactions",
    label: "거래내역",
    lede: "거래 목록. 행을 누르면 상세와 메모로 이동.",
    Screen: TransactionsScreen,
  },
  {
    key: "categories",
    label: "카테고리",
    lede: "이번 달 지출이 어디로 갔는지.",
    Screen: CategoriesScreen,
  },
  {
    key: "budget",
    label: "예산",
    lede: "카테고리별 한도 대비 사용액.",
    Screen: BudgetScreen,
  },
];
