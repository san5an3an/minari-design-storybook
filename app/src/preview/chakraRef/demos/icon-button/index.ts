/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./icon-button-basic";
import * as m001 from "./icon-button-with-sizes";
import * as m002 from "./icon-button-with-variants";
import * as m003 from "./icon-button-with-colors";
import * as m004 from "./icon-button-rounded";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "icon-button-basic": m000.IconButtonBasic,
  "icon-button-with-sizes": m001.IconButtonWithSizes,
  "icon-button-with-variants": m002.IconButtonWithVariants,
  "icon-button-with-colors": m003.IconButtonWithColors,
  "icon-button-rounded": m004.IconButtonRounded,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
