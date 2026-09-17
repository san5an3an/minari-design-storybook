import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./statuses";
import * as m003 from "./with-icon";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "basic": m000.ChipBasic,
  "variants": m001.ChipVariants,
  "statuses": m002.ChipStatuses,
  "with-icon": m003.ChipWithIcon,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
