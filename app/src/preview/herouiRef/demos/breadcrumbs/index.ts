import * as m000 from "./basic";
import * as m001 from "./level-2";
import * as m002 from "./level-3";
import * as m003 from "./disabled";
import * as m004 from "./custom-separator";
import * as m005 from "./render-function";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.default,
  "level-2": m001.default,
  "level-3": m002.default,
  "disabled": m003.default,
  "custom-separator": m004.default,
  "render-function": m005.RenderFunction,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
