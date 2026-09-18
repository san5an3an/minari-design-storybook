import * as m000 from "./usage";
import * as m001 from "./emptySegmentColor";
import * as m002 from "./labelPosition";
import * as m003 from "./transitions";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "emptySegmentColor": m001.emptySegmentColor,
  "labelPosition": m002.labelPosition,
  "transitions": m003.transitions,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
