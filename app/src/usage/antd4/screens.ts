import type { ComponentType } from "react";
import { BoardScreen } from "./screens/BoardScreen";
import { OverviewScreen } from "./screens/OverviewScreen";
import { StoresScreen } from "./screens/StoresScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "개요",
    lede: "브랜드별 매출 점유와 주문 채널 도입률을 두 축으로 나눠 봅니다.",
    Screen: OverviewScreen,
  },
  {
    key: "stores",
    label: "매장",
    lede: "매장 목록과 상세. 행을 누르면 그 매장의 실적·채널·메모로 들어갑니다.",
    Screen: StoresScreen,
  },
  {
    key: "board",
    label: "게시판",
    lede: "공지·리포트·질문. 글을 누르면 본문과 첨부 사진이 열립니다.",
    Screen: BoardScreen,
  },
];
