import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { LOAD } from "./demos/_load";

interface PrimerNav {
  groups: { title: string; slugs: string[] }[];
  index: { slug: string; title: string; href: string; status: string | null }[];
}

const NAV = nav as PrimerNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));
const GROUPS: Record<string, string[]> = Object.fromEntries(NAV.groups.map((g) => [g.title, g.slugs]));
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

export const primerAdapter: BaseRefAdapter = {
  INDEX: NAV.index.map(({ slug, title }) => ({ slug, title })),
  GROUPS,
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    // import는 없는 키 접근 시 예외 발생, 먼저 제외
    if (!SLUGS.has(slug)) return null;
    return import(`./contract/${slug}.json`).then((m) => m.default as BaseRefDoc);
  },
  loadDemos(slug) {
    const load = LOAD[slug];
    if (!load) return null;
    return load.then((mod) => {
      const demos: Record<string, DemoValue> = {};
      for (const [key, Demo] of Object.entries(mod.demos)) demos[key] = Demo as DemoValue;
      const skipped: Record<string, { code: SkipCode; detail: string }> = {};
      for (const [key, s] of Object.entries(mod.skipped)) skipped[key] = { code: s.code as SkipCode, detail: s.detail };
      return { demos, skipped };
    });
  },
  Provider: ({ children }) => children,
};
