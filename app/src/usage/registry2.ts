import type { UsageDashboard } from "./registry";

// 미생성 파일은 import 보류, 생성 후 줄 추가
import { Antd2Usage } from "./antd2/Dashboard";
import { BlueprintUsage2 } from "./blueprint2/Dashboard";
import { BootstrapUsage2 } from "./bootstrap2/Dashboard";
import { CarbonUsage2 } from "./carbon2/Dashboard";
import { CloudscapeUsage2 } from "./cloudscape2/Dashboard";
import { DaisyuiUsage2 } from "./daisyui2/Dashboard";
import { FluentUsage2 } from "./fluent2/Dashboard";
import { FlowbiteUsage2 } from "./flowbite2/Dashboard";
import { GrommetUsage2 } from "./grommet2/Dashboard";
import { HeroUiUsage2 } from "./heroui2/Dashboard";
import { MuiUsage2 } from "./mui2/Dashboard";
import { PrimerUsage2 } from "./primer2/Dashboard";
import { PrimereactUsage2 } from "./primereact2/Dashboard";
import { ShadcnUsage2 } from "./shadcn2/Dashboard";

// 베이스 키를 Usage 2 대시보드에 매핑. 대시보드 추가마다 한 줄씩 등록
export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  antd: Antd2Usage,
  blueprint: BlueprintUsage2,
  bootstrap: BootstrapUsage2,
  carbon: CarbonUsage2,
  cloudscape: CloudscapeUsage2,
  daisyui: DaisyuiUsage2,
  fluent: FluentUsage2,
  flowbite: FlowbiteUsage2,
  grommet: GrommetUsage2,
  heroui: HeroUiUsage2,
  mui: MuiUsage2,
  primer: PrimerUsage2,
  primereact: PrimereactUsage2,
  shadcn: ShadcnUsage2,
};

// Usage 2 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
