import * as m000 from "./usage";
import * as m001 from "./compound";
import * as m002 from "./tooltips";
import * as m003 from "./transition";
import * as m004 from "./segments";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "compound": m001.compound,
  "tooltips": m002.tooltips,
  "transition": m003.transition,
  "segments": m004.segments,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
