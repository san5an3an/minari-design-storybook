export const DEMOS = {
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "MenuItemExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: "},
};
