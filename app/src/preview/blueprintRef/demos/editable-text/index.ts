import * as m000 from "./EditableTextBasicExample";
import * as m001 from "./EditableTextDisabledExample";
import * as m002 from "./EditableTextMultilineExample";
import * as m003 from "./EditableTextIntentExample";
import * as m004 from "./EditableTextSelectExample";

export const DEMOS = {
  "EditableTextBasicExample": m000.default,
  "EditableTextDisabledExample": m001.default,
  "EditableTextMultilineExample": m002.default,
  "EditableTextIntentExample": m003.default,
  "EditableTextSelectExample": m004.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "EditableTextPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
