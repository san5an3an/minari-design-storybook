import * as m000 from "./usage";
import * as m001 from "./height";
import * as m002 from "./contain";
import * as m003 from "./fallback";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "height": m001.height,
  "contain": m002.contain,
  "fallback": m003.fallback,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
