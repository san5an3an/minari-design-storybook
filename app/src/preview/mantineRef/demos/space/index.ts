import * as m000 from "../_src/demos/core/Space/Space.demo.horizontal";
import * as m001 from "../_src/demos/core/Space/Space.demo.vertical";

export const DEMOS: Record<string, { component: unknown }> = {
  "horizontal": m000.horizontal,
  "vertical": m001.vertical,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
