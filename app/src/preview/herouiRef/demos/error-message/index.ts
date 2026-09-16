import * as m000 from "./basic";
import * as m001 from "./custom-styles";

export const DEMOS = {
  "basic": m000.ErrorMessageBasic,
  "custom-styles": m001.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
