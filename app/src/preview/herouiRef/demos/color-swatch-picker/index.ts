import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./disabled";
import * as m004 from "./stack-layout";
import * as m005 from "./default-value";
import * as m006 from "./controlled";
import * as m007 from "./custom-indicator";
import * as m008 from "./render-function";
import * as m009 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "sizes": m002.Sizes,
  "disabled": m003.Disabled,
  "stack-layout": m004.StackLayout,
  "default-value": m005.DefaultValue,
  "controlled": m006.Controlled,
  "custom-indicator": m007.CustomIndicator,
  "render-function": m008.RenderFunction,
  "custom-styles": m009.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
