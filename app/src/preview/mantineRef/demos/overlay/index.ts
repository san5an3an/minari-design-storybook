import * as m000 from "./usage";
import * as m001 from "./gradient";
import * as m002 from "./blur";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "blur": m002.blur,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
