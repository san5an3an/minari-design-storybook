import * as m000 from "./horizontal";
import * as m001 from "./vertical";

export const DEMOS: Record<string, { component: unknown }> = {
  "horizontal": m000.horizontal,
  "vertical": m001.vertical,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
