/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */

/** key → 공식 export 그대로. */
export const DEMOS = {
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "popoverExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme, @blueprintjs/select"},
  "popoverPlacementExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "popoverInteractionKindExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "popoverDismissExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "popoverPortalExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "popoverSizingExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "popoverMinimalExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
  "popover-mdx__fence__1": {"reason": "U-3", "detail": "펜스 완결 코드 — 공식 사이트가 렌더하지 않는 코드를 예제로 칠지 사용자 판단 대기(ADR §10 U-3)"},
  "popover-mdx__fence__2": {"reason": "U-3", "detail": "펜스 완결 코드 — 공식 사이트가 렌더하지 않는 코드를 예제로 칠지 사용자 판단 대기(ADR §10 U-3)"},
};
