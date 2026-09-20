export const DEMOS = {
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "SwitchCardExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
  "CheckboxCardExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
  "RadioCardGroupExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
  "ControlCardListExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
};
