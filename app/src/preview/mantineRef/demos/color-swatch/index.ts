import * as m000 from "./usage";
import * as m001 from "./shadow";
import * as m002 from "./component";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "shadow": m001.shadow,
  "component": m002.component,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
