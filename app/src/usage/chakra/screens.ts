import type { ComponentType } from "react";
import { MembersScreen } from "./screens/MembersScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";
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
    lede: "오늘 수업과 예약자, 이번 주 추이를 한눈에.",
    Screen: TodayScreen,
  },
  {
    key: "members",
    label: "회원",
    lede: "등급별로 나눠 보고, 이름·이메일로 검색.",
    Screen: MembersScreen,
  },
  {
    key: "schedule",
    label: "수업 일정",
    lede: "정원이 얼마나 찼는지, 새 수업은 여기서 등록.",
    Screen: ScheduleScreen,
  },
];
