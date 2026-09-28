import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { LOAD } from "./demos/_load";

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

const LazyProvider = React.lazy( => import("./provider"));

function SpectrumRefProvider(props: BaseRefProviderProps) {
 return React.createElement(React.Suspense, { fallback: null }, React.createElement(LazyProvider, props));
}

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
 const load = LOAD[slug];
 if (!load) {
 // 합성기가 파일을 생성하지 않은 슬러그. 예제 없음 또는 전부 render=false면 계약 skip 사유로 처리
 return loadContract(slug).then((doc) => ({
 demos: {},
 skipped: Object.fromEntries(doc.examples.map((ex) => {
 const why = NAV.skip[ex.kind];
 if (!why) throw new Error(`spectrum _nav.json 에 kind "${ex.kind}" 사유가 없어요, ${slug}/${ex.key}`);
 return [ex.key, { code: why.code as SkipCode, detail: why.detail }];
 })),
 }));
 }
 return load.then((m) => ({
 demos: m.demos as Record<string, DemoValue>,
 skipped: m.skipped as Record<string, { code: SkipCode; detail: string }>,
 }));
 },
 Provider: SpectrumRefProvider,
 // 색, 글꼴은 Provider 루트 범위에만 적용. 문서 전역 CSS 미적용
};
