/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./alert-basic";
import * as m001 from "./alert-with-description";
import * as m002 from "./alert-with-status";
import * as m003 from "./alert-with-variants";
import * as m004 from "./alert-with-close-button";
import * as m005 from "./alert-with-spinner";
import * as m006 from "./alert-with-custom-icon";
import * as m007 from "./alert-with-color-palette-override";
import * as m008 from "./alert-with-customization";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "alert-basic": m000.AlertBasic,
  "alert-with-description": m001.AlertWithDescription,
  "alert-with-status": m002.AlertWithStatus,
  "alert-with-variants": m003.AlertWithVariants,
  "alert-with-close-button": m004.AlertWithCloseButton,
  "alert-with-spinner": m005.AlertWithSpinner,
  "alert-with-custom-icon": m006.AlertWithCustomIcon,
  "alert-with-color-palette-override": m007.AlertWithColorPaletteOverride,
  "alert-with-customization": m008.AlertWithCustomization,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
