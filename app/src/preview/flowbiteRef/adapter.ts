// BaseRefDoc, 사이드바 기준, 데모 예제 파일 목록
import type React from "react";
import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { loadDemos as loadDemoModule } from "./demos/index";

interface FlowbiteNav {
  groups: { title: string; slugs: string[] }[];
  index: { slug: string; title: string; href: string }[];
}

interface FlowbiteDemoModule {
  DEMOS: Record<string, { component: unknown }>;
  SKIPPED: Record<string, { code: string; codes: string[]; detail: string }>;
}

const NAV = nav as FlowbiteNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));

// 사이드바 섹션 components, forms, typography 유지. 라벨은 TITLE 사용
const GROUPS: Record<string, string[]> = Object.fromEntries(NAV.groups.map((g) => [g.title, g.slugs]));
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

export const flowbiteAdapter: BaseRefAdapter = {
  INDEX: NAV.index.map(({ slug, title }) => ({ slug, title })),
  GROUPS,
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    // import는 없는 키 접근 시 예외 발생. 가드 없으면 주소 잘못 쳐 깨질 수 있음
    if (!SLUGS.has(slug)) return null;
    return import(`./contract/${slug}.json`).then((m) => m.default as BaseRefDoc);
  },
  loadDemos(slug) {
    const p = loadDemoModule(slug);
    if (!p) return null;
    return p.then((raw) => {
      const mod = raw as FlowbiteDemoModule;
      const demos: Record<string, DemoValue> = {};
      for (const [key, data] of Object.entries(mod.DEMOS)) {
        const Demo =  => data.component as React.ReactNode;
        demos[key] = Demo;
      }
      const skipped: Record<string, { code: SkipCode; detail: string }> = {};
      for (const [key, s] of Object.entries(mod.SKIPPED)) skipped[key] = { code: s.code as SkipCode, detail: s.detail };
      return { demos, skipped };
    });
  },
  Provider: ({ children }) => children,
};
