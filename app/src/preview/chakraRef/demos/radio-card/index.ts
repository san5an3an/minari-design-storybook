/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./radio-card-basic";
import * as m001 from "./radio-card-with-description";
import * as m002 from "./radio-card-with-sizes";
import * as m003 from "./radio-card-with-colors";
import * as m004 from "./radio-card-with-variants";
import * as m005 from "./radio-card-with-icon";
import * as m006 from "./radio-card-controlled";
import * as m007 from "./radio-card-without-indicator";
import * as m008 from "./radio-card-without-indicator-vertical";
import * as m009 from "./radio-card-with-responsive-orientation";
import * as m010 from "./radio-card-centered";
import * as m011 from "./radio-card-composition";
import * as m012 from "./radio-card-with-addon";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "radio-card-basic": m000.RadioCardBasic,
  "radio-card-with-description": m001.RadioCardWithDescription,
  "radio-card-with-sizes": m002.RadioCardWithSizes,
  "radio-card-with-colors": m003.RadioCardWithColors,
  "radio-card-with-variants": m004.RadioCardWithVariants,
  "radio-card-with-icon": m005.RadioCardWithIcon,
  "radio-card-controlled": m006.RadioCardControlled,
  "radio-card-without-indicator": m007.RadioCardWithoutIndicator,
  "radio-card-without-indicator-vertical": m008.RadioCardWithoutIndicatorVertical,
  "radio-card-with-responsive-orientation": m009.RadioCardWithResponsiveOrientation,
  "radio-card-centered": m010.RadioCardCentered,
  "radio-card-composition": m011.RadioCardComposition,
  "radio-card-with-addon": m012.RadioCardWithAddon,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
