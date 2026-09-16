import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./colors";
import * as m003 from "./indeterminate";
import * as m004 from "./with-label";
import * as m005 from "./custom-svg";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "colors": m002.Colors,
  "indeterminate": m003.Indeterminate,
  "with-label": m004.WithLabel,
  "custom-svg": m005.CustomSvg,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
