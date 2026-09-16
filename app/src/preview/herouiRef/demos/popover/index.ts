import * as m000 from "./basic";
import * as m001 from "./interactive";
import * as m002 from "./placement";
import * as m003 from "./render-function";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "basic": m000.PopoverBasic,
  "interactive": m001.PopoverInteractive,
  "placement": m002.PopoverPlacement,
  "render-function": m003.RenderFunction,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-arrow": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
