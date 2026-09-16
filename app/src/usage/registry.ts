import type { ComponentType } from "react";
import type { Mode } from "../systems/types";
import type { SystemDefinition } from "../systems/types";

// 대시보드 컴포넌트에 전달하는 값. 화면이 색과 모드를 모두 알아야 하기 때문임
export interface UsageDashboardProps {
  system: SystemDefinition;
  active: Mode;
}

export type UsageDashboard = ComponentType<UsageDashboardProps>;

import { AntdUsage } from "./antd/Dashboard";
import { BlueprintUsage } from "./blueprint/Dashboard";
import { CloudscapeUsage } from "./cloudscape/Dashboard";
import { DaisyuiUsage } from "./daisyui/Dashboard";
import { FluentUsage } from "./fluent/Dashboard";
import { FlowbiteUsage } from "./flowbite/Dashboard";
import { GrommetUsage } from "./grommet/Dashboard";
import { HeroUiUsage } from "./heroui/Dashboard";
import { MuiUsage } from "./mui/Dashboard";
import { PrimerUsage } from "./primer/Dashboard";
import { PrimereactUsage } from "./primereact/Dashboard";
import { ShadcnUsage } from "./shadcn/Dashboard";

export const USAGE_DASHBOARDS: Record<string, UsageDashboard> = {
  antd: AntdUsage,
  blueprint: BlueprintUsage,
  cloudscape: CloudscapeUsage,
  daisyui: DaisyuiUsage,
  fluent: FluentUsage,
  flowbite: FlowbiteUsage,
  grommet: GrommetUsage,
  heroui: HeroUiUsage,
  mui: MuiUsage,
  primer: PrimerUsage,
  primereact: PrimereactUsage,
  shadcn: ShadcnUsage,
};

// 대시보드 보유 여부
export function hasUsage(baseKey: string): boolean {
  return baseKey in USAGE_DASHBOARDS;
}
