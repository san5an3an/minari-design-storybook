import * as m000 from "./usage";
import * as m001 from "./decoration";
import * as m002 from "./textProps";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "decoration": m001.decoration,
  "textProps": m002.textProps,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
