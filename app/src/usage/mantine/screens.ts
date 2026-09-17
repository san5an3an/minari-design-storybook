import type { ComponentType } from "react";
import { BookingScreen } from "./screens/BookingScreen";
import { ExploreScreen } from "./screens/ExploreScreen";
import { HomeScreen } from "./screens/HomeScreen";

export interface ScreenProps {
  // 화면 전환. 주소는 변경되지 않음
  onNavigate?: (key: string) => void;
  // 지금 고른 목적지
  selectedId?: string;
  // 목적지 선택
  onSelect?: (id: string) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "home",
    label: "홈",
    lede: "지금 여정과 이번 달 지출, 인기 목적지를 한눈에 보는 화면.",
    Screen: HomeScreen,
  },
  {
    key: "explore",
    label: "여행 탐색",
    lede: "조건을 좁혀 가며 다음 여행지를 고르는 화면.",
    Screen: ExploreScreen,
  },
  {
    key: "booking",
    label: "예약 상세",
    lede: "여정을 확정하고 결제 정보를 채우는 화면.",
    Screen: BookingScreen,
  },
];
