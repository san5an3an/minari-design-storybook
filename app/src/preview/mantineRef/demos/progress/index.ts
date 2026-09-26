import * as m000 from "../_src/demos/core/Progress/Progress.demo.usage";
import * as m001 from "../_src/demos/core/Progress/Progress.demo.compound";
import * as m002 from "../_src/demos/core/Progress/Progress.demo.tooltips";
import * as m003 from "../_src/demos/core/Progress/Progress.demo.transition";
import * as m004 from "../_src/demos/core/Progress/Progress.demo.segments";
import * as m005 from "../_src/demos/core/Progress/Progress.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "compound": m001.compound,
  "tooltips": m002.tooltips,
  "transition": m003.transition,
  "segments": m004.segments,
  "stylesApi": m005.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
