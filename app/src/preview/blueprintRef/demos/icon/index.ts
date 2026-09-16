import * as m000 from "./IconUsageExample";

export const DEMOS = {
  "IconUsageExample": m000.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "IconExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme, @blueprintjs/select"},
  "IconGeneratedComponentExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
