import * as m000 from "./CardBasicExample";
import * as m001 from "./CardInteractiveExample";
import * as m002 from "./CardCompactExample";
import * as m003 from "./CardElevationExample";

export const DEMOS = {
  "CardBasicExample": m000.default,
  "CardInteractiveExample": m001.default,
  "CardCompactExample": m002.default,
  "CardElevationExample": m003.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "CardPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
