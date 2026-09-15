import * as m000 from "./CollapseBasicExample";
import * as m001 from "./CollapseMountedExample";

export const DEMOS = {
  "CollapseBasicExample": m000.default,
  "CollapseMountedExample": m001.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "CollapsePlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
