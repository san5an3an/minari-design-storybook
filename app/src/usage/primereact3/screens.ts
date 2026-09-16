import type { ComponentType } from "react";
import { PatientsScreen } from "./screens/PatientsScreen";
import { TodayScreen } from "./screens/TodayScreen";
import { WaitlistScreen } from "./screens/WaitlistScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "patients",
    label: "환자",
    lede: "등록 환자 목록. 행을 누르면 진료 기록으로 들어가요.",
    Screen: PatientsScreen,
  },
  {
    key: "today",
    label: "오늘 예약",
    lede: "오늘 예정된 진료.",
    Screen: TodayScreen,
  },
  {
    key: "waitlist",
    label: "대기 명단",
    lede: "차례를 기다리는 환자.",
    Screen: WaitlistScreen,
  },
];
