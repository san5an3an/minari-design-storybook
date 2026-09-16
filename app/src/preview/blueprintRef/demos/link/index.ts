import * as m000 from "./LinkBasicExample";
import * as m001 from "./LinkWithinTextExample";
import * as m002 from "./LinkExternalExample";

export const DEMOS = {
  "LinkBasicExample": m000.default,
  "LinkWithinTextExample": m001.default,
  "LinkExternalExample": m002.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "LinkUnderlineExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/labs"},
  "LinkColorExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/labs"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
