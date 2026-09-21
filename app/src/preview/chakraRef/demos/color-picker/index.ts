/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./color-picker-basic";
import * as m001 from "./color-picker-with-sizes";
import * as m002 from "./color-picker-with-variants";
import * as m003 from "./color-picker-input-only";
import * as m004 from "./color-picker-swatch-only";
import * as m005 from "./color-picker-trigger-only";
import * as m006 from "./color-picker-controlled";
import * as m007 from "./color-picker-with-store";
import * as m008 from "./color-picker-change-end";
import * as m009 from "./color-picker-channel-slider-only";
import * as m011 from "./color-picker-inline";
import * as m012 from "./color-picker-open-from-dialog";
import * as m013 from "./color-picker-with-disabled";
import * as m014 from "./color-picker-with-channel-input";
import * as m015 from "./color-picker-with-fit-content";
import * as m016 from "./color-picker-with-save-swatch";
import * as m017 from "./color-picker-with-swatches";
import * as m018 from "./color-picker-with-swatch-and-input";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "color-picker-basic": m000.ColorPickerBasic,
  "color-picker-with-sizes": m001.ColorPickerWithSizes,
  "color-picker-with-variants": m002.ColorPickerWithVariants,
  "color-picker-input-only": m003.ColorPickerInputOnly,
  "color-picker-swatch-only": m004.ColorPickerSwatchOnly,
  "color-picker-trigger-only": m005.ColorPickerTriggerOnly,
  "color-picker-controlled": m006.ColorPickerControlled,
  "color-picker-with-store": m007.ColorPickerWithStore,
  "color-picker-change-end": m008.ColorPickerChangeEnd,
  "color-picker-channel-slider-only": m009.ColorPickerChannelSliderOnly,
  "color-picker-inline": m011.ColorPickerInline,
  "color-picker-open-from-dialog": m012.ColorPickerOpenFromDialog,
  "color-picker-with-disabled": m013.ColorPickerWithDisabled,
  "color-picker-with-channel-input": m014.ColorPickerWithChannelInput,
  "color-picker-with-fit-content": m015.ColorPickerWithFitContent,
  "color-picker-with-save-swatch": m016.ColorPickerWithSaveSwatch,
  "color-picker-with-swatches": m017.ColorPickerWithSwatches,
  "color-picker-with-swatch-and-input": m018.ColorPickerWithSwatchAndInput,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "color-picker-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-hook-form"},
};
