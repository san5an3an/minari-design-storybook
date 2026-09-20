import * as m000 from "../_src/demos/core/Burger/Burger.demo.usage";
import * as m001 from "../_src/demos/core/Burger/Burger.demo.lineWidth";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "lineWidth": m001.lineWidth,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
