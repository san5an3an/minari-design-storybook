/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./separator-basic";
import * as m001 from "./separator-with-variants";
import * as m002 from "./separator-with-sizes";
import * as m003 from "./separator-with-label";
import * as m004 from "./separator-vertical";
import * as m005 from "./separator-with-responsive-orientation";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "separator-basic": m000.SeparatorBasic,
  "separator-with-variants": m001.SeparatorWithVariants,
  "separator-with-sizes": m002.SeparatorWithSizes,
  "separator-with-label": m003.SeparatorWithLabel,
  "separator-vertical": m004.SeparatorVertical,
  "separator-with-responsive-orientation": m005.SeparatorWithResponsiveOrientation,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
