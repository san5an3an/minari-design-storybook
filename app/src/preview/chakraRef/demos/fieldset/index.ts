/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./fieldset-basic";
import * as m001 from "./fieldset-with-disabled";
import * as m002 from "./fieldset-with-invalid";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "fieldset-basic": m000.FieldsetBasic,
  "fieldset-with-disabled": m001.FieldsetWithDisabled,
  "fieldset-with-invalid": m002.FieldsetWithInvalid,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
