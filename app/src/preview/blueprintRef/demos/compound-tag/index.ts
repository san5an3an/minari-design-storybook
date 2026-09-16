/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./CompoundTagBasicExample";
import * as m001 from "./CompoundTagIntentExample";
import * as m002 from "./CompoundTagMinimalExample";
import * as m003 from "./CompoundTagSizeExample";
import * as m004 from "./CompoundTagFillExample";
import * as m005 from "./CompoundTagRoundExample";
import * as m006 from "./CompoundTagIconExample";
import * as m007 from "./CompoundTagRemovableExample";
import * as m008 from "./CompoundTagInteractiveExample";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "CompoundTagBasicExample": m000.default,
  "CompoundTagIntentExample": m001.default,
  "CompoundTagMinimalExample": m002.default,
  "CompoundTagSizeExample": m003.default,
  "CompoundTagFillExample": m004.default,
  "CompoundTagRoundExample": m005.default,
  "CompoundTagIconExample": m006.default,
  "CompoundTagRemovableExample": m007.default,
  "CompoundTagInteractiveExample": m008.default,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "CompoundTagPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
};
