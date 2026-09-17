import * as m000 from "./IconUsageExample";
import * as m001 from "./IconGeneratedComponentExample";

export const DEMOS = {
  "IconUsageExample": m000.default,
  "IconGeneratedComponentExample": m001.IconGeneratedComponentExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "IconExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: common/iconNames"},
};
