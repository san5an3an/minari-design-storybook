import type { ComponentType } from "react";
import { DealDetailScreen } from "./screens/DealDetailScreen";
import { OverviewScreen } from "./screens/OverviewScreen";
import { PipelineScreen } from "./screens/PipelineScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "홈",
    lede: "이번 달 파이프라인과 주요 딜을 한눈에 확인",
    Screen: OverviewScreen,
  },
  {
    key: "pipeline",
    label: "파이프라인",
    lede: "전체 Opportunity를 단계·담당자별로 확인",
    Screen: PipelineScreen,
  },
  {
    key: "detail",
    label: "딜 상세",
    lede: "한 Opportunity의 단계와 활동 이력.",
    Screen: DealDetailScreen,
  },
];
