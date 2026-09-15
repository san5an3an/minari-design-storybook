import * as m000 from "./DividerBasicExample";
import * as m001 from "./DividerVerticalExample";

export const DEMOS = {
  "DividerBasicExample": m000.default,
  "DividerVerticalExample": m001.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "DividerPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
