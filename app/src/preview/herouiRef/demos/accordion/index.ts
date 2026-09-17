import * as m000 from "./basic";
import * as m001 from "./surface";
import * as m002 from "./without-separator";
import * as m003 from "./multiple";
import * as m004 from "./disabled";
import * as m005 from "./controlled";
import * as m006 from "./custom-indicator";
import * as m007 from "./render-function";
import * as m008 from "./faq";
import * as m009 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "surface": m001.Surface,
  "without-separator": m002.WithoutSeparator,
  "multiple": m003.Multiple,
  "disabled": m004.Disabled,
  "controlled": m005.Controlled,
  "custom-indicator": m006.CustomIndicator,
  "render-function": m007.RenderFunction,
  "faq": m008.FAQ,
  "custom-styles": m009.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
