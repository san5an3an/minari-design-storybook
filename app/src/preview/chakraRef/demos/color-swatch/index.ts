import * as m000 from "./color-swatch-basic";
import * as m001 from "./color-swatch-with-sizes";
import * as m002 from "./color-swatch-with-alpha";
import * as m003 from "./color-swatch-with-badge";
import * as m004 from "./color-swatch-mixed";
import * as m005 from "./color-swatch-palette";

export const DEMOS = {
  "color-swatch-basic": m000.ColorSwatchBasic,
  "color-swatch-with-sizes": m001.ColorSwatchWithSizes,
  "color-swatch-with-alpha": m002.ColorSwatchWithAlpha,
  "color-swatch-with-badge": m003.ColorSwatchWithBadge,
  "color-swatch-mixed": m004.ColorSwatchMixed,
  "color-swatch-palette": m005.ColorSwatchPalette,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
