import * as m000 from "./flex-basic";
import * as m001 from "./flex-with-direction";
import * as m002 from "./flex-with-align";
import * as m003 from "./flex-with-justify";
import * as m004 from "./flex-with-order";
import * as m005 from "./flex-with-auto-margin";
import * as m006 from "./flex-with-spacer";
import * as m007 from "./flex-with-wrap";

export const DEMOS = {
  "flex-basic": m000.FlexBasic,
  "flex-with-direction": m001.FlexWithDirection,
  "flex-with-align": m002.FlexWithAlign,
  "flex-with-justify": m003.FlexWithJustify,
  "flex-with-order": m004.FlexWithOrder,
  "flex-with-auto-margin": m005.FlexWithAutoMargin,
  "flex-with-spacer": m006.FlexWithSpacer,
  "flex-with-wrap": m007.FlexWithWrap,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
