import type { ComponentType } from "react";
import type { Survey } from "./data";
import { ResponseAnalyticsScreen } from "./screens/ResponseAnalyticsScreen";
import { SurveyEditorScreen } from "./screens/SurveyEditorScreen";
import { SurveyListScreen } from "./screens/SurveyListScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  surveys: Survey[];
  onCreateSurvey:  => void;
  onUpdateSurvey: (survey: Survey) => void;
  onOpenShare: (id: string) => void;
  onRequestDelete: (id: string) => void;
  onRequestClose: (id: string) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "list",
    label: "설문 목록",
    lede: "만든 설문을 한눈에 훑어보고 관리하는 화면.",
    Screen: SurveyListScreen,
  },
  {
    key: "editor",
    label: "설문 편집기",
    lede: "문항을 추가·정렬하고 실시간으로 미리 보는 화면.",
    Screen: SurveyEditorScreen,
  },
  {
    key: "analytics",
    label: "응답 분석",
    lede: "문항별 분포와 개별 응답을 함께 살펴보는 화면.",
    Screen: ResponseAnalyticsScreen,
  },
];
