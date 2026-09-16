import * as m000 from "./default";
import * as m001 from "./multi-select";
import * as m002 from "./virtualization";
import * as m003 from "./render-function";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "multi-select": m001.MultiSelect,
  "virtualization": m002.Virtualization,
  "render-function": m003.RenderFunction,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-disabled-items": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-sections": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "controlled": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-check-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
