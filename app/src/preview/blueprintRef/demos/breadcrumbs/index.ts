/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./BreadcrumbsBasicExample";
import * as m001 from "./BreadcrumbsIconExample";
import * as m002 from "./BreadcrumbsOverflowExample";
import * as m003 from "./BreadcrumbsRendererExample";
import * as m004 from "./BreadcrumbsCollapseFromExample";
import * as m005 from "./BreadcrumbsDisabledExample";
import * as m006 from "./BreadcrumbsPlaygroundExample";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "BreadcrumbsBasicExample": m000.default,
  "BreadcrumbsIconExample": m001.default,
  "BreadcrumbsOverflowExample": m002.default,
  "BreadcrumbsRendererExample": m003.default,
  "BreadcrumbsCollapseFromExample": m004.default,
  "BreadcrumbsDisabledExample": m005.default,
  "BreadcrumbsPlaygroundExample": m006.BreadcrumbsPlaygroundExample,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
};
