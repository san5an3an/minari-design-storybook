import type { ComponentType } from "react";
import { CollectionsMobile } from "./mobile/CollectionsMobile";
import { CollectionsScreen } from "./screens/CollectionsScreen";
import { ListMobile } from "./mobile/ListMobile";
import { ListScreen } from "./screens/ListScreen";
import { ReaderMobile } from "./mobile/ReaderMobile";
import { ReaderScreen } from "./screens/ReaderScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
  // 뷰포트 768 미만에서 쓸 모바일 화면 지정. 없으면 Screen 을 그대로 사용함
  MobileScreen?: ComponentType<ScreenProps>;
}

// 목록에서 클릭한 항목 id
export interface ScreenProps {
  itemId?: string;
  onOpen?: (screenKey: string, itemId: string) => void;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "list",
    label: "저장한 글",
    lede: "나중에 읽으려고 담아 둔 글. 카드를 누르면 바로 읽기로 이동.",
    Screen: ListScreen,
    MobileScreen: ListMobile,
  },
  {
    key: "reader",
    label: "읽기",
    lede: "고른 글 하나. 목록에서 넘어온 화면이라 뒤로 가기가 늘 있음.",
    Screen: ReaderScreen,
    MobileScreen: ReaderMobile,
  },
  {
    key: "collections",
    label: "컬렉션",
    lede: "글을 모아 둔 그룹들. 그룹마다 몇 개가 들었는지 바로 보임.",
    Screen: CollectionsScreen,
    MobileScreen: CollectionsMobile,
  },
];
