import * as m000 from "./basic";
import * as m001 from "./icon-placement";
import * as m002 from "./underline-and-offset";
import * as m003 from "./custom-icon";
import * as m004 from "./render-function";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "basic": m000.LinkBasic,
  "icon-placement": m001.LinkIconPlacement,
  "underline-and-offset": m002.LinkUnderlineAndOffset,
  "custom-icon": m003.LinkCustomIcon,
  "render-function": m004.RenderFunction,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
