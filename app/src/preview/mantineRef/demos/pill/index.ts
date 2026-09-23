import * as m000 from "../_src/demos/core/Pill/Pill.demo.usage";
import * as m001 from "../_src/demos/core/Pill/Pill.demo.withinInput";
import * as m002 from "../_src/demos/core/Pill/Pill.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "withinInput": m001.withinInput,
  "stylesApi": m002.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
