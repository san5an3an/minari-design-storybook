import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./on-surface";
import * as m003 from "./full-width";
import * as m004 from "./controlled";
import * as m005 from "./rows";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "on-surface": m002.OnSurface,
  "full-width": m003.FullWidth,
  "controlled": m004.Controlled,
  "rows": m005.Rows,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
