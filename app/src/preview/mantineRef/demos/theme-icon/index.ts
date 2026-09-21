import * as m000 from "../_src/demos/core/ThemeIcon/ThemeIcon.demo.usage";
import * as m001 from "../_src/demos/core/ThemeIcon/ThemeIcon.demo.gradient";
import * as m002 from "../_src/demos/core/ThemeIcon/ThemeIcon.demo.variantColorsResolver";
import * as m003 from "../_src/demos/core/ThemeIcon/ThemeIcon.demo.autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "variantColorsResolver": m002.variantColorsResolver,
  "autoContrast": m003.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
