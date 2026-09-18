import * as m000 from "./show-basic";
import * as m001 from "./show-with-fallback";
import * as m002 from "./show-with-render-prop";

export const DEMOS = {
  "show-basic": m000.ShowBasic,
  "show-with-fallback": m001.ShowWithFallback,
  "show-with-render-prop": m002.ShowWithRenderProp,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
