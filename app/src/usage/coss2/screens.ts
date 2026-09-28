import type { ComponentType } from "react";
import type { Booking, NewBookingDraft } from "./data";
import { BookingScreen } from "./screens/BookingScreen";
import { MyBookingsScreen } from "./screens/MyBookingsScreen";
import { RoomsScreen } from "./screens/RoomsScreen";
import { TodayScreen } from "./screens/TodayScreen";

// 예약 화면 종류, 신규 작성 또는 기존 상세
export type BookingSelection = { mode: "new"; roomId?: string } | { mode: "detail"; bookingId: string };

export interface ScreenProps {
  onNavigate: (key: string) => void;
  bookings: Booking[];
  selection: BookingSelection | null;
  onOpenDetail: (bookingId: string) => void;
  onStartNew: (roomId?: string) => void;
  onCreateBooking: (draft: NewBookingDraft) => void;
  onCancelBooking: (bookingId: string) => void;
  onUpdateBooking: (bookingId: string, patch: { title?: string; attendeeCount?: number; note?: string }) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "today",
    label: "오늘",
    lede: "오늘 회의실별 예약 현황을 시간대로 훑어보는 화면.",
    Screen: TodayScreen,
  },
  {
    key: "rooms",
    label: "회의실",
    lede: "수용 인원·보유 장비로 회의실을 찾아 바로 예약하는 화면.",
    Screen: RoomsScreen,
  },
  {
    key: "booking",
    label: "예약",
    lede: "새 예약을 만들거나 기존 예약의 상세를 보는 화면.",
    Screen: BookingScreen,
  },
  {
    key: "mine",
    label: "내 예약",
    lede: "내가 만든 예약을 상태별로 모아보는 화면.",
    Screen: MyBookingsScreen,
  },
];
