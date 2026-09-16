import type { ComponentType } from "react";
import { HistoryScreen } from "./screens/HistoryScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { TodayScreen } from "./screens/TodayScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "today",
    label: "오늘",
    lede: "오늘 할 일을 체크하면 위쪽 막대가 바로 반영",
    Screen: TodayScreen,
  },
  {
    key: "history",
    label: "기록",
    lede: "지난 7일, 무엇을 얼마나 이어 왔는지 한눈에.",
    Screen: HistoryScreen,
  },
  {
    key: "settings",
    label: "설정",
    lede: "알림받을 시간과 방식을 선택",
    Screen: SettingsScreen,
  },
];
