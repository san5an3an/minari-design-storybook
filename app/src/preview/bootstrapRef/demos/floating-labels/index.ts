/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./FormFloatingBasic";
import m001 from "./FormFloatingTextarea";
import m002 from "./FormFloatingSelect";
import m003 from "./FormFloatingLayout";
import m004 from "./FormFloatingCustom";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "FormFloatingBasic": m000,
  "FormFloatingTextarea": m001,
  "FormFloatingSelect": m002,
  "FormFloatingLayout": m003,
  "FormFloatingCustom": m004,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
