import type { ComponentType } from "react";
import { ApprovalsScreen } from "./screens/ApprovalsScreen";
import { HistoryScreen } from "./screens/HistoryScreen";
import { RequestDetailScreen } from "./screens/RequestDetailScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "approvals",
    label: "대기함",
    lede: "내가 처리해야 할 승인 요청 전부.",
    Screen: ApprovalsScreen,
  },
  {
    key: "history",
    label: "히스토리",
    lede: "지난 승인/반려 추이와 결과.",
    Screen: HistoryScreen,
  },
  {
    key: "detail",
    label: "요청 상세",
    lede: "한 요청의 진행 단계와 코멘트.",
    Screen: RequestDetailScreen,
  },
];
