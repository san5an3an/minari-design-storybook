import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import INDEX_JSON from "./index.json";
// 생성기가 처리하지 못한 항목 목록. Master 판별용
import MANIFEST from "./demos/_manifest.json";
// 템플릿 동적 import 금지. 슬러그, 모드는 모듈 명시 목록만 호출
import { DOCS } from "./_docs";
import { LOAD } from "./demos/_load";
import { THEMES } from "./theme/_themes";

import { fillApi } from "../derivedApi";
type RawExample = Omit<BaseRefExample, "description" | "descFormat" | "iframeHeight"> & {
 // 예제 섹션 공식 설명 DocSectionText, 문단 문자열 배열
 prose: string[];
 skip: { code: string; detail: string } | null;
};
type RawDoc = Omit<BaseRefDoc, "examples"> & { examples: RawExample[] };
type Manifest = { slugs: Record<string, { ok: number; skipped: number; skippedKeys?: Record<string, string> }> };

const INDEX = INDEX_JSON.components.map((c) => ({ slug: c.slug, title: c.title }));
// 사이드바 분류는 공식 menu.json Components 그룹 11개 기준, 순서도 공식 그대로 유지
const GROUPS: Record<string, string[]> = INDEX_JSON.groups;
const TITLE = new Map(INDEX.map((c) => [c.slug, c.title]));
const SLUGS = new Set(INDEX.map((c) => c.slug));
const manifest = MANIFEST as Manifest;

function toDoc(raw: RawDoc): BaseRefDoc {
 const examples: BaseRefExample[] = raw.examples.map((ex) => ({
 key: ex.key,
 name: ex.name,
 axis: ex.axis,
 kind: ex.kind,
 // 공식 섹션 글 그대로 사용, 형식 모르는 글은 md 렌더링 제외
 description: ex.prose.length ? ex.prose.join("\n\n") : null,
 descFormat: ex.prose.length ? "text" : null,
 source: ex.source,
 stage: ex.stage,
 iframeHeight: null,
 providerProps: ex.providerProps,
 args: ex.args,
 }));

 // Master 표지 예제를 생성기가 못 만들면 둘째로 올리지 않고 사유만 표시
 let master = raw.master;
 const genSkip = master.key ? manifest.slugs[raw.slug]?.skippedKeys?.[master.key] : undefined;
 if (master.key && genSkip) {
 const first = examples.find((e) => e.key === master.key);
 const what = master.rule === "official-mark" ? "공식 문서가 기본으로 두는 예제" : "공식 문서 순서 첫 예제";
 master = { rule: master.rule, key: null, reason: `${what} 「${first?.name ?? master.key}」를 세우지 못했어요.` };
 }

 return {
 slug: raw.slug,
 title: raw.title,
 lead: raw.lead,
 leadFormat: raw.leadFormat,
 group: raw.group,
 docHref: raw.docHref,
 docSource: raw.docSource,
 examples,
 emptyReason: raw.emptyReason,
 master,
 prose: raw.prose,
 parts: raw.parts,
 api: raw.api,
 tokenGroup: raw.tokenGroup,
 };
}

function PrimeReactRefProvider({ children }: BaseRefProviderProps) {
 return React.createElement(React.Fragment, null, children);
}

export const primereactAdapter: BaseRefAdapter = {
 INDEX,
 GROUPS,
 TITLE,
 isSlug: (slug) => SLUGS.has(slug),
 loadDoc(slug) {
 const f = SLUGS.has(slug) ? DOCS[slug] : undefined;
 if (!f) return null;
 // 표에 없는 필드는 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
 return f.then(async (m) => {
 const doc = toDoc(m.default as RawDoc);
 return { ...doc, api: await fillApi("primereact", doc.slug, doc.title, doc.api) };
 });
 },
 loadDemos(slug) {
 const f = SLUGS.has(slug) ? LOAD[slug] : undefined;
 return f
 ? f.then((m) => ({
 demos: m.demos as Record<string, DemoValue>,
 skipped: m.skipped as Record<string, { code: SkipCode; detail: string }>,
 }))
 : null;
 },
 Provider: PrimeReactRefProvider,
 mountTheme(system, mode, doc) {
 let alive = true;
 let el: HTMLStyleElement | null = null;
 const load = THEMES[`${system.slug}|${mode}`];
 if (load) {
 load
 .then((m) => {
 if (!alive) return;
 el = doc.createElement("style");
 el.dataset.baseMount = `primereact:${system.slug}:${mode}`;
 el.textContent = String(m.default);
 doc.head.appendChild(el);
 })
 .catch( => { /* 못 실으면 primereact가 테마 CSS 없이 즉시 렌더링 */ });
 }
 return => {
 alive = false;
 el?.remove;
 };
 },
};
