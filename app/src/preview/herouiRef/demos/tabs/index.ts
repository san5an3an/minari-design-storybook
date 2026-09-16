import * as m000 from "./basic";
import * as m001 from "./vertical";
import * as m002 from "./overflow";
import * as m003 from "./disabled";
import * as m004 from "./with-separator";
import * as m005 from "./secondary";
import * as m006 from "./secondary-vertical";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "vertical": m001.Vertical,
  "overflow": m002.Overflow,
  "disabled": m003.Disabled,
  "with-separator": m004.WithSeparator,
  "secondary": m005.Secondary,
  "secondary-vertical": m006.SecondaryVertical,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
