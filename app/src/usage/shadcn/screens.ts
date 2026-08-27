import type { ComponentType } from "react";
import { Data } from "./screens/Data";
import { Content } from "./screens/Content";
import { Feedback } from "./screens/Feedback";
import { Form } from "./screens/Form";
import { Navigation } from "./screens/Navigation";
import { Overview } from "./screens/Overview";

export interface ScreenDefinition {
  key: string;
  // rail에 표시되는 이름
  label: string;
  // 화면 설명을 화면 머리에 그대로 표시
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "Overview",
    lede: "숫자와 표가 함께 렌더링되는 위치. 지표를 먼저 읽고 그 아래에서 근거를 확인.",
    Screen: Overview,
  },
  {
    key: "data",
    label: "Data",
    lede: "자료를 보는 위치. 열끼리 견주면 표, 줄이 하나의 대상이면 목록, 수를 모양으로 읽으면 그림.",
    Screen: Data,
  },
  {
    key: "form",
    label: "Form",
    lede: "값을 받는 위치. 라벨과 설명이 필드에 붙는 방식, 그리고 켜짐이 늘 오른쪽이라는 것.",
    Screen: Form,
  },
  {
    key: "feedback",
    label: "Feedback",
    lede: "말을 거는 위치. 같은 '떠 있는 것'이라도 무엇이 멈추는가로 나뉨, 흐름·화면·손가락.",
    Screen: Feedback,
  },
  {
    key: "navigation",
    label: "Navigation",
    lede: "길을 찾는 위치. 고르면 위치가 바뀌는 것과 일이 일어나는 것은 다른 컴포넌트.",
    Screen: Navigation,
  },
  {
    key: "content",
    label: "Content",
    lede: "읽고 접고 나누는 위치. 하나를 접으면 Collapsible, 여러 종류는 Accordion 사용.",
    Screen: Content,
  },
];
