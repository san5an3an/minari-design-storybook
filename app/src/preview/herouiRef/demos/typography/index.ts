import * as m000 from "./default";
import * as m001 from "./typography-scale";
import * as m002 from "./primitives";
import * as m003 from "./prose";
import * as m004 from "./render-props";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "typography-scale": m001.TypographyScale,
  "primitives": m002.Primitives,
  "prose": m003.Prose,
  "render-props": m004.RenderProps,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
