import * as m000 from "./default";
import * as m001 from "./orientation";
import * as m002 from "./size";
import * as m003 from "./with-card";
import * as m004 from "./hide-scroll-bar";
import * as m005 from "./visibility-change";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "default": m000.default,
  "orientation": m001.default,
  "size": m002.default,
  "with-card": m003.default,
  "hide-scroll-bar": m004.default,
  "visibility-change": m005.default,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
