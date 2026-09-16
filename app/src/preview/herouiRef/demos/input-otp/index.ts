/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./on-surface";
import * as m003 from "./disabled";
import * as m004 from "./four-digits";
import * as m005 from "./controlled";
import * as m006 from "./on-complete";
import * as m007 from "./form-example";
import * as m008 from "./with-pattern";
import * as m009 from "./with-validation";
import * as m010 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "on-surface": m002.OnSurface,
  "disabled": m003.Disabled,
  "four-digits": m004.FourDigits,
  "controlled": m005.Controlled,
  "on-complete": m006.OnComplete,
  "form-example": m007.FormExample,
  "with-pattern": m008.WithPattern,
  "with-validation": m009.WithValidation,
  "custom-styles": m010.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
