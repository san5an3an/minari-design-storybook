import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import INDEX_JSON from "./index.json";
// 템플릿 동적 import 금지. fetcher 생성 명시 목록만 호출
import { DOCS } from "./_docs";
import { LOAD } from "./demos/_load";
import { loadPage } from "./demos/_pageLoad";
import { THEMES } from "./_themes";

import { fillApi } from "../derivedApi";
// 경로 문자열에서 데모 페이지 슬러그만 추출
function pageSlugOf(source: string): string | null {
 const m = /:src\/pages\/([^/]+)\//.exec(source);
 return m ? m[1] : null;
}

type RawExample = BaseRefExample & { skip: { code: SkipCode; detail: string } | null };
type RawDoc = Omit<BaseRefDoc, "examples"> & { examples: RawExample[] };

const INDEX = INDEX_JSON.components.map((c) => ({ slug: c.slug, title: c.title }));
const TITLE = new Map(INDEX.map((c) => [c.slug, c.title]));
const SLUGS = new Set(INDEX.map((c) => c.slug));

function toDoc(raw: RawDoc): BaseRefDoc {
 const examples: BaseRefExample[] = raw.examples.map(({ skip: _skip, ...ex }) => ex);
 // Master 목록 순서상 첫 데모를 생성기가 못 만들면 둘째로 올리지 않고 사유만 표시
 let master = raw.master;
 const first = master.key ? raw.examples.find((e) => e.key === master.key) : undefined;
 if (first?.skip) {
 master = { rule: master.rule, key: null, reason: `공식 데모 목록 순서 첫 예제 「${first.name}」를 세우지 못했어요.` };
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

// 렌더링 실패 상태 표시
const IframePending: React.ComponentType = => null;

function CloudscapeRefProvider({ children }: BaseRefProviderProps) {
 return React.createElement(React.Fragment, null, children);
}

export const cloudscapeAdapter: BaseRefAdapter = {
 INDEX,
 TITLE,
 isSlug: (slug) => SLUGS.has(slug),
 loadDoc(slug) {
 const f = SLUGS.has(slug) ? DOCS[slug] : undefined;
 if (!f) return null;
 // 표에 없는 필드는 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
 return f.then(async (m) => {
 const doc = toDoc(m.default as RawDoc);
 return { ...doc, api: await fillApi("cloudscape", doc.slug, doc.title, doc.api) };
 });
 },
 loadDemos(slug) {
 const f = SLUGS.has(slug) ? DOCS[slug] : undefined;
 if (!f) return null;
 return f.then(async (m) => {
 const raw = m.default as RawDoc;
 const demos: Record<string, DemoValue> = {};
 const skipped: Record<string, { code: SkipCode; detail: string }> = {};
 const load = LOAD[slug];
 const built = load ? (await load).default : null;
 for (const ex of raw.examples) {
 if (ex.skip) { skipped[ex.key] = ex.skip; continue; }
 if (ex.stage === "inline" && built) { demos[ex.key] = built; continue; }
 const pageSlug = pageSlugOf(ex.source);
 const loaded = pageSlug ? loadPage(pageSlug) : null;
 demos[ex.key] = IframePending;
 if (loaded) {
 try { demos[ex.key] = (await loaded).default; } catch { /* IframePending 유지 */ }
 }
 }
 return { demos, skipped };
 });
 },
 Provider: CloudscapeRefProvider,
 mountTheme(system, mode, _doc) {
 let alive = true;
 let reset: ( => void) | null = null;
 const load = THEMES[system.slug];
 if (load) {
 load
 .then(async (m) => {
 if (!alive) return;
 const theme = m.byMode[mode];
 if (!theme) return;
 const { applyTheme } = await import("@cloudscape-design/components/theming");
 if (!alive) return;
 reset = applyTheme({ theme: theme as never }).reset;
 })
 .catch( => { /* 못 실으면 cloudscape가 기본 테마로 즉시 렌더링 */ });
 }
 return => {
 alive = false;
 reset?.;
 };
 },
};
