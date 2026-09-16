/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./FormGroup";
import m001 from "./GridBasic";
import m002 from "./GridComplex";
import m003 from "./Horizontal";
import m004 from "./FormLabelSizing";
import m005 from "./GridColSizes";
import m006 from "./GridAutoSizing";
import m007 from "./GridAutoSizingColMix";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "FormGroup": m000,
  "GridBasic": m001,
  "GridComplex": m002,
  "Horizontal": m003,
  "FormLabelSizing": m004,
  "GridColSizes": m005,
  "GridAutoSizing": m006,
  "GridAutoSizingColMix": m007,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
