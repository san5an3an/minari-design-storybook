import * as m000 from "./client-only-basic";
import * as m001 from "./client-only-with-fallback";
import * as m002 from "./client-only-render-prop";

export const DEMOS = {
  "client-only-basic": m000.ClientOnlyBasic,
  "client-only-with-fallback": m001.ClientOnlyWithFallback,
  "client-only-render-prop": m002.ClientOnlyRenderProp,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
