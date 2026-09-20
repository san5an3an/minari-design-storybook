import type { ComponentType } from "react";
import { AssetsScreen } from "./screens/AssetsScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ReviewsScreen } from "./screens/ReviewsScreen";

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
    key: "home",
    label: "홈",
    lede: "이번 주 리뷰 현황과 마감 임박 자산을 한눈에 보는 화면.",
    Screen: HomeScreen,
  },
  {
    key: "assets",
    label: "자산",
    lede: "업로드된 크리에이티브 자산을 훑고 상세를 여는 화면.",
    Screen: AssetsScreen,
  },
  {
    key: "reviews",
    label: "리뷰 승인",
    lede: "검토 대기 중인 자산을 승인·반려하는 화면.",
    Screen: ReviewsScreen,
  },
];
