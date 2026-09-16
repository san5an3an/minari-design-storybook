/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */

/** key → 공식 export 그대로. */
export const DEMOS = {
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "NavbarExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "NavbarFixedWidthExample": {"code": "other", "codes": ["other"], "detail": "A 파일이 아니라 `navbarExample.tsx` 안 인라인 JSX — 선언 안을 자르면 본문 불변 위반(판 6 §7)"},
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
};
