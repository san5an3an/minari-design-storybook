import * as React from "react";
import type {
 BaseRefAdapter, BaseRefDoc, BaseRefProviderProps, DemoValue, SkipCode,
} from "../refContract";
import { CHAKRA_GROUPS, CHAKRA_INDEX, isChakraSlug, loadChakraDoc } from "./loader";
import { loadDemos as loadChakraDemos } from "./demos/index";

import { fillApi } from "../derivedApi";
function ChakraRefProvider({ system, mode, children }: BaseRefProviderProps) {
 return React.createElement(system.Provider, { mode, children });
}

type DemoModule = {
 DEMOS: Record<string, DemoValue>;
 SKIPPED: Record<string, { code: SkipCode; codes: SkipCode[]; detail: string }>;
};

export const chakraAdapter: BaseRefAdapter = {
 INDEX: CHAKRA_INDEX,
 GROUPS: CHAKRA_GROUPS,
 TITLE: new Map(CHAKRA_INDEX.map((e) => [e.slug, e.title])),
 isSlug: isChakraSlug,
 loadDoc(slug) {
 const p = loadChakraDoc(slug);
 if (!p) return null;
 // 표에 없는 필드는 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
 return (p as Promise<BaseRefDoc>).then(async (doc) => ({
 ...doc,
 api: await fillApi("chakra", doc.slug, doc.title, doc.api),
 }));
 },
 loadDemos(slug) {
 const p = isChakraSlug(slug) ? loadChakraDemos(slug) : null;
 if (!p) return null;
 return (p as Promise<DemoModule>).then((m) => ({
 demos: m.DEMOS,
 skipped: Object.fromEntries(
 Object.entries(m.SKIPPED).map(([k, v]) => [k, { code: v.code, detail: v.detail }]),
 ),
 }));
 },
 Provider: ChakraRefProvider,
};
