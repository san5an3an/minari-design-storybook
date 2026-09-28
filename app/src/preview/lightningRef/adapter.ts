import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "../refContract";
import nav from "./contract/_nav.json";
import { LOAD } from "./demos/_load";

const LIGHTNING_SCOPE = "lightning-ref-scope";

interface LightningNav {
 index: { slug: string; title: string }[];
}

const NAV = nav as LightningNav;
const SLUGS = new Set(NAV.index.map((e) => e.slug));
const TITLE = new Map(NAV.index.map((e) => [e.slug, e.title]));

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
 const f = LOAD[slug];
 if (!f) return Promise.resolve({ demos: {}, skipped: {} as Record<string, { code: SkipCode; detail: string }> });
 return f.then((m) => ({ demos: m.demos as Record<string, DemoValue>, skipped: m.skipped as Record<string, { code: SkipCode; detail: string }> }));
 },
 Provider: ({ children }) => React.createElement("div", { className: LIGHTNING_SCOPE }, children),
 mountTheme(system, _mode, doc) {
 let alive = true;
 const nodes: HTMLStyleElement[] = [];
 Promise.all([
 import("./theme/lightning-styles.json"),
 import(`../../systems/css/${system.slug}/_theme-lightning.json`),
 ])
 .then(([base, theme]) => {
 if (!alive) return;
 const scopedTheme = String(theme.default).replace(/:root\s*\{/, `.${LIGHTNING_SCOPE} {`);
 for (const [id, css] of [["lightning-styles", base.default], ["lightning-theme", scopedTheme]] as const) {
 const el = doc.createElement("style");
 el.dataset.baseMount = `lightning:${id}`;
 el.textContent = String(css);
 doc.head.appendChild(el);
 nodes.push(el);
 }
 })
 .catch( => { /* 못 실으면 SLDS가 기본 CSS 없이 즉시 렌더링 */ });
 return => {
 alive = false;
 for (const el of nodes) el.remove;
 };
 },
};
