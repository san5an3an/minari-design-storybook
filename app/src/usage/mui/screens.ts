import type { ComponentType } from "react";
import { ListingScreen } from "./screens/ListingScreen";
import { SavedScreen } from "./screens/SavedScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { SearchScreen } from "./screens/SearchScreen";

export interface ScreenProps {
  // 화면 전환. 주소는 변경되지 않음
  onNavigate?: (key: string) => void;
  // 지금 고른 매물
  selectedId?: string;
  // 매물 선택
  onSelect?: (id: string) => void;
  // 방문 예약된 매물 목록
  bookedIds?: readonly string[];
  // 방문 예약
  onBook?: (id: string) => void;
}

export interface ScreenDefinition {
  key: string;
  // 하단 안내 목록에 표시되는 이름
  label: string;
  // 화면 용도 한 행 설명
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "search",
    label: "탐색",
    lede: "조건을 좁혀 가며 고르는 화면. 지도와 목록이 같은 것을 표시.",
    Screen: SearchScreen,
  },
  {
    key: "listing",
    label: "매물",
    lede: "하나를 자세히 보는 화면. 숫자보다 사진과 조건을 먼저 표시.",
    Screen: ListingScreen,
  },
  {
    key: "schedule",
    label: "방문 예약",
    lede: "날짜와 시간을 고르는 화면. 고를 수 없는 날은 고를 수 없게 표시.",
    Screen: ScheduleScreen,
  },
  {
    key: "saved",
    label: "찜",
    lede: "모아 둔 것을 나란히 견주는 화면. 카드가 아니라 표여야 비교 가능.",
    Screen: SavedScreen,
  },
];
