import m000 from "./Card";
import m001 from "./Example";
import m002 from "./Width";
import m003 from "./Color";
import m004 from "./Size";
import m005 from "./Animation";

export const DEMOS: Record<string, unknown> = {
  "Card": m000,
  "Example": m001,
  "Width": m002,
  "Color": m003,
  "Size": m004,
  "Animation": m005,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
