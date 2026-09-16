import type { ComponentType } from "react";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { BooksScreen } from "./screens/BooksScreen";
import { OverdueScreen } from "./screens/OverdueScreen";

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
    key: "books",
    label: "도서",
    lede: "소장 도서와 대출 상태.",
    Screen: BooksScreen,
  },
  {
    key: "detail",
    label: "도서 상세",
    lede: "대출 이력 전부.",
    Screen: BookDetailScreen,
  },
  {
    key: "overdue",
    label: "연체 현황",
    lede: "반납일이 지난 도서.",
    Screen: OverdueScreen,
  },
];
