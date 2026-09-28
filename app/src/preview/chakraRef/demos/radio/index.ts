/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./radio-basic";
import * as m001 from "./radio-controlled";
import * as m002 from "./radio-with-colors";
import * as m003 from "./radio-with-sizes";
import * as m004 from "./radio-with-variants";
import * as m005 from "./radio-disabled";
import * as m006 from "./radio-with-hook-form";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "radio-basic": m000.RadioBasic,
  "radio-controlled": m001.RadioControlled,
  "radio-with-colors": m002.RadioWithColors,
  "radio-with-sizes": m003.RadioWithSizes,
  "radio-with-variants": m004.RadioWithVariants,
  "radio-disabled": m005.RadioDisabled,
  "radio-with-hook-form": m006.RadioWithHookForm,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
