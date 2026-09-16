import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { LOAD } from "./demos/_load";

interface FluentNav {
  index: { slug: string; title: string }[];
  groups: Record<string, string[]>;
}

const NAV = nav as FluentNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));
// 분류는 storybook title 첫 단어 기준, 순서는 index.json 그대로 유지
const GROUPS: Record<string, string[]> = NAV.groups;
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

const LazyProvider = React.lazy( => import("./provider"));

function FluentRefProvider(props: BaseRefProviderProps) {
  return React.createElement(React.Suspense, { fallback: null }, React.createElement(LazyProvider, props));
}

export const fluentAdapter: BaseRefAdapter = {
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
    const load = SLUGS.has(slug) ? LOAD[slug] : undefined;
    if (!load) return null;
    return load.then((mod) => ({
      demos: mod.demos as Record<string, DemoValue>,
      skipped: mod.skipped as Record<string, { code: SkipCode; detail: string }>,
    }));
  },
  Provider: FluentRefProvider,
  // mountTheme 미사용. FluentProvider가 클래스 스코프로 적용되어 전역에 안 닿음
};
