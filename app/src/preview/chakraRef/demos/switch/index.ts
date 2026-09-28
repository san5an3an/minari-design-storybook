/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./switch-basic";
import * as m001 from "./switch-with-sizes";
import * as m002 from "./switch-with-variants";
import * as m003 from "./switch-with-colors";
import * as m004 from "./switch-controlled";
import * as m005 from "./switch-with-hook-form";
import * as m006 from "./switch-with-disabled";
import * as m007 from "./switch-with-invalid";
import * as m008 from "./switch-with-tooltip";
import * as m009 from "./switch-with-track-indicator";
import * as m010 from "./switch-with-thumb-indicator";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "switch-basic": m000.SwitchBasic,
  "switch-with-sizes": m001.SwitchWithSizes,
  "switch-with-variants": m002.SwitchWithVariants,
  "switch-with-colors": m003.SwitchWithColors,
  "switch-controlled": m004.SwitchControlled,
  "switch-with-hook-form": m005.SwitchWithHookForm,
  "switch-with-disabled": m006.SwitchWithDisabled,
  "switch-with-invalid": m007.SwitchWithInvalid,
  "switch-with-tooltip": m008.SwitchWithTooltip,
  "switch-with-track-indicator": m009.SwitchWithTrackIndicator,
  "switch-with-thumb-indicator": m010.SwitchWithThumbIndicator,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
