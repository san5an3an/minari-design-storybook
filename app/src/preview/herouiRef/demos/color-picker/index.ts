import * as m000 from "./basic";
import * as m001 from "./with-swatches";
import * as m002 from "./with-fields";
import * as m003 from "./with-sliders";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "with-swatches": m001.WithSwatches,
  "with-fields": m002.WithFields,
  "with-sliders": m003.WithSliders,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "controlled": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
};
