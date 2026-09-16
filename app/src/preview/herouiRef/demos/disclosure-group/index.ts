import * as m000 from "./custom-styles";

export const DEMOS = {
  "custom-styles": m000.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "basic": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons, @iconify/react"},
  "controlled": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons, @iconify/react"},
};
