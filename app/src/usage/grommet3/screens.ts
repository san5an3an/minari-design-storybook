import type { ComponentType } from "react";
import { ListingsScreen } from "./screens/ListingsScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { InquiriesScreen } from "./screens/InquiriesScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "listings",
    label: "매물",
    lede: "등록된 매물 목록. 항목을 누르면 상세로 들어가요.",
    Screen: ListingsScreen,
  },
  {
    key: "favorites",
    label: "관심 매물",
    lede: "찜한 매물.",
    Screen: FavoritesScreen,
  },
  {
    key: "inquiries",
    label: "문의 내역",
    lede: "보낸 문의와 답변 상태.",
    Screen: InquiriesScreen,
  },
];
