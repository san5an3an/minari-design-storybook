import type { ComponentType } from "react";
import { BackersScreen } from "./screens/BackersScreen";
import { CampaignDetailScreen } from "./screens/CampaignDetailScreen";
import { CampaignsScreen } from "./screens/CampaignsScreen";

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
    key: "campaigns",
    label: "캠페인",
    lede: "모금 진행률과 마감까지 남은 날을 카드로 확인.",
    Screen: CampaignsScreen,
  },
  {
    key: "detail",
    label: "캠페인 상세",
    lede: "리워드 단계와 최근 후원자.",
    Screen: CampaignDetailScreen,
  },
  {
    key: "backers",
    label: "후원자",
    lede: "누가 얼마를 후원했는지.",
    Screen: BackersScreen,
  },
];
