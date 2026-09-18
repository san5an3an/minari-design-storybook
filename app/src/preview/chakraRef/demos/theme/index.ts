import * as m000 from "./theme-basic";
import * as m001 from "./theme-nested";
import * as m002 from "./theme-with-portalled";

export const DEMOS = {
  "theme-basic": m000.ThemeBasic,
  "theme-nested": m001.ThemeNested,
  "theme-with-portalled": m002.ThemeWithPortalled,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
