import * as React from "react";
import type {
  BaseRefAdapter, BaseRefDoc, BaseRefProviderProps, DemoValue, SkipCode,
} from "../refContract";
import { CHAKRA_GROUPS, CHAKRA_INDEX, isChakraSlug, loadChakraDoc } from "./loader";
import { loadDemos as loadChakraDemos } from "./demos/index";

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
    return p ? (p as Promise<BaseRefDoc>) : null;
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
