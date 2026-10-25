import { BASES } from "../bases/registry";
import type { Mode, SystemDefinition } from "../systems/types";
import { MobileDeviceFrame } from "./MobileDeviceFrame";
import { hasMobile } from "./mobileReady";
import { NotReady } from "./NotReady";
import { ViewportSwitch, useViewport } from "./ViewportSwitch";
import { USAGE_DASHBOARDS as USAGE_1 } from "./registry";
import { USAGE_DASHBOARDS as USAGE_2 } from "./registry2";
import { USAGE_DASHBOARDS as USAGE_3 } from "./registry3";
import { USAGE_DASHBOARDS as USAGE_4 } from "./registry4";

const VARIANTS = { 1: USAGE_1, 2: USAGE_2, 3: USAGE_3, 4: USAGE_4 } as const;

interface UsageProps {
  system: SystemDefinition;
  active: Mode;
  variant: 1 | 2 | 3 | 4;
}

// Usage 본문 앞에 데스크탑, 모바일 전환 배치. 대시보드가 없는 베이스에는 전환을 표시하지 않음
export function UsagePage(props: UsageProps) {
  const [viewport, setViewport] = useViewport();
  if (!(props.system.baseKey in VARIANTS[props.variant])) return <UsageBody {...props} />;
  // 모바일 판이 없는 제공자는 viewport=mobile 이어도 데스크탑으로 표시. 데스크탑 구조가 폰 틀에 눌린 화면이 완성품처럼 보이지 않게 하기 위함
  const mobileReady = hasMobile(props.system.baseKey, props.variant);
  const showMobile = viewport === "mobile" && mobileReady;
  return (
    <>
      <ViewportSwitch value={showMobile ? "mobile" : "desktop"} onChange={setViewport} mobileReady={mobileReady} />
      {showMobile ? <MobileDeviceFrame {...props} /> : <UsageBody {...props} />}
    </>
  );
}

// 베이스에 해당 Usage 대시보드가 있으면 표시하고 없으면 준비중 화면 표시. 앱 안 데스크탑과 모바일 iframe 이 같은 본문을 사용함
export function UsageBody({ system, active, variant }: UsageProps) {
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
