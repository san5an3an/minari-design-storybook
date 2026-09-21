import * as m000 from "./code-basic";
import * as m001 from "./code-with-sizes";
import * as m002 from "./code-with-variants";
import * as m003 from "./code-with-colors";

export const DEMOS = {
  "code-basic": m000.CodeBasic,
  "code-with-sizes": m001.CodeWithSizes,
  "code-with-variants": m002.CodeWithVariants,
  "code-with-colors": m003.CodeWithColors,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
