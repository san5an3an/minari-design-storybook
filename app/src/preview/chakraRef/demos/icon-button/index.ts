import * as m000 from "./icon-button-basic";
import * as m001 from "./icon-button-with-sizes";
import * as m002 from "./icon-button-with-variants";
import * as m003 from "./icon-button-with-colors";
import * as m004 from "./icon-button-rounded";

export const DEMOS = {
  "icon-button-basic": m000.IconButtonBasic,
  "icon-button-with-sizes": m001.IconButtonWithSizes,
  "icon-button-with-variants": m002.IconButtonWithVariants,
  "icon-button-with-colors": m003.IconButtonWithColors,
  "icon-button-rounded": m004.IconButtonRounded,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
