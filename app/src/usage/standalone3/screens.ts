import type { ComponentType } from "react";
import { BooksScreen } from "./screens/BooksScreen";
import { LoansScreen } from "./screens/LoansScreen";
import { ReservationsScreen } from "./screens/ReservationsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "books",
    label: "장서",
    lede: "전체 장서 목록. 항목을 누르면 상세로 들어가요.",
    Screen: BooksScreen,
  },
  {
    key: "loans",
    label: "대출 현황",
    lede: "현재 대출 중인 도서.",
    Screen: LoansScreen,
  },
  {
    key: "reservations",
    label: "예약",
    lede: "대출 예약 대기 목록.",
    Screen: ReservationsScreen,
  },
];
