import type { ComponentType } from "react";
import type { PackageItem } from "./data";
import { DownloadsScreen } from "./screens/DownloadsScreen";
import { PackageDetailScreen } from "./screens/PackageDetailScreen";
import { PackagesScreen } from "./screens/PackagesScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  // 목록, 상세가 Dashboard 패키지 배열을 공유하기
  packages?: PackageItem[];
  onAddPackage?: (pkg: PackageItem) => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "packages",
    label: "패키지",
    lede: "이 스코프에 발행된 패키지 목록.",
    Screen: PackagesScreen,
  },
  {
    key: "detail",
    label: "패키지 상세",
    lede: "버전 이력과 의존성.",
    Screen: PackageDetailScreen,
  },
  {
    key: "downloads",
    label: "다운로드",
    lede: "주간 다운로드 추이.",
    Screen: DownloadsScreen,
  },
];
