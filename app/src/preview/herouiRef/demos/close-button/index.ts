import * as m000 from "./default";
import * as m001 from "./interactive";
import * as m002 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "interactive": m001.Interactive,
  "custom-styles": m002.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-custom-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
