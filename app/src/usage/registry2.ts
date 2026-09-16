import type { UsageDashboard } from "./registry";

// 미생성 파일은 import 보류, 생성 후 줄 추가
import { Antd2Usage } from "./antd2/Dashboard";
import { BlueprintUsage2 } from "./blueprint2/Dashboard";
import { CloudscapeUsage2 } from "./cloudscape2/Dashboard";
import { DaisyuiUsage2 } from "./daisyui2/Dashboard";
import { GrommetUsage2 } from "./grommet2/Dashboard";
import { HeroUiUsage2 } from "./heroui2/Dashboard";
import { PrimereactUsage2 } from "./primereact2/Dashboard";

// 베이스 키를 Usage 2 대시보드에 매핑. 대시보드 추가마다 한 줄씩 등록
export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  antd: Antd2Usage,
  blueprint: BlueprintUsage2,
  cloudscape: CloudscapeUsage2,
  daisyui: DaisyuiUsage2,
  grommet: GrommetUsage2,
  heroui: HeroUiUsage2,
  primereact: PrimereactUsage2,
};

// Usage 2 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
