/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./pin-input-basic";
import * as m001 from "./pin-input-with-sizes";
import * as m002 from "./pin-input-with-otp";
import * as m003 from "./pin-input-with-mask";
import * as m004 from "./pin-input-with-placeholder";
import * as m005 from "./pin-input-with-field";
import * as m007 from "./pin-input-controlled";
import * as m008 from "./pin-input-with-store";
import * as m009 from "./pin-input-attached";
import * as m010 from "./pin-input-with-separator";
import * as m011 from "./pin-input-alphanumeric";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "pin-input-basic": m000.PinInputBasic,
  "pin-input-with-sizes": m001.PinInputWithSizes,
  "pin-input-with-otp": m002.PinInputWithOtp,
  "pin-input-with-mask": m003.PinInputWithMask,
  "pin-input-with-placeholder": m004.PinInputWithPlaceholder,
  "pin-input-with-field": m005.PinInputWithField,
  "pin-input-controlled": m007.PinInputControlled,
  "pin-input-with-store": m008.PinInputWithStore,
  "pin-input-attached": m009.PinInputAttached,
  "pin-input-with-separator": m010.PinInputWithSeparator,
  "pin-input-alphanumeric": m011.PinInputAlphanumeric,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "pin-input-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
};
