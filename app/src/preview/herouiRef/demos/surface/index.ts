import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./with-form-components";
import * as m003 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "with-form-components": m002.WithFormComponents,
  "custom-styles": m003.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
