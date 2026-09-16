import type { BaseRefAdapter, BaseRefDoc, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import SpectrumRefProvider from "./provider";

interface SpectrumNav {
  index: { slug: string; title: string }[];
  groups: Record<string, string[]>;
  skip: Record<string, { code: string; detail: string }>;
}

const NAV = nav as SpectrumNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));
// 분류는 mdx front-matter category 기준, 순서는 index.json 그대로 유지
const GROUPS: Record<string, string[]> = NAV.groups;
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

function loadContract(slug: string): Promise<BaseRefDoc> {
  return import(`./contract/${slug}.json`).then((m) => m.default as BaseRefDoc);
}

export const spectrumAdapter: BaseRefAdapter = {
  INDEX: NAV.index.map(({ slug, title }) => ({ slug, title })),
  GROUPS,
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    // import는 없는 키 접근 시 예외 발생, 먼저 제외
    if (!SLUGS.has(slug)) return null;
    return loadContract(slug);
  },
  loadDemos(slug) {
    if (!SLUGS.has(slug)) return null;
    return loadContract(slug).then((doc) => ({
      demos: {},
      skipped: Object.fromEntries(doc.examples.map((ex) => {
        const why = NAV.skip[ex.kind];
        // 알 수 없는 kind 값 그대로 화면 표시
        if (!why) throw new Error(`spectrum _nav.json 에 kind "${ex.kind}" 사유가 없어요, ${slug}/${ex.key}`);
        return [ex.key, { code: why.code as SkipCode, detail: why.detail }];
      })),
    }));
  },
  Provider: SpectrumRefProvider,
  // mountTheme는 사용하지 않음. 현재 버전은 문서 전역에 싣는 css나 테마가 없음
};
