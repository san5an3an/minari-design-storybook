import * as m000 from "./basic";
import * as m001 from "./on-surface";
import * as m002 from "./disabled";
import * as m003 from "./indeterminate";
import * as m004 from "./controlled";
import * as m005 from "./validation";
import * as m006 from "./with-custom-indicator";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "on-surface": m001.OnSurface,
  "disabled": m002.Disabled,
  "indeterminate": m003.Indeterminate,
  "controlled": m004.Controlled,
  "validation": m005.Validation,
  "with-custom-indicator": m006.WithCustomIndicator,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "features-and-addons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
