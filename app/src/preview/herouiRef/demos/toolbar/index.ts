import * as m000 from "./basic";
import * as m001 from "./vertical";
import * as m002 from "./attached";
import * as m003 from "./with-button-group";
import * as m004 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "vertical": m001.Vertical,
  "attached": m002.Attached,
  "with-button-group": m003.WithButtonGroup,
  "custom-styles": m004.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
