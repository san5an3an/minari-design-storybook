import * as m000 from "../_src/demos/core/ActionIcon/ActionIcon.demo.usage";
import * as m001 from "../_src/demos/core/ActionIcon/ActionIcon.demo.gradient";
import * as m002 from "../_src/demos/core/ActionIcon/ActionIcon.demo.size";
import * as m003 from "../_src/demos/core/ActionIcon/ActionIcon.demo.inputSize";
import * as m004 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabled";
import * as m005 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabledLink";
import * as m006 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabledStyles";
import * as m007 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabledTooltip";
import * as m008 from "../_src/demos/core/ActionIcon/ActionIcon.demo.loading";
import * as m009 from "../_src/demos/core/ActionIcon/ActionIcon.demo.loaderProps";
import * as m010 from "../_src/demos/core/ActionIcon/ActionIcon.demo.customVariant";
import * as m011 from "../_src/demos/core/ActionIcon/ActionIcon.demo.variantColorsResolver";
import * as m012 from "../_src/demos/core/ActionIcon/ActionIcon.demo.autoContrast";
import * as m013 from "../_src/demos/core/ActionIcon/ActionIcon.demo.customSize";
import * as m014 from "../_src/demos/core/ActionIcon/ActionIcon.demo.group";
import * as m015 from "../_src/demos/core/ActionIcon/ActionIcon.demo.groupSection";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "size": m002.size,
  "inputSize": m003.inputSize,
  "disabled": m004.disabled,
  "disabledLink": m005.disabledLink,
  "disabledStyles": m006.disabledStyles,
  "disabledTooltip": m007.disabledTooltip,
  "loading": m008.loading,
  "loaderProps": m009.loaderProps,
  "customVariant": m010.customVariant,
  "variantColorsResolver": m011.variantColorsResolver,
  "autoContrast": m012.autoContrast,
  "customSize": m013.customSize,
  "group": m014.group,
  "groupSection": m015.groupSection,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
