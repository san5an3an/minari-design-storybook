/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Basic";
import m001 from "./WithLabel";
import m002 from "./ScreenreaderLabel";
import m003 from "./Contextual";
import m004 from "./Striped";
import m005 from "./Animated";
import m006 from "./Stacked";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "WithLabel": m001,
  "ScreenreaderLabel": m002,
  "Contextual": m003,
  "Striped": m004,
  "Animated": m005,
  "Stacked": m006,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
