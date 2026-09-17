import type { UsageDashboard } from "./registry";

// 미생성 파일은 import 제외
import { Antd3Usage } from "./antd3/Dashboard";
import { BlueprintUsage3 } from "./blueprint3/Dashboard";
import { BootstrapUsage3 } from "./bootstrap3/Dashboard";
import { CarbonUsage3 } from "./carbon3/Dashboard";
import { CloudscapeUsage3 } from "./cloudscape3/Dashboard";
import { DaisyuiUsage3 } from "./daisyui3/Dashboard";
import { FluentUsage3 } from "./fluent3/Dashboard";
import { FlowbiteUsage3 } from "./flowbite3/Dashboard";
import { GrommetUsage3 } from "./grommet3/Dashboard";
import { HeroUiUsage3 } from "./heroui3/Dashboard";
import { MuiUsage3 } from "./mui3/Dashboard";
import { PrimerUsage3 } from "./primer3/Dashboard";
import { PrimereactUsage3 } from "./primereact3/Dashboard";
import { ShadcnUsage3 } from "./shadcn3/Dashboard";

// 베이스 키를 Usage 3 대시보드에 매핑. 대시보드 추가마다 한 줄씩 등록
export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  antd: Antd3Usage,
  blueprint: BlueprintUsage3,
  bootstrap: BootstrapUsage3,
  carbon: CarbonUsage3,
  cloudscape: CloudscapeUsage3,
  daisyui: DaisyuiUsage3,
  fluent: FluentUsage3,
  flowbite: FlowbiteUsage3,
  grommet: GrommetUsage3,
  heroui: HeroUiUsage3,
  mui: MuiUsage3,
  primer: PrimerUsage3,
  primereact: PrimereactUsage3,
  shadcn: ShadcnUsage3,
};

// Usage 3 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
