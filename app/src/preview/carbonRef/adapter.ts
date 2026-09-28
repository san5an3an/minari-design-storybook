import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, DemoValue, SkipCode } from "../refContract";
import { CARBON_INDEX, isCarbonSlug, loadCarbonDoc, type CarbonDoc } from "./loader";
// 생성기의 슬러그별 예제 목록. 동적 import는 폴더째 컴파일해 500 에러 발생 방식임
import { LOAD } from "./demos/_load";

import { fillApi } from "../derivedApi";
// storybook title 첫 단어로 사이드바 분류
const GROUPS: Record<string, string[]> = {};
for (const e of CARBON_INDEX) {
 if (e.group === null) continue;
 (GROUPS[e.group] ??= []).push(e.slug);
}
const TITLE = new Map(CARBON_INDEX.map((e) => [e.slug, e.slug]));

function canvasPlacements(docs: CarbonDoc["docs"]): { section: string; story: string }[] {
 const out: { section: string; story: string }[] = [];
 for (const d of docs) {
 const heads: { at: number; title: string }[] = [];
 for (const m of d.markdown.matchAll(/^##[ \t]+(.+?)[ \t]*$/gm)) heads.push({ at: m.index ?? 0, title: m[1] });
 for (const m of d.markdown.matchAll(/<Canvas\b[^>]*?\bof=\{\s*[A-Za-z0-9_$]+\.([A-Za-z0-9_$]+)\s*\}/g)) {
 const at = m.index ?? 0;
 const head = heads.filter((h) => h.at < at).pop;
 out.push({ section: head ? head.title : "", story: m[1] });
 }
 }
 return out;
}

function keyOf(source: string, name: string): string {
 return `${source.replace(/:\d+$/, "")}#${name}`;
}

function toDoc(raw: CarbonDoc): BaseRefDoc {
 const placed = canvasPlacements(raw.docs);
 // 한 스토리가 여러 mdx 파일에 있으면 처음 등장하는 섹션 사용
 const axisOf = new Map<string, string>;
 for (const p of placed) if (p.section && !axisOf.has(p.story)) axisOf.set(p.story, p.section);

 const examples: BaseRefExample[] = raw.examples.map((ex) => ({
 key: keyOf(ex.source, ex.name),
 name: ex.name,
 axis: axisOf.get(ex.name) ?? null,
 kind: "example",
 description: ex.description,
 descFormat: ex.description === null ? null : "md",
 source: `${raw.sourceRepo.replace("https://github.com/", "").replace("/tree/", "@")}:${ex.source}`,
 // Modal 계열 슬러그 전체
 stage: raw.slug.includes("Modal") ? "contain" : "inline",
 iframeHeight: null,
 providerProps: null,
 args: null,
 }));

 // 표지 예제: Overview 첫 Canvas, 없으면 문서첫째/mdx/export첫째
 const byName = new Map(examples.map((e) => [e.name, e]));
 const overview = placed.find((p) => p.section === "Overview" && byName.has(p.story));
 const firstCanvas = placed.find((p) => byName.has(p.story));
 const master: BaseRefDoc["master"] = overview
 ? { rule: "official-mark", key: byName.get(overview.story)!.key, reason: null }
 : {
 rule: "doc-order-first",
 key: (firstCanvas ? byName.get(firstCanvas.story)!.key : examples[0]?.key) ?? null,
 reason: examples.length ? null : "공식에 예제가 없어요.",
 };

 // API 필드: derived 사용, 출처 제외. 원천 없음
 const props = raw.props;
 const api: BaseRefDoc["api"] = props && props.rows.length
 ? {
 presence: "derived",
 tables: [{
 name: props.name,
 columns: props.columns.slice(0, -1),
 rows: props.rows.map((r) => r.slice(0, -1)),
 }],
 }
 : { presence: "absent-in-official", tables: [] };

 return {
 slug: raw.slug,
 title: raw.slug,
 lead: null,
 leadFormat: null,
 group: raw.group,
 docHref: null,
 docSource: `${raw.sourceRepo}`,
 examples,
 emptyReason: examples.length ? null : "official-none",
 master,
 prose: [],
 parts: { presence: "absent-in-official", columns: [], rows: [] },
 api,
 tokenGroup: raw.slug.toLowerCase,
 };
}

export const carbonAdapter: BaseRefAdapter = {
 INDEX: CARBON_INDEX.map((e) => ({ slug: e.slug, title: e.slug })),
 GROUPS,
 TITLE,
 isSlug: isCarbonSlug,
 loadDoc(slug) {
 const p = loadCarbonDoc(slug);
 if (!p) return null;
 // 표에 없는 필드는 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
 return p.then(toDoc).then(async (doc) => ({
 ...doc,
 api: await fillApi("carbon", doc.slug, doc.title, doc.api),
 }));
 },
 // scss 컴파일 후 렌더링 실패 예제 skip, 명시 목록 연결
 loadDemos(slug) {
 const f = LOAD[slug];
 return f ? f.then((m) => ({ demos: m.demos as Record<string, DemoValue>, skipped: m.skipped as Record<string, { code: SkipCode; detail: string }> })) : null;
 },
 Provider: ({ children }) => children,
 mountTheme(system, _mode, doc) {
 let alive = true;
 const nodes: HTMLStyleElement[] = [];
 Promise.all([
 import("./theme/carbon-styles.json"),
 import(`../../systems/css/${system.slug}/_theme-carbon.json`),
 ]).then(([base, theme]) => {
 if (!alive) return;
 for (const [id, css] of [["carbon-styles", base.default], ["carbon-theme", theme.default]] as const) {
 const el = doc.createElement("style");
 el.dataset.baseMount = `carbon:${id}`;
 el.textContent = String(css);
 doc.head.appendChild(el);
 nodes.push(el);
 }
 }).catch( => { /* 못 실으면 carbon이 기본 CSS 없이 즉시 렌더링 */ });
 return => {
 alive = false;
 for (const el of nodes) el.remove;
 };
 },
};
