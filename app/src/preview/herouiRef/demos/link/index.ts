import * as m000 from "./basic";
import * as m001 from "./icon-placement";
import * as m002 from "./underline-and-offset";
import * as m003 from "./render-function";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "basic": m000.LinkBasic,
  "icon-placement": m001.LinkIconPlacement,
  "underline-and-offset": m002.LinkUnderlineAndOffset,
  "render-function": m003.RenderFunction,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "custom-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
