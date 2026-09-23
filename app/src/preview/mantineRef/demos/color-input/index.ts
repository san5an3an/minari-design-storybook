import * as m000 from "../_src/demos/core/ColorInput/ColorInput.demo.usage";
import * as m001 from "../_src/demos/core/ColorInput/ColorInput.demo.formatsConfigurator";
import * as m002 from "../_src/demos/core/ColorInput/ColorInput.demo.fixOnBlur";
import * as m003 from "../_src/demos/core/ColorInput/ColorInput.demo.onChangeEnd";
import * as m004 from "../_src/demos/core/ColorInput/ColorInput.demo.disallowInput";
import * as m005 from "../_src/demos/core/ColorInput/ColorInput.demo.swatches";
import * as m006 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatchesConfigurator";
import * as m007 from "../_src/demos/core/ColorInput/ColorInput.demo.swatchesOnly";
import * as m008 from "../_src/demos/core/ColorInput/ColorInput.demo.closeOnColorSwatchClick";
import * as m009 from "../_src/demos/core/ColorInput/ColorInput.demo.withPicker";
import * as m010 from "../_src/demos/core/ColorInput/ColorInput.demo.noEyeDropper";
import * as m011 from "../_src/demos/core/ColorInput/ColorInput.demo.eyeDropperIcon";
import * as m012 from "../_src/demos/core/ColorInput/ColorInput.demo.sections";
import * as m013 from "../_src/demos/core/ColorInput/ColorInput.demo.error";
import * as m014 from "../_src/demos/core/ColorInput/ColorInput.demo.disabled";
import * as m015 from "../_src/demos/core/ColorInput/ColorInput.demo.readOnly";
import * as m016 from "../_src/demos/core/ColorInput/ColorInput.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatsConfigurator": m001.formatsConfigurator,
  "fixOnBlur": m002.fixOnBlur,
  "onChangeEnd": m003.onChangeEnd,
  "disallowInput": m004.disallowInput,
  "swatches": m005.swatches,
  "swatchesConfigurator": m006.swatchesConfigurator,
  "swatchesOnly": m007.swatchesOnly,
  "closeOnColorSwatchClick": m008.closeOnColorSwatchClick,
  "withPicker": m009.withPicker,
  "noEyeDropper": m010.noEyeDropper,
  "eyeDropperIcon": m011.eyeDropperIcon,
  "sections": m012.sections,
  "error": m013.error,
  "disabled": m014.disabled,
  "readOnly": m015.readOnly,
  "stylesApi": m016.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
