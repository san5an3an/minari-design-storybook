/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./horizontal";
import * as m002 from "./variants";
import * as m003 from "./on-surface";
import * as m004 from "./disabled";
import * as m005 from "./controlled";
import * as m006 from "./uncontrolled";
import * as m007 from "./validation";
import * as m008 from "./delivery-and-payment";
import * as m009 from "./custom-indicator";
import * as m010 from "./render-function";
import * as m011 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "horizontal": m001.Horizontal,
  "variants": m002.Variants,
  "on-surface": m003.OnSurface,
  "disabled": m004.Disabled,
  "controlled": m005.Controlled,
  "uncontrolled": m006.Uncontrolled,
  "validation": m007.Validation,
  "delivery-and-payment": m008.DeliveryAndPayment,
  "custom-indicator": m009.CustomIndicator,
  "render-function": m010.RenderFunction,
  "custom-styles": m011.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
