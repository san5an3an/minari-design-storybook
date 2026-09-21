import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./colors";
import * as m003 from "./variants";
import * as m004 from "./fallback";
import * as m005 from "./group";
import * as m006 from "./custom-image-component";
import * as m007 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "colors": m002.Colors,
  "variants": m003.Variants,
  "fallback": m004.Fallback,
  "group": m005.Group,
  "custom-image-component": m006.CustomImageComponent,
  "custom-styles": m007.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
