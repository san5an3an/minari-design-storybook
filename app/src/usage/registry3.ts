import type { UsageDashboard } from "./registry";

// 미생성 파일은 import 제외
import { Antd3Usage } from "./antd3/Dashboard";
import { BlueprintUsage3 } from "./blueprint3/Dashboard";
import { BootstrapUsage3 } from "./bootstrap3/Dashboard";
import { CarbonUsage3 } from "./carbon3/Dashboard";
import { ChakraUsage3 } from "./chakra3/Dashboard";
import { CloudscapeUsage3 } from "./cloudscape3/Dashboard";
import { CossUsage3 } from "./coss3/Dashboard";
import { DaisyuiUsage3 } from "./daisyui3/Dashboard";
import { FluentUsage3 } from "./fluent3/Dashboard";
import { FlowbiteUsage3 } from "./flowbite3/Dashboard";
import { GrommetUsage3 } from "./grommet3/Dashboard";
import { HeroUiUsage3 } from "./heroui3/Dashboard";
import { Lightning3Usage } from "./lightning3/Dashboard";
import { MantineUsage3 } from "./mantine3/Dashboard";
import { MuiUsage3 } from "./mui3/Dashboard";
import { PrimerUsage3 } from "./primer3/Dashboard";
import { PrimereactUsage3 } from "./primereact3/Dashboard";
import { ShadcnUsage3 } from "./shadcn3/Dashboard";
import { StandaloneUsage3 } from "./standalone3/Dashboard";

// spectrum만 next/dynamic 지연 로딩. CSS 부수효과 때문임
import dynamic from "next/dynamic";
const Spectrum3Usage = dynamic( => import("./spectrum3/Dashboard").then((m) => m.Spectrum3Usage), { ssr: false });

// 베이스 키를 Usage 3 대시보드에 매핑. 대시보드 추가마다 한 줄씩 등록
export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  antd: Antd3Usage,
  blueprint: BlueprintUsage3,
  bootstrap: BootstrapUsage3,
  carbon: CarbonUsage3,
  chakra: ChakraUsage3,
  cloudscape: CloudscapeUsage3,
  coss: CossUsage3,
  daisyui: DaisyuiUsage3,
  fluent: FluentUsage3,
  flowbite: FlowbiteUsage3,
  grommet: GrommetUsage3,
  heroui: HeroUiUsage3,
  lightning: Lightning3Usage,
  mantine: MantineUsage3,
  mui: MuiUsage3,
  primer: PrimerUsage3,
  primereact: PrimereactUsage3,
  shadcn: ShadcnUsage3,
  standalone: StandaloneUsage3,
  spectrum: Spectrum3Usage,
};

// Usage 3 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
