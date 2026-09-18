import * as m000 from "./usage";
import * as m001 from "./all";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "all": m001.all,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
