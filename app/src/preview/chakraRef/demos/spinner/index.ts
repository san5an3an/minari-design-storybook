import * as m000 from "./spinner-basic";
import * as m001 from "./spinner-with-sizes";
import * as m002 from "./spinner-with-colors";
import * as m003 from "./spinner-custom-color";
import * as m004 from "./spinner-with-track-color";
import * as m005 from "./spinner-with-custom-speed";
import * as m006 from "./spinner-with-custom-thickness";
import * as m007 from "./spinner-with-label";
import * as m008 from "./spinner-with-overlay";

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

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
