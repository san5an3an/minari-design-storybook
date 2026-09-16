/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Vertical";
import m001 from "./Horizontal";
import m002 from "./HorizontalMarginStart";
import m003 from "./HorizontalVerticalRules";
import m004 from "./Buttons";
import m005 from "./Form";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Vertical": m000,
  "Horizontal": m001,
  "HorizontalMarginStart": m002,
  "HorizontalVerticalRules": m003,
  "Buttons": m004,
  "Form": m005,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
