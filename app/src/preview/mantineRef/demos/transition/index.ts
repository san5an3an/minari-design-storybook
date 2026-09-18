import * as m000 from "./transitions";
import * as m001 from "./custom";
import * as m002 from "./delay";

export const DEMOS: Record<string, { component: unknown }> = {
  "transitions": m000.transitions,
  "custom": m001.custom,
  "delay": m002.delay,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
