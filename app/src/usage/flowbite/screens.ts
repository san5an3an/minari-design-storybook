import type { ComponentType } from "react";
import { ActivityScreen } from "./screens/ActivityScreen";
import { CustomersScreen } from "./screens/CustomersScreen";
import { ReviewsScreen } from "./screens/ReviewsScreen";

export interface ScreenDefinition {
  key: string;
  // 탭에 보이는 이름
  label: string;
  // 화면 용도 한 행 설명
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "customers",
    label: "고객",
    lede: "요금제와 매출을 한눈에 보는 고객 표.",
    Screen: CustomersScreen,
  },
  {
    key: "reviews",
    label: "리뷰",
    lede: "고객이 남긴 별점과 후기.",
    Screen: ReviewsScreen,
  },
  {
    key: "activity",
    label: "영업 활동",
    lede: "딜이 어느 단계에서 어느 단계로 옮겨갔는지 시간 순으로.",
    Screen: ActivityScreen,
  },
];
