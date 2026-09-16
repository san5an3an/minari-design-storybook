import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./disabled";
import * as m004 from "./stack-layout";
import * as m005 from "./default-value";
import * as m006 from "./controlled";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "sizes": m002.Sizes,
  "disabled": m003.Disabled,
  "stack-layout": m004.StackLayout,
  "default-value": m005.DefaultValue,
  "controlled": m006.Controlled,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "custom-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
