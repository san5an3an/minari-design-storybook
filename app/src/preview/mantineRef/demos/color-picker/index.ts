import * as m000 from "../_src/demos/core/ColorPicker/ColorPicker.demo.usage";
import * as m001 from "../_src/demos/core/ColorPicker/ColorPicker.demo.formatsConfigurator";
import * as m002 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatches";
import * as m003 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatchesConfigurator";
import * as m004 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatchesOnly";
import * as m005 from "../_src/demos/core/ColorPicker/ColorPicker.demo.sizeConfigurator";
import * as m006 from "../_src/demos/core/ColorPicker/ColorPicker.demo.fullWidth";
import * as m007 from "../_src/demos/core/ColorPicker/ColorPicker.demo.stylesApi";
import * as m008 from "../_src/demos/core/ColorPicker/ColorPicker.demo.hueSlider";
import * as m009 from "../_src/demos/core/ColorPicker/ColorPicker.demo.alphaSlider";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatsConfigurator": m001.formatsConfigurator,
  "swatches": m002.swatches,
  "swatchesConfigurator": m003.swatchesConfigurator,
  "swatchesOnly": m004.swatchesOnly,
  "sizeConfigurator": m005.sizeConfigurator,
  "fullWidth": m006.fullWidth,
  "stylesApi": m007.stylesApi,
  "hueSlider": m008.hueSlider,
  "alphaSlider": m009.alphaSlider,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
