import * as m000 from "./usage";
import * as m001 from "./transition";
import * as m002 from "./nested";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "transition": m001.transition,
  "nested": m002.nested,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
