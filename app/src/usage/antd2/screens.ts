import type { ComponentType } from "react";
import { HiringScreen } from "./screens/HiringScreen";
import { LeaveScreen } from "./screens/LeaveScreen";
import { PeopleScreen } from "./screens/PeopleScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "people",
    label: "구성원",
    lede: "구성원 목록. 행을 누르면 그 사람의 상세와 온보딩 진행으로 이동",
    Screen: PeopleScreen,
  },
  {
    key: "leave",
    label: "휴가",
    lede: "이번 달 휴가 밀도와 승인 대기 중인 요청.",
    Screen: LeaveScreen,
  },
  {
    key: "hiring",
    label: "채용",
    lede: "채용 파이프라인 단계별 인원과 후보자 목록.",
    Screen: HiringScreen,
  },
];
