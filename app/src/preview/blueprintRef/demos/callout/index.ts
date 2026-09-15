import * as m000 from "./CalloutBasicExample";
import * as m001 from "./CalloutIntentExample";
import * as m002 from "./CalloutIconExample";
import * as m003 from "./CalloutCompactExample";
import * as m004 from "./CalloutMinimalExample";

export const DEMOS = {
  "CalloutBasicExample": m000.default,
  "CalloutIntentExample": m001.default,
  "CalloutIconExample": m002.default,
  "CalloutCompactExample": m003.default,
  "CalloutMinimalExample": m004.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "CalloutPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme, @blueprintjs/select"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
