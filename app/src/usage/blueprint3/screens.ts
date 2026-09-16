import type { ComponentType } from "react";
import { IssuesScreen } from "./screens/IssuesScreen";
import { LabelsScreen } from "./screens/LabelsScreen";
import { MineScreen } from "./screens/MineScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "issues",
    label: "이슈",
    lede: "전체 이슈. 누르면 상세로 이동.",
    Screen: IssuesScreen,
  },
  {
    key: "mine",
    label: "내 담당",
    lede: "나에게 배정된 이슈만.",
    Screen: MineScreen,
  },
  {
    key: "labels",
    label: "라벨",
    lede: "라벨별 이슈 수.",
    Screen: LabelsScreen,
  },
];
