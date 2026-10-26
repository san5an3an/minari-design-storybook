import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import { DAISYUI_GROUPS, DAISYUI_INDEX, DAISYUI_TITLE_ENTRIES } from "./nav";
import { loadDaisyuiDocJson } from "./docs/index";
import { loadDaisyuiDemoJson } from "./demos/index";
import { DAISYUI_COLOR_BRIDGE } from "../../bases/daisyuiColorBridge";

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
  // 공식 예제에 provider 없음. 색 연결만 감싼 div 에 지정하고 display contents 로 배치에는 영향 없게 함
  Provider: ({ children }) =>
    React.createElement("div", { style: { display: "contents", ...DAISYUI_COLOR_BRIDGE } }, children),
};
