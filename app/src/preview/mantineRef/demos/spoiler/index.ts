import * as m000 from "../_src/demos/core/Spoiler/Spoiler.demo.usage";
import * as m001 from "../_src/demos/core/Spoiler/Spoiler.demo.transitions";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "transitions": m001.transitions,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
