import * as m000 from "./default";
import * as m001 from "./interactive";
import * as m002 from "./with-custom-icon";
import * as m003 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "interactive": m001.Interactive,
  "with-custom-icon": m002.WithCustomIcon,
  "custom-styles": m003.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
