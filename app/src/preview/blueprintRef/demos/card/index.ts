/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./CardBasicExample";
import * as m001 from "./CardInteractiveExample";
import * as m002 from "./CardCompactExample";
import * as m003 from "./CardElevationExample";
import * as m004 from "./CardPlaygroundExample";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "CardBasicExample": m000.default,
  "CardInteractiveExample": m001.default,
  "CardCompactExample": m002.default,
  "CardElevationExample": m003.default,
  "CardPlaygroundExample": m004.CardPlaygroundExample,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
};
