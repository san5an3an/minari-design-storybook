import type { ComponentType } from "react";
import { BillingScreen } from "./screens/BillingScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { TeamScreen } from "./screens/TeamScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "profile",
    label: "프로필",
    lede: "표시 이름과 알림 설정.",
    Screen: ProfileScreen,
  },
  {
    key: "billing",
    label: "결제",
    lede: "요금제·사용량·청구 내역.",
    Screen: BillingScreen,
  },
  {
    key: "team",
    label: "팀원",
    lede: "팀원 목록과 권한.",
    Screen: TeamScreen,
  },
];
