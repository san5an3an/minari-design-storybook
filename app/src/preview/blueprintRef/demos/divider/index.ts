import * as m000 from "./DividerBasicExample";
import * as m001 from "./DividerVerticalExample";
import * as m002 from "./DividerPlaygroundExample";

export const DEMOS = {
  "DividerBasicExample": m000.default,
  "DividerVerticalExample": m001.default,
  "DividerPlaygroundExample": m002.DividerPlaygroundExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
