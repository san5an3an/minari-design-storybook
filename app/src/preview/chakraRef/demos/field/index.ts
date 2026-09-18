/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./field-basic";
import * as m001 from "./field-with-error-text";
import * as m002 from "./field-with-error-icon";
import * as m003 from "./field-with-helper-text";
import * as m004 from "./field-horizontal";
import * as m005 from "./field-with-disabled";
import * as m006 from "./field-with-textarea";
import * as m007 from "./field-with-native-select";
import * as m008 from "./field-with-required";
import * as m009 from "./field-with-optional";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "field-basic": m000.FieldBasic,
  "field-with-error-text": m001.FieldWithErrorText,
  "field-with-error-icon": m002.FieldWithErrorIcon,
  "field-with-helper-text": m003.FieldWithHelperText,
  "field-horizontal": m004.FieldHorizontal,
  "field-with-disabled": m005.FieldWithDisabled,
  "field-with-textarea": m006.FieldWithTextarea,
  "field-with-native-select": m007.FieldWithNativeSelect,
  "field-with-required": m008.FieldWithRequired,
  "field-with-optional": m009.FieldWithOptional,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
