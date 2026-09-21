import type { ComponentType } from "react";
import { AttendeesScreen } from "./screens/AttendeesScreen";
import { EventDetailScreen } from "./screens/EventDetailScreen";
import { EventsScreen } from "./screens/EventsScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
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
    key: "events",
    label: "이벤트",
    lede: "진행 중인 행사를 카드로 훑어보는 화면.",
    Screen: EventsScreen,
  },
  {
    key: "attendees",
    label: "참가자 관리",
    lede: "선택한 행사의 참가자 명단과 체크인 현황.",
    Screen: AttendeesScreen,
  },
  {
    key: "detail",
    label: "이벤트 설정",
    lede: "행사 기본 정보·티켓·알림을 편집하는 화면.",
    Screen: EventDetailScreen,
  },
];
