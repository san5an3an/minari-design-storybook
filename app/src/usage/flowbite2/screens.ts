import type { ComponentType } from "react";
import type { User } from "./data";
import { LoginHistoryScreen } from "./screens/LoginHistoryScreen";
import { UserDetailScreen } from "./screens/UserDetailScreen";
import { UsersScreen } from "./screens/UsersScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  users?: User[];
  onInviteUser?: (u: User) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "users",
    label: "사용자",
    lede: "역할과 상태를 한눈에 보는 사용자 표.",
    Screen: UsersScreen,
  },
  {
    key: "detail",
    label: "사용자 상세",
    lede: "이 사용자에게 준 권한.",
    Screen: UserDetailScreen,
  },
  {
    key: "logins",
    label: "로그인 기록",
    lede: "최근 로그인 시도와 성공 여부.",
    Screen: LoginHistoryScreen,
  },
];
