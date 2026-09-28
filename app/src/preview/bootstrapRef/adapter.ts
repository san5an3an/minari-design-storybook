// BaseRefDoc, 사이드바 파일, 데모 예제 파일 목록
import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { loadDemos as loadDemoModule } from "./demos/index";

interface BootstrapNav {
 groups: { title: string; slugs: string[] }[];
 index: { slug: string; title: string; href: string }[];
}

interface BootstrapDemoModule {
 DEMOS: Record<string, unknown>;
 SKIPPED: Record<string, { code: string; codes: string[]; detail: string }>;
}

const NAV = nav as BootstrapNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));

// 사이드바 그룹 position 순 정렬
const GROUPS: Record<string, string[]> = Object.fromEntries(NAV.groups.map((g) => [g.title, g.slugs]));
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

export const bootstrapAdapter: BaseRefAdapter = {
 INDEX: NAV.index.map(({ slug, title }) => ({ slug, title })),
 GROUPS,
 TITLE,
 isSlug: (slug) => SLUGS.has(slug),
 loadDoc(slug) {
 // import는 없는 키 접근 시 예외 발생. 주소 잘못 쳐도 화면 안 깨지게 먼저 제외
 if (!SLUGS.has(slug)) return null;
 return import(`./contract/${slug}.json`).then((m) => m.default as BaseRefDoc);
 },
 loadDemos(slug) {
 const p = loadDemoModule(slug);
 if (!p) return null;
 return p.then((raw) => {
 const mod = raw as BootstrapDemoModule;
 const demos: Record<string, DemoValue> = {};
 for (const [key, Demo] of Object.entries(mod.DEMOS)) demos[key] = Demo as React.ComponentType;
 const skipped: Record<string, { code: SkipCode; detail: string }> = {};
 for (const [key, s] of Object.entries(mod.SKIPPED)) skipped[key] = { code: s.code as SkipCode, detail: s.detail };
 return { demos, skipped };
 });
 },
 Provider: ({ children }: BaseRefProviderProps) =>
 React.createElement("div", { className: "bootstrap-ref-scope" }, children),
 mountTheme(system, _mode, doc) {
 let alive = true;
 const nodes: HTMLStyleElement[] = [];
 Promise.all([
 import("./theme/bootstrap-styles.json"),
 import(`../../systems/css/${system.slug}/_theme-bootstrap.json`),
 ]).then(([base, theme]) => {
 if (!alive) return;
 const scopedTheme = String(theme.default).replace(/:root\s*\{/, ".bootstrap-ref-scope {");
 for (const [id, css] of [["bootstrap-styles", base.default], ["bootstrap-theme", scopedTheme]] as const) {
 const el = doc.createElement("style");
 el.dataset.baseMount = `bootstrap:${id}`;
 el.textContent = String(css);
 doc.head.appendChild(el);
 nodes.push(el);
 }
 }).catch( => { /* 못 실으면 bootstrap이 기본 CSS 없이 렌더링 */ });
 return => {
 alive = false;
 for (const el of nodes) el.remove;
 };
 },
};
