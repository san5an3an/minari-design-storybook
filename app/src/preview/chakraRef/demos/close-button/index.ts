/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./close-button-basic";
import * as m001 from "./close-button-with-sizes";
import * as m002 from "./close-button-with-variants";
import * as m003 from "./close-button-with-custom-icon";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "close-button-basic": m000.CloseButtonBasic,
  "close-button-with-sizes": m001.CloseButtonWithSizes,
  "close-button-with-variants": m002.CloseButtonWithVariants,
  "close-button-with-custom-icon": m003.CloseButtonWithCustomIcon,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
