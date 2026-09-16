import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./colors";
import * as m003 from "./without-label";
import * as m004 from "./indeterminate";
import * as m005 from "./custom-value";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "colors": m002.Colors,
  "without-label": m003.WithoutLabel,
  "indeterminate": m004.Indeterminate,
  "custom-value": m005.CustomValue,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
