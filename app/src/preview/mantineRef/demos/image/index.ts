import * as m000 from "../_src/demos/core/Image/Image.demo.usage";
import * as m001 from "../_src/demos/core/Image/Image.demo.height";
import * as m002 from "../_src/demos/core/Image/Image.demo.contain";
import * as m003 from "../_src/demos/core/Image/Image.demo.fallback";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "height": m001.height,
  "contain": m002.contain,
  "fallback": m003.fallback,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
