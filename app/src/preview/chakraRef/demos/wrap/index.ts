import * as m000 from "./wrap-basic";
import * as m001 from "./wrap-with-gap";
import * as m002 from "./wrap-with-align";
import * as m003 from "./wrap-with-justify";
import * as m004 from "./wrap-with-row-column-gap";
import * as m005 from "./wrap-responsive";

export const DEMOS = {
  "wrap-basic": m000.WrapBasic,
  "wrap-with-gap": m001.WrapWithGap,
  "wrap-with-align": m002.WrapWithAlign,
  "wrap-with-justify": m003.WrapWithJustify,
  "wrap-with-row-column-gap": m004.WrapWithRowColumnGap,
  "wrap-responsive": m005.WrapResponsive,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
