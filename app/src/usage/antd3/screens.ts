import type { ComponentType } from "react";
import { ProjectsScreen } from "./screens/ProjectsScreen";
import { ReportsScreen } from "./screens/ReportsScreen";
import { TimelineScreen } from "./screens/TimelineScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  icon: "project" | "clock" | "chart";
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "projects",
    label: "프로젝트",
    lede: "프로젝트 카드. 누르면 진행률과 마일스톤 상세로 이동",
    icon: "project",
    Screen: ProjectsScreen,
  },
  {
    key: "timeline",
    label: "타임라인",
    lede: "최근 활동 피드.",
    icon: "clock",
    Screen: TimelineScreen,
  },
  {
    key: "reports",
    label: "리포트",
    lede: "팀별 완료율과 전체 요약.",
    icon: "chart",
    Screen: ReportsScreen,
  },
];
