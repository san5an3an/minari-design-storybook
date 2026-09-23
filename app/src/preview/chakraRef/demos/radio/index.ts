import * as m000 from "./radio-basic";
import * as m001 from "./radio-controlled";
import * as m002 from "./radio-with-colors";
import * as m003 from "./radio-with-sizes";
import * as m004 from "./radio-with-variants";
import * as m005 from "./radio-disabled";
import * as m006 from "./radio-with-hook-form";

export const DEMOS = {
  "radio-basic": m000.RadioBasic,
  "radio-controlled": m001.RadioControlled,
  "radio-with-colors": m002.RadioWithColors,
  "radio-with-sizes": m003.RadioWithSizes,
  "radio-with-variants": m004.RadioWithVariants,
  "radio-disabled": m005.RadioDisabled,
  "radio-with-hook-form": m006.RadioWithHookForm,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
