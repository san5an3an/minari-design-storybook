import { BASES } from "../bases/registry";
import type { Mode, SystemDefinition } from "../systems/types";
import { NotReady } from "./NotReady";
import { USAGE_DASHBOARDS as USAGE_1 } from "./registry";
import { USAGE_DASHBOARDS as USAGE_2 } from "./registry2";
import { USAGE_DASHBOARDS as USAGE_3 } from "./registry3";

const VARIANTS = { 1: USAGE_1, 2: USAGE_2, 3: USAGE_3 } as const;

export function UsagePage({ system, active, variant }: {
  system: SystemDefinition;
  active: Mode;
  variant: 1 | 2 | 3;
}) {
  const USAGE_DASHBOARDS = VARIANTS[variant];
  const Dashboard = USAGE_DASHBOARDS[system.baseKey];

  if (!Dashboard) {
    // 구현 수 계산해 전달. registry.tsx 값 그대로 사용
    const base = BASES[system.baseKey];
    // 화면에 보이는 목록도 레지스트리에서 읽기. 하드코딩하면 대시보드 추가마다 고치는 부담 있음
    const usageKeys = Object.keys(USAGE_DASHBOARDS);
    const readyTitles = usageKeys
      .filter((key) => key in BASES)
      .map((key) => BASES[key].title);
    const orphanKeys = usageKeys.filter((key) => !(key in BASES));
    return (
      <NotReady
        baseTitle={system.baseTitle}
        implemented={base ? Object.keys(base.impl).length : 0}
        readyTitles={readyTitles}
        orphanKeys={orphanKeys}
      />
    );
  }

  return (
    <system.Provider mode={active}>
      <Dashboard system={system} active={active} />
    </system.Provider>
  );
}
