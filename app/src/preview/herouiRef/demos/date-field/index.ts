import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./with-description";
import * as m003 from "./required";
import * as m004 from "./disabled";
import * as m005 from "./invalid";
import * as m006 from "./controlled";
import * as m007 from "./with-validation";
import * as m008 from "./render-function";
import * as m009 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "with-description": m002.WithDescription,
  "required": m003.Required,
  "disabled": m004.Disabled,
  "invalid": m005.Invalid,
  "controlled": m006.Controlled,
  "with-validation": m007.WithValidation,
  "render-function": m008.RenderFunction,
  "custom-styles": m009.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-prefix-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-suffix-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-prefix-and-suffix": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "on-surface": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "full-width": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "granularity": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "form-example": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
