import type { ComponentType } from "react";
import { PostsScreen } from "./screens/PostsScreen";
import { TrendingScreen } from "./screens/TrendingScreen";
import { MyActivityScreen } from "./screens/MyActivityScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "posts",
    label: "게시글",
    lede: "최신 게시글 목록. 항목을 누르면 본문과 댓글로 들어가요.",
    Screen: PostsScreen,
  },
  {
    key: "trending",
    label: "인기글",
    lede: "이번 주 인기 게시글.",
    Screen: TrendingScreen,
  },
  {
    key: "activity",
    label: "내 활동",
    lede: "내가 쓴 글과 댓글.",
    Screen: MyActivityScreen,
  },
];
