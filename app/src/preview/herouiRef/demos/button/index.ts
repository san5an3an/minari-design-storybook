import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./loading";
import * as m004 from "./disabled";
import * as m005 from "./render-function";
import * as m006 from "./custom-variants";
import * as m007 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "sizes": m002.Sizes,
  "loading": m003.Loading,
  "disabled": m004.Disabled,
  "render-function": m005.RenderFunction,
  "custom-variants": m006.CustomVariants,
  "custom-styles": m007.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-icons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "icon-only": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "loading-state": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "full-width": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "social": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
  "ripple-effect": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: m3-ripple"},
};
