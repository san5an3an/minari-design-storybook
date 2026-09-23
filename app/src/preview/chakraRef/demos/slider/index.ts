/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./slider-basic";
import * as m001 from "./slider-with-sizes";
import * as m002 from "./slider-with-variants";
import * as m003 from "./slider-with-colors";
import * as m004 from "./slider-with-label";
import * as m005 from "./slider-with-multiple-thumbs";
import * as m006 from "./slider-prevent-overlap";
import * as m007 from "./slider-with-collision-behavior";
import * as m008 from "./slider-customization";
import * as m009 from "./slider-with-value-text";
import * as m010 from "./slider-controlled";
import * as m011 from "./slider-with-store";
import * as m012 from "./slider-with-hook-form";
import * as m013 from "./slider-disabled";
import * as m014 from "./slider-change-end";
import * as m015 from "./slider-with-step";
import * as m016 from "./slider-with-thumb-alignment";
import * as m017 from "./slider-with-marks";
import * as m018 from "./slider-with-marks-and-label";
import * as m019 from "./slider-vertical";
import * as m020 from "./slider-with-marks-vertical";
import * as m021 from "./slider-with-dragging-indicator";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "slider-basic": m000.SliderBasic,
  "slider-with-sizes": m001.SliderWithSizes,
  "slider-with-variants": m002.SliderWithVariants,
  "slider-with-colors": m003.SliderWithColors,
  "slider-with-label": m004.SliderWithLabel,
  "slider-with-multiple-thumbs": m005.SliderWithMultipleThumbs,
  "slider-prevent-overlap": m006.SliderPreventOverlap,
  "slider-with-collision-behavior": m007.SliderWithCollisionBehavior,
  "slider-customization": m008.SliderCustomization,
  "slider-with-value-text": m009.SliderWithValueText,
  "slider-controlled": m010.SliderControlled,
  "slider-with-store": m011.SliderWithStore,
  "slider-with-hook-form": m012.SliderWithHookForm,
  "slider-disabled": m013.SliderDisabled,
  "slider-change-end": m014.SliderChangeEnd,
  "slider-with-step": m015.SliderWithStep,
  "slider-with-thumb-alignment": m016.SliderWithThumbAlignment,
  "slider-with-marks": m017.SliderWithMarks,
  "slider-with-marks-and-label": m018.SliderWithMarksAndLabel,
  "slider-vertical": m019.SliderVertical,
  "slider-with-marks-vertical": m020.SliderWithMarksVertical,
  "slider-with-dragging-indicator": m021.SliderWithDraggingIndicator,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
