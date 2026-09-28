/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Uncontrolled";
import m001 from "./Controlled";
import m002 from "./NoAnimation";
import m003 from "./Fill";
import m004 from "./Justified";
import m005 from "./LeftTabs";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Uncontrolled": m000,
  "Controlled": m001,
  "NoAnimation": m002,
  "Fill": m003,
  "Justified": m004,
  "LeftTabs": m005,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
