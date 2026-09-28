/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */

/** key → 공식 export 그대로. */
export const DEMOS = {
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
  "TabsExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: packages/docs-app/src/common/propCodeTooltip"},
};
