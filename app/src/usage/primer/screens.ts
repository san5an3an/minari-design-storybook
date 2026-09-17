import type { ComponentType } from "react";
import type { IssueItem } from "./data";
import { ActivityScreen } from "./screens/ActivityScreen";
import { IssueDetailScreen } from "./screens/IssueDetailScreen";
import { IssuesScreen } from "./screens/IssuesScreen";
import { PullRequestsScreen } from "./screens/PullRequestsScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  // 목록, 상세가 Dashboard 이슈 배열을 공유하기
  issues?: IssueItem[];
  onAddIssue?: (issue: IssueItem) => void;
}

export interface ScreenDefinition {
  key: string;
  // 탭에 보이는 이름
  label: string;
  // 화면 용도 한 행 설명
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "issues",
    label: "이슈",
    lede: "열리고 닫힌 이슈를 표시와 함께 늘어놓은 목록.",
    Screen: IssuesScreen,
  },
  {
    key: "detail",
    label: "이슈 상세",
    lede: "이슈 본문과 댓글.",
    Screen: IssueDetailScreen,
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
