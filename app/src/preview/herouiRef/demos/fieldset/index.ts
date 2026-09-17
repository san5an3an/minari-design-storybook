import * as m000 from "./basic";
import * as m001 from "./on-surface";
import * as m002 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "on-surface": m001.OnSurface,
  "custom-styles": m002.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
