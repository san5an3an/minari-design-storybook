import type { ComponentType } from "react";
import { OverviewScreen } from "./screens/OverviewScreen";
import { TasksScreen } from "./screens/TasksScreen";
import { TeamScreen } from "./screens/TeamScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "요약",
    lede: "진행 중인 프로젝트와 이번 주 마감.",
    Screen: OverviewScreen,
  },
  {
    key: "tasks",
    label: "작업",
    lede: "전체 작업 목록. 항목을 누르면 상세로 들어가요.",
    Screen: TasksScreen,
  },
  {
    key: "team",
    label: "팀원",
    lede: "팀원별 배정 현황.",
    Screen: TeamScreen,
  },
];
