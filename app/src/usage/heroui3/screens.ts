import type { ComponentType } from "react";
import type { Rsvp } from "./data";
import { HostsScreen } from "./screens/HostsScreen";
import { MeetupsScreen } from "./screens/MeetupsScreen";
import { RsvpsScreen } from "./screens/RsvpsScreen";

export interface ScreenProps {
  rsvps: readonly Rsvp[];
  onRsvp: (meetupId: string) => void;
  onCancelRsvp: (meetupId: string) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "meetups",
    label: "모임",
    lede: "모임 카드. 누르면 상세와 참가 신청으로 진입",
    Screen: MeetupsScreen,
  },
  {
    key: "rsvps",
    label: "내 예약",
    lede: "신청한 모임과 확정 여부.",
    Screen: RsvpsScreen,
  },
  {
    key: "hosts",
    label: "호스트",
    lede: "모임을 여는 사람들.",
    Screen: HostsScreen,
  },
];
