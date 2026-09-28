/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./TextControls";
import m001 from "./InputSizes";
import m002 from "./FormControlDisabled";
import m003 from "./InputReadOnly";
import m004 from "./Plaintext";
import m005 from "./FormFile";
import m006 from "./ColorPicker";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "TextControls": m000,
  "InputSizes": m001,
  "FormControlDisabled": m002,
  "InputReadOnly": m003,
  "Plaintext": m004,
  "FormFile": m005,
  "ColorPicker": m006,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
