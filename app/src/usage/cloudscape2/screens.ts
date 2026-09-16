import type { ComponentType } from "react";
import { BucketsScreen } from "./screens/BucketsScreen";
import { AccessLogsScreen } from "./screens/AccessLogsScreen";
import { PoliciesScreen } from "./screens/PoliciesScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "buckets",
    label: "버킷",
    lede: "이 계정의 S3 버킷 목록. 버킷을 누르면 객체 목록으로 들어가요.",
    Screen: BucketsScreen,
  },
  {
    key: "logs",
    label: "액세스 로그",
    lede: "최근 요청 로그.",
    Screen: AccessLogsScreen,
  },
  {
    key: "policies",
    label: "정책",
    lede: "버킷 정책 목록.",
    Screen: PoliciesScreen,
  },
];
