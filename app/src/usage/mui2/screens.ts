import type { ComponentType } from "react";
import { CourseDetailScreen } from "./screens/CourseDetailScreen";
import { CoursesScreen } from "./screens/CoursesScreen";
import { MyLearningScreen } from "./screens/MyLearningScreen";

// 화면 전환 후에도 유지되는 선택 강좌 값
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
    key: "courses",
    label: "강좌",
    lede: "카테고리별 강좌를 둘러보는 화면.",
    Screen: CoursesScreen,
  },
  {
    key: "detail",
    label: "강좌 상세",
    lede: "커리큘럼과 진도를 보는 화면.",
    Screen: CourseDetailScreen,
  },
  {
    key: "learning",
    label: "내 학습",
    lede: "수강 중인 강좌의 진도와 결제 내역.",
    Screen: MyLearningScreen,
  },
];
