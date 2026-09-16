import type { ComponentType } from "react";
import { KnowledgeBaseScreen } from "./screens/KnowledgeBaseScreen";
import { TicketDetailScreen } from "./screens/TicketDetailScreen";
import { TicketsScreen } from "./screens/TicketsScreen";

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
    key: "tickets",
    label: "티켓",
    lede: "열려 있거나 진행 중인 지원 요청.",
    Screen: TicketsScreen,
  },
  {
    key: "detail",
    label: "티켓 상세",
    lede: "요청자와의 대화 스레드.",
    Screen: TicketDetailScreen,
  },
  {
    key: "kb",
    label: "지식베이스",
    lede: "자주 반복되는 문제의 해결 절차.",
    Screen: KnowledgeBaseScreen,
  },
];
