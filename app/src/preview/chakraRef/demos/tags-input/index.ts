/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./tags-input-basic";
import * as m001 from "./tags-input-with-sizes";
import * as m002 from "./tags-input-with-variants";
import * as m003 from "./tags-input-controlled";
import * as m004 from "./tags-input-with-store";
import * as m005 from "./tags-input-with-max";
import * as m006 from "./tags-input-editable";
import * as m007 from "./tags-input-validation";
import * as m008 from "./tags-input-disabled";
import * as m009 from "./tags-input-read-only";
import * as m010 from "./tags-input-invalid";
import * as m011 from "./tags-input-with-field";
import * as m012 from "./tags-input-with-form";
import * as m013 from "./tags-input-with-paste";
import * as m014 from "./tags-input-with-blur-behavior";
import * as m015 from "./tags-input-with-delimiter";
import * as m016 from "./tags-input-with-colors";
import * as m017 from "./tags-input-with-combobox";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "tags-input-basic": m000.TagsInputBasic,
  "tags-input-with-sizes": m001.TagsInputWithSizes,
  "tags-input-with-variants": m002.TagsInputWithVariants,
  "tags-input-controlled": m003.TagsInputControlled,
  "tags-input-with-store": m004.TagsInputWithStore,
  "tags-input-with-max": m005.TagsInputWithMax,
  "tags-input-editable": m006.TagsInputEditable,
  "tags-input-validation": m007.TagsInputValidation,
  "tags-input-disabled": m008.TagsInputDisabled,
  "tags-input-read-only": m009.TagsInputReadOnly,
  "tags-input-invalid": m010.TagsInputInvalid,
  "tags-input-with-field": m011.TagsInputWithField,
  "tags-input-with-form": m012.TagsInputWithForm,
  "tags-input-with-paste": m013.TagsInputWithPaste,
  "tags-input-with-blur-behavior": m014.TagsInputWithBlurBehavior,
  "tags-input-with-delimiter": m015.TagsInputWithDelimiter,
  "tags-input-with-colors": m016.TagsInputWithColors,
  "tags-input-with-combobox": m017.TagsInputWithCombobox,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
