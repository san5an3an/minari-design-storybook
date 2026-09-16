import * as m000 from "./basic";
import * as m001 from "./colors";
import * as m002 from "./sizes";
import * as m003 from "./speed";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "basic": m000.SpinnerBasic,
  "colors": m001.SpinnerColors,
  "sizes": m002.SpinnerSizes,
  "speed": m003.SpinnerSpeed,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
