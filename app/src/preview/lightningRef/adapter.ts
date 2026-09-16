import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";

interface LightningNav {
  index: { slug: string; title: string }[];
}

const NAV = nav as LightningNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));
const U7: { code: SkipCode; detail: string } = {
  code: "other",
  detail: "⏳ 예제 출처(설치본 번들 모듈 로드 / 09-08 기각 유지 / 마크업+CSS)가 사용자 판단 대기예요.",
};

function loadContract(slug: string): Promise<BaseRefDoc> {
  return import(`./contract/${slug}.json`).then((m) => m.default as BaseRefDoc);
}

export const lightningAdapter: BaseRefAdapter = {
  INDEX: NAV.index.map(({ slug, title }) => ({ slug, title })),
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    if (!SLUGS.has(slug)) return null;
    return loadContract(slug);
  },
  loadDemos(slug) {
    if (!SLUGS.has(slug)) return null;
    return loadContract(slug).then((doc) => {
      const demos: Record<string, DemoValue> = {};
      const skipped: Record<string, { code: SkipCode; detail: string }> = {};
      for (const ex of doc.examples) skipped[ex.key] = U7;
      return { demos, skipped };
    });
  },
  Provider: ({ children }) => children,
};
