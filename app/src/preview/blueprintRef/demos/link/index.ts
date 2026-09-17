import * as m000 from "./LinkBasicExample";
import * as m001 from "./LinkWithinTextExample";
import * as m002 from "./LinkUnderlineExample";
import * as m003 from "./LinkColorExample";
import * as m004 from "./LinkExternalExample";

export const DEMOS = {
  "LinkBasicExample": m000.default,
  "LinkWithinTextExample": m001.default,
  "LinkUnderlineExample": m002.default,
  "LinkColorExample": m003.default,
  "LinkExternalExample": m004.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
