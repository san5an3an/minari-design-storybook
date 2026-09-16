import m000 from "./Vertical";
import m001 from "./Horizontal";
import m002 from "./HorizontalMarginStart";
import m003 from "./HorizontalVerticalRules";
import m004 from "./Buttons";
import m005 from "./Form";

export const DEMOS: Record<string, unknown> = {
  "Vertical": m000,
  "Horizontal": m001,
  "HorizontalMarginStart": m002,
  "HorizontalVerticalRules": m003,
  "Buttons": m004,
  "Form": m005,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
