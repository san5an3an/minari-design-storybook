import * as m000 from "./floatingLabel.root";
import * as m001 from "./floatingLabel.disabled";
import * as m002 from "./floatingLabel.validation";
import * as m003 from "./floatingLabel.sizes";
import * as m004 from "./floatingLabel.helperText";

export const DEMOS: Record<string, { component: unknown }> = {
  "floatingLabel.root": m000.root,
  "floatingLabel.disabled": m001.disabled,
  "floatingLabel.validation": m002.validation,
  "floatingLabel.sizes": m003.sizes,
  "floatingLabel.helperText": m004.helperText,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
