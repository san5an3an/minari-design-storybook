/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./number-input-basic";
import * as m001 from "./number-input-with-sizes";
import * as m002 from "./number-input-with-format-options";
import * as m003 from "./number-input-with-min-max";
import * as m004 from "./number-input-with-step";
import * as m005 from "./number-input-controlled";
import * as m006 from "./number-input-with-stepper";
import * as m007 from "./number-input-with-mouse-wheel";
import * as m008 from "./number-input-with-disabled";
import * as m009 from "./number-input-with-invalid";
import * as m010 from "./number-input-with-field";
import * as m011 from "./number-input-with-element";
import * as m012 from "./number-input-with-scrubber";
import * as m013 from "./number-input-with-hook-form";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "number-input-basic": m000.NumberInputBasic,
  "number-input-with-sizes": m001.NumberInputWithSizes,
  "number-input-with-format-options": m002.NumberInputWithFormatOptions,
  "number-input-with-min-max": m003.NumberInputWithMinMax,
  "number-input-with-step": m004.NumberInputWithStep,
  "number-input-controlled": m005.NumberInputControlled,
  "number-input-with-stepper": m006.NumberInputWithStepper,
  "number-input-with-mouse-wheel": m007.NumberInputWithMouseWheel,
  "number-input-with-disabled": m008.NumberInputWithDisabled,
  "number-input-with-invalid": m009.NumberInputWithInvalid,
  "number-input-with-field": m010.NumberInputWithField,
  "number-input-with-element": m011.NumberInputWithElement,
  "number-input-with-scrubber": m012.NumberInputWithScrubber,
  "number-input-with-hook-form": m013.NumberInputWithHookForm,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
