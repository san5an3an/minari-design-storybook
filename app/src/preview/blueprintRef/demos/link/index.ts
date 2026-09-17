/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./LinkBasicExample";
import * as m001 from "./LinkWithinTextExample";
import * as m002 from "./LinkUnderlineExample";
import * as m003 from "./LinkColorExample";
import * as m004 from "./LinkExternalExample";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "LinkBasicExample": m000.default,
  "LinkWithinTextExample": m001.default,
  "LinkUnderlineExample": m002.default,
  "LinkColorExample": m003.default,
  "LinkExternalExample": m004.default,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
};
