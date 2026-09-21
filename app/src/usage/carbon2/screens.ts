import type { ComponentType } from "react";
import { DefectsScreen } from "./screens/DefectsScreen";
import { InspectionsScreen } from "./screens/InspectionsScreen";
import { PassRateScreen } from "./screens/PassRateScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "inspections",
    label: "검사 항목",
    lede: "검사 기록. 누르면 상세와 비고로 이동.",
    Screen: InspectionsScreen,
  },
  {
    key: "defects",
    label: "불량 유형",
    lede: "유형별 발생 건수와 최근 발생 시각.",
    Screen: DefectsScreen,
  },
  {
    key: "passrate",
    label: "합격률",
    lede: "주차별 합격률 추이.",
    Screen: PassRateScreen,
  },
];
