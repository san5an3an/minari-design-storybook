import * as m000 from "./checkmark-basic";
import * as m001 from "./checkmark-indeterminate";
import * as m002 from "./checkmark-states";
import * as m003 from "./checkmark-with-variants";
import * as m004 from "./checkmark-with-sizes";
import * as m005 from "./checkmark-with-colors";
import * as m006 from "./checkmark-with-filled";

export const DEMOS = {
  "checkmark-basic": m000.CheckmarkBasic,
  "checkmark-indeterminate": m001.CheckmarkIndeterminate,
  "checkmark-states": m002.CheckmarkStates,
  "checkmark-with-variants": m003.CheckmarkWithVariants,
  "checkmark-with-sizes": m004.CheckmarkWithSizes,
  "checkmark-with-colors": m005.CheckmarkWithColors,
  "checkmark-with-filled": m006.CheckmarkWithFilled,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
