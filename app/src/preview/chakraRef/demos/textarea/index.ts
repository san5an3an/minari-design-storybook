/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./textarea-basic";
import * as m001 from "./textarea-with-variants";
import * as m002 from "./textarea-with-sizes";
import * as m003 from "./textarea-with-helper-text";
import * as m004 from "./textarea-with-error-text";
import * as m005 from "./input-with-field";
import * as m006 from "./textarea-with-hook-form";
import * as m007 from "./textarea-with-resize";
import * as m008 from "./textarea-with-autoresize";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "textarea-basic": m000.TextareaBasic,
  "textarea-with-variants": m001.TextareaWithVariants,
  "textarea-with-sizes": m002.TextareaWithSizes,
  "textarea-with-helper-text": m003.TextareaWithHelperText,
  "textarea-with-error-text": m004.TextareaWithErrorText,
  "input-with-field": m005.InputWithField,
  "textarea-with-hook-form": m006.TextareaWithHookForm,
  "textarea-with-resize": m007.TextareaWithResize,
  "textarea-with-autoresize": m008.TextareaWithAutoresize,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
