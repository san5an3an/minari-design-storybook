import type { ComponentType } from "react";
import { ActivityScreen } from "./screens/ActivityScreen";
import { IssuesScreen } from "./screens/IssuesScreen";
import { PullRequestsScreen } from "./screens/PullRequestsScreen";

export interface ScreenDefinition {
  key: string;
  // 탭에 보이는 이름
  label: string;
  // 화면 용도 한 행 설명
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "issues",
    label: "이슈",
    lede: "열리고 닫힌 이슈를 표시와 함께 늘어놓은 목록.",
    Screen: IssuesScreen,
  },
  {
    key: "pulls",
    label: "Pull requests",
    lede: "검토 중이거나 병합된 변경 요청.",
    Screen: PullRequestsScreen,
  },
  {
    key: "activity",
    label: "활동",
    lede: "누가 무엇을 언제 했는지 시간순으로 나열하는 화면.",
    Screen: ActivityScreen,
  },
];
