import * as m000 from "./NumericInputBasicExample";
import * as m001 from "./NumericInputExtendedExample";

export const DEMOS = {
  "NumericInputBasicExample": m000.NumericInputBasicExample,
  "NumericInputExtendedExample": m001.NumericInputExtendedExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "NumericInputExample": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
};
