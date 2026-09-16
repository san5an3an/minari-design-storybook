import type { ComponentType } from "react";
import { MembersScreen } from "./screens/MembersScreen";
import { TodayClassesScreen } from "./screens/TodayClassesScreen";
import { PaymentsScreen } from "./screens/PaymentsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "members",
    label: "회원",
    lede: "전체 회원 목록. 행을 누르면 상세로 들어가요.",
    Screen: MembersScreen,
  },
  {
    key: "classes",
    label: "오늘 수업",
    lede: "오늘 예정된 그룹 수업.",
    Screen: TodayClassesScreen,
  },
  {
    key: "payments",
    label: "결제 내역",
    lede: "최근 결제·환불 내역.",
    Screen: PaymentsScreen,
  },
];
