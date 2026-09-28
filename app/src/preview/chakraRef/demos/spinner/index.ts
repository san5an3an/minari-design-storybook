/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./spinner-basic";
import * as m001 from "./spinner-with-sizes";
import * as m002 from "./spinner-with-colors";
import * as m003 from "./spinner-custom-color";
import * as m004 from "./spinner-with-track-color";
import * as m005 from "./spinner-with-custom-speed";
import * as m006 from "./spinner-with-custom-thickness";
import * as m007 from "./spinner-with-label";
import * as m008 from "./spinner-with-overlay";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "spinner-basic": m000.SpinnerBasic,
  "spinner-with-sizes": m001.SpinnerWithSizes,
  "spinner-with-colors": m002.SpinnerWithColors,
  "spinner-custom-color": m003.SpinnerCustomColor,
  "spinner-with-track-color": m004.SpinnerWithTrackColor,
  "spinner-with-custom-speed": m005.SpinnerWithCustomSpeed,
  "spinner-with-custom-thickness": m006.SpinnerWithCustomThickness,
  "spinner-with-label": m007.SpinnerWithLabel,
  "spinner-with-overlay": m008.SpinnerWithOverlay,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
