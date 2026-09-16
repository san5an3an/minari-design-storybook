import * as m000 from "./placement";
import * as m001 from "./with-arrow";
import * as m002 from "./custom-styles";

export const DEMOS = {
  "placement": m000.TooltipPlacement,
  "with-arrow": m001.TooltipWithArrow,
  "custom-styles": m002.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "basic": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-trigger": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "render-function": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
