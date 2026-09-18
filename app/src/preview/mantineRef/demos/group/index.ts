import * as m000 from "./usage";
import * as m001 from "./preventGrowOverflow";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "preventGrowOverflow": m001.preventGrowOverflow,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
