import type { ComponentType } from "react";
import { UsersScreen } from "./screens/UsersScreen";
import { RolesScreen } from "./screens/RolesScreen";
import { GroupsScreen } from "./screens/GroupsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "users",
    label: "사용자",
    lede: "IAM 사용자 목록. 사용자를 누르면 연결된 정책으로 들어가요.",
    Screen: UsersScreen,
  },
  {
    key: "roles",
    label: "역할",
    lede: "서비스가 위임받은 역할 목록.",
    Screen: RolesScreen,
  },
  {
    key: "groups",
    label: "그룹",
    lede: "사용자 그룹 목록.",
    Screen: GroupsScreen,
  },
];
