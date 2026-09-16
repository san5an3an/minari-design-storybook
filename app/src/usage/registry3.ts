import type { UsageDashboard } from "./registry";

// 미생성 파일은 import 제외
import { CloudscapeUsage3 } from "./cloudscape3/Dashboard";
import { DaisyuiUsage3 } from "./daisyui3/Dashboard";
import { GrommetUsage3 } from "./grommet3/Dashboard";
import { PrimereactUsage3 } from "./primereact3/Dashboard";

// 베이스 키를 Usage 3 대시보드에 매핑. 대시보드 추가마다 한 줄씩 등록
export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  cloudscape: CloudscapeUsage3,
  daisyui: DaisyuiUsage3,
  grommet: GrommetUsage3,
  primereact: PrimereactUsage3,
};

// Usage 3 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
