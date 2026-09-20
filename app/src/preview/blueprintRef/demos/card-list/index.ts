import * as m000 from "./CardListBasicExample";
import * as m001 from "./CardListBorderedExample";
import * as m002 from "./CardListCompactExample";
import * as m003 from "./CardListSectionExample";

export const DEMOS = {
  "CardListBasicExample": m000.default,
  "CardListBorderedExample": m001.default,
  "CardListCompactExample": m002.default,
  "CardListSectionExample": m003.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "CardListPlaygroundExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
};
