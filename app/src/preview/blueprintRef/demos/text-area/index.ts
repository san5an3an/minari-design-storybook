export const DEMOS = {
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "TextAreaExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
};
