import * as m000 from "./basic";
import * as m001 from "./controlled";
import * as m002 from "./with-swatches";
import * as m003 from "./with-fields";
import * as m004 from "./with-sliders";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "controlled": m001.Controlled,
  "with-swatches": m002.WithSwatches,
  "with-fields": m003.WithFields,
  "with-sliders": m004.WithSliders,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
