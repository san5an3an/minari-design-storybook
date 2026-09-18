import * as m000 from "./close-button-basic";
import * as m001 from "./close-button-with-sizes";
import * as m002 from "./close-button-with-variants";
import * as m003 from "./close-button-with-custom-icon";

export const DEMOS = {
  "close-button-basic": m000.CloseButtonBasic,
  "close-button-with-sizes": m001.CloseButtonWithSizes,
  "close-button-with-variants": m002.CloseButtonWithVariants,
  "close-button-with-custom-icon": m003.CloseButtonWithCustomIcon,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
