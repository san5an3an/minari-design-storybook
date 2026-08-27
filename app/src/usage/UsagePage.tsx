import { BASES } from "../bases/registry";
import type { Mode, SystemDefinition } from "../systems/types";
import { NotReady } from "./NotReady";
import { USAGE_DASHBOARDS } from "./registry";

export function UsagePage({ system, active }: {
  system: SystemDefinition;
  active: Mode;
}) {
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

  return <Dashboard system={system} active={active} />;
}
