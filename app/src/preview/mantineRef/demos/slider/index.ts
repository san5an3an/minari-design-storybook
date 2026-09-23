import * as m000 from "../_src/demos/core/Slider/Slider.demo.configurator";
import * as m001 from "../_src/demos/core/Slider/Slider.demo.rangeConfigurator";
import * as m002 from "../_src/demos/core/Slider/Slider.demo.disabled";
import * as m003 from "../_src/demos/core/Slider/Slider.demo.changeEnd";
import * as m004 from "../_src/demos/core/Slider/Slider.demo.label";
import * as m005 from "../_src/demos/core/Slider/Slider.demo.step";
import * as m006 from "../_src/demos/core/Slider/Slider.demo.decimal";
import * as m007 from "../_src/demos/core/Slider/Slider.demo.decimalRange";
import * as m008 from "../_src/demos/core/Slider/Slider.demo.marks";
import * as m009 from "../_src/demos/core/Slider/Slider.demo.restrictToMarks";
import * as m010 from "../_src/demos/core/Slider/Slider.demo.thumbSize";
import * as m011 from "../_src/demos/core/Slider/Slider.demo.thumbChildren";
import * as m012 from "../_src/demos/core/Slider/Slider.demo.scale";
import * as m013 from "../_src/demos/core/Slider/Slider.demo.inverted";
import * as m014 from "../_src/demos/core/Slider/Slider.demo.stylesApi";
import * as m015 from "../_src/demos/core/Slider/Slider.demo.customize";
import * as m016 from "../_src/demos/core/Slider/Slider.demo.customSlider";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "rangeConfigurator": m001.rangeConfigurator,
  "disabled": m002.disabled,
  "changeEnd": m003.changeEnd,
  "label": m004.label,
  "step": m005.step,
  "decimal": m006.decimal,
  "decimalRange": m007.decimalRange,
  "marks": m008.marks,
  "restrictToMarks": m009.restrictToMarks,
  "thumbSize": m010.thumbSize,
  "thumbChildren": m011.thumbChildren,
  "scale": m012.scale,
  "inverted": m013.inverted,
  "stylesApi": m014.stylesApi,
  "customize": m015.customize,
  "customSlider": m016.customSlider,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
