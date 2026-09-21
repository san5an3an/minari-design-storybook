import * as m000 from "../_src/demos/core/Anchor/Anchor.demo.usage";
import * as m001 from "../_src/demos/core/Anchor/Anchor.demo.decoration";
import * as m002 from "../_src/demos/core/Anchor/Anchor.demo.textProps";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "decoration": m001.decoration,
  "textProps": m002.textProps,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
