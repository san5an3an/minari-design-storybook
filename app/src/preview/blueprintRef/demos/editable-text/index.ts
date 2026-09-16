/* 자동 생성 — tools/gen_blueprint_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./EditableTextBasicExample";
import * as m001 from "./EditableTextDisabledExample";
import * as m002 from "./EditableTextMultilineExample";
import * as m003 from "./EditableTextIntentExample";
import * as m004 from "./EditableTextSelectExample";

/** key → 공식 export 그대로. */
export const DEMOS = {
  "EditableTextBasicExample": m000.default,
  "EditableTextDisabledExample": m001.default,
  "EditableTextMultilineExample": m002.default,
  "EditableTextIntentExample": m003.default,
  "EditableTextSelectExample": m004.default,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부 · `code` 는 선언 순서 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "EditableTextPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

/** ⏳ 판단 대기 — demos 도 skipped 도 아니다(U-3 등). */
export const PENDING: Record<string, { reason: string; detail: string }> = {
};
