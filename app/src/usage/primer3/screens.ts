import type { ComponentType } from "react";
import type { WorkflowRun } from "./data";
import { RunDetailScreen } from "./screens/RunDetailScreen";
import { SecretsScreen } from "./screens/SecretsScreen";
import { WorkflowsScreen } from "./screens/WorkflowsScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  // 목록, 상세가 Dashboard 워크플로 실행 배열을 공유하기
  workflows?: WorkflowRun[];
  onAddWorkflow?: (run: WorkflowRun) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "workflows",
    label: "워크플로 실행",
    lede: "최근 실행 이력과 상태.",
    Screen: WorkflowsScreen,
  },
  {
    key: "detail",
    label: "실행 상세",
    lede: "이 실행이 남긴 로그.",
    Screen: RunDetailScreen,
  },
  {
    key: "secrets",
    label: "시크릿",
    lede: "워크플로가 쓰는 비밀 값 목록(값은 안 보인다).",
    Screen: SecretsScreen,
  },
];
