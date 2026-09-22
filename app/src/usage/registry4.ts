import type { UsageDashboard } from "./registry";

import { Antd4Usage } from "./antd4/Dashboard";

// 베이스 키를 Usage 4 대시보드에 매핑. 대시보드 추가마다 한 줄씩 등록
export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  antd: Antd4Usage,
};

// Usage 4 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
