import type { ComponentType } from "react";
import { AccountDetailScreen } from "./screens/AccountDetailScreen";
import { AccountsScreen } from "./screens/AccountsScreen";
import { ContactsScreen } from "./screens/ContactsScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "accounts",
    label: "거래처",
    lede: "전체 거래처를 등급·헬스 스코어로 확인.",
    Screen: AccountsScreen,
  },
  {
    key: "detail",
    label: "360 뷰",
    lede: "한 거래처의 ARR 추이·연락처·활동.",
    Screen: AccountDetailScreen,
  },
  {
    key: "contacts",
    label: "연락처",
    lede: "거래처에 연결된 담당자 전부.",
    Screen: ContactsScreen,
  },
];
