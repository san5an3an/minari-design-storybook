// 데모 예제 생성 파일
import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import { HEROUI_GROUPS, HEROUI_INDEX, HEROUI_SOURCE, isHerouiSlug, loadHerouiDoc, type HerouiDoc } from "./loader";
import { loadDemos as loadHerouiDemos } from "./demos/index";

import { fillApi } from "../derivedApi";
const REPO = `heroui-inc/heroui@${HEROUI_SOURCE.ref}`;

// 예제 섹션, Variants만 사용, 설명 글 없음
const EXAMPLE_SECTIONS = new Set(["Usage", "Examples", "Customization", "Advanced Examples"]);
// 산문 형식 아닌 Anatomy, API 섹션은 따로 싣거나 링크 카드로 처리해 제외
const NOT_PROSE = new Set(["Anatomy", "API Reference", "Related Components", "Related Showcases"]);

// 필드 6 Tokens, component-slug 접두 변수 29개
const TOKEN_SLUGS = new Set([
 "accordion", "alert", "avatar", "badge", "button", "calendar", "card", "checkbox", "chip", "drawer",
 "field-error", "input", "kbd", "label", "link", "meter", "pagination", "popover", "radio-group", "select",
 "skeleton", "slider", "spinner", "switch", "table", "tabs", "toast", "toolbar", "tooltip",
]);

const stem = (p: string) => p.replace(/^.*\//, "").replace(/\.tsx$/, "");
const noLine = (p: string) => p.replace(/:\d+$/, "");

// 섹션 본문에서 코드 펜스와 JSX 줄 제외한 텍스트만 추출
function proseText(body: string): string {
 const out: string[] = [];
 let fence = false;
 for (const line of body.split("\n")) {
 if (/^\s*(```|~~~)/.test(line)) { fence = !fence; continue; }
 if (fence) continue;
 if (/^\s*<\/?[A-Za-z][^>]*>?\s*$/.test(line) || /^\s*\/?>\s*$/.test(line)) continue;
 out.push(line);
 }
 return out.join("\n").replace(/\n{3,}/g, "\n\n").trim;
}

function toDoc(raw: HerouiDoc): BaseRefDoc {
 const examples: BaseRefExample[] = raw.examples.map((ex) => ({
 key: stem(ex.source ?? ex.key),
 name: ex.name,
 axis: ex.section,
 kind: "example",
 description: null,
 descFormat: null,
 source: `${REPO}:${ex.source}`,
 stage: "inline",
 iframeHeight: null,
 providerProps: null,
 args: null,
 }));

 const usage = raw.examples.findIndex((ex) => ex.section === "Usage");
 const master: BaseRefDoc["master"] = usage >= 0
 ? { rule: "official-mark", key: examples[usage].key, reason: null }
 : { rule: "doc-order-first", key: examples[0]?.key ?? null, reason: examples.length ? null : "공식에 예제가 없어요." };

 const prose: BaseRefDoc["prose"] = [];
 for (const s of raw.sections) {
 if (EXAMPLE_SECTIONS.has(s.name) || NOT_PROSE.has(s.name)) continue;
 const text = proseText(s.body);
 if (text) prose.push({ title: s.name, text, format: "md" });
 }

 const anatomy = raw.sections.some((s) => s.name === "Anatomy");
 const parts: BaseRefDoc["parts"] = anatomy
 ? { presence: "not-imported", reason: "공식 Anatomy 는 코드 블록이라, 부품 이름만 뽑아 실을지 코드라 뺄지 사용자 판단(ADR §10 U-6)을 기다려요.", columns: [], rows: [] }
 : { presence: "absent-in-official", columns: [], rows: [] };

 const tables = raw.tables.filter((t) => t.section === "API Reference");
 const api: BaseRefDoc["api"] = tables.length
 ? {
 presence: "official",
 tables: tables.map((t) => ({
 name: t.name,
 // 마지막 열 출처는 미러가 붙인 앵커, 화면에는 미표시
 columns: t.columns.slice(0, -1),
 rows: t.rows.map((r) => r.slice(0, -1)),
 })),
 }
 : { presence: "absent-in-official", tables: [] };

 return {
 slug: raw.slug,
 title: raw.title,
 lead: raw.description || null,
 leadFormat: raw.description ? "text" : null,
 group: raw.group || null,
 docHref: null,
 docSource: raw.sections[0] ? `${REPO}:${noLine(raw.sections[0].source)}` : REPO,
 examples,
 emptyReason: examples.length ? null : "official-none",
 master,
 prose,
 parts,
 api,
 tokenGroup: TOKEN_SLUGS.has(raw.slug) ? raw.slug : null,
 };
}

const LazyProvider = React.lazy( => import("./provider"));

function HerouiRefProvider(props: BaseRefProviderProps) {
 return React.createElement(React.Suspense, { fallback: null }, React.createElement(LazyProvider, props));
}

type DemoModule = {
 DEMOS: Record<string, DemoValue>;
 SKIPPED: Record<string, { code: SkipCode; codes: SkipCode[]; detail: string }>;
};

export const herouiAdapter: BaseRefAdapter = {
 INDEX: HEROUI_INDEX.map(({ slug, title }) => ({ slug, title })),
 GROUPS: HEROUI_GROUPS,
 TITLE: new Map(HEROUI_INDEX.map((e) => [e.slug, e.title])),
 isSlug: isHerouiSlug,
 loadDoc(slug) {
 const p = loadHerouiDoc(slug);
 if (!p) return null;
 // 표에 없는 필드는 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
 return p.then(toDoc).then(async (doc) => ({
 ...doc,
 api: await fillApi("heroui", doc.slug, doc.title, doc.api),
 }));
 },
 loadDemos(slug) {
 const p = isHerouiSlug(slug) ? loadHerouiDemos(slug) : null;
 if (!p) return null;
 return (p as Promise<DemoModule>).then((m) => ({
 demos: m.DEMOS,
 skipped: Object.fromEntries(Object.entries(m.SKIPPED).map(([k, v]) => [k, { code: v.code, detail: v.detail }])),
 }));
 },
 Provider: HerouiRefProvider,
 mountTheme(system, _mode, doc) {
 let alive = true;
 const nodes: HTMLStyleElement[] = [];
 Promise.all([
 import("./theme/heroui-styles.json"),
 import(`../../systems/css/${system.slug}/_theme-heroui.json`),
 ]).then(([base, theme]) => {
 if (!alive) return;
 const scopedTheme = String(theme.default).replace(/:root\s*\{/, ".heroui-ref-scope {");
 for (const [id, css] of [["heroui-styles", base.default], ["heroui-theme", scopedTheme]] as const) {
 const el = doc.createElement("style");
 el.dataset.baseMount = `heroui:${id}`;
 el.textContent = String(css);
 doc.head.appendChild(el);
 nodes.push(el);
 }
 }).catch( => { /* 못 실으면 heroui가 스타일 없이 즉시 렌더링 */ });
 return => {
 alive = false;
 for (const el of nodes) el.remove;
 };
 },
};
