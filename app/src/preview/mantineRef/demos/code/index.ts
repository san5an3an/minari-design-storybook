import * as m000 from "./usage";
import * as m001 from "./block";
import * as m002 from "./colors";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "block": m001.block,
  "colors": m002.colors,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
