import * as m000 from "./kbd-basic";
import * as m001 from "./kbd-with-combinations";
import * as m002 from "./kbd-function-keys";
import * as m003 from "./kbd-with-variants";
import * as m004 from "./kbd-with-sizes";
import * as m005 from "./kbd-within-text";

export const DEMOS = {
  "kbd-basic": m000.KbdBasic,
  "kbd-with-combinations": m001.KbdWithCombinations,
  "kbd-function-keys": m002.KbdFunctionKeys,
  "kbd-with-variants": m003.KbdWithVariants,
  "kbd-with-sizes": m004.KbdWithSizes,
  "kbd-within-text": m005.KbdWithinText,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
