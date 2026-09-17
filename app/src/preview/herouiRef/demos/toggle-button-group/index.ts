import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./orientation";
import * as m003 from "./full-width";
import * as m004 from "./disabled";
import * as m005 from "./without-separator";
import * as m006 from "./attached";
import * as m007 from "./selection-mode";
import * as m008 from "./controlled";
import * as m009 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "orientation": m002.Orientation,
  "full-width": m003.FullWidth,
  "disabled": m004.Disabled,
  "without-separator": m005.WithoutSeparator,
  "attached": m006.Attached,
  "selection-mode": m007.SelectionMode,
  "controlled": m008.Controlled,
  "custom-styles": m009.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
