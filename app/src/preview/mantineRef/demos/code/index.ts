import * as m000 from "../_src/demos/core/Code/Code.demo.usage";
import * as m001 from "../_src/demos/core/Code/Code.demo.block";
import * as m002 from "../_src/demos/core/Code/Code.demo.colors";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "block": m001.block,
  "colors": m002.colors,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
