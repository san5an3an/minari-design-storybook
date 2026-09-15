import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import { DAISYUI_GROUPS, DAISYUI_INDEX, DAISYUI_TITLE_ENTRIES } from "./nav";
import { loadDaisyuiDocJson } from "./docs/index";
import { loadDaisyuiDemoJson } from "./demos/index";

const SLUGS = new Set(DAISYUI_INDEX.map((e) => e.slug));

type DemoJson = {
  demos: Record<string, { html: string }>;
  skipped: Record<string, { code: SkipCode; detail: string }>;
};

export const daisyuiAdapter: BaseRefAdapter = {
  INDEX: DAISYUI_INDEX,
  GROUPS: DAISYUI_GROUPS,
  TITLE: new Map(DAISYUI_TITLE_ENTRIES),
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    const p = loadDaisyuiDocJson(slug);
    return p ? (p as Promise<BaseRefDoc>) : null;
  },
  loadDemos(slug) {
    const p = loadDaisyuiDemoJson(slug);
    return p
      ? (p as Promise<DemoJson>).then((m) => ({
          demos: m.demos as Record<string, DemoValue>,
          skipped: m.skipped,
        }))
      : null;
  },
  // 공식 예제에 공급자 없음
  Provider: ({ children }) => children,
  // mountTheme 리더 공유 CSS 설계 대기
};
