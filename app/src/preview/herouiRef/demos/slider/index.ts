import * as m000 from "./default";
import * as m001 from "./disabled";
import * as m002 from "./vertical";
import * as m003 from "./range";
import * as m004 from "./render-function";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "disabled": m001.Disabled,
  "vertical": m002.Vertical,
  "range": m003.Range,
  "render-function": m004.RenderFunction,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
