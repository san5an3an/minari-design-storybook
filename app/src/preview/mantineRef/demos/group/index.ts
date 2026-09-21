import * as m000 from "../_src/demos/core/Group/Group.demo.usage";
import * as m001 from "../_src/demos/core/Group/Group.demo.preventGrowOverflow";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "preventGrowOverflow": m001.preventGrowOverflow,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
