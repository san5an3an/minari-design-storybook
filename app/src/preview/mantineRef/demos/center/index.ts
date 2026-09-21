import * as m000 from "../_src/demos/core/Center/Center.demo.usage";
import * as m001 from "../_src/demos/core/Center/Center.demo.inline";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "inline": m001.inline,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
