import * as m000 from "./center-basic";
import * as m001 from "./center-with-icons";
import * as m002 from "./center-with-inline";
import * as m003 from "./center-with-square";
import * as m004 from "./center-with-circle";

export const DEMOS = {
  "center-basic": m000.CenterBasic,
  "center-with-icons": m001.CenterWithIcons,
  "center-with-inline": m002.CenterWithInline,
  "center-with-square": m003.CenterWithSquare,
  "center-with-circle": m004.CenterWithCircle,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
