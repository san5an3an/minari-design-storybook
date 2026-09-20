import type { ComponentType } from "react";
import { AccessibilityScreen } from "./screens/AccessibilityScreen";
import { PaletteScreen } from "./screens/PaletteScreen";
import { TokenDetailScreen } from "./screens/TokenDetailScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  // 헤더 검색창 현재 값. 목록 필터링에 사용
  query?: string;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "palette",
    label: "팔레트",
    lede: "전체 컬러 토큰을 분류별로 훑고 상세를 여는 화면.",
    Screen: PaletteScreen,
  },
  {
    key: "detail",
    label: "토큰 상세",
    lede: "색을 조정하고 대비를 검사하는 화면.",
    Screen: TokenDetailScreen,
  },
  {
    key: "accessibility",
    label: "접근성 감사",
    lede: "전체 토큰의 WCAG 대비 통과 여부를 훑는 화면.",
    Screen: AccessibilityScreen,
  },
];
