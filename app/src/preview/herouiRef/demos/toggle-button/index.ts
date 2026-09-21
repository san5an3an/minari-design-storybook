import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./icon-only";
import * as m003 from "./sizes";
import * as m004 from "./disabled";
import * as m005 from "./controlled";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "icon-only": m002.IconOnly,
  "sizes": m003.Sizes,
  "disabled": m004.Disabled,
  "controlled": m005.Controlled,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
