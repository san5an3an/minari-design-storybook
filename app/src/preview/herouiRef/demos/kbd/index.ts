import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./navigation";
import * as m003 from "./inline";
import * as m004 from "./instructional";
import * as m005 from "./special";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "navigation": m002.NavigationKeys,
  "inline": m003.InlineUsage,
  "instructional": m004.InstructionalText,
  "special": m005.SpecialKeys,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
