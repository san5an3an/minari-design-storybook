import type { ComponentType } from "react";
import { AuthenticationScreen } from "./screens/AuthenticationScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { PlaygroundScreen } from "./screens/PlaygroundScreen";
import { TasksScreen } from "./screens/TasksScreen";

export interface ScreenDefinition {
  key: string;
  // 선택기 표시 이름
  label: string;
  // 화면 설명을 선택기 아래에 그대로 표시
  lede: string;
  // 원본 출처와 자체 판단 영역을 구분 표시
  source: string;
  // 앱 셸 없이 전체 렌더링 여부, 로그인 화면이 해당
  fullBleed?: boolean;
  Screen: ComponentType<ScreenProps>;
}

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  brand?: string;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "dashboard",
    label: "대시보드",
    lede: "지표 넷과 그림 하나, 그리고 표. 자기 사이드바를 가진 유일한 화면임.",
    source: "examples/dashboard",
    Screen: DashboardScreen,
  },
  {
    key: "tasks",
    label: "할 일",
    lede: "필터 두 개가 실제로 걸러내는 지점. 조건이 겹칠 때 어떻게 되는지를 보여주는 화면",
    source: "examples/tasks",
    Screen: TasksScreen,
  },
  {
    key: "playground",
    label: "플레이그라운드",
    lede: "핸들이 값을 바꾸는 위치. 설정은 오른쪽, 만드는 곳은 왼쪽임.",
    source: "examples/playground",
    Screen: PlaygroundScreen,
  },
  {
    key: "authentication",
    label: "로그인",
    lede: "들어오기 전의 화면. 그래서 이 하나만 셸이 없음.",
    source: "examples/authentication",
    fullBleed: true,
    Screen: AuthenticationScreen,
  },
];
