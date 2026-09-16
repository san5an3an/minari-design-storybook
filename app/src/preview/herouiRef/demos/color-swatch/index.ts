import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./shapes";
import * as m003 from "./transparency";
import * as m004 from "./render-function";
import * as m005 from "./accessibility";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.ColorSwatchBasic,
  "sizes": m001.ColorSwatchSizes,
  "shapes": m002.ColorSwatchShapes,
  "transparency": m003.ColorSwatchTransparency,
  "render-function": m004.RenderFunction,
  "accessibility": m005.ColorSwatchAccessibility,
  "custom-styles": m006.ColorSwatchCustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
