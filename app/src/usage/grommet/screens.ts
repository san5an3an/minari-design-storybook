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
    label: "개요",
    lede: "지표·진행률·최근 프로젝트를 한 화면에 표시",
    Screen: OverviewScreen,
  },
  {
    key: "tasks",
    label: "할 일",
    lede: "체크로 끝내는 목록. 칸반이 아니라 표로 상태를 관리",
    Screen: TasksScreen,
  },
  {
    key: "team",
    label: "팀",
    lede: "팀원별 업무량을 카드로 나열",
    Screen: TeamScreen,
  },
];
