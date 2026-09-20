import * as m000 from "../_src/demos/core/SemiCircleProgress/SemiCircleProgress.demo.usage";
import * as m001 from "../_src/demos/core/SemiCircleProgress/SemiCircleProgress.demo.emptySegmentColor";
import * as m002 from "../_src/demos/core/SemiCircleProgress/SemiCircleProgress.demo.labelPosition";
import * as m003 from "../_src/demos/core/SemiCircleProgress/SemiCircleProgress.demo.transitions";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "emptySegmentColor": m001.emptySegmentColor,
  "labelPosition": m002.labelPosition,
  "transitions": m003.transitions,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
