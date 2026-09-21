import type { ComponentType } from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { ProjectDetailScreen } from "./screens/ProjectDetailScreen";
import { TeamScreen } from "./screens/TeamScreen";

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
    key: "home",
    label: "홈",
    lede: "진행 중인 프로젝트를 카드로 훑는 화면.",
    Screen: HomeScreen,
  },
  {
    key: "project",
    label: "프로젝트 상세",
    lede: "작업 목록을 체크하고 진행을 관리하는 화면.",
    Screen: ProjectDetailScreen,
  },
  {
    key: "team",
    label: "팀",
    lede: "팀원별 부하와 가용 상태를 보는 화면.",
    Screen: TeamScreen,
  },
];
