import type { ComponentType } from "react";
import { FilesScreen } from "./screens/FilesScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { TasksScreen } from "./screens/TasksScreen";

export interface ScreenDefinition {
  key: string;
  // 레일에 보이는 이름
  label: string;
  // 화면 용도 한 행 설명
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "tasks",
    label: "할 일",
    lede: "이번 주와 다음 주로 나눈 할 일 목록. 체크하면 완료 처리.",
    Screen: TasksScreen,
  },
  {
    key: "schedule",
    label: "일정",
    lede: "오늘의 회의를 시간순으로 나열한 목록.",
    Screen: ScheduleScreen,
  },
  {
    key: "files",
    label: "파일",
    lede: "최근에 수정한 문서를 모아 보여주는 목록. 문서 종류마다 다른 표시 사용.",
    Screen: FilesScreen,
  },
];
