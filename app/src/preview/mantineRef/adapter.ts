// 원본 유지, ts-nocheck 추가
import type React from "react";
import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { loadDemos as loadDemoModule } from "./demos/index";

interface MantineNav {
  groups: { title: string; slugs: string[] }[];
  index: { slug: string; title: string }[];
}

interface MantineDemoModule {
  DEMOS: Record<string, { component: unknown }>;
  SKIPPED: Record<string, { code: string; detail: string }>;
}

const NAV = nav as MantineNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));

const GROUPS: Record<string, string[]> = Object.fromEntries(NAV.groups.map((g) => [g.title, g.slugs]));
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

export const mantineAdapter: BaseRefAdapter = {
  INDEX: NAV.index.map(({ slug, title }) => ({ slug, title })),
  GROUPS,
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    if (!SLUGS.has(slug)) return null;
    return import(`./contract/${slug}.json`).then((m) => m.default as BaseRefDoc);
  },
  loadDemos(slug) {
    const p = loadDemoModule(slug);
    if (!p) return null;
    return p.then((raw) => {
      const mod = raw as MantineDemoModule;
      const demos: Record<string, DemoValue> = {};
      for (const [key, data] of Object.entries(mod.DEMOS)) {
        demos[key] = data.component as React.ComponentType<Record<string, never>>;
      }
      const skipped: Record<string, { code: SkipCode; detail: string }> = {};
      for (const [key, s] of Object.entries(mod.SKIPPED)) skipped[key] = { code: s.code as SkipCode, detail: s.detail };
      return { demos, skipped };
    });
  },
  Provider: ({ children }) => children,
};
